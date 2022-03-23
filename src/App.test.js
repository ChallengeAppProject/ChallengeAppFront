import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Welcome to ChallengeApp', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to ChallengeApp/i);
  expect(linkElement).toBeInTheDocument();
});

