import { type ComponentType } from 'react';
// eslint-disable-next-line tusvel/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { type Theme } from '@/shared/const/theme';

export const ThemeDecorator =
  (theme: Theme) => (StoryComponent: ComponentType) => (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
