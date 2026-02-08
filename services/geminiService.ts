import { GoogleGenAI } from "@google/genai";
import { CAREER_GUIDE_TEXT } from '../data';

// Initialize the client
// IMPORTANT: In a real production app, ensure API_KEY is set in environment variables
// For this demo, we assume process.env.API_KEY is available.
const apiKey = process.env.API_KEY || ''; 

let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const sendMessageToGemini = async (userMessage: string, history: {role: 'user' | 'model', parts: [{text: string}]}[] = []) => {
  if (!ai) {
    throw new Error("API Key not found. Please check your environment configuration.");
  }

  const systemInstruction = `
    You are an expert Career Counselor and Digital Economy Strategist.
    You have deep knowledge of the following document describing the top online jobs, skill stacks, and career blueprints.
    
    DOCUMENT CONTEXT:
    ${CAREER_GUIDE_TEXT}

    Your goal is to help the user navigate this information.
    1. Answer questions specifically based on the document provided.
    2. If a user asks about a specific job, refer to the "What You Actually Do", "Income", and "Skills" sections.
    3. If a user is unsure, ask them about their risk tolerance, capital, or technical skills to guide them (referring to the Decision Engine).
    4. Keep answers concise, encouraging, and actionable. Use markdown for formatting.
  `;

  try {
    const model = 'gemini-2.5-flash-latest'; 
    
    // We can use a chat session for history, or single generateContent calls with history included in prompt.
    // Using chat session is cleaner for conversation.
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstruction,
      },
      history: history,
    });

    const result = await chat.sendMessage({
      message: userMessage,
    });

    return result.text;
  } catch (error) {
    console.error("Error calling Gemini:", error);
    throw error;
  }
};
