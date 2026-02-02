import Section from './Section'
import Entry from './Entry'

function Teaching() {
  return (
    <Section number={5} title="Teaching & Activities">
      <Entry
        title="Tutorial Lecturer, NTU SC1008 C & C++ Programming"
        date="Jan 2026 – Present"
        items={['Instructed a cohort of 50 beginners in core C/C++ syntax and methodologies']}
      />
      <Entry
        title="Nanyang Programming Contest Organizer"
        date="Jan 2025 – Present"
        items={['Organized 5 competitions and tutorials for non-ICPC students']}
      />
      <Entry
        title="NTU Students' Computing and Data Science Club"
        date="Nov 2024 – Present"
        items={['Managed telegram group with 130+ members; share AI/ML learning resources']}
      />
      <Entry
        title="Teaching Assistant, NTU SC1003 Introduction to Computational Thinking"
        date="Aug 2024 – Dec 2024"
        items={['Instructed a cohort of 20 beginners in Python syntax and data manipulation']}
      />
    </Section>
  )
}

export default Teaching
