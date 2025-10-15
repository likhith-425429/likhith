import express from "express";
import { fromAPI, userInput } from "./type/types";
import { callGeminiAPI } from "./GeminiAPI";
import cors from "cors";
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post("/api/symptoms",async(req,res)=>{
    let {userprompt}:userInput = req.body;
    console.log(userprompt);
    if(!userprompt || userprompt.trim() === ""){
        res.status(400).send("need user prompt")
    }
    try{
        const response:string =  await callGeminiAPI(`${userprompt}`) || "";
        res.status(200).send(response);
    }
    catch(err){
        res.status(400).send("something went wrong");
        console.log(err);
    }
})



app.listen(PORT,()=>{
    console.log("listening on port 3000");
})