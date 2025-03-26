import type { Metadata } from "next";
import "@sen/ui/styles/globals.css";
import { ThemeProvider } from "@sen/ui/components/theme-provider";

export const metadata: Metadata = {
  title: "SenFlow",
  description: "SenFlow - Your Digital Flow Management Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-rubik antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
} 