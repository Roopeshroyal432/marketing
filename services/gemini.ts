
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateAutomationStrategy(businessType: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Suggest a high-level AI automation strategy for a business in the ${businessType} industry. Focus on lead generation, customer support, and internal operations.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            strategyTitle: { type: Type.STRING },
            leadGenIdea: { type: Type.STRING },
            supportIdea: { type: Type.STRING },
            opsIdea: { type: Type.STRING },
            estimatedRoi: { type: Type.STRING }
          },
          required: ["strategyTitle", "leadGenIdea", "supportIdea", "opsIdea", "estimatedRoi"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Error generating strategy:", error);
    throw error;
  }
}
