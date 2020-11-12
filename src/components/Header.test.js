import { shallow } from 'enzyme';
import React from 'react';
import Header from './header';

it('expect to render Header component', () => { 
    expect(shallow(<Header />)).toMatchSnapshot();
})
