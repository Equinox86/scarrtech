<script lang="ts">
  import BlogPost from '$lib/BlogPost.svelte';
  import { blogPosts } from '$lib/blogPosts';
</script>

<main>
  <div class="blog-header">
    <h1>Blog</h1>
    <p>Project Status updates and other random thoughts.</p>
  </div>

  <div class="blog-container">
    {#each blogPosts as post (post.slug)}
      <BlogPost title={post.title} date={post.date} content={post.content} />
    {/each}
  </div>
</main>

<style>
  main {
    max-width: 900px;
    margin: 0 auto;
    padding: 3rem 1rem;
  }

  .blog-header {
    margin-bottom: 3rem;
    text-align: center;
  }

  .blog-header h1 {
    margin: 0 0 0.5rem 0;
    font-size: 2.5rem;
    font-weight: 700;
    color: #0f172a;
  }

  .blog-header p {
    margin: 0;
    color: #64748b;
    font-size: 1.1rem;
  }

  .blog-container {
    margin-top: 2rem;
  }

  @media (max-width: 640px) {
    main {
      padding: 2rem 1rem;
    }

    .blog-header h1 {
      font-size: 1.75rem;
    }
  }
</style>
