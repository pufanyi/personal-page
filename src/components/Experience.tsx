import Section from './Section'
import Entry from './Entry'

function Experience() {
  return (
    <Section number={3} title="Experience">
      <Entry
        title="SenseTime Research"
        date="Sep 2025 – Present"
        detail="Research Intern (Spatial Intelligence), Singapore"
        items={[
          'Conducted research on spatial intelligence, focusing on unified multimodal model optimization',
          'Delivered SenseNova-SI, establishing new state-of-the-art for spatial understanding',
        ]}
      />
      <Entry
        title="LMMs-Lab"
        date="Jan 2024 – Present"
        detail="Core Member, Singapore"
        items={[
          'Core member of non-profit initiative democratizing Large Multimodal Models',
          'Spearheaded development of LMMs-Eval, LMMs-Engine, and Video-MMMU',
        ]}
      />
      <Entry
        title="Synvo AI"
        date="Jan 2025 – Jul 2025"
        detail="Core Contributor, Singapore"
        items={[
          'Architected and implemented Synvo File System for unstructured multimodal data storage',
        ]}
      />
      <Entry
        title="MMLab@NTU"
        date="Jan 2025 – May 2025"
        detail={
          <>
            Research Intern, supervised by{' '}
            <a href="https://liuziwei7.github.io/" target="_blank" rel="noopener noreferrer">
              Prof. Liu Ziwei
            </a>
          </>
        }
        items={['Focused on multimodal language models and unified multimodal models']}
      />
    </Section>
  )
}

export default Experience
