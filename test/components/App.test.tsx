import * as React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/App';

describe('App component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
