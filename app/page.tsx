import { Inter } from "next/font/google";
import { S1 } from "./S1";
import { Services } from "./Services";
import { About } from "./About";
import { Location } from "./Location";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <div className="h-28" />
      <S1 />
      <Services />
      <About />
      <Location />
    </main>
  );
}
