import type {StoryFn} from '@storybook/react';
import {type ComponentType} from 'react';
import 'app/styles/index.scss';
import {type Theme} from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme): StoryFn => (StoryComponent: ComponentType) => (
  <div className={`app ${theme}`}>
    <StoryComponent />
  </div>
);
