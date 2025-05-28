import { renderToImage } from "./src/index";
import { writeFileSync } from "fs";

async function testTypewritten() {
  const manifesto = `
<h1>
  <em>
    Lucid
  </em>
</h1>
<p></p>
<p></p>
<p>
  Writing is broken.
</p>
<p>
  The word processor hasn't evolved since 1990. Meanwhile, AI has changed everything. Current tools retrofit AI onto old foundations. It doesn't work.
</p>
<p></p>
<p>
  <strong>
    Lucid: the word processor rebuilt for the AI era.
  </strong>
</p>
<p></p>
<p>
  A complete rethink from first principles.
  <br>
  The future of writing starts here.
</p>
<hr>
<p>
  <em>
    Lucid
  </em>
  <br>
  <a target="_blank" rel="noopener noreferrer" class="text-primary underline decoration-primary underline-offset-4 hover:text-primary/80" href="http://lucid.page">
    getlucid.app
  </a>
</p>
  `;

  const image = await renderToImage(manifesto, {
    preset: "typewritten-page",
  });

  writeFileSync("typewritten-test.png", image);
  console.log("Typewritten page saved as typewritten-test.png");
}

testTypewritten().catch(console.error); 