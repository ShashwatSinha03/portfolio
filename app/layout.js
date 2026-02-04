import { Prompt, Raleway } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import GlobalBackground from "@/components/GlobalBackground";
import "../styles/globals.css";

const prompt = Prompt({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-prompt",
  display: "swap",
});

const raleway = Raleway({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});


export const metadata = {
  title: "Portfolio",
  description: "Editorial portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${prompt.variable} ${raleway.variable}`}>
        <ThemeProvider>
          <GlobalBackground />
          <div style={{ position: "fixed", top: "var(--space-4)", right: "var(--space-4)", zIndex: 100 }}>
             <ThemeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

