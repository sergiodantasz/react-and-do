export function Footer() {
  return (
    <footer className="border-t border-stone-800">
      <div className="mx-auto flex h-16 max-w-[1040px] items-center justify-between px-5">
        <p>
          Made by{' '}
          <a
            className="link"
            href="https://github.com/sergiodantasz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sérgio Dantas
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
