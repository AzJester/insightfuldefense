import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);
const previewRoot = new URL("../app/_sites-preview/", import.meta.url);

async function fetchRendered(path = "/", method = "GET") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${Math.random()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(new URL(path, "http://localhost"), {
      method,
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the finished Insightful Defense landing page", async () => {
  const response = await fetchRendered();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Insightful Defense/);
  assert.match(html, /Clearer thinking for consequential defense decisions/);
  assert.match(html, /AI, autonomy &amp; counter-UAS/);
  assert.match(html, /Mission first/);
  assert.match(html, /contact@insightfuldefense\.com/);
  assert.equal((html.match(/<h1\b/gi) ?? []).length, 1);
  assert.doesNotMatch(html, /Coming Soon|codex-preview|react-loading-skeleton/i);
});

test("permanently retires every legacy article namespace", async () => {
  const paths = [
    "/blog-1",
    "/blog-1/f.json",
    "/blog-1/f/analyzing-the-2025-china-military-power-report",
    "/blog-1/f/capitalizing-on-a-250-billion-opportunity-in-defense-innovation",
    "/blog-1/f/how-new-research-is-reshaping-our-understanding-of-cwa-simulants",
    "/blog-1/f/modernizing-the-defense-frontier-a-path-forward-for-the-industry",
    "/blog-1/f/ukraine-drones-destroy-80%25-of-targets-via-%E2%80%9Cgamified%E2%80%9D-logistics",
    "/f/analyzing-the-2025-china-military-power-report",
    "/f/another-legacy-article",
  ];

  for (const path of paths) {
    const response = await fetchRendered(path);
    assert.equal(response.status, 410, path);
    assert.match(response.headers.get("x-robots-tag") ?? "", /noindex/i);
    assert.match(await response.text(), /This article is no longer published/);
  }

  const headResponse = await fetchRendered("/blog-1/f.json", "HEAD");
  assert.equal(headResponse.status, 410);
  assert.equal(await headResponse.text(), "");
});

test("removes starter assets and exposes only the homepage to search", async () => {
  const [page, layout, packageJson, robots, sitemap] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../app/robots.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8"),
  ]);

  const previewFiles = await readdir(previewRoot).catch((error) => {
    if (error.code === "ENOENT") return [];
    throw error;
  });
  assert.deepEqual(previewFiles, []);
  assert.doesNotMatch(page, /_sites-preview|SkeletonPreview|codex-preview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(robots, /allow:\s*"\/"/);
  assert.doesNotMatch(robots, /disallow/i);
  assert.match(sitemap, /https:\/\/insightfuldefense\.com\//);
  assert.doesNotMatch(sitemap, /blog|mysimplestore/i);
});

test("ordinary invalid routes remain ordinary 404s", async () => {
  const response = await fetchRendered("/not-a-legacy-article");
  assert.equal(response.status, 404);
  assert.match(await response.text(), /That page could not be found/);
});
