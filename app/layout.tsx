import type { Metadata } from "next"; import "./globals.css";
export const metadata:Metadata={title:"NOVARA — Your universe, unlocked",description:"A new universe for creativity, connection and discovery."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}