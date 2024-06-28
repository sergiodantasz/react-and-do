export function Footer() {
  return (
    <footer className="border-t border-stone-200 dark:border-stone-800">
      <div className="mx-auto flex max-w-[1024px] items-center justify-between p-3">
        <p>
          Made by{' '}
          <a
            className="font-bold underline decoration-stone-300 underline-offset-4 transition-colors hover:decoration-stone-950 dark:decoration-stone-700 dark:hover:decoration-stone-50"
            href="https://github.com/sergiodantasz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sérgio Dantas
          </a>
          . Source code on{' '}
          <a
            className="font-bold underline decoration-stone-300 underline-offset-4 transition-colors hover:decoration-stone-950 dark:decoration-stone-700 dark:hover:decoration-stone-50"
            href="https://github.com/sergiodantasz/react-and-do"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
