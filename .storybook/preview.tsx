import type { Decorator, Preview } from "@storybook/react";
import { ThemeProvider } from 'next-themes';
import React from 'react';
import './globals.css';

const withTheme: Decorator = (StoryFn, context) => {
  const theme = context.parameters.theme || context.globals.theme
  return (
    <ThemeProvider attribute="class" forcedTheme={theme}>
      <StoryFn />
    </ThemeProvider>
  )
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', icon: 'circlehollow', title: 'light' },
        { value: 'dark', icon: 'circle', title: 'dark' },
      ],
      showName: true,
    },
  },
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    }
  },
  decorators: [
    withTheme
  ],
};

export default preview;
