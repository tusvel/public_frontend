import { type ComponentType } from 'react';
import { type Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator =
  (theme: Theme) => (StoryComponent: ComponentType) => (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  );
