import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import { ButtonTheme } from './Button.interface';

describe('Button', () => {
  test('Render', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('Test clear theme', () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
