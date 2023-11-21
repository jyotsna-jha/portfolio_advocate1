"use client";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 font-poppins mt-5 pb-2 after:content-after after:block after:absolute after:w-24 after:h-2 after:bg-red-400">
        A little About Me
      </h2>
      <div className="bg-gradient-to-r from-white to-red-100 rounded-lg shadow-md p-10 mt-8 flex flex-col items-center sm:flex-row">
        <Image
          src="/assets/image1.jpg"
          alt="Alumni Image"
          className="w-64 h-64 object-cover rounded-full mb-4 sm:mr-8"
          width={100}
          height={100}
          
        />
        <p className="text-base text-justify text-gray-800 font-poppins max-w-5xl mx-auto sm:whitespace-normal">
          As an advocate, my mission is to fight for justice and be a reliable
          companion for my clients. With my experience, I understand the legal
          system inside out and the challenges people face. I approach every
          case with compassion, actively listening to my clients&apos; needs. By
          building strong relationships based on trust, I guide them through
          their legal journey with unwavering support. I continuously learn and
          stay updated on legal developments to provide the best possible
          representation. Together, we navigate the complexities of the law to
          achieve favorable outcomes. With me by your side, you can confidently
          overcome legal obstacles, knowing that your rights are fiercely
          protected.
        </p>
      </div>
    </div>
  );
};

export default About;
