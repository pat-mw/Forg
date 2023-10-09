"use client"

import React from "react";
import { useRouter } from "next/navigation";
import { TopBarHome, TopBarSimple } from "devlink_new";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react"; 

interface Props {
    type: string;
}

// PARAMS
// {..., ..., }: Props

export const TopbarLinked = ({type}: Props) => {
    const router = useRouter();
    const userSession = useSession();

    const handleRedirect = function (endpoint: string){
        router.push(endpoint);
    }

    if (type === "HOME"){
        return(
            <TopBarHome
                clickHome={{onClick: function() {handleRedirect('/home');}}}
                clickAllChats={{onClick: function() {handleRedirect('/chat/all');}}}
                clickAccount={{onClick: function() {handleRedirect('/account');}}}
                clickContact={{onClick: function() {handleRedirect('/contact');}}}
                clickDocs={{onClick: function() {handleRedirect('/docs');}}}
                clickLogin={{onClick: function() {signIn();}}}
                clickLogout={{onClick: function() {signOut();}}}
                navClickChats={{onClick: function() {handleRedirect('/chat/all');}}}
                navClickDocs={{onClick: function() {handleRedirect('/docs');}}}
                navClickHome={{onClick: function() {handleRedirect('/home');}}}
                navClickSettings={{onClick: function() {handleRedirect('/account');}}}
                visibilityLoginButton={(userSession.status != "authenticated")}
                visibilityProfile={(userSession.status === "authenticated")}
                imageProfile={("https://picsum.photos/200")}
            />
        )
    } else if (type === "SIMPLE"){
        return(
            <TopBarSimple
                clickLogin={{onClick: function() {signIn();}}}
                clickLogout={{onClick: function() {signOut();}}}
                navClickChats={{onClick: function() {handleRedirect('/chat/all');}}}
                navClickDocs={{onClick: function() {handleRedirect('/docs');}}}
                navClickHome={{onClick: function() {handleRedirect('/home');}}}
                navClickSettings={{onClick: function() {handleRedirect('/account');}}}
                visibilityLoginButton={(userSession.status != "authenticated")}
                visibilityProfile={(userSession.status === "authenticated")}
                imageProfile={("https://picsum.photos/200")}
            />
        )
    }
}