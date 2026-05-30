import { HfInference } from '@huggingface/inference'
const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`
console.log(import.meta.env.VITE_HF_ACCESS_TOKEN);
const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN);
export async function getRecipeFromMistral(ingredientsArr) {
    console.log("im here")
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const result = await hf.chatCompletion({
            model: "meta-llama/Llama-3.1-8B-Instruct",
            messages: [
                {
                    role: "system", // Note: The system prompt should usually have the "system" role
                    content: SYSTEM_PROMPT
                },
                {
                    role: "user",
                    content: `I have these ingredients: ${ingredientsString}. Please suggest a recipe.`
                }
            ]
        });
        console.log("API response received:", result.choices[0].message.content);
        // Return the correct variable 'result' instead of 'response'
        return result.choices[0].message.content
    } catch (err) {
        console.error(err)
    }
}