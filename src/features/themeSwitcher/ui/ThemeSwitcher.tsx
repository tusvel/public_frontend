import { memo } from 'react';
import LightTheme from '@/shared/assets/icons/theme/light.svg';
import DarkTheme from '@/shared/assets/icons/theme/dark.svg';
import { Button } from '@/shared/ui/Button';
import { ButtonTheme } from '@/shared/ui/Button';
import { Theme } from '@/shared/const/theme';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

export const ThemeSwitcher = memo(() => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} theme={ButtonTheme.CLEAR}>
      <div style={{ width: 30, height: 30 }}>
        {theme === Theme.LIGHT ? <DarkTheme /> : <LightTheme />}
      </div>
    </Button>
  );
});
