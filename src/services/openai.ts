import OpenAI from "openai";
import { appConfig } from "../config/appConfig";
import { CatalogChatItem, Product } from "../types";
import ProductModel from "../model/product.model";

const openai = new OpenAI({
  apiKey: appConfig.OPENAI_API_KEY,
});

const PIPELINE = appConfig.PIPELINE;

export async function getFashionAdvice(query: string) {
  const catalog: Product[] = await ProductModel.find();
  const catalogInfo: CatalogChatItem[] = catalog.map(({ name }) => ({
    name,
  }));
  console.log("pipeline --> ", PIPELINE);

  if (PIPELINE === "approach_x") {
    const params: OpenAI.Chat.ChatCompletionCreateParams = {
      messages: [
        {
          role: "system",
          content: `You are Anna, a helpful, professional assistant for a fashion store. Give short and concise fashion advice and recommendations from this catalog: ${JSON.stringify(
            catalogInfo
          )}`,
        },
        { role: "user", content: query },
      ],
      model: "gpt-3.5-turbo",
      temperature: 0.3,
    };
    const chatCompletion: OpenAI.Chat.ChatCompletion =
      await openai.chat.completions.create(params);

    //console.log(JSON.stringify(chatCompletion.choices[0], null, 2));
    const advice = validateRecommendation(
      chatCompletion.choices[0]?.message?.content,
      catalogInfo
    );
    return advice;
  } else if (PIPELINE === "approach_y") {
    // Second approach here
    const params: OpenAI.Chat.ChatCompletionCreateParams = {
      messages: [
        {
          role: "system",
          content: `You are Dominique, an assistant for a fashion store that reluctantly gives short, sarcastic, and concise fashion recommendations from this catalog: ${JSON.stringify(
            catalogInfo
          )}`,
        },
        {
          role: "user",
          content: "Do you have this in a smaller size?",
        },

        {
          role: "assistant",
          content:
            "No, sorry, we only cater to giant fashionistas here. I'm kidding🤣. You should try the Ellena Denim Dress. Or not",
        },
        {
          role: "user",
          content: "What should I wear to impress my date?",
        },
        {
          role: "assistant",
          content:
            "A Hawaiian shirt with polka dot pants and Crocs. Don't mind me, I'm kidding🤣. Our best selling Madison the Label Tara Mini Dress paired with the Audrey Metallic Shoes would definitely sweep your date off his feet!",
        },
        {
          role: "user",
          content: "What's the best outfit for a job interview?",
        },
        {
          role: "assistant",
          content:
            "A superhero costume. Show them you're ready to save the company! Sorry, I'm kidding🤣. My name's Dominique. You look like a corporate girly. Our elegant Madison the Label Arlo Maxi Dress would definitely boost your chances at the interview. Your hair is fabulous by the way",
        },
        { role: "user", content: query },
      ],
      model: "gpt-3.5-turbo",
      temperature: 0.8,
    };
    const chatCompletion: OpenAI.Chat.ChatCompletion =
      await openai.chat.completions.create(params);

    //console.log(JSON.stringify(chatCompletion.choices[0], null, 2));
    const advice = formatRecommendation(
      chatCompletion.choices[0]?.message?.content ?? ""
    );
    return advice;
  }
}

function validateRecommendation(
  recommendation: string | null,
  catalog: CatalogChatItem[]
): string {
  // Check if the recommended product exists in the catalog
  const recommendedProduct = catalog.find((product: CatalogChatItem) =>
    recommendation?.includes(product.name)
  );
  if (recommendedProduct) {
    return formatRecommendation(recommendation ?? "");
  } else {
    // Handle cases where recommendation is outside the catalog
    return "I'm sorry, I couldn't find a suitable recommendation within our catalog.";
  }
}

function formatRecommendation(recommendation: string): string {
  // Replace backslashes and double quotes with an empty string
  const formattedRecommendation = recommendation
    ?.replace(/\\/g, "")
    ?.replace(/"/g, "");

  return formattedRecommendation;
}
