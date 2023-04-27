import { TextInputProps } from './types';
import './style.css';

function TextInput({
    value,
    setValue,
    label,
    placeholder,
    inputId,
    inputType
}: TextInputProps) {
    return (
        <>
            <label htmlFor={inputId} id={`${inputId}-label`} className='label'>
                {label}
            </label>
            <input
                onChange={({ target }) => setValue(target.value)}
                value={value}
                id={inputId}
                placeholder={placeholder}
                className='input'
                type={inputType}
            />
        </>
    );
}

export default TextInput;
