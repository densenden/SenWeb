import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export type Language = 'en' | 'de';

export interface TranslationOptions {
  text: string;
  targetLanguage: Language;
  context?: string;
}

export async function translate({ text, targetLanguage, context }: TranslationOptions): Promise<string> {
  try {
    const prompt = `Translate the following text to ${targetLanguage}${context ? `, considering this context: ${context}` : ''}:\n\n${text}`;
    
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a professional translator. Provide only the translation without any additional text or explanations."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.3,
    });

    return completion.choices[0].message.content?.trim() || text;
  } catch (error) {
    console.error('Translation error:', error);
    return text; // Fallback to original text if translation fails
  }
}

export const defaultLanguage: Language = 'en'; 