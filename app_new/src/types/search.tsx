interface IDiffusionRequest {
    prompt: string;
} 

interface IImage {
    result: string;
}
interface IDiffusionResponse {
    data: IImage | null;
}
  
export type { IImage, IDiffusionResponse, IDiffusionRequest};
  