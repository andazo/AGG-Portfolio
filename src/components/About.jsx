import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-[#8892b0]">
      <div className="flex flex-col justify-center items-center w-full h-[90%]">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-5xl text-[#ccd6f6] font-bold inline border-b-4 border-purple-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1170px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
                <p>
                    Nice to meet you. Take a look around and don't hesitate to contact
                    me.
                </p>
            </div>
          <div>
            <p className="font-bold text-lg">
              I am passionate software developer with an aptitude for crafting
              exceptional and inclusive web experiences. When I'm not immersed
              in the world of software and computers, you'll find me exploring my diverse
              interests, from sports to space, design to engineering. I cherish
              quality time with my dog, family, and close friends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
