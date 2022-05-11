// import React from 'react';
// import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { getGifs } from '../../helpers/getGifs';

describe('Testing getGifs Fecth', () => {

    test('should bring 10 items', async () => {

        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);
    })

    test('should bring 10 items another way', async () => {

        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);

    })

})