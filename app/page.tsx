import { Inter } from "next/font/google";
import { Header } from "./Header";
import { S1 } from "./S1";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <div className="h-28" />
      <S1 />
      <div className="h-screen">ashgfasdhkd</div>
    </main>
  );
}
