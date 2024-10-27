
import {NavbarDemo} from "@/app/components/Navbar.";
import Hero from "./components/Hero"
import Explore from "./components/explore";

export default function Home() {
  return (
      <main className={"min-h-screen flex-col md:flex-row p-24"}>
          <NavbarDemo/>
          <Hero />
          <Explore/>
      </main>
  );
}
