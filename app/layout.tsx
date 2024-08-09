import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Document Collaborative Editing",
  description: "Your go-to for collaborative editing",
};

import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Provider from "./provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: { colorPrimary: "#3371FF", fontSize: "16px" },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen font-sans antialiased",
            fontSans.variable
          )}
        >
          <Provider>
            {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
