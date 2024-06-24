import { Logo } from './Logo';

export function Header() {
  return (
    <header className="border-b border-stone-800">
      <nav className="mx-auto flex h-16 max-w-[1040px] items-center justify-between px-5">
        <Logo />
      </nav>
    </header>
  );
}
