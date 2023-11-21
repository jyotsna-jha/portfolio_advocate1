// pages/resume.js
"use client";
import Head from "next/head";

const Resume = () => {
  return (
    <div id="resume" className="max-w-6xl mx-auto px-4 py-8 font-poppins">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mt-20 mb-10 relative inline-block">
          Resume
          <span className="absolute bottom-0 left-1/2 w-24 h-1 bg-red-400 transform -translate-x-1/2"></span>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Legal Odyssey</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Professional Summary</h2>
          <p className="text-gray-700">
            Experienced advocate with a strong background in handling legal
            cases and providing legal advice. Skilled in client representation,
            legal research, and dispute resolution. Committed to upholding
            justice and advocating for clients&apos; rights.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Professional Experience
          </h2>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Advocate</h3>
            <p className="text-gray-700">Sajha Law Firm | 2023 - Present</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Represented clients in various civil and criminal cases.</li>
              <li>Conducted legal research and prepared case strategies.</li>
              <li>
                Negotiated settlements and facilitated dispute resolution.
              </li>
              <li>Drafted legal documents and contracts.</li>
            </ul>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Skills & Expertise</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Legal research and analysis</li>
            <li>Client representation</li>
            <li>Strong verbal and written communication</li>
            <li>Negotiation and mediation</li>
            <li>Attention to detail</li>
            <li>Case management</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          <p className="text-gray-700">
            Bachelor in Law (B.L) - Nepal Law Campus
          </p>
        </section>
      </div>
    </div>
  );
};

export default Resume;
