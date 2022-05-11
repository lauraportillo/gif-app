import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import AddCategory from '../../components/AddCategory';

describe('Testing <AddCategory />', () => {

    const setCategories = () => { };

    test('should show the component correctly', () => {

        const wrapper = shallow(<AddCategory setCategories={setCategories} />);

        expect(wrapper).toMatchSnapshot();

    })
})