import bundle from "@/assets/images/bundle.png";
import football from "@/assets/images/footballTracking.png";
import parking from "@/assets/images/gatiSunya.png";
import myPaperPortfolio from "@/assets/images/web.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Bundle",
    year: "2024",
    title: "Bundle-the best storage app",
    results: [
      {
        title:
          "Cloud Storage Management",
      },
      {
        title:
          "User Authentication",
      },
      {
        title:
          "File Sharing Features",
      },
    ],
    link: "https://bundle-it-kaustubkarkis-projects.vercel.app/sign-in",
    image: bundle,
  },
  {
    company: "गतिSunya",
    year: "2024",
    title: "A perfect parking management tool",
    results: [
      {
        title:
          "Space Allocation",
      },
      {
        title:
          "User Interfaces",
      },
      {
        title:
          "Revenue Tracking",
      },
    ],
    link: "https://github.com/kaustubkarki/gati-sunya",
    image: parking,
  },
  {
    company: "Final Year project",
    year: "2024",
    title: "AI for football tracking",
    results: [
      {
        title:
          "Pose Estimation",
      },
      {
        title:
          "Performance Metrics",
      },
      {
        title:
          "Tactical Analysis",
      },
    ],
    link: "#",
    image: football,
  },
  {
    company: "Graphics designs",
    year: "2017",
    title: "Creative Visual Storytelling",
    results: [
      { title: "Expert in logo & brand design" },
      { title: "Skilled in digital illustration" },
      { title: "Experienced with Adobe PhotoShop" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: myPaperPortfolio,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow=" Real-world Results"
          title="Featured Projects"
          description=" See how I transform concepts into engaging digital experiences."
        />

        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-15 lg:px-20 sticky "
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              {/* col one of the grid start */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="uppercase font-bold text-sm tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text inline-flex gap-2">
                    <span> {project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className=" font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5 " />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((results) => (
                      <li
                        className="flex gap-2 text-sm text-white/50 md:text-base"
                        key={results.title}
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{results.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950  h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit live site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                {/* coloumn one of the grid finish */}

                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-8 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
