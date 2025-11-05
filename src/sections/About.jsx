import React from "react";
import { Grid } from "@react-three/drei";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { FrameWords } from "../components/FrameWords";





const About = () => {
  const grid2container = React.useRef();

  return ( 
    
    <section id="aboutme" className="c-space section-spacing">
     <h2  className="text-4xl font-bold text-white-900 mb-6 relative z-10">About Me</h2>


      <div className="grid grid-cols-1 md:grid-cols-6 md:auto-rows-[18rem] mt-12 gap-4">


        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          {/* Image */}
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-[50px] md:inset-y-10 lg:scale-[2.5]" // <--- This line is now correct
            alt="Coding POV"
          />

          {/* Text */}
          <div className="z-10">
            <p className="headtext">Hi, I'm Satyam Sharma</p>
            <p className="subtext">
              Over the years, I developed my frontend and backend dev
              skills to deliver dynamic software and web applications.
            </p>
          </div>

          {/* Gradient */}
          <div className="absolute inset-x-0 pointer-events-none bottom-0 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo-500" />
        </div>






        {/* Grid 2 */}
        <div className="grid-default-color grid-2 ">
          <div ref={grid2container} className="flex items-center justify-center w-full h-full">
            <p className="flex items-end text-5xl text-gray-500">CODE IS CRAFT</p>

            <Card style={{ rotate: "75deg", top: "30", left: "20%" }} text="GRASP" containerRef={grid2container} />
            <Card style={{ rotate: "-30deg", top: "40%", left: "45%" }} text="SOLID" containerRef={grid2container} />
            <Card style={{ rotate: "90deg", bottom: "30", left: "70%" }} text="Design" containerRef={grid2container} />
            <Card style={{ rotate: "-45deg", top: "55", left: "0%" }} text="Design Principles" containerRef={grid2container} />
            <Card style={{ rotate: "10deg", top: "20%", left: "38%" }} text="SRP" containerRef={grid2container} />

            {/* Tech Logos */}
            <Card style={{ rotate: "30deg", top: "80", left: "90%" }} image="assets/logos/csharp-pink.png" containerRef={grid2container} />
            <Card style={{ rotate: "-45deg", top: "70", left: "70%" }} image="assets/logos/dotnet-pink.png" containerRef={grid2container} />
            <Card style={{ rotate: "-45deg", top: "5%", left: "10%" }} image="assets/logos/blazor-pink.png" containerRef={grid2container} />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3" >
          <div className="z-10 w-[50%]">
            <p className="headText">Time Zone </p>
            <p> I'm based in Mars,  and  open to remote work worldwide  </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
                <Globe/>
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          {/* Content 3grid */}
          <div className="flex flex-col items-center justify-center gap-4 size-full">
<p className="text-center headtext"> 
Do you Want To Start A Project Together?</p>

<CopyEmailButton/>

          </div>
        </div>


        {/* Grid 6 */}
        <div className="grid-default-color grid-5">
          {/* Content 5 grid */}
          <div className="z-10 w-[50%]">
<p className="headText">
Teck Stack
</p>
<p className="subtext">

I specialize in a variety of languages,frameworks, and tools that allow me  to buid robust and  scale applications
</p>

          </div>
          <div className="absolute inset-y-0 md:inset-y- wifull h-full start-[50%] md:scale-125">
                   <FrameWords/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
