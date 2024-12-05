import ArrowUp from "@/assets/icons/arrow-up-right.svg";
const footerLinks = [
  { title: "Facebook", href: "#" },
  { title: "LinkedIn", href: "#" },
  { title: "Twitter", href: "#" },
  { title: "YouTube", href: "#" },
];
export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div
        style={{
          maskImage:
            "radial-gradient(50% 50% at bottom center, black, rgba(0, 0, 0, 0))",
          WebkitMaskImage:
            "radial-gradient(50% 50% at bottom center, black, rgba(0, 0, 0, 0))",
        }}
        className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30"
      ></div>

      {/* <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-t from-emerald-300/30 to-transparent -z-10"></div> */}
      <div className="container ">
        <div className="flex border-t border-white/15 py-6 text-sm flex-col md:flex-row items-center md:justify-between gap-8">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center  gap-8 ">
            {footerLinks.map((link) => (
              <a
                href="#"
                key={link.title}
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUp className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
