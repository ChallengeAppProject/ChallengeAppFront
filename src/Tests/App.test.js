import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Wellcome to ChallengeApp', () => {
  render(<App />);
  const linkElement = screen.getByText(/Wellcome to ChallengeApp/i);
  expect(linkElement).toBeInTheDocument();
});

