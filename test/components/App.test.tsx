import * as React from 'react';
import App from 'Containers/App/App';
import { shallow } from 'enzyme';

describe('App component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
