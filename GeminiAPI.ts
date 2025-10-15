import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv'; 
import { BASE_PROMPT } from "./prompt";
dotenv.config();


const apikey = process.env.GEMINI_API_KEY || "";
const ai = new GoogleGenAI({ apiKey: apikey });
export async function callGeminiAPI(userprompt:string) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: userprompt,
    config:{
        systemInstruction:BASE_PROMPT
    }
  });
  return response.text;
}
