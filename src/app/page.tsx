import { Hero } from "@/components/sections/Hero";
import { FoodIntro } from "@/components/sections/FoodIntro";
import { Menu } from "@/components/sections/Menu";
import { Story } from "@/components/sections/Story";
import { Fresno } from "@/components/sections/Fresno";
import { Reviews } from "@/components/sections/Reviews";
import { FindUs } from "@/components/sections/FindUs";
import { Social } from "@/components/sections/Social";

export default function Home() {
  return (
    <>
      <Hero />
      <FoodIntro />
      <Menu />
      <Story />
      <Fresno />
      <Reviews />
      <FindUs />
      <Social />
    </>
  );
}
