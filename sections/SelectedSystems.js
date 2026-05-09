import ProjectCard from '../components/ProjectCard';
import CircularGallery from '../components/CircularGallery';
import styles from './Section.module.css';

const projects = [
  {
    title: "Harvest Bakery",
    subtitle: "Editorial Café Experience",
    link: "https://harvest-bakery.vercel.app/",
    tabs: {
      Overview: (
        <div>
          <p>A premium bakery and brunch café experience designed with an editorial-first visual system focused on warmth, atmosphere, and timeless minimalism.</p>
          <p>Harvest Bakery blends cinematic storytelling, handcrafted textures, and refined typography to create a calm digital experience inspired by modern café culture and slow living aesthetics.</p>
        </div>
      ),
      Decisions: (
        <div>
          <h3>Editorial Minimalism</h3>
          <p>The interface was intentionally designed with restrained motion, oversized spacing, and a limited cream-and-brown palette to preserve a quiet premium atmosphere.</p>
          <p>Instead of relying on traditional product cards, the layout uses asymmetrical grids, immersive imagery, and typography-driven hierarchy to create a more emotional and believable café experience.</p>
          <p style={{ opacity: 0, fontSize: '1px' }}>The smallest spacing decisions ended up shaping the entire mood.</p>
        </div>
      ),
      Impact: (
        <div>
          <p>Created a portfolio-level brand presentation that feels authentic, cinematic, and investor-ready.</p>
          <p>Established a cohesive visual language combining Apple-inspired spacing discipline with Airbnb-style warmth and hospitality.</p>
        </div>
      ),
      Gallery: (
        <div style={{ height: '400px', position: 'relative' }}>
          <CircularGallery
            bend={1}
            borderRadius={0.05}
            scrollSpeed={0.8}
            scrollEase={0.11}
            textColor="var(--foreground)"
            font="400 16px Raleway"
          />
        </div>
      )
    }
  },
  {
    title: "HeartAssistX",
    subtitle: "Intelligent Clinical Diagnostics",
    link: "https://heartassistx.vercel.app/",
    tabs: {
      Overview: (
        <div>
          <p>An AI-driven clinical analytics system designed to predict cardiovascular disease risk, transitioning from classical statistical modeling into an intelligent diagnostic assistant.</p>
          <p>Built using the UCI Heart Disease dataset, HeartAssistX provides real-time risk probability and clinical category assessment to empower proactive patient care.</p>
        </div>
      ),
      Decisions: (
        <div>
          <h3>Clinical Precision</h3>
          <p>The system utilizes regularized Logistic Regression (C=0.1) and Decision Trees to identify key physiological drivers while maintaining a high-fidelity 88.52% test accuracy.</p>
          <p>The interface features a specialized dual-mode theme system (Clinical Red/White & High-Contrast Dark) designed for high-stakes medical environments and portable serverless deployment.</p>
          <p style={{ opacity: 0, fontSize: '1px' }}>In clinical diagnostics, the balance between sensitivity and specificity defines the architecture.</p>
        </div>
      ),
      Impact: (
        <div>
          <p>Developed a robust clinical decision support tool that transforms raw patient data into actionable risk scoring and confidence assessments.</p>
          <p>Established a cohesive visual and technical language for medical AI, combining rigorous statistical discipline with intuitive, high-speed performance.</p>
        </div>
      ), Gallery: (
        <div style={{ height: '400px', position: 'relative' }}>
          <CircularGallery
            bend={1}
            borderRadius={0.05}
            scrollSpeed={0.8}
            scrollEase={0.11}
            textColor="var(--foreground)"
            font="400 16px Raleway"
          />
        </div>
      )
    }
  }

];

export default function SelectedSystems() {
  return (
    <section
      className={styles.section}
      id="selected-systems"
    >
      <h2 className={styles.title}>Selected Systems</h2>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
