import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import GifGridItem from '../../components/GifGridItem';

describe('Testing <GifGridItem />', () => {

    test('should show the component correctly', () => {

        const wrapper = shallow(<GifGridItem />);

        expect(wrapper).toMatchSnapshot();

    });

});