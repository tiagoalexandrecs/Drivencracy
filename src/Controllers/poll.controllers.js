import { db } from "../Database/database.connection.js";
import { ObjectId } from "mongodb";
import dayjs from "dayjs";

export async function createPoll(req,res){
    let now= dayjs();
    const {title, expireAt}= req.body
    
    let defaultExpire = now.add(30, 'day').format("YYYY-MM-DD HH:mm")
    console.log(defaultExpire)
   
    
    try{
        await db.collection("polls").insertOne({title: title, expireAt: expireAt? expireAt : defaultExpire})
        let poll= await db.collection("polls").findOne({title: title})
        return res.status(200).send(poll)
    } catch(err){
        console.log(err)
    }
}

export async function getPolls (req,res){
    try{
        let polls= await db.collection("polls").find().toArray()
        return res.status(200).send(polls)
    } catch(err){
        console.log(err.message)
    }
}

export async function getResult(req,res){
    const {id}= req.params;
   
    try {
        const poll= await db.collection("polls").findOne({_id: new ObjectId(id)});
        console.log(poll)
        if (poll){
            
            const choices = db.collection("choices").find({pollId: new ObjectId(id)}).toArray()

            for(let i=0; i< choices.length; i++){
        
                let maior =i;
                let option= choices[i]
                let votes=  db.collection("votes").find({choiceId: new ObjectId(option._id)}).toArray()
        
                for(let j= i + 1; j<choices.length;j++){
        
                    let option2= choices[i]
                    let votes2=  db.collection("votes").find({choiceId: new ObjectId(option2._id)}).toArray()
        
                  if(votes2.length>votes.length){
                    maior = j;
                  }
                }
                let aux= choices[i];
                choices[i]=choices[maior];
                choices[maior]=aux;
              }

              const winner= choices[0];

              const totalVotes = db.collection("votes").find({choiceId: new ObjectId(winner._id)}).toArray()

              const resultado = {
                _id: poll._id,
                title: poll.title,
                expireAt: poll.expireAt,
                result : {
                    title: winner.title,
                    votes: totalVotes.length
                }
              }

              return res.status(200).send(resultado)

        }
        else{
            return res.sendStatus(404)
        }
    } catch(err){
        console.log(err.message)
    }

   
}

