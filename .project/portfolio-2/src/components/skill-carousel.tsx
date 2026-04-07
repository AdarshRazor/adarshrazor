import Image from 'next/image';
import React from 'react'
import Marquee from "react-fast-marquee";

function SkillCarousel() {
  const skills = {
    techstack: ['React', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript','Node.js', 'Express', 'Python','Tailwind-CSS',],
    database: ['MongoDB', 'PostgresSQL', 'MySQL','GitHub','SQL-Developer'],
    cloud: ['AWS', 'Google-Cloud', 'Firebase', 'Azure','Git', 'Docker', 'Kubernetes'],
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12">Skillset</h2>
        <h2 className="text-3xl font-bold text-center mt-12 mb-6">language - framework</h2>
            <Marquee pauseOnHover={true}>
            {skills.techstack.map((skill, key)=>(
                <Image
                    key={key}
                    src={`/icons-tech/${skill}.svg`}
                    alt={`${skill} Icon`}
                    width={50}
                    height={50}
                    className="mx-16"
                />
            ))}
            </Marquee>
        <h2 className="text-3xl font-bold text-center mt-12 mb-6">database - tools</h2>
            <Marquee pauseOnHover={true} delay={1}>
                {skills.database.map((skill, key)=>(
                    <Image
                        key={key}
                        src={`/icons-tech/${skill}.svg`}
                        alt={`${skill} Icon`}
                        width={50}
                        height={50}
                        className="mx-32"
                    />
                ))}
            </Marquee>
        <h2 className="text-3xl font-bold text-center mt-12 mb-6">cloud - devops</h2>
            <Marquee pauseOnHover={true} delay={3}>
            {skills.cloud.map((skill, key)=>(
                <Image
                    key={key}
                    src={`/icons-tech/${skill}.svg`}
                    alt={`${skill} Icon`}
                    width={50}
                    height={50}
                    className="mx-20"
                />
            ))}
            </Marquee>
      </div>
    </section>
  )
}

export default SkillCarousel