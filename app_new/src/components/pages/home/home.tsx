"use client";

// import { CreateChatWelcome } from "@/components/Chat/CreateChat";
// import { WelcomeScreenExamplePromptItem, WelcomeScreenRecentChatsItem, ButtonNewChat} from "devlink_new";

import Image from "next/image";
import { useState } from "react";
import useSWR, { Fetcher } from "swr";
import { Head } from "next/document";
import { useRouter } from "next/navigation";
import { FormTextarea } from "@/components/devlink/_Builtin";
import { FormInputHome, HomePageFrog } from "@/components/devlink";
import { IDiffusionResponse } from "@/types/search";

const fetcher: Fetcher<IDiffusionResponse, string> = (url: string) =>
  fetch(url).then((res) => res.json());

export default function Home() {
  const router = useRouter();
  
  function handleRedirect(route: string) {
    router.push(route);
  }

  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState<string>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);

    console.log(`sending prompt: ${prompt}`);

    const response = await fetch("/api/diffusion", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: prompt }),
    });
    
    const data = await response.json();// as IDiffusionResponse;
    console.log(`got data: ${JSON.stringify(data)}`);
    setLoading(false);

    console.log(`front end: data ${data.data?.output}`);
    if (data.data != null){
      setImage(data.data.output);
    }
    
  };

  

  return (
      <HomePageFrog
        visibilityPlaceholder={(!loading && image == null)}
        visibilityLoading={loading}
        visibilityResult={(!loading && image != null)}
        slotFormInput={
          <form onSubmit = {handleSubmit}>
            <FormInputHome
              formInputRuntimeProps={{
                  placeholder: "Describe your dream frog in as much detail as you like...",
                  // onChange: ((e) => handleInputChange(e)),
                  onChange: ((e) => setPrompt(e.target.value)),
                  value: prompt,
              }}
              buttonRuntimeProps={{
                onClick: function(e){
                  handleSubmit(e)
                }
              }}
            />
          <button type = "submit">Generate</button>

          </form>
        }
        slotResult={<Image 
                      width = {300}
                      height={300}
                      src = {`data:image/png;base64,${image}`} 
                      alt = "Generated image">
                    </Image>
        }
      />
      
  );
}
