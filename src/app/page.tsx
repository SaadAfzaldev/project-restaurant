
import {NavbarDemo} from "@/app/components/Navbar.";
import Hero from "./components/Hero"
export default function Home() {
  return (
      <main className={"min-h-screen flex-col md:flex-row p-24"}>
          <NavbarDemo/>
          <Hero />
      </main>
  );
}
