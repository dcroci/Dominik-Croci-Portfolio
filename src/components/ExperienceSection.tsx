import StackIcon from './StackIcon';

function ExperienceSection() {
  return (
    <section className="pt-24" id="experience">
      <h3 className="font-bold  ml-4">EXPERIENCE</h3>
      <div>
        <div className="grid gap-4 hover:bg-white/10 p-4 transition-all duration-300">
          <section>
            <p className="text-[12px] font-semibold mb-2">2023 - CURRENT</p>
            <h4 className="font-semibold text-[16px] leading-6">
              Web Development Tutor • Arizona State University
            </h4>
          </section>
          <p className="text-gray-200 text-[16px] leading-7">
            I have played a pivotal role in enhancing the learning experiences
            of web development students through various initiatives. By leading
            both one-on-one and group tutoring sessions, I&apos;ve significantly
            improved students&apos; understanding and mastery of web development
            concepts, languages, and tools. This was achieved through
            personalized instruction and comprehensive feedback tailored to meet
            individual learning needs. Additionally, I developed and distributed
            a range of educational resources, including coding examples and
            detailed tutorials, which deepened students&apos; practical skills
            and theoretical knowledge. My efforts also extended to facilitating
            effective communication between students and professors, providing
            insightful feedback that guided curriculum adjustments to better
            address student learning challenges and align with their interests.
          </p>
          <ul className="flex items-center gap-4 w-full">
            <li>
              <StackIcon
                imgURL="html-icon.png"
                stackName="HTML"
                stackDesc="The latest version of HTML, providing the structure and content of web pages."
                margin={'mx-auto'}
              />
            </li>
            <li>
              <StackIcon
                imgURL="css-icon.png"
                stackName="CSS"
                stackDesc="The latest version of Cascading Style Sheets, used for styling and layout of web pages."
                margin={'mx-auto'}
              />
            </li>{' '}
            <li>
              {' '}
              <StackIcon
                imgURL="js-icon.png"
                stackName="JavaScript"
                stackDesc="A high-level, dynamic programming language used primarily for web development."
                margin={'mx-auto'}
              />
            </li>
            <li>
              <StackIcon
                imgURL="ts-icon.png"
                stackName="TypeScript"
                stackDesc="A superset of JavaScript that adds static type definitions, aimed at making code easier to understand and debug."
                margin={'mx-auto'}
              />
            </li>
            <li>
              <StackIcon
                imgURL="react-icon.png"
                stackName="React"
                stackDesc="A JavaScript library for building user interfaces, particularly single-page applications."
                margin={'mx-auto'}
              />
            </li>
          </ul>
        </div>
        <div className="grid gap-4 mt-12 hover:bg-white/10 p-4 transition-all duration-300">
          <section>
            <p className="text-[12px] font-semibold mb-2">2018 - 2023</p>
            <h4 className="font-semibold text-[16px] leading-6">
              Assistant Manager • Harkins Theatres
            </h4>
          </section>
          <p className="text-gray-200 text-[16px] leading-7">
            I have successfully implemented task management and project tracking
            tools that streamlined operations and enhanced efficiency by
            identifying key areas for improvement. My commitment to delivering
            exceptional customer service played a significant role in
            consistently exceeding customer expectations, contributing to a
            positive and memorable cinema experience. Furthermore, I led and
            trained diverse teams, fostering a collaborative environment that
            not only improved performance but also boosted employee satisfaction
            significantly.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
