import * as banana from "@banana-dev/banana-dev";

// Enter your Banana API keys in .env.local
// const apiKey = process.env.BANANA_API_KEY
// const modelKey = process.env.BANANA_MODEL_KEY
// const modelUrl = process.env.BANANA_URL

const apiKey = "cf03d14a-ebf0-4337-833d-a6bd17814792"
const modelKey = "462a082d-90a5-4d22-90bf-b0d42b0ac257"
const modelUrl = "https://froggi-lmw6of10cf.run.banana.dev/"

//Create a reference to your model on Banana
const myModel = new banana.Client(
    apiKey,
    modelKey,
    modelUrl,
);

import { IDiffusionResponse, IDiffusionRequest } from "@/types/search";

export async function POST(req: Request): Promise<Response> {
    try {
      const request: IDiffusionRequest = await req.json();
      const prompt = request.prompt
      
      const inputs = {
          "prompt": prompt
      }

      const output = await myModel.call("/", inputs);

      const { json: result, meta } = await myModel.call("/", inputs);

      const response = {
        data: result
      } as IDiffusionResponse;
      
      // console.log(`backend: data response: ${JSON.stringify(response)}`);
      return new Response(JSON.stringify(response), {
        headers: { "content-type": "application/json;charset=UTF-8" },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error }), {
        headers: { "content-type": "application/json;charset=UTF-8" },
      });
    }
}
  
