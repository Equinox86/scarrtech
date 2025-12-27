<script lang="ts">
  export let title: string;
  export let date: string;
  export let content: string;
</script>

<article class="blog-post">
  <header>
    <h1>{title}</h1>
    <time>{date}</time>
  </header>
  <div class="content">
    {@html content}
  </div>
</article>

<style>
  .blog-post {
    margin: 0 0 3rem 0;
    padding: 2rem 0;
    border-bottom: 1px solid #e6eef8;
  }

  .blog-post:last-child {
    border-bottom: none;
  }

  header {
    margin-bottom: 1.5rem;
  }

  h1 {
    margin: 0 0 0.5rem 0;
    font-size: 2rem;
    font-weight: 700;
    color: #0f172a;
    line-height: 1.2;
  }

  time {
    display: block;
    color: #64748b;
    font-size: 0.95rem;
    font-weight: 500;
  }

  .content {
    color: #334155;
    line-height: 1.6;
    font-size: 1rem;
  }

  .content :global(p) {
    margin: 0 0 1rem 0;
  }

  .content :global(p:last-child) {
    margin-bottom: 0;
  }

  .content :global(h2) {
    margin: 1.5rem 0 0.75rem 0;
    font-size: 1.35rem;
    color: #0f172a;
  }

  .content :global(strong) {
    font-weight: 600;
    color: #0f172a;
  }

  @media (max-width: 640px) {
    h1 {
      font-size: 1.5rem;
    }
  }
</style>
