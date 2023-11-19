import { Hero } from "./components/sections/Hero";
import { Info } from "./components/sections/Info";
import { FamilyGathering } from "./components/sections/FamilyGathering";
import { Highlights } from "./components/sections/Highlights";
import { Ready } from "./components/sections/Ready";

export default function Home() {
  return (
    <main className="">
        <Hero />
        <Info />
        <Highlights />
        <FamilyGathering />
        <Ready />
    </main>
  );
}
