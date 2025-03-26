import type { Metadata } from "next";
import "../../app/globals.css";
import { ThemeProvider } from "../../components/theme-provider";

export const metadata: Metadata = {
  title: "SenFlow",
  description: "Flow your way through life",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
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