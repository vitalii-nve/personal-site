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
  worksFor: [
    { "@type": "Organization", name: "ATLANT 3D Nanosystems" },
    { "@type": "Organization", name: "Spacer Robotics" },
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "National Technical University of Ukraine 'Kyiv Polytechnic Institute'",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Greve",
    addressCountry: "DK",
  },
  sameAs: [
    "https://www.linkedin.com/in/vitalii-balitskyi",
    "https://www.researchgate.net/profile/Vitalii-Balitskyi",
  ],
  url: "https://balitskyi.net/",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vitalii Balitskyi — System Engineering Lead & Consultant" },
      {
        name: "description",
        content:
          "Vitalii Balitskyi — System Engineering Lead in Denmark. I turn breakthrough science into scalable hardware, from lab prototype to industrial system.",
      },
      { rel: "canonical", href: "https://balitskyi.net/" },
      { property: "og:title", content: "Vitalii Balitskyi — System Engineering Lead & Consultant" },
      {
        property: "og:description",
        content:
          "Systems and mechanical engineering for deep-tech hardware. Took atomic layer processing from lab to product across three platforms — benchtop, space-rated, and industrial.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://balitskyi.net/" },
      { property: "og:image", content: "https://balitskyi.net/og-image.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://balitskyi.net/og-image.jpg" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Rendered here rather than via head.scripts — head scripts with
          innerHTML are not emitted into the prerendered HTML. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
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
