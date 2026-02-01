import './App.css'

function App() {
  return (
    <div className="paper">
      {/* Title Block with NeurIPS-style horizontal rules */}
      <header className="title-block">
        <div className="title-wrapper">
          <hr className="title-rule-top" />
          <h1 className="title">Fanyi Pu (濮凡轶)</h1>
          <hr className="title-rule-bottom" />
        </div>

        <img src="/me.webp" alt="Fanyi Pu" className="author-photo" />
        <div className="affiliation">
          College of Computing and Data Science<br />
          Nanyang Technological University, Singapore
        </div>
        <div className="contact-info">
          <a href="tel:+6583981454">+65 8398-1454</a> |{' '}
          <a href="mailto:FPU001@e.ntu.edu.sg">FPU001@e.ntu.edu.sg</a>
        </div>

        <div className="links">
          [<a href="https://pufanyi.com" target="_blank" rel="noopener noreferrer">Homepage</a>]
          [<a href="https://github.com/pufanyi" target="_blank" rel="noopener noreferrer">GitHub</a>]
          [<a href="https://scholar.google.com/citations?user=58tv6skAAAAJ" target="_blank" rel="noopener noreferrer">Google Scholar</a>]
          [<a href="https://linkedin.com/in/pufanyi" target="_blank" rel="noopener noreferrer">LinkedIn</a>]
          [<a href="https://x.com/pufanyi" target="_blank" rel="noopener noreferrer">X</a>]
        </div>
      </header>

      {/* Abstract */}
      <section className="abstract">
        <h2 className="abstract-heading">Abstract</h2>
        <div className="abstract-content">
          <p>
            I am currently a final-year undergraduate student at <a href="https://www.ntu.edu.sg/" target="_blank" rel="noopener noreferrer">Nanyang Technological University</a>,
            specializing in <a href="https://www.ntu.edu.sg/education/undergraduate-programme/bachelor-of-science-in-data-science-artificial-intelligence" target="_blank" rel="noopener noreferrer">Data Science and Artificial Intelligence</a>.
          </p>
          <p>
            I am currently doing research at <a href="https://www.sensetime.com/en" target="_blank" rel="noopener noreferrer">SenseTime</a> and <a href="https://www.mmlab-ntu.com/" target="_blank" rel="noopener noreferrer">MMLab@NTU</a>.
            I am fortunate to be supervised by <a href="https://liuziwei7.github.io/" target="_blank" rel="noopener noreferrer">Prof. Ziwei Liu</a>,
            I am also grateful for the extensive help I have received from <a href="https://brianboli.com/" target="_blank" rel="noopener noreferrer">Bo Li</a>,
            {' '}<a href="https://caizhongang.com/" target="_blank" rel="noopener noreferrer">Zhongang Cai</a> and <a href="https://scholar.google.com/citations?user=jZH2IPYAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Lei Yang</a>.
            My research interests currently lie in <em>multi-modality (unified) models</em> and <em>spatial intelligence</em>.
          </p>
          <p>
            During my time at <a href="http://www.sxyz.net/" target="_blank" rel="noopener noreferrer">Shaoxing No.1 High School</a>,
            I participated in the <a href="https://www.noi.cn/" target="_blank" rel="noopener noreferrer">Olympiad in Informatics</a>.
            Additionally, I competed in the <a href="https://icpc.global/" target="_blank" rel="noopener noreferrer">ICPC</a> competition,
            where I earned a <a href="/assets/pdf/awards/Kunming.pdf" target="_blank" rel="noopener noreferrer">gold medal</a> in the 2022 Kunming Asia Regional Contest
            and a <a href="/assets/pdf/awards/Nanjing.pdf" target="_blank" rel="noopener noreferrer">silver medal</a> in the 2022 Nanjing Asia Regional Contest.
            I am a contributor to the <a href="https://ntu-icpc.github.io/npc/" target="_blank" rel="noopener noreferrer">Nanyang Programming Contest</a>.
          </p>
          <p>
            I like to play chess, my Lichess ID is <a href="https://lichess.org/@/pufanyi" target="_blank" rel="noopener noreferrer">@pufanyi</a>, my current rating is 2086 (rapid).
          </p>
        </div>
        <div className="keywords">
          <span className="keywords-label">Keywords: </span>
          Spatial Intelligence · Unified Multimodal Models · Vision-Language Models · Deep Learning
        </div>
      </section>

      {/* 1. Education */}
      <section className="section">
        <h2 className="section-heading">1 &nbsp; Education</h2>

        <div className="entry">
          <div className="entry-line">
            <span className="entry-title">Nanyang Technological University</span>
            <span className="entry-date">2022 – 2026</span>
          </div>
          <div className="entry-detail">B.Sc. in Data Science and Artificial Intelligence, Singapore</div>
          <ul className="entry-list">
            <li>Expected Honours (Highest Distinction), Current CGPA: 4.63 / 5.00</li>
            <li>Core courses: Reinforcement Learning, Deep Learning, Data Structures and Algorithms, Probability and Statistics, Cryptography</li>
          </ul>
        </div>

        <div className="entry">
          <div className="entry-line">
            <span className="entry-title">University of California, Berkeley</span>
            <span className="entry-date">Jun 2024 – Aug 2024</span>
          </div>
          <div className="entry-detail">Summer Session, Berkeley, CA</div>
          <ul className="entry-list">
            <li>Studied Computer Security and Game Theory, GPA: 4.00 / 4.00</li>
          </ul>
        </div>
      </section>

      {/* 2. Publications & Research */}
      <section className="section">
        <h2 className="section-heading">2 &nbsp; Publications & Research Projects</h2>

        <div className="entry">
          <div className="entry-line">
            <span className="entry-title">SenseNova-SI: Scaling Spatial Intelligence with Multimodal Foundation Models</span>
            <span className="entry-date">Sep 2025 – Present</span>
          </div>
          <div className="entry-detail">Preprint, Co-first author</div>
          <ul className="entry-list">
            <li>A foundation model designed to scale spatial intelligence, achieved state-of-the-art on key spatial benchmarks</li>
            <li>Executed full-stack training pipeline for Qwen-based variants with LMMs-Engine on 100+ GPUs</li>
          </ul>
        </div>

        <div className="entry">
          <div className="entry-line">
            <span className="entry-title">LMMs-Eval: Reality Check on the Evaluation of Large Multimodal Models</span>
            <span className="entry-date">Jan 2024 – Present</span>
          </div>
          <div className="entry-detail">NAACL (Findings), Co-first author</div>
          <ul className="entry-list">
            <li>Multimodal evaluation framework with <strong>3.3K GitHub stars</strong></li>
            <li>Developed low-cost automatic generation pipeline for Multi-modal LiveBench</li>
          </ul>
        </div>

        <div className="entry">
          <div className="entry-line">
            <span className="entry-title">Video-MMMU: Evaluating Knowledge Acquisition from Multi-Discipline Professional Videos</span>
            <span className="entry-date">Sep 2024 – Feb 2025</span>
          </div>
          <div className="entry-detail">Preprint, Third Author</div>
          <ul className="entry-list">
            <li>Built evaluation set with 300 expert-level videos and 900 human-annotated questions</li>
            <li>Cited by <a href="https://deepmind.google/models/gemini/pro/" target="_blank" rel="noopener noreferrer">Gemini 3 Pro</a> (Google) and <a href="https://openai.com/index/introducing-gpt-5/" target="_blank" rel="noopener noreferrer">GPT-5</a> (OpenAI)</li>
          </ul>
        </div>

        <div className="entry">
          <div className="entry-line">
            <span className="entry-title">Otter & MIMIC-IT: Multi-Modal In-Context Instruction Tuning</span>
            <span className="entry-date">Jun 2023 – Dec 2023</span>
          </div>
          <div className="entry-detail">IEEE TPAMI, Co-first author</div>
          <ul className="entry-list">
            <li>Early experiment on vision-language-agent (VLA) model with <strong>3.3K GitHub stars</strong></li>
            <li>Generated 2.8M multimodal instruction tuning data using pure language models</li>
          </ul>
        </div>

        <div className="entry">
          <div className="entry-line">
            <span className="entry-title">LMMs-Engine: A Simple, Unified Multimodal Models Training Engine</span>
            <span className="entry-date">Aug 2025 – Present</span>
          </div>
          <div className="entry-detail">Research Project, Core Developer</div>
          <ul className="entry-list">
            <li>Lean and flexible training framework for rapid research prototyping and large-scale production</li>
          </ul>
        </div>

        <div className="entry">
          <div className="entry-line">
            <span className="entry-title">VLoRP: Memory-Efficient LLM Training by Low-Rank Projection of Gradients</span>
            <span className="entry-date">Aug 2024 – Jan 2025</span>
          </div>
          <div className="entry-detail">Preprint, Fourth author</div>
          <ul className="entry-list">
            <li>Implemented training framework with DeepSpeed integration; reproduced baselines (LoRA, GaLore, MeZO)</li>
          </ul>
        </div>
      </section>

      {/* 3. Experience */}
      <section className="section">
        <h2 className="section-heading">3 &nbsp; Experience</h2>

        <div className="entry">
          <div className="entry-line">
            <span className="entry-title">SenseTime Research</span>
            <span className="entry-date">Sep 2025 – Present</span>
          </div>
          <div className="entry-detail">Research Intern (Spatial Intelligence), Singapore</div>
          <ul className="entry-list">
            <li>Conducted research on spatial intelligence, focusing on unified multimodal model optimization</li>
            <li>Delivered SenseNova-SI, establishing new state-of-the-art for spatial understanding</li>
          </ul>
        </div>

        <div className="entry">
          <div className="entry-line">
            <span className="entry-title">LMMs-Lab</span>
            <span className="entry-date">Jan 2024 – Present</span>
          </div>
          <div className="entry-detail">Core Member, Singapore</div>
          <ul className="entry-list">
            <li>Core member of non-profit initiative democratizing Large Multimodal Models</li>
            <li>Spearheaded development of LMMs-Eval, LMMs-Engine, and Video-MMMU</li>
          </ul>
        </div>

        <div className="entry">
          <div className="entry-line">
            <span className="entry-title">Synvo AI</span>
            <span className="entry-date">Jan 2025 – Jul 2025</span>
          </div>
          <div className="entry-detail">Core Contributor, Singapore</div>
          <ul className="entry-list">
            <li>Architected and implemented Synvo File System for unstructured multimodal data storage</li>
          </ul>
        </div>

        <div className="entry">
          <div className="entry-line">
            <span className="entry-title">MMLab@NTU</span>
            <span className="entry-date">Jan 2025 – May 2025</span>
          </div>
          <div className="entry-detail">Research Intern, supervised by <a href="https://liuziwei7.github.io/" target="_blank" rel="noopener noreferrer">Prof. Liu Ziwei</a></div>
          <ul className="entry-list">
            <li>Focused on multimodal language models and unified multimodal models</li>
          </ul>
        </div>
      </section>

      {/* 4. Competitions */}
      <section className="section">
        <h2 className="section-heading">4 &nbsp; Competitions</h2>

        <h3 className="subsection-heading">4.1 &nbsp; ICPC (International Collegiate Programming Contest)</h3>
        <ul className="itemize">
          <li><strong>Ranked 22nd</strong>, ICPC Asia Pacific Championship, 2024</li>
          <li><strong>Ranked 13th</strong>, ICPC Asia Jakarta Regional, 2023</li>
          <li><strong>Ranked 6th</strong>, ICPC Asia Manila Regional, 2022</li>
          <li><strong>Gold Medal</strong>, ICPC Asia Kunming Regional, 2021</li>
          <li><strong>Silver Medal</strong>, ICPC Asia Nanjing Regional, 2021</li>
        </ul>

        <h3 className="subsection-heading">4.2 &nbsp; Simon Marais Mathematics Competition</h3>
        <ul className="itemize">
          <li><strong>Best-in-University Prize</strong>, Nanyang Technological University, Dec 2022</li>
        </ul>
      </section>

      {/* 5. Teaching & Activities */}
      <section className="section">
        <h2 className="section-heading">5 &nbsp; Teaching & Activities</h2>

        <div className="entry">
          <div className="entry-line">
            <span className="entry-title">Tutorial Lecturer, NTU SC1008 C & C++ Programming</span>
            <span className="entry-date">Jan 2026 – Present</span>
          </div>
          <ul className="entry-list">
            <li>Instructed a cohort of 50 beginners in core C/C++ syntax and methodologies</li>
          </ul>
        </div>

        <div className="entry">
          <div className="entry-line">
            <span className="entry-title">Nanyang Programming Contest Organizer</span>
            <span className="entry-date">Jan 2025 – Present</span>
          </div>
          <ul className="entry-list">
            <li>Organized 5 competitions and tutorials for non-ICPC students</li>
          </ul>
        </div>

        <div className="entry">
          <div className="entry-line">
            <span className="entry-title">NTU Students' Computing and Data Science Club</span>
            <span className="entry-date">Nov 2024 – Present</span>
          </div>
          <ul className="entry-list">
            <li>Managed telegram group with 130+ members; share AI/ML learning resources</li>
          </ul>
        </div>

        <div className="entry">
          <div className="entry-line">
            <span className="entry-title">Teaching Assistant, NTU SC1003 Introduction to Computational Thinking</span>
            <span className="entry-date">Aug 2024 – Dec 2024</span>
          </div>
          <ul className="entry-list">
            <li>Instructed a cohort of 20 beginners in Python syntax and data manipulation</li>
          </ul>
        </div>
      </section>

      {/* 6. Miscellaneous */}
      <section className="section">
        <h2 className="section-heading">6 &nbsp; Miscellaneous</h2>
        <p>
          <strong>Hobbies:</strong> Physics, Chess (<a href="https://lichess.org/@/pufanyi" target="_blank" rel="noopener noreferrer">Lichess</a> rating: 2084), Calligraphy, Table tennis
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
      </footer>
    </div>
  )
}

export default App
