export default function NotFound() {
  return (
    <main className="notFound">
      <div>
        <p className="eyebrow">404 · No signal</p>
        <h1>That page could not be found.</h1>
        <p>
          The address may be incorrect, or the page may no longer exist.
        </p>
        <a className="button buttonPrimary" href="/">
          Return home
        </a>
      </div>
    </main>
  );
}
