"use client"

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ButtonLogInSidebar, FormInputSearch, Sidebar, SidebarAccount, SidebarChatSearchResult } from "devlink";
import { links } from "./links";

interface Props {
    args: any
}

export const SidebarLinked = ({args}: Props) => {
    const router = useRouter();
    

    const handleRedirect = function (endpoint: string){
        router.push(endpoint);
    }

    return(
        <Sidebar
            linkAccountRuntimeProps={{onClick: function(){handleRedirect(links.profile)}}} 
            linkChatsRuntimeProps={{onClick: function(){handleRedirect(links.home)}}}          
            slotSidebarAccount={
                <>
                    {/* {( userSession.status === "authenticated") ? ( */}
                    {(true) ? (
                        <SidebarAccount
                            image="https://picsum.photos/200"
                            textName={"Test Name"}
                            textEmail={"email@test.com"}
                            clickLogOut={{onClick: function() {
                                // signOut();
                                console.log('signing out');
                            }}}
                            //TODO
                            clickMyProfile={{onClick: function() {handleRedirect(links.profile);}}}
                        />
                    
                    ) :  (
                        <ButtonLogInSidebar
                            buttonRuntimeProps={{onClick: function(){
                                // signIn();
                                console.log('sigining in');
                            }}}
                        />
                    )}
                </>
                
            }
        />
            
            
    );
}