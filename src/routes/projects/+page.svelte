<script lang="ts">
  import d1 from '$lib/assets/talos.png';
  import d2 from '$lib/assets/voltair.png';
  import d3 from '$lib/assets/device3.svg';
  import p1 from '$lib/assets/tekton.png';
  import p2 from '$lib/assets/printing2.svg';
  import p3 from '$lib/assets/printing3.svg';
  import a1 from '$lib/assets/arch1.svg';
  import a2 from '$lib/assets/arch2.svg';
  import a3 from '$lib/assets/arch3.svg';
</script>

<main class="projects-page">
  <header class="projects-header">
    <h1>Projects</h1>
    <p> Here is a catalog of all my projects in various stages of completion</p>
  </header>

  <section class="projects-section">
    <h2>Electronic Projects</h2>
    <div class="tiles">
      <a class="tile" href="#">
        <img src={d1} alt="Talos" />
        <div class="tile-caption">
          <strong>Talos</strong>
          <span>A personal smart home speaker</span>
        </div>
      </a>

      <a class="tile" href="#">
        <img src={d2} alt="VoltAir" />
        <div class="tile-caption">
          <strong>VoltAir</strong>
          <span>A Wireless energy monitoring solution</span>
        </div>
      </a>

      <a class="tile" href="#">
        <img src={d3} alt="Device 3" />
        <div class="tile-caption">
          <strong>UAV Dreadnaught</strong>
          <span>A robust quadcopter</span>
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
          <strong>Tekton</strong>
          <span>A Custom Designed 350x350 3D Printer</span>
        </div>
      </a>
    </div>
  </section>

  <section class="projects-section">
    <h2>Computer Architecture</h2>
    <div class="tiles">
      <a class="tile" href="#">
        <img src={a1} alt="3D Print 1" />
        <div class="tile-caption">
          <strong>RISCV Zero</strong>
          <span>A 5-stage RISCV pipeline</span>
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
    font-size: 2.5rem;
    font-weight: 700;
    color: #0f172a;
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
    object-fit: contain;
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
