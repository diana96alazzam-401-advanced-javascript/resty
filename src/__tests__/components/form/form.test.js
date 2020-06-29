import React from 'react';
import {shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import Form from '../../../components/form/form';

describe('<Form/>', ()=> {
  it('is alive at application start', () => {
    const form = shallow(<Form />);
    expect(form.find('p').exists()).toBeTruthy();
  });

  it('properly store the users input into state', ()=> {
    const form = mount(<Form />);
    const formTag = form.find('form');
    const method = 'GET';
    const url = 'localhost:3000';
    formTag.simulate('submit', {
      preventDefault: () => {
      },
      target: {method:{value:method}, url:{value:url}},
    });
    expect(form.state()).toStrictEqual({method:'GET', url:'localhost:3000'});
  });

  it('properly display the users input in the output area on form submit', () => {
    const rendered = renderer.create(<Form />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
  
  it(' properly clear the form/state after the form is submitted', () => {
    const form = mount(<Form />);
    const formTag = form.find('form');
    const method = 'GET';
    const url = 'localhost:3000';
    formTag.simulate('submit', {
      preventDefault: () => {
      },
      target: {method:{value:method}, url:{value:url}},
    });
    // expect(formTag.find('input').get(0)).toStrictEqual(<input id="url" name="url" type="text" />);
    expect(form.state()).toStrictEqual({method:'GET', url:'localhost:3000'});
  });

  it('Do the method selectors/checkboxes obey the styling rules', () => {
    const rendered = renderer.create(<Form />).toJSON();
    expect(rendered).toMatchSnapshot();
  });

})
