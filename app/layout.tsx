import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000"),

	title: "Ayodele",
	authors: {
		name: "ayodele",
	},

	description:
		"Based in Lagos Nigeria, I am a Fullstack developer passionate about building a modern web application that users love.",
	openGraph: {
		title: "Ayodele",
		description:
			"Based in Lagos Nigeria, I am a Fullstack developer passionate about building a modern web application that users love.",
		url: "http://localhost:3000/",
		siteName: "ayodele",
		images: "/Screenshot 2024-04-22 155356.png",
		type: "website",
	},
	keywords: ["Developer", "Ayodele", "Fullstack"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
