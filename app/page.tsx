import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { CtaBanner } from "@/components/home/CtaBanner";
import { CareersTeaser } from "@/components/home/CareersTeaser";
import { ResourcesPreview } from "@/components/home/ResourcesPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServicesPreview />
      <CtaBanner />
      <CareersTeaser />
      <ResourcesPreview />
    </>
  );
}
