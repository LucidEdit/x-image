import { renderToImage } from "./dist";
import { writeFileSync } from "fs";

async function test() {
  const html = `
        <h1>The Case for Solo Founders</h1>

        <p>For decades, the startup world has pushed one narrative: you need co-founders to succeed. <em>What if they're wrong?</em></p>

        <p>Great co-founding teams build incredible companies. But after working with thousands of founders in ODF, I've seen enough solo successes to know there's another valid path.</p>

        <p>Successful solo founding stories aren't new — look at Zoom (2011) and Vercel (2015) — but I expect they'll be more common in the future. AI gives solo founders unprecedented leverage. What once required multiple people can now be accomplished by one determined person who knows how to use the latest tools.</p>

        <p>AI compounds the benefits of solo founding. As a solo founder, you maintain complete control and start with 100% ownership. This enables faster decisions. It also means you can offer more equity to early team members who become deeply invested while taking less financial and emotional risk.</p>

        <p>There are tradeoffs. The journey can be lonely without a co-founder to share the mental and physical burden. You might miss having someone equally invested to celebrate wins and navigate challenges.</p>

        <p>But here's the truth: neither path is inherently superior. For too long, we've been told that only one path exists.</p>
    `;

  const leanIntoDifficult = `
        <p><mark>Lean into difficulty.</mark> It's only a bad thing if you tell yourself the story that it's a bad thing. <mark>Struggle is only a bad thing if you characterize it that way.</mark> <mark>Failure is only a bad thing if you catastrophize.</mark> There's a story where <mark>difficulty is a thing you enjoy</mark>, struggle is just part of the process of winning, and <mark>failure is data that teaches you lessons.</mark> Tell yourself that one. You might feel some discomfort in the moment, but <mark>it won't break you, and you'll easily keep going.</mark></p>
    `;

  const image = await renderToImage(html, {
    preset: "book-excerpt",
    backgroundImage:
      "https://pbs.twimg.com/media/Grhndq3WcAAkAec?format=jpg&name=large",
  });

  const highlighted = await renderToImage(leanIntoDifficult, {
    preset: "highlighted-book",
    backgroundImage:
      "https://pbs.twimg.com/media/Grhndq4XAAALjOq?format=jpg&name=large",
  });

  writeFileSync("test-output.png", image);
  console.log("Image saved as test-output.png");

  writeFileSync("highlighted-output.png", highlighted);
  console.log("Image saved as highlighted-output.png");
}

test().catch(console.error);
