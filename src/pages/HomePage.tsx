import React from "react";

const HomePage: React.FC = () => {
  return (
    <main className="min-h-[calc(100vh-124px)] max-w-4xl mx-auto px-6 py-4 flex justify-center items-center">
      <div className="flex justify-center items-center gap-8">
        <div className="flex flex-col gap-4">
          <div className="text-6xl">hi, i'm quincy</div>
          <div className="text-lg">
            i am a fourth year studying computer science and minoring in data
            science at uc berkeley. i am passionate about software engineering
            and creating modern, beautiful, and intuitive user experiences.
          </div>
          <div className="text-3xl">more: </div>
          <div className="text-lg">
            i am a first generation college and transfer student. i am a full
            stack developer for{" "}
            <a className="text-blue-400" href="https://www.webatberkeley.org/">
              web development at berkeley
            </a>
            . in my freetime, i love working out (powerlifting), hanging out
            with friends,{" "}
            <span className="line-through">playing video games</span>, going on
            spontaneous adventures, and listening to music.
          </div>
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/quincythai/">
              <img src="linkedin.svg" alt="linkedin" />
            </a>
            <a href="https://github.com/quincythai/">
              <img src="github.svg" alt="github" />
            </a>
            <a href="mailto:quincythai@berkeley.edu">
              <img src="mail.svg" alt="email" />
            </a>
            <a href="/resume.pdf" target="_blank">
              <img className="h-6" src="resume.svg" alt="resume" />
            </a>
          </div>
        </div>
        <img
          className="h-60 w-60 object-cover rounded-full"
          src="headshot.JPG"
          alt="headshot"
        />
      </div>
    </main>
  );
};

export default HomePage;
