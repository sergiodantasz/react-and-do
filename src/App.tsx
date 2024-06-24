import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <Footer />
    </ThemeProvider>
  );
}
