import { AppShell, BgSection, DevLinkProvider, GlobalStyles, TopBarHome } from "devlink";

import "@/components/devlink/global.css";
import { SidebarLinked } from "@/components/navigation/SidebarLinked";
// import { BgSection, DevLinkProvider, GlobalStyles} from "devlink";
// import { NextAuthProvider } from "./provider";
// import * from "devlink/globals.css";


export const metadata = {
  title: 'Forg.io',
  description: 'Imagine your dream frog, and we will make it',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="text-color-white">
        {/* <NextAuthProvider> */}
            <DevLinkProvider>
              <div className="page-wrapper text-color-white">
                {/* <GlobalStyles/> */}
                <BgSection/>
                <AppShell
                  slotSidebar={<SidebarLinked args={null}/>}
                  slotTopBar={<TopBarHome/>}
                  // slotTopBar={null}
                  slotContents={<>{children}</>}
                />
              </div>
            </DevLinkProvider>
        {/* </NextAuthProvider> */}
      </body>
    </html>
  )
}