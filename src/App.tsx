import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Main } from '@/components/Main';
import { Toaster } from '@/components/ui/sonner';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex min-h-dvh flex-col justify-between gap-8 sm:gap-16">
        <Header />
        <Main />
        <Footer />
      </div>
      <Toaster
        toastOptions={{
          classNames: {
            default:
              'border border-stone-200 bg-white text-stone-950 dark:border-stone-800 dark:text-stone-50 dark:bg-stone-950',
          },
        }}
      />
    </ThemeProvider>
  );
}
