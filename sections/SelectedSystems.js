import ProjectCard from '../components/ProjectCard';
import CircularGallery from '../components/CircularGallery';
import styles from './Section.module.css';

const projects = [
  {
    title: "Orion Platform",
    subtitle: "Enterprise Design System",
    link: "https://orion-design.example.com",
    tabs: {
      Overview: (
        <div>
          <p>A unified design language for a multi-product ecosystem, focused on scalability and developer ergonomics.</p>
          <p>Orion serves 40+ independent teams, providing a singular source of truth for UI patterns, accessibility standards, and token-driven styles.</p>
        </div>
      ),
      Decisions: (
        <div>
          <h3>Component Modularization</h3>
          <p>We chose a multi-package repository structure over a monolithic build. This increased initial complexity but allowed teams to adopt features at their own pace.</p>
          <p>Trade-off: Higher maintenance overhead for versioning vs. total stability for downstream users.</p>
          <p style={{ opacity: 0, fontSize: '1px' }}>This part took longer than expected. It always does.</p>
        </div>
      ),
      Impact: (
        <div>
          <p>Reduced time-to-market for new features by 40%.</p>
          <p>Achieved 100% WCAG 2.1 compliance across all core components.</p>
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
