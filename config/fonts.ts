import { Dancing_Script, Fira_Code as FontMono, Inter as FontSans, Rethink_Sans, Rubik } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
export const fontRubik = Rubik({
    subsets: ["latin"],
    // weight:['300','900'],
    variable: "--font-rubik",
})
export const fontRethink = Rethink_Sans({
    subsets: ["latin"],
    // weight:['400','800'],
    variable: "--font-rubik",
})
export const fontDancingScript = Dancing_Script({
    subsets: ["latin"],
    // weight:['400'],
    variable: "--font-dancing-script",
})