import { renderToImage } from "./src/index";
import { writeFileSync } from "fs";

async function testTypewritten() {
  const manifesto = `
    <h1>Company Manifesto</h1>
    
    <p>We believe in the power of simplicity. In a world cluttered with complexity, we choose clarity. Every line of code we write, every product we build, every decision we make is guided by this principle.</p>
    
    <p>We are builders, not just dreamers. We turn ideas into reality through disciplined execution and relentless focus on what matters most.</p>
    
    <p>Our mission is to create tools that empower people to do their best work. We measure our success not by the features we add, but by the problems we solve.</p>
    
    <div class="signature">— The Team</div>
  `;

  const image = await renderToImage(manifesto, {
    preset: "typewritten-page",
  });

  writeFileSync("typewritten-test.png", image);
  console.log("Typewritten page saved as typewritten-test.png");
}

testTypewritten().catch(console.error); 