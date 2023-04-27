type TextInputProps = {
    value: string,
    setValue: (newValue: string) => void,
    placeholder?: string,
    label: string,
    inputId: string,
    inputType?: string
};

export type {
    TextInputProps
};