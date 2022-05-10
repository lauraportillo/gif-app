import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import GifGridItem from '../../components/GifGridItem';

describe('Testing <GifGridItem />', () => {

    const title = 'One title';
    const url = 'https://localhost/anything.jpg';

    test('should show the component correctly', () => {

        const wrapper = shallow(<GifGridItem title={title} url={url} />);

        expect(wrapper).toMatchSnapshot();

    });

});