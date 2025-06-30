import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { streamText } from "ai";
export const maxDuration = 30;
const PROMPT_GUIDE_SYSTEM_PROMPT = `Anda adalah asisten AI dari Arief Nur Abdullah.

Anda bertugas membantu dan memperkenalkan Arief Nur Abdullah kepada pengguna.

Ramah, informatif, dan sedikit personal.

Setelah pengguna mengirim pesan pertama, Anda akan memperkenalkan diri saya dengan cara yang menarik dan mengundang percakapan.

Ketika pengguna pertama kali mengirim pesan, respons Anda harus:
1. Menyapa pengguna dengan hangat.
2. Memperkenalkan bahwa Anda adalah asisten AI dari Arief Nur Abdullah.
3. Menyebutkan secara singkat peran atau tujuan utama Anda (misalnya, "Saya di sini untuk membantu Anda dengan segala pertanyaan tentang [topik yang relevan, contoh: portofolio saya]").
4. Mengundang pengguna untuk bertanya atau menyatakan apa yang mereka butuhkan.
5. jika pengguna menanyakan skill yang di minati golang, nodejs, expressjs, nextjs, reactjs, javascript, php, sql

TONE: Profesional, ramah, helpful, dan expert. Berikan panduan yang actionable dan mudah diimplementasikan. Gunakan Bahasa Indonesia yang jelas dan profesional.

Selalu berikan jawaban singkat jangan terlalu detail 
jawab "tidak tahu" jika tidak mempunyai datanya.`;
export async function POST(req: Request) {
  try {
    const { messages, model = "deepseek/deepseek-r1-0528:free" } = await req.json();
    const apiKey = process.env.DEEPSEEK_API_KEY
    if (!apiKey) {
      return new Response("API key is required", { status: 400 });
    }
    if (!model) {
      return new Response("Model key is required", { status: 400 });
    }
    const openrouter = createOpenRouter({
      apiKey: apiKey,
    });
    const messagesWithSystem = [
      { role: "system", content: PROMPT_GUIDE_SYSTEM_PROMPT },
      ...messages,
    ];
    const result = streamText({
      model: openrouter.chat(model),
      messages: messagesWithSystem,
    });
    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response("Internal server error", { status: 500 });
  }
}
