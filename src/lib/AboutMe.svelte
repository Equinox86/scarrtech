<script lang="ts">
  import photo from '$lib/assets/my_pic.jpeg';
</script>

<section class="hero">
  <div class="hero-inner">
    <div class="hero-photo">
      <img src={photo} alt="Stephen Carrasquillo" />
    </div>
    <div class="hero-content">
      <h2>Hi, I'm Stephen Carrasquillo</h2>
      <p> Thanks for visiting my project space!</p>
      <p>I am passionate tech-enthusiast with experience in electronics, firmware, and software development.</p>
      <p>
        Building cool stuff has always been a past-time for me, and this site is where I will document all the progress projects.
      </p>
      <p class="meta">I encourage you to check out my projects page for updates on what I am currently working on. </p>
      <a class="cta" href="#contact">Get in touch</a>
    </div>
  </div>
</section>

<style>
  .hero {
    padding: 3rem 1rem;
    background: linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
  }

  .hero-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 320px 1fr;
    gap: 2rem;
    align-items: center;
  }

  .hero-photo img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
    border: 1px solid #e6eef8;
  }

  .hero-content h2 {
    margin: 0 0 0.5rem 0;
    font-size: 1.75rem;
    color: #0f172a;
  }

  .hero-content p {
    margin: 0 0 1rem 0;
    color: #334155;
    line-height: 1.45;
  }

  .meta {
    color: #64748b;
    margin-top: -0.25rem;
  }

  .cta {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.55rem 0.95rem;
    background: #0ea5e9;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    transition: transform 0.12s ease, box-shadow 0.12s ease;
  }

  .cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(14,165,233,0.18);
  }

  @media (max-width: 720px) {
    .hero-inner {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .hero-photo img {
      max-width: 280px;
      margin: 0 auto;
    }

    .hero-content h2 {
      font-size: 1.5rem;
    }
  }
</style>
