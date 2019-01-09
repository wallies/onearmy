import React from 'react';

// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// test
import {shallow} from 'enzyme';

import {ChangeLanguage} from '../ChangeLanguage';

test("Changes the state to English after button is clicked", () => {
    const mockCallbackFromParent = jest.fn();
    const systemUnderTest = shallow(<ChangeLanguage callbackFromParent={mockCallbackFromParent}/>);

    systemUnderTest.find('#changeLanguage__enButton').simulate("click");

    expect(systemUnderTest.find('#changeLanguage__currentLanguage').text()).toEqual("The current language is en");
});

test("Changes the state to Spanish after button is clicked", () => {
    const mockCallbackFromParent = jest.fn();
    const systemUnderTest = shallow(<ChangeLanguage callbackFromParent={mockCallbackFromParent}/>);

    systemUnderTest.find('#changeLanguage__esButton').simulate("click");

    expect(systemUnderTest.find('#changeLanguage__currentLanguage').text()).toEqual("The current language is es");
});

test("Changes the state to French after button is clicked", () => {
    const mockCallbackFromParent = jest.fn();
    const systemUnderTest = shallow(<ChangeLanguage callbackFromParent={mockCallbackFromParent}/>);

    systemUnderTest.find('#changeLanguage__frButton').simulate("click");

    expect(systemUnderTest.find('#changeLanguage__currentLanguage').text()).toEqual("The current language is fr");
});

test("Changes the state to English after reset button is clicked", () => {
    const mockCallbackFromParent = jest.fn();
    const systemUnderTest = shallow(<ChangeLanguage callbackFromParent={mockCallbackFromParent}/>);

    systemUnderTest.find('#changeLanguage__resetButton').simulate("click");

    expect(systemUnderTest.find('#changeLanguage__currentLanguage').text()).toEqual("The current language is en");
});
