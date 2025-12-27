<script lang="ts">
  import d1 from '$lib/assets/device1.svg';
  import d2 from '$lib/assets/device2.svg';
  import d3 from '$lib/assets/device3.svg';
  import p1 from '$lib/assets/printing1.svg';
  import p2 from '$lib/assets/printing2.svg';
  import p3 from '$lib/assets/printing3.svg';
  import a1 from '$lib/assets/arch1.svg';
  import a2 from '$lib/assets/arch2.svg';
  import a3 from '$lib/assets/arch3.svg';
</script>

<main class="projects-page">
  <header class="projects-header">
    <h1>Projects</h1>
    <p>Explore selected work across Devices, 3D Printing, and Computer Architecture.</p>
  </header>

  <section class="projects-section">
    <h2>Devices</h2>
    <div class="tiles">
      <a class="tile" href="#">
        <img src={d1} alt="Device 1" />
        <div class="tile-caption">
          <strong>Device One</strong>
          <span>Handheld sensor platform</span>
        </div>
      </a>

      <a class="tile" href="#">
        <img src={d2} alt="Device 2" />
        <div class="tile-caption">
          <strong>Device Two</strong>
          <span>Low-power controller</span>
        </div>
      </a>

      <a class="tile" href="#">
        <img src={d3} alt="Device 3" />
        <div class="tile-caption">
          <strong>Device Three</strong>
          <span>Prototype board</span>
        </div>
      </a>
    </div>
  </section>

  <section class="projects-section">
    <h2>3D Printing</h2>
    <div class="tiles">
      <a class="tile" href="#">
        <img src={p1} alt="3D Print 1" />
        <div class="tile-caption">
          <strong>Print Alpha</strong>
          <span>Functional bracket</span>
        </div>
      </a>

      <a class="tile" href="#">
        <img src={p2} alt="3D Print 2" />
        <div class="tile-caption">
          <strong>Print Beta</strong>
          <span>Custom enclosure</span>
        </div>
      </a>

      <a class="tile" href="#">
        <img src={p3} alt="3D Print 3" />
        <div class="tile-caption">
          <strong>Print Gamma</strong>
          <span>Fixture and jig</span>
        </div>
      </a>
    </div>
  </section>

  <section class="projects-section">
    <h2>Computer Architecture</h2>
    <div class="tiles">
      <a class="tile" href="#">
        <img src={a1} alt="Architecture 1" />
        <div class="tile-caption">
          <strong>Microarch Study</strong>
          <span>Pipeline visualization</span>
        </div>
      </a>

      <a class="tile" href="#">
        <img src={a2} alt="Architecture 2" />
        <div class="tile-caption">
          <strong>Cache Experiments</strong>
          <span>Latency profiling</span>
        </div>
      </a>

      <a class="tile" href="#">
        <img src={a3} alt="Architecture 3" />
        <div class="tile-caption">
          <strong>ISA Design</strong>
          <span>Instruction set ideas</span>
        </div>
      </a>
    </div>
  </section>
</main>

<style>
  .projects-page {
    max-width: 1100px;
    margin: 0 auto;
    padding: 3rem 1rem;
  }

  .projects-header {
    text-align: center;
    margin-bottom: 2.5rem;
  }

  .projects-header h1 {
    margin: 0 0 0.5rem 0;
    font-size: 2.25rem;
  }

  .projects-section {
    margin-bottom: 2.5rem;
  }

  .projects-section h2 {
    font-size: 1.25rem;
    margin: 0 0 1rem 0;
  }

  .tiles {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  .tile {
    display: block;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    border: 1px solid #e6eef8;
    transition: transform 0.12s ease, box-shadow 0.12s ease;
  }

  .tile img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    display: block;
  }

  .tile-caption {
    padding: 0.75rem 1rem 1rem 1rem;
  }

  .tile-caption strong {
    display: block;
    margin-bottom: 0.25rem;
    font-weight: 700;
  }

  .tile-caption span {
    color: #64748b;
    font-size: 0.95rem;
  }

  .tile:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 30px rgba(2,6,23,0.08);
  }

  @media (max-width: 900px) {
    .tiles { grid-template-columns: repeat(2, 1fr); }
    .tile img { height: 140px; }
  }

  @media (max-width: 640px) {
    .tiles { grid-template-columns: 1fr; }
    .tile img { height: 220px; }
  }
</style>
