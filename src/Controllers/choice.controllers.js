import { ObjectId } from "mongodb";
import { db } from "../Database/database.connection.js";
import dayjs from "dayjs";

export async function postChoice(req,res){
    const {title, pollId}= req.body;
    let now= dayjs().toDate().getTime()
    
    console.log(now)

    let poll= await db.collection("polls").findOne({_id: new  ObjectId(pollId)})
    console.log(poll)


    if(!poll){
        return res.sendStatus(404)
    }
    else{
        const timestamp= dayjs(poll.expireAt).toDate().getTime()
        console.log(timestamp)
        let name= await db.collection("choices").findOne({title: title});
        if(name){
        return res.sendStatus(409)
        }
        else if(now > timestamp){
            return res.sendStatus(403)
        }
        else{
            try{
                await db.collection("choices").insertOne({title: title, pollId: new ObjectId(pollId)})
                let choice= await db.collection("choices").findOne({title: title})
                return res.status(201).send(choice)
            }catch(err){
                console.log(err.message)
            }
        }

    }
    
}

export async function getChoices( req, res) {
    const {id}= req.params;
    let poll= await db.collection("polls").findOne({_id: new ObjectId(id)})
    console.log(poll)
    if (!poll){
        return res.sendStatus(404)
    }
    else{
        try{
            let choices= await db.collection("choices").find({pollId :  new ObjectId(id)}).toArray()
            return res.status(200).send(choices)
        } catch(err){
            console.log(err.message)
        }
    }
}

export async function postVote (req,res){
    const {id} = req.params;
    let now= dayjs().toDate().getTime()
    let date= now.format("YYYY-MM-DD HH:mm")
    let choice= await db.collection("choices").findOne({_id: new ObjectId(id)})
    if (choice){
        let poll= await db.collection("polls").findOne({_id: new ObjectId(choice.pollId)})
        const timestamp= dayjs(poll.expireAt).toDate().getTime()
        if (poll && now < timestamp){
            try{
                await db.collection("votes").insertOne({createdAt: date, choiceId: new ObjectId(id)})
                let vote= await db.collection("votes").find().toArray()
                console.log(vote)
                return res.sendStatus(201)
            } catch(err){
                console.log(err.message)
            }
        }
        else{
            return res.sendStatus(403)
        }
    }
    else{
        return res.sendStatus(404)
    }
}