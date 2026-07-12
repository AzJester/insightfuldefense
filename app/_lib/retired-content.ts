const retiredDocument = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex, noarchive" />
    <title>Content retired | Insightful Defense</title>
    <style>
      :root { color-scheme: dark; }
      * { box-sizing: border-box; }
      body { margin: 0; min-height: 100vh; display: grid; place-items: center; padding: 24px; background: #07131f; color: #f3f0e7; font-family: system-ui, sans-serif; }
      main { width: min(680px, 100%); border-top: 1px solid #74d8e8; padding-top: 28px; }
      p:first-child { color: #74d8e8; font-size: 12px; font-weight: 800; letter-spacing: .16em; text-transform: uppercase; }
      h1 { max-width: 620px; margin: 24px 0 18px; font-family: Georgia, serif; font-size: clamp(42px, 8vw, 78px); font-weight: 400; letter-spacing: -.045em; line-height: .98; }
      p { max-width: 560px; color: #b9c8d0; line-height: 1.7; }
      a { min-height: 44px; display: inline-flex; align-items: center; margin-top: 22px; color: #07131f; background: #74d8e8; padding: 12px 16px; font-size: 12px; font-weight: 800; letter-spacing: .08em; text-decoration: none; text-transform: uppercase; }
      a:focus-visible { outline: 3px solid #f3f0e7; outline-offset: 4px; }
    </style>
  </head>
  <body>
    <main>
      <p>410 · Content retired</p>
      <h1>This article is no longer published.</h1>
      <p>The previous article archive was retired as part of the Insightful Defense relaunch. It has not been moved or replaced.</p>
      <a href="https://insightfuldefense.com/">Return to Insightful Defense</a>
    </main>
  </body>
</html>`;

const retiredHeaders = {
  "Cache-Control": "public, max-age=300",
  "Content-Type": "text/html; charset=utf-8",
  "X-Robots-Tag": "noindex, noarchive",
};

export function retiredContentResponse() {
  return new Response(retiredDocument, {
    status: 410,
    headers: retiredHeaders,
  });
}

export function retiredContentHeadResponse() {
  return new Response(null, {
    status: 410,
    headers: retiredHeaders,
  });
}
