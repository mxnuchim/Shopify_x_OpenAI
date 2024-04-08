import OpenAI from "openai";
import { appConfig } from "../config/appConfig";

const openai = new OpenAI({
  apiKey: appConfig.OPENAI_API_KEY,
});

let PIPELINE = appConfig.PIPELINE;

export async function getFashionAdvice(query: string) {
  console.log(appConfig.OPENAI_API_KEY);
  if (PIPELINE === "approach_x") {
    const params: OpenAI.Chat.ChatCompletionCreateParams = {
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    };
    const chatCompletion: OpenAI.Chat.ChatCompletion =
      await openai.chat.completions.create(params);

    console.log(chatCompletion.choices[0]);
  } else if (PIPELINE === "approach_y") {
    // Implement your second approach here
  }
}
