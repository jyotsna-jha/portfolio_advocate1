// AlumniSuccessStories.js
import React from 'react';
import Image from 'next/image';

const AlumniSuccessStories = () => {
  // Placeholder data
  const successStories = [
    { name: 'Legal Advisor', achievement: 'Based on the information gathered during the consultation, I provide clear and actionable legal advice tailored to your specific situation.', image: '/assets/legalad.jpg' },
    { name: 'Legal Advocacy', achievement: 'As a dedicated legal advocate, I offer strong representation and advocacy for individuals and organizations navigating complex legal challenges.', image: '/assets/legaladvo.jpg' },
    { name: 'Notary Services', achievement: 'As a trusted and reliable Notary Public, I provide efficient and accurate notarization services for a wide range of legal documents.', image: '/assets/notary.jpg' },
    { name: 'Legal Representation', achievement: 'As an experienced advocate, I offer comprehensive legal representation services to individuals and businesses facing a wide range of legal issues.', image: '/assets/legalrep.jpg' },
    { name: 'Legal Consultations', achievement: 'Whether you are facing a specific legal issue or need general legal information, I am here to provide the guidance and clarity you need.', image: '/assets/cons.jpg' },
    { name: 'Legal Research', achievement: 'Legal research plays a crucial role in understanding the relevant laws, regulations, and legal precedents that apply to a specific case or legal matter.', image: '/assets/legare.jpg' },
    { name: 'Legal Documentation', achievement: 'Accurate and well-prepared legal documentation is essential in ensuring compliance, protecting your rights, and establishing a solid legal foundation.', image: '/assets/legald.jpg' },
    { name: 'Dispute Resolution', achievement: 'I offer comprehensive dispute resolution services to help individuals and businesses resolve conflicts and achieve favorable outcomes', image: '/assets/ds.jpg'}
    // ... (add more success stories)
  ];

  return (
    <div id="services" className="text-center py-12">
      <h2 className="text-4xl font-bold text-gray-800 mt-20 mb-10 relative inline-block">
        Our Services
        <span className="absolute bottom-0 left-1/2 w-24 h-1 bg-red-400 transform -translate-x-1/2"></span>
      </h2>

      <div className="flex flex-wrap justify-center">
        {successStories.map((story, index) => (
          <div key={index} className="w-full md:w-72 h-80 m-5 p-3 bg-gray-200 rounded-lg shadow-md transition-transform transform-gpu hover:scale-105">
            <Image
              src={story.image}
              alt={story.name}
              width={300} // Set the desired width here
              height={200} // Set the desired height here
              className="w-full h-2/5 object-cover rounded-t-lg"
            />
            <h3 className="mt-2 text-2xl font-semibold text-gray-800 font-poppins">{story.name}</h3>
            <p className="text-gray-600 text-sm">{story.achievement}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniSuccessStories;
