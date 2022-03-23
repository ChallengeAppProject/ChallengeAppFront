import { render } from '@testing-library/react';
import {QuestionCard} from '../Components/Molecules/QuestionCard/QuestionCard';

describe( "QuestionCard", () =>
{
  it( "Must have props", () =>
  {
      const props = { question:"question" };
      
    const screen = render( <QuestionCard { ...props } /> );
    const linkElement = screen.getByText(/Submit Answer/i);
    expect(linkElement).toBeInTheDocument();
  })
})