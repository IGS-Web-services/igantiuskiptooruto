import React from 'react';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  const experienceData = [
    {
      title: 'Automotive Industry',
      date: 'MAY 2023- JULY 2023;',
      description: 'Practiced my mechanical and electrical skills in Nyeri county department of Transportation where I maintained vehicles such as excavator, roller, grader, tipper lorry etc',
    },
    {
      title: 'IEEE Isiolo Mentorship',
      date: 'MAY 2023',
      description: 'Took part in mentorship program and training at Kisima primary and secondary.',
    },
    {
      title: 'Presidential Award (PA)',
      date: '2022 - 2023',
      description: 'Volunteered in community service by helping the elderly and young people mentorship. Conducted civic education of road safety and signs.',
    },
    {
      title: 'Dekut_Innovators club',
      date: '2020 - 2021',
      description: 'Designed and deployed an Automatic gate controlled using a virtual membrane sensor. ',
    },
    // Add more experience entries as needed
  ];

  return (
    <section id="experience" className="w-full bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Experience</h2>
        <div className="mt-8">
          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={index}
              title={experience.title}
              date={experience.date}
              description={experience.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
