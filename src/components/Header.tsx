import { Logo } from './Logo';
import { ModeToggle } from '@/components/ModeToggle';

export function Header() {
  return (
    <header className="border-b border-stone-200 dark:border-stone-800">
      <nav className="mx-auto flex max-w-[1024px] items-center justify-between gap-3 p-3">
        <Logo />
        <ModeToggle />
      </nav>
    </header>
  );
}
