import React from 'react';
import { SubmitButtonProps } from './types';
import './style.css';

function SubmitButton({
    buttonText,
    submitHandler
}: SubmitButtonProps) {

    return (
        <button
            type='submit'
            onClick={e => {
                e.preventDefault();
                submitHandler();
            }}
            className='submit input'
        >
            {buttonText}
        </button>
    );
}

export default SubmitButton;
