import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "../components/portfolio/Nav";
import { Hero } from "../components/portfolio/Hero";
import { About } from "../components/portfolio/About";
import { Services } from "../components/portfolio/Services";
import { Portfolio } from "../components/portfolio/Portfolio";
import { Testimonials } from "../components/portfolio/Testimonials";
import { Experience } from "../components/portfolio/Experience";
import { Expertise } from "../components/portfolio/Expertise";
import { Education } from "../components/portfolio/Education";
import { Publications } from "../components/portfolio/Publications";
import { Contact } from "../components/portfolio/Contact";
import { Footer } from "../components/portfolio/Footer";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vitalii Balitskyi",
  jobTitle: "System Engineering Lead",
  worksFor: {
    "@type": "Organization",
    name: "ATLANT 3D",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "National Technical University of Ukraine 'Kyiv Polytechnic Institute'",
  },
  sameAs: [
    "https://www.linkedin.com/in/vitalii-balitskyi",
    "https://www.researchgate.net/profile/Vitalii-Balitskyi",
  ],
  url: "https://balitskyi.net",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vitalii Balitskyi — System Engineering Lead & Consultant" },
      {
        name: "description",
        content:
          "Vitalii Balitskyi — System Engineering Lead and consultant in Denmark. Helping deep-tech hardware teams turn fragile prototypes into production-ready systems.",
      },
      { rel: "canonical", href: "https://balitskyi.net/" },
      { property: "og:title", content: "Vitalii Balitskyi — System Engineering Lead & Consultant" },
      {
        property: "og:description",
        content:
          "Helping deep-tech hardware teams turn fragile prototypes into production-ready systems. System architecture, prototype-to-production pathways, and team advisory.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://balitskyi.net/" },
      { property: "og:image", content: "https://balitskyi.net/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://balitskyi.net/og-image.jpg" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify(personSchema),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Testimonials />
        <Experience />
        <Expertise />
        <Publications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
