import { BackgroundBeams } from "@/components/ui/background-beams";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export default function Home() {
    const words = [
        {
            text: "Build",
        },
        {
            text: "awesome",
        },
        {
            text: "apps",
        },
        {
            text: "with",
        },
        {
            text: "Aceternity.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];

    return (
        <main>
            <div className="h-screen w-screen rounded-md absolute bg-neutral-950 flex flex-col items-center justify-center antialiased">
                <div className="flex flex-row flex-wrap w-3/4 2xl:w-2/3">
                    <div className="flex flex-col w-full 2xl:w-3/4 min-[1920px]:w-2/3 p-5">
                        <h2 className="text-2xl md:text-3xl xl:text-5xl font-semibold bg-gradient-to-b from-slate-300 to-slate-400 py-4 bg-clip-text text-transparent">
                            Hi, I&rsquo;m
                        </h2>
                        <h1 className="text-[4rem] md:text-[5rem] lg:text-[7rem] xl:text-[8rem] 2xl:text-[9rem] min-[1920px]:text-[10rem] font-bold bg-gradient-to-r from-purple-300 to-purple-200 bg-clip-text text-transparent">
                            Jayden Q
                        </h1>
                        <h2 className="text-xl md:text-2xl xl:text-4xl font-semibold bg-gradient-to-b from-slate-300 to-slate-400 py-4 bg-clip-text text-transparent">
                            Student and hobbyist programmer
                        </h2>
                    </div>
                    <div className="flex w-full 2xl:w-1/4 min-[1920px]:w-1/3 border-l-2 border-purple-800">
                        <ul className="list-none px-10 text-2xl md:text-3xl lg:text-4xl text-slate-300 space-y-5">
                            <li>
                                <a href="#about-me">about me</a>
                            </li>
                            <li>
                                <a href="#projects">projects</a>
                            </li>
                            <li>
                                <a href="#contacts">contacts</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <BackgroundBeams />
            </div>
        </main>
    );
}
