// AlumniTestimonials.js
import React from 'react';

const Testimonial = () => {
  // Placeholder data
  const testimonials = [
    { name: 'Sudan Jha', quote: 'Balram Jha is an exceptional advocate who provided me with expert legal guidance and support throughout my case. His dedication, professionalism, and strong advocacy skills were instrumental in achieving a favorable outcome. I am grateful for his representation and highly recommend him to anyone in need of a reliable advocate.' },
    { name: 'Dilip Shah', quote: 'Balram Jha is a highly competent and compassionate advocate lawyer. He listened attentively to my concerns, provided clear explanations of the legal process, and fought diligently for my rights. His strategic approach, attention to detail, and effective communication made me feel confident and supported throughout. I am grateful for his expertise and would recommend him without hesitation.' },
    { name: 'Rahul Mishra', quote: 'Balram Jha is an outstanding advocate who demonstrated unwavering commitment and integrity in handling my legal matters. His in-depth knowledge of the law, combined with his excellent negotiation skills, resulted in a successful resolution. His professionalism, responsiveness, and personalized approach set him apart. I wholeheartedly endorse him as a trusted advocate.' },
    { name: 'Udhav Jha', quote: 'Balram Jha is an exceptional advocate who fought tirelessly for my rights. His extensive legal expertise, attention to detail, and persuasive arguments were instrumental in achieving a positive outcome. His compassion, support, and dedication to his clients make him a true advocate for justice. I am grateful for his representation and would highly recommend his services.' },
    // Add more testimonials
  ];

  return (
    <div id='testimonials' className="text-center py-8 bg-gradient-to-r from-white via-white to-white">
      <h2 className="relative inline-block text-3xl font-bold text-gray-800 font-poppins mt-5 pb-1 after:content-after after:block after:absolute after:w-36 after:h-1 after:bg-red-400 after:transform-after-translate-x-2/4">
        My Happy Clients!
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">
            <div className="bg-gray-100 rounded-lg shadow-md transition-transform hover:scale-105 p-4 h-full">
              <p className="text-sm text-gray-700">{testimonial.quote}</p>
              <p className="mt-4 text-xs text-gray-800">- {testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
