import React from 'react';
import SkillsCard from './SkillsCard'; // Import the SkillsCard component

const Skills = () => {
  const skillsData = [
    {
      title: 'Technical Skills',
      skills: [
        'CAD using Inventor and Solidworks',
        'Printed Circuit Board using KICAD',
        'Electrical Analysis using Orcad and Proteus',
        'Matlab and Simulink Analysis',
        'Graphic Design Canvas'
      ],
    },
    {
      title: 'Soft Skills',
      skills: ['    Exceptional Communication skills'
        , 'Team leader & player'
        , 'Responsible'
        , 'Upholds integrity'
        , 'Innovative'
        , 'Accountable '],
    },
  ];

  return (
    <section id="skills" className="w-full bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Skills</h2>
        <div className="mt-8">
          {skillsData.map((skillsEntry, index) => (
            <SkillsCard
              key={index}
              title={skillsEntry.title}
              skills={skillsEntry.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
