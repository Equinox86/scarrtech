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
  },
  {
    slug: 'talos-1',
    title: 'Talos #1: Getting back to it',
    date: 'December 29, 2025',
    content: `
        <p>
            After about a year of not messing with my smartspeaker I decided to try and finish it.
            In summary, I had a working prototype in December 2024, but after some updates to ESPhome, the microphone no longer functioned.
            I spent a good amount of time trying to get my custom wakeword working and after trying my first test the system was in a completley broken state.
            <br><br>
            I tried down-versioning, replacing all the components, going back to breadboard and nothing was working - so I put it aside hoping that the
            maintainers would get it working.
            Since then, NabuCasa has come out with their own smart home device, and it looks like support has waned on the esp32 code maintenence.
            Now I feel like its up to me to get this wokring.
            <br><br>
            To start debugging I used a Salae logic analyze on the the SCK and SD pins to see if the ESP master is correctly driving the lines,
            and it appears that the lines are completely dead.
            <br><br>
            To eliminate HW as the issue I used <a href="./assets/esp32_i2s_legacy.c">This Sketch</a> to use what were considered "legacy" esp drivers
            to listen on the microphone and plot the data, and it worked like a charm, so it seems like it's not the hardware's fault.
            <br><br>
            Using <a href="https://developers.esphome.io/contributing/development-environment/"> This guide </a> I pulled the current esphome
            code base. Now the fun part begins.

            <h1> Time to roll up my sleeves and get my hands dirty :) </h1>
        </p>
    `
  }
];
