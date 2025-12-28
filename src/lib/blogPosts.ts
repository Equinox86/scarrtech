export interface BlogPostData {
  slug: string;
  title: string;
  date: string;
  content: string;
}

export const blogPosts: BlogPostData[] = [
  {
    slug: 'first-post',
    title: 'First Post: Merry Christmas 2025!',
    date: 'December 25, 2025',
    content: `
        <p>
            It's Christmas! I finally have some downtime to put this site together. Since I wanted to get up and running I am
            going to rely heavily on co-pilot with the goal of getting a professional, clean looking site as
            quickly as possible.

            Since I hosting this site on Cloudflare, I am going to use Svelte with npm to quickly generate a template.
        </p>
        <p>
            After installing <code>npm</code>, I created this site with: <br>
            <code> npx sv create scarrtech</code><br><br>
            <code>
                ┌  Welcome to the Svelte CLI! (v0.11.0)<br><br>
                │
                ◇  Which template would you like?<br>
                │  SvelteKit minimal<br><br>
                │
                ◇  Add type checking with TypeScript?<br>
                │  Yes, using TypeScript syntax<br><br>
                │
                ◇  What would you like to add to your project? (use arrow keys / space bar)<br>
                │  prettier, eslint, tailwindcss, sveltekit-adapter<br><br>
                │
                ◇  tailwindcss: Which plugins would you like to add?<br>
                │  typography, forms<br><br>
                │
                ◇  sveltekit-adapter: Which SvelteKit adapter would you like to use?<br>
                │  cloudflare<br><br>
                │
                ◇  sveltekit-adapter: Are you deploying to Workers (assets) or Pages?<br>
                │  Workers
                │
            </code>
        </p>
        <p> It was pretty barebones, but my first page was up and served locally!
         admittedly, am not the best UI designer, So .. copilot to the rescue.

        <p> A good first step in devloping a site is to create the header, so I asked: <br><br>
          <code> Can you create a header for my page with the title (Stephen Carrasquillo) and a navigation bar on the right ? </code> <br><br>
          And what you see at the top is what it came up with. After a few tweaks I was on the way to having my website. </p>

        <p> As I am new to Svelte, I am excited to learn through example and make this site something special to be proud of.</p>
        <p> In the future I plan to make: </P>
        <ul>
          <li> - A rich text editor for my blog posts </li>
          <li> - A project page with relevant sorted blog posts and pictures updating progress </li>
          <li> - An education section to share random things I learn while working on, well, whatever! </li>
        </ul>
    `
  }
];
