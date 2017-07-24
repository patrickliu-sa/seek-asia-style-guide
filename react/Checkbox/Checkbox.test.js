import React from 'react';
import { shallow } from 'enzyme';

import Checkbox from './Checkbox';

describe('Checkbox', () => {
  const simpleProps = {
    id: 'still-in-role',
    label: 'Still in role'
  };

  it('should render with simple props', () => {
    const wrapper = shallow(<Checkbox {...simpleProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with className', () => {
    const className = 'testClassname';
    const wrapper = shallow(<Checkbox {...simpleProps} className={className} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke the onChange handler when touched', () => {
    const handleChange = jest.fn();
    const props = {
      ...simpleProps,
      inputProps: {
        onChange: handleChange,
        checked: false
      }
    };
    const check = { target: { checked: true } };

    const wrapper = shallow(<Checkbox {...props} />);

    wrapper.find('input').simulate('change', check);
    expect(handleChange).toBeCalledWith(check);
  });

  describe('when type is standard', () => {
    it('should render standard checkbox', () => {
      const wrapper = shallow(<Checkbox {...simpleProps} type="standard" />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when type is button', () => {
    it('should render button checkbox', () => {
      const wrapper = shallow(<Checkbox type="button" />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('inputProps', () => {
    it('should render as checked', () => {
      const wrapper = shallow(<Checkbox {...simpleProps} inputProps={{ checked: true }} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should pass through other props to the input', () => {
      const wrapper = shallow(<Checkbox {...simpleProps} inputProps={{ 'data-automation': 'first-name-field' }} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
