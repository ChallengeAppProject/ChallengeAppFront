import React from 'react';
import { ChallengeList } from '../Components/Organisms/ChallengeList/ChallengeList';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import {ChallengeCard} from '../Components/Molecules/ChallengeCard/ChallengeCard' 
import { QuestionCard } from '../Components/Molecules/QuestionCard/QuestionCard';
import { mockComponent } from 'react-dom/test-utils';

describe('<ChallengeList />', () => {
  it('renders a wellcome title', () => {
    const wrapper = shallow(<ChallengeList />);
    expect(wrapper.contains(<h1 className="wellcomeTitle">Challenges</h1>)).to.equal(true);
  } );
  
  it('renders a challengeCard', () => {
    const wrapper = shallow( <ChallengeList /> );
    //expect(wrapper.find('.card-container')).to.have.lengthOf(0);
    expect( wrapper.render().contents() ).to.have.lengthOf( 2 );
  } );
  





/*   it('simulates click events', () => {
    const preventDefault = sinon.spy();
    const event = sinon.mock
    const question = sinon.spy();
    const wrapper = shallow(<QuestionCard question={question} onButtonClick={preventDefault} />);
    wrapper.find('button').simulate('click');
    expect(button).to.have.property(preventDefault);
  });*/
});  