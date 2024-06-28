import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDarkTheme = theme === 'dark';
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        setTheme(isDarkTheme ? 'light' : 'dark');
      }}
    >
      {isDarkTheme ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  );
}
