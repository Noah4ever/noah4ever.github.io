import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const routes = [
  "projects/giftboard",
  "projects/custom-party-app",
  "projects/nolicom",
  "projects/ai-chat-speed-booster",
  "projects/collection-forge",
  "projects/sshconfig-lint",
  "projects/node-runner",
];

const outputDirectory = new URL("../dist/", import.meta.url);
const indexHtml = await readFile(new URL("index.html", outputDirectory), "utf8");

for (const route of routes) {
  const routeDirectory = new URL(`${route}/`, outputDirectory);
  await mkdir(routeDirectory, { recursive: true });

  let routeHtml = indexHtml.replace(
    '<link rel="canonical" href="https://thiering.org/" />',
    `<link rel="canonical" href="https://thiering.org/${route}/" />`,
  );
  routeHtml = routeHtml.replace(
    '<meta property="og:url" content="https://thiering.org/" />',
    `<meta property="og:url" content="https://thiering.org/${route}/" />`,
  );

  if (route === "projects/sshconfig-lint") {
    const title = "sshconfig-lint Case Study | Noah Thiering";
    const description =
      "How sshconfig-lint checks real OpenSSH configurations across the browser, CLI, editors and CI without uploading private configuration data.";

    routeHtml = routeHtml
      .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
      .replace(
        /<meta name="description"\s+content="[^"]*"\s*\/>/,
        `<meta name="description" content="${description}" />`,
      )
      .replace(
        '<meta property="og:title" content="Noah Thiering - Portfolio" />',
        `<meta property="og:title" content="${title}" />`,
      )
      .replace(
        /<meta property="og:description"\s+content="[^"]*"\s*\/>/,
        `<meta property="og:description" content="${description}" />`,
      );
  }

  await writeFile(join(routeDirectory.pathname, "index.html"), routeHtml);
}
