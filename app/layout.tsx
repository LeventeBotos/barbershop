import { Header } from "./Header";
import "./globals.css";

export const metadata = {
  title: "aBorbély",
  description: "Budapest fodrász",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
