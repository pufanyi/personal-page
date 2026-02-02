import Section from './Section'
import Entry from './Entry'

function Education() {
  return (
    <Section number={1} title="Education">
      <Entry
        title="Nanyang Technological University"
        date="2022 – 2026"
        detail="B.Sc. in Data Science and Artificial Intelligence, Singapore"
        items={[
          'Expected Honours (Highest Distinction), Current CGPA: 4.63 / 5.00',
          'Core courses: Reinforcement Learning, Deep Learning, Data Structures and Algorithms, Probability and Statistics, Cryptography',
        ]}
      />
      <Entry
        title="University of California, Berkeley"
        date="Jun 2024 – Aug 2024"
        detail="Summer Session, Berkeley, CA"
        items={['Studied Computer Security and Game Theory, GPA: 4.00 / 4.00']}
      />
    </Section>
  )
}

export default Education
