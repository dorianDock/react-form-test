import Footer from '../components/Footer';
import React from 'react'
import { mount } from 'enzyme';


test('Footer component renders correctly',() =>
{
    const element = mount(
      <Footer />
    );
    const p = element.find('.myfooter');
    expect(p.text()).toBe("My Footer");
});
