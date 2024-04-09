# Shopify x OpenAI Fashion Advice Chatbot

Welcome to the Shopify x OpenAI Fashion Advice Chat project! This repository contains a Node.js backend application that integrates OpenAI's powerful language model with product data to provide fashion advice based on the product catalog.

## Overview

The task is to a implement a backend service that integrates with a source of data to retrieve product information and an AI-powered component using OpenAI to generate fashion advice based on user query, from the catalog

## Features

- **Two Retrieval Approaches:** The chatbot provides fashion advice using both a friendly, professional approach and a more humorous, sarcastic approach.
- **OpenAI Integration:** Utilizes OpenAI's GPT-3.5 model for generating responses based on user queries and the product catalog.
- **Shopify Integration:** Accesses product information from a Shopify store to provide relevant fashion recommendations.
- **Environment Variables:** Configuration settings such as API keys, URLs, and approach selection are managed through environment variables for flexibility and security.

## Installation and usage

1. Clone the repository:
   ```bash
   git clone https://github.com/mxnuchim/Shopify_x_OpenAI.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Shopify_x_OpenAI
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   - Create a .env file at the root of your project.
   - Add the following environment variables to the .env file:
   ```bash
   PORT=3000
   OPENAI_API_KEY=your_openai_api_key_here
   PIPELINE=approach_x
   SHOPIFY_URL=https://shopwoven.ca/products.json
   DB_URL=mongodb://localhost:27017/mydatabase
   ```
   Replace placeholders like your-username, your_openai_api_key_here, https://your-shopify-store.myshopify.com, and mongodb://localhost:27017/mydatabase with your actual project details.
5. Start the server:
   ```bash
   npm run dev
   ```

# Pros and Cons Of The Selected Approaches

Below is a brief explanation of the pros and cons of each approach:

### Approach X (Nice and Concise)

- **Pros:**
  1. Provides short and concise fashion advice.
  2. Maintains a helpful and friendly tone, enhancing customer experience.
  3. Professional approach suitable for a wide range of customers.
- **Cons:**
  1. Limited expressiveness and creativity compared to a more varied approach.
  2. May lack humor or entertainment value, depending on customer preferences.
  3. Responses may sometimes feel generic or less personalized.

### Approach Y (Varied and Sarcastic)

- **Pros:**
  1. Offers a more varied and human-like response, adding entertainment value.
  2. Engages customers with humor and sarcasm, making interactions memorable.
  3. Stands out from traditional approaches, creating a unique brand voice.
- **Cons:**
  1. Risk of offense or misunderstanding due to sarcasm, depending on customer preferences.
  2. Limited applicability, as some customers may prefer a more straightforward approach.
  3. May not suit all situations or customer demographics, requiring careful audience consideration.

## Guardrails

### Implemented Guardrails in `validateRecommendation`:

The `validateRecommendation` function is designed to ensure that recommendations provided by the chatbot are relevant and within the catalog. It includes the following guardrails:

- **Catalog Validation:** Compares the recommended product against the catalog to verify its existence.
- **Formatting:** Cleans up the recommendation response for better readability and user experience.
- **Feedback Mechanism:** Provides feedback to users if the recommendation is outside the catalog.

### System Messages Structure:

The system messages used in the chatbot are structured as follows:

- **Role Definitions:** Messages are categorized into roles such as system, user, and assistant to differentiate between system-generated and user-generated content.
- **Contextual Prompts:** System messages provide context to the AI model about the catalog and the type of recommendations it should generate.
- **Dynamic Content:** Messages include dynamic content such as catalog information and user queries to generate personalized responses.

## Contribution

This project welcomes contributions from developers of all levels. If you have ideas for improvements or new features, feel free to open an issue or submit a pull request. Your input is valuable in making this chatbot more effective and enjoyable for users.

## License

This project is licensed under the [ISC License](LICENSE), granting you the freedom to modify and distribute the code according to the terms of the license.

---

**Note:** This project is a demonstration of skills for a senior developer role and may include simplified or abstracted code for testing purposes.
