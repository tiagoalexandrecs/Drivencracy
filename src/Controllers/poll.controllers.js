import { db } from "../Database/database.connection.js";
import dayjs, { Dayjs } from "dayjs";

export async function createPoll(req,res){
    let now= dayjs();
    let expireDate= now + 2592000000 ;
    let date= expireDate.format("YYYY/MM/DD")
    const { title, expireAt }= req.body;

    if (expireAt === ""){
        expireAt= date
    }
    
    try{
        await db.collection("polls").insertOne({title: title, expireAt: expireAt})
        let poll= await db.collection("polls").findOne({title: title})
        return res.status(200).send(poll)
    } catch(err){
        console.log(err)
    }
}

export async function getPolls (req,res){
    try{
        let polls= await db.collection("polls").find()
        return res.status(200).send(polls)
    } catch(err){
        console.log(err.message)
    }
}

