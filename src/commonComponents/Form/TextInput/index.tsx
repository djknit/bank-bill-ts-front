import { TextInputProps } from './types';

function TextInput({
    changeHandler,
    value,
    label,
    placeholder,
    name
}: TextInputProps) {
    return (
        <>
            <label htmlFor={name} id={`${name}-label`}>
                {label}
            </label>
            <input
                onChange={({ target }) => changeHandler(target.value)}
                value={value}
                id={name}
                placeholder={placeholder}
            />
        </>
    );
}

export default TextInput;
