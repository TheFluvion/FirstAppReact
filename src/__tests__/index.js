import React from 'react';
import { fireEvent, render, screen, waitForElement } from '@testing-library/react';
import App from '../App';

//https://testing-library.com/docs/dom-testing-library/cheatsheet

test('home work as expected', async () => {
    const {container} = render (<App />)
    const gifLink = await waitForElement( 
        () => container.querySelector('.Gif-link')
    )

        expect(gifLink).toBeVisible()
});

test('search from could be used', async () =>{
    render(<App></App>) 
    const input = await screen.findByRole('textbox')
    const button = await screen.findByRole('button')

    fireEvent.change(input, {target: {value: 'Matrix'}})
    fireEvent.click(button)

    const title = await screen.findByText('Matrix')
    expect(title).toBeVisible()
})