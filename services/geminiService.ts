import { GoogleGenAI, Type } from "@google/genai";
import { CaseStudy } from "../types";

// Helper to get API key safely
const getApiKey = () => {
  return process.env.API_KEY || localStorage.getItem('GEMINI_API_KEY') || '';
};

export const generateCaseStudy = async (
  name: string,
  type: 'Studio' | 'Artist' | 'Brand',
  focus: string
): Promise<CaseStudy> => {
  const apiKey = getApiKey();
  
  if (!apiKey) {
    throw new Error("API Key missing");
  }

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `
    You are the creative director for Studio C, a high-end cinematic media company.
    Generate a case study for: ${name} (${type}).
    Focus area: ${focus}.
    
    Tone: Cinematic, Minimal, Editorial. Similar to NOWNESS or A24 Docs.
    
    Return ONLY valid JSON matching this schema exactly.
    Do not include markdown code blocks.
  `;

  // We define the schema for structured output
  const responseSchema = {
    type: Type.OBJECT,
    properties: {
      id: { type: Type.STRING },
      title: { type: Type.STRING },
      subtitle: { type: Type.STRING },
      type: { type: Type.STRING, enum: ['Studio', 'Artist', 'Brand'] },
      overview: { type: Type.STRING },
      whatWeDid: {
        type: Type.OBJECT,
        properties: {
          approach: { type: Type.STRING },
          visualLanguage: { type: Type.STRING },
          editorial: { type: Type.STRING }
        }
      },
      deliverables: {
        type: Type.ARRAY,
        items: { type: Type.STRING }
      },
      impact: {
        type: Type.OBJECT,
        properties: {
          business: { type: Type.STRING },
          visibility: { type: Type.STRING },
          value: { type: Type.STRING }
        }
      },
      visuals: {
        type: Type.ARRAY,
        items: { type: Type.STRING }
      },
      taglines: {
        type: Type.ARRAY,
        items: { type: Type.STRING }
      },
      quotes: {
        type: Type.ARRAY,
        items: { type: Type.STRING }
      },
      seo: {
        type: Type.ARRAY,
        items: { type: Type.STRING }
      },
      releasePlan: {
        type: Type.OBJECT,
        properties: {
          youtube: { type: Type.STRING },
          socials: { type: Type.STRING },
          newsletter: { type: Type.STRING },
          partners: { type: Type.STRING }
        }
      },
      layout: {
        type: Type.OBJECT,
        properties: {
          hero: { type: Type.STRING },
          flow: { type: Type.STRING },
          cta: { type: Type.STRING }
        }
      }
    },
    required: ['id', 'title', 'type', 'overview', 'whatWeDid', 'deliverables', 'impact', 'visuals', 'taglines', 'quotes', 'seo', 'releasePlan', 'layout']
  };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: responseSchema,
        temperature: 0.7 // slightly creative but structured
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as CaseStudy;
  } catch (error) {
    console.error("Gemini Generation Error:", error);
    throw error;
  }
};