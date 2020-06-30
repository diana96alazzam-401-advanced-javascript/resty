import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Form from '../../../components/form/form';

describe('<Form/>', () => {
  // it('Do the method selectors/checkboxes obey the styling rules', () => {
  //   const rendered = renderer.create(<Form />).toJSON();
  //   expect(rendered).toMatchSnapshot();
  // });
  
  it('is alive at application start', () => {
    const form = shallow(<Form />);
    expect(form.find('.results .method').exists()).toBeTruthy();
  });

  it('properly store the users input into state', () => {
    const form = mount(<Form />);
    const getButton = form.find('#POST');
    const textInput = form.find('#textInput');

    textInput.simulate('change', { target: { value: 'localhost:3000' } });
    getButton.simulate('click');

    expect(form.state('url')).toStrictEqual('localhost:3000');
    expect(form.state('method')).toStrictEqual('POST');

  });

  it(' properly clear the state after the form is submitted', () => {
    const form = mount(<Form />);
    const formTag = form.find('#form');
    const getButton = form.find('#POST');
    const textInput = form.find('#textInput');

    textInput.simulate('change', { target: { value: 'localhost:3000' } });
    getButton.simulate('click');

    formTag.simulate('submit');

    expect(form.state('url')).toStrictEqual('');
    expect(form.state('method')).toStrictEqual('');
  });

  it(' properly clear the form after the form is submitted', () => {
    const form = mount(<Form />);
    const formTag = form.find('#form');
    const getButton = form.find('#POST');
    const textInput = form.find('#textInput');  

    textInput.simulate('change', {target:{value:'localhost:3000'}});
    getButton.simulate('click');

    formTag.simulate('submit');

    expect(textInput.text()).toStrictEqual('');
    expect(getButton.hasClass('')).toStrictEqual(true);

  });

})
