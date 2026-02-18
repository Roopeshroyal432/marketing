import { GoogleGenAI, Type } from "@google/genai";

// Ensure the API key is treated as a string to satisfy TypeScript strict checks
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

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

    // Extract text safely. response.text is a getter that can return string | undefined.
    const text = response.text;
    
    if (!text) {
      throw new Error("The AI model returned an empty response. Please try again.");
    }

    return JSON.parse(text);
  } catch (error) {
    console.error("Error generating strategy:", error);
    throw error;
  }
}
