import "@radix-ui/themes/styles.css";
import "./globals.css";

import Header from "./components/Header/Header";

import { Theme } from "@radix-ui/themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="border-4 border-blue-500">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
