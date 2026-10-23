import Image from "next/image";

export default function Intro() {
  const stacks = [
    "React.js",
    "Next.js",
    "Angular",
    "Node.js",
    "Express",
    "AWS",
  ];

  return (
    <div className="intro">
      <div className="sectionCard">
        <div className="introduction">
          <span className="intro-tag mt-3">&bull; Open to opertunities</span>
          <h3 className="intro-greet">Hello!! I'm</h3>
          <h1 className="intro-name"> Magesh Kumar M</h1>
          <h1 className="intro-stack">Full-Stack Web Developer</h1>
          <p className="my-5">
            I’m a passionate Full-Stack Web Developer specializing in building
            modern, responsive, and scalable web applications with intuitive
            user interfaces and secure backend APIs. I enjoy transforming ideas
            into seamless digital experiences through clean code, innovative
            solutions, and efficient, high-performance applications.
          </p>
          <div>
            <button className="w-auto h-auto px-6 py-3 bg-[#3B82F6] text-white font-medium rounded-lg mr-2 hover:bg-[#2563EB] hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              Explore my work
            </button>
            <button className="w-auto h-auto px-6 py-3 bg-[#151F32] rounded-lg mr-2 text-white hover:bg-[#22304A] transition-colors duration-300">
              Contact me
            </button>
          </div>
          <div className="my-5">
            {stacks.map((i) => {
              return (
                <span className="w-auto h-auto px-2 py-1 mr-3 bg-[#151F32] rounded-sm align-middle text-[#3B82F6] hover:bg-[#22304A] transition-colors duration-300">
                  {i}
                </span>
              );
            })}
          </div>
        </div>

        <Image
          alt={`download`}
          src={`/magesh.png`}
          width={380}
          height={380}
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
}
