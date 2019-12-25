import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../../Utils';
import Header from './index';

const setUp = (props={})=>{
    const wrapper = shallow(<Header {...props}/>);
    console.log(wrapper.debug());
    return wrapper;
}
describe('Header component',()=>{
    let component;
    beforeEach(()=>{
        console.log('before');
        component=setUp();
    });
    it('should render wihtout erros',()=>{
        const wrapper =  findByTestAtrr(component,'headerComponent');
        expect(wrapper.length).toBe(1);
    })
    it('Should render a logo', () => {
        const logo = findByTestAtrr(component, 'logoIMG');
        expect(logo.length).toBe(1);
    });

});