import { PropsWithChildren } from "react";
import { FormProps } from "./types";
import './style.css'; 
import SubmitButton from "./SubmitButton";

export { default as TextInput } from './TextInput';

function Form({
    formId,
    formTitle,
    submitHandler,
    children,
    // source: https://blog.logrocket.com/using-react-children-prop-with-typescript/
    submitButtonText = 'Submit',
    submitButton
} : PropsWithChildren<FormProps>) {
    
    return ( 
        <form id={formId} className='form'>
            <h3 className="form-title">{formTitle}</h3>
            {children}
            {submitButton ? (
                submitButton
            ) : (
                <SubmitButton
                    buttonText={submitButtonText}
                    submitHandler={submitHandler}
                />
            )}
        </form>
    );
}

export default Form;
