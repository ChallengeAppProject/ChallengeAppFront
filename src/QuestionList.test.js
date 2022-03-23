import { render, screen } from '@testing-library/react';
import QuestionCard from './Components/Molecules/QuestionCard';

describe( "QuestionCard", () =>
{
  it( "Must have props", () =>
  {
      const props = { question:"question" };
      
      const screen = render( <QuestionCard { ...props } /> );
      expect( screen.getAllByText( props.question ) ).toBeInTheDocument();
  })
})