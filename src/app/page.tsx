import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Автоматизация бизнеса и внедрение ИИ — Виталий Вронский",
  description:
    "Автоматизирую бизнес-процессы, создаю сайты и веб-приложения, внедряю искусственный интеллект в организации. Современные решения для вашего бизнеса.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Benefits />
      <Process />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
