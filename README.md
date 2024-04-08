# OpenAI Shopify Fashion Advice Chatbot Integration

This project integrates OpenAI's chat functionality with a Shopify store to provide fashion advice via a chatbot based on the product catalog.

## Objective

The objective of this project is to build a simplified integration of OpenAI chat functionality with Shopify. The goal is to provide good fashion advice via a chatbot based on the product catalog.

## Instructions

### Backend Service

1. **API Integrations**: Utilize the following API to retrieve a list of products from a Shopify store:

   - Shopify API Endpoint: `https://shopwoven.ca/products.json`

2. **Endpoints**:
   - Implement endpoints to fetch product details, including name, description, and image URLs.
   - Provide provisions to update/delete products from the catalog asynchronously.

### OpenAI Integration

1. **Input Data**: Provide the product catalog to OpenAI as input for generating fashion advice based on user queries.

2. **Approaches**:
   - Implement two different retrieval approaches within the same app based on the `PIPELINE` variable value (e.g., `approach_x`, `approach_y`).
   - Define `PIPELINE` value via a configuration file.

### Sample Conversation

- `PIPELINE = "approach_x"`:

  - User: "I need a birthday outfit"
  - AI: "I have found a 'Black Labelled Dress' in the store that would go well for that occasion."

- `PIPELINE = "approach_y"`:
  - User: "I need a birthday outfit"
  - AI: "I have found a 'Black Labelled Dress' in the store that would go well for that occasion."

### API Endpoints

- Create a chat endpoint that provides clothing options for the user based on a fashion advice prompt. Recommended products should be from the product catalog.

## Evaluation Criteria

- Successful integration with OpenAI API and generation of relevant fashion advice.
- Overall functionality, accuracy, and efficiency of the solution.

## Bonus Points

- Include a brief explanation of the pros and cons of two different retrieval approaches.
- Implement innovative guardrails for reducing hallucination (instances where the model may recommend products outside the catalog).

## Submission

Please find the GitHub repository [here](https://github.com/mxnuchim/Shopify_x_OpenAI) for the complete solution.

### Setup and Run Instructions

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up environment variables and configuration files as per instructions in the repository.
4. Run the application using `npm start`.

### Additional Documentation

Include any additional documentation or notes to assist in the evaluation process.
# Shopify_x_OpenAI
# Shopify_x_OpenAI
# Shopify_x_OpenAI
# Shopify_x_OpenAI
# Shopify_x_OpenAI
# Shopify_x_OpenAI
