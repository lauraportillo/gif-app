import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import GifGridItem from '../../components/GifGridItem';

describe('Testing <GifGridItem />', () => {

    const title = 'One title';
    const url = 'https://localhost/anything.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('should show the component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should have a paragraph with title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('should have image equal to the url and alt of the props', () => {
        const img = wrapper.find('img');
        // console.log(img.html()); // para ver todo el objeto
        // src y alt son properties para react:
        // console.log(img.props());
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('should have the className animate__fadeIn', () => {

        const div = wrapper.find('div');
        const className = div.prop('className');

        expect(className.includes('animate__fadeIn')).toBe(true);

    })

})