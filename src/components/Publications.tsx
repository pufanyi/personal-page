function Publications() {
  return (
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
  )
}

export default Publications
