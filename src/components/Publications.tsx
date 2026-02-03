import Section from './Section'
import Entry from './Entry'

function Publications() {
  return (
    <Section number={2} title="Publications & Research Projects">
      <Entry
        title="SenseNova-SI: Scaling Spatial Intelligence with Multimodal Foundation Models"
        date="Sep 2025 – Present"
        detail={
          <>
            Preprint, Co-first author{' '}
            <span className="links">
              [<a href="#" target="_blank" rel="noopener noreferrer">Paper</a>]
              [<a href="#" target="_blank" rel="noopener noreferrer">Project Page</a>]
            </span>
          </>
        }
        items={[
          'A foundation model designed to scale spatial intelligence, achieved state-of-the-art on key spatial benchmarks',
          'Executed full-stack training pipeline for Qwen-based variants with LMMs-Engine on 100+ GPUs',
        ]}
      />
      <Entry
        title="LMMs-Eval: Reality Check on the Evaluation of Large Multimodal Models"
        date="Jan 2024 – Present"
        detail={
          <>
            NAACL (Findings), Co-first author{' '}
            <span className="links">
              [<a href="https://arxiv.org/abs/2407.12772" target="_blank" rel="noopener noreferrer">Paper</a>]
              [<a href="https://lmms-lab.github.io/lmms-eval-blog/lmms-eval-0.1/" target="_blank" rel="noopener noreferrer">Project Page</a>]
            </span>
          </>
        }
        items={[
          <>
            <strong>3.3K GitHub stars</strong> multimodal evaluation framework
          </>,
          'Developed low-cost automatic generation pipeline for Multi-modal LiveBench',
        ]}
      />
      <Entry
        title="Video-MMMU: Evaluating Knowledge Acquisition from Multi-Discipline Professional Videos"
        date="Sep 2024 – Feb 2025"
        detail={
          <>
            Preprint, Third Author{' '}
            <span className="links">
              [<a href="https://arxiv.org/abs/2410.13764" target="_blank" rel="noopener noreferrer">Paper</a>]
              [<a href="https://video-mmmu.github.io/" target="_blank" rel="noopener noreferrer">Project Page</a>]
            </span>
          </>
        }
        items={[
          'Built evaluation set with 300 expert-level videos and 900 human-annotated questions',
          <>
            Cited by{' '}
            <a
              href="https://deepmind.google/models/gemini/pro/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gemini 3 Pro
            </a>{' '}
            (Google) and{' '}
            <a
              href="https://openai.com/index/introducing-gpt-5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GPT-5
            </a>{' '}
            (OpenAI)
          </>,
        ]}
      />
      <Entry
        title="Otter & MIMIC-IT: Multi-Modal In-Context Instruction Tuning"
        date="Jun 2023 – Dec 2023"
        detail={
          <>
            IEEE TPAMI, Co-first author{' '}
            <span className="links">
              [<a href="https://arxiv.org/abs/2306.05425" target="_blank" rel="noopener noreferrer">Paper</a>]
              [<a href="https://github.com/Luodian/Otter" target="_blank" rel="noopener noreferrer">Project Page</a>]
            </span>
          </>
        }
        items={[
          <>
            Early experiment on vision-language-agent (VLA) model with{' '}
            <strong>3.3K GitHub stars</strong>
          </>,
          'Generated 2.8M multimodal instruction tuning data using pure language models',
        ]}
      />
      <Entry
        title="LMMs-Engine: A Simple, Unified Multimodal Models Training Engine"
        date="Aug 2025 – Present"
        detail="Research Project, Core Developer"
        items={[
          'Lean and flexible training framework for rapid research prototyping and large-scale production',
        ]}
      />
      <Entry
        title="VLoRP: Memory-Efficient LLM Training by Low-Rank Projection of Gradients"
        date="Aug 2024 – Jan 2025"
        detail={
          <>
            Preprint, Fourth author{' '}
            <span className="links">
              [<a href="#" target="_blank" rel="noopener noreferrer">Paper</a>]
            </span>
          </>
        }
        items={[
          'Implemented training framework with DeepSpeed integration; reproduced baselines (LoRA, GaLore, MeZO)',
        ]}
      />
    </Section>
  )
}

export default Publications
