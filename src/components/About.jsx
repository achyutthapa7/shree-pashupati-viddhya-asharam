import React from "react";
import Imagelist from "./Imagelist";
import Aboutlist from "./Aboutlist";

const About = () => {
  const aboutList = [
    {
      title: "Historical Background",
      desc: "Founded with a vision to provide holistic education, Shree Pashupati Viddhya Asharam has been a beacon of learning in the Dang district. Over the years, it has grown and evolved, continually enhancing its educational offerings to meet the changing needs of society. The  school's commitment to excellence has made it a trusted institution among the local community.",
    },

    {
      title: "Educational Philosophy",
      desc: "Shree Pashupati Viddhya Asharam believes in the power of education to transform lives. The school's educational program is designed to foster critical thinking, encourage positive action, and instill a sense of service to others. The curriculum is comprehensive, integrating academic rigor with physical, emotional, and social development. This approach ensures that students not only excel academically but also grow into compassionate, responsible, and innovative individuals.",
    },

    {
      title: "Vision",
      desc: "Shree Pashupati Viddhya Asharam envisions a community of learners comprising students, parents, staff, and management, all working together to provide an enriching educational experience. The school aims to develop individuals who relate positively and responsibly to the cosmos, self, others, and the transcendental, ultimately leading to all-inclusive transformation.",
    },

    {
      title: "Mission",
      desc: "Guided by its vision, the mission of Shree Pashupati Viddhya Asharam is to foster a passion for excellence, develop a strong moral compass, and cultivate a spirit of creativity and innovation. The school is committed to nurturing leaders who are environmentally conscious and socially responsible. By encouraging students to look at the world with a sense of wonder and compassion, the institution aims to produce individuals who are agents of positive change.",
    },

    {
      title: "Objectives",
      desc: "The ultimate objective of Shree Pashupati Viddhya Asharam is to facilitate the full growth of its students, preparing them to become global citizens driven by compassion and selflessness. To achieve this, the school focuses on several key areas:",
      list: [
        {
          title: "Academic Excellence:",
          desc: "Providing a rigorous and comprehensive education that prepares students for future academic and professional pursuits.",
        },

        {
          title: "Moral Integrity: ",
          desc: "Instilling strong ethical values to ensure students act with integrity and honesty.",
        },

        {
          title: "Spiritual Wisdom: ",
          desc: "Encouraging spiritual growth and a deeper understanding of one's purpose and place in the world.",
        },

        {
          title: "Social Responsibility: ",
          desc: "Promoting a sense of duty towards society and the environment, encouraging students to engage in community service and sustainable practices.",
        },

        {
          title: "Emotional Well-being: ",
          desc: "Supporting the emotional health of students through counseling and a nurturing environment that promotes resilience and well-being.",
        },
      ],
    },

    {
      title: "Conclusion",
      desc: "Shree Pashupati Viddhya Asharam stands as a pillar of education in Dang District, dedicated to shaping the future leaders of Nepal. Through its comprehensive educational programs and unwavering commitment to holistic development, the school continues to inspire and empower students to live meaningful lives and contribute to the betterment of society.",
    },
  ];

  return (
    <div className="px-6 py-28">
      <div className="max-w-6xl mx-auto xl:px-20 lg:px-20 px-0">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-thin mb-8">
          Introduction
        </h1>
        <div className="flex flex-col gap-5">
          <div className="w-full">
            <Imagelist />
          </div>
          <div className="flex flex-col justify-center text-gray-600">
            <p className="text-lg">
              Shree Pashupati Viddhya Asharam is an esteemed educational
              institution located in Dang District, Ghorahi-10, Narayapur, Dang.
              Established with a mission to impart quality education, the school
              caters to students up to Class 10. Shree Pashupati Viddhya Asharam
              is dedicated to nurturing the intellectual and personal growth of
              its students, ensuring they emerge as well-rounded individuals
              ready to contribute positively to society.
              <br />
              <br />
              With a strong emphasis on academic excellence and character
              development, the school offers a comprehensive curriculum that
              includes a wide range of extracurricular activities. Over the
              years, it has grown and evolved, continually enhancing its
              educational offerings to meet the changing needs of society. The
              school &apos;s commitment to excellence has made it a trusted
              institution among the local community, fostering a nurturing
              environment that promotes lifelong learning and personal
              development.
            </p>

            {aboutList.map((item, index) => (
              <Aboutlist
                key={index}
                title={item.title}
                desc={item.desc}
                list={item.list}
              />
            ))}
          </div>
        </div>

        <h1 className="text-lg md:text-2xl lg:text-3xl font-thin mb-8 mt-8">
          School Song
        </h1>
      </div>
    </div>
  );
};

export default About;
