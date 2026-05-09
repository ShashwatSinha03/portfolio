import ProjectCard from '../components/ProjectCard';
import CircularGallery from '../components/CircularGallery';
import styles from './Section.module.css';

const projects = [
  {
    title: "Harvest Bakery",
    subtitle: "Editorial Café Experience",
    link: "https://harvest-bakery.example.com",
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
    title: "Nova Dashboard",
    subtitle: "Real-time Analytics Engine",
    link: "https://nova-analytics.example.com",
    tabs: {
      Overview: (
        <div>
          <p>A high-performance dashboard system designed to handle massive telemetry data with sub-second latency.</p>
          <p>Built for operators who require split-second decision-making capabilities in high-stakes environments.</p>
        </div>
      ),
      Decisions: (
        <div>
          <h3>Client-side Aggregation</h3>
          <p>Decided to perform heavy data aggregation in the browser using Web Workers. This saved server costs but required meticulous memory management.</p>
          <p>Trade-off: Browser compatibility constraints vs. massive reduction in backend API calls.</p>
        </div>
      ),
      Impact: (
        <div>
          <p>99.9th percentile latency under 200ms for live data streams.</p>
          <p>Zero reported UI blocking during peak data ingestion periods.</p>
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
