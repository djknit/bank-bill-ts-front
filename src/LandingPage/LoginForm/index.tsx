import { useState } from 'react';
import { Form } from '../../commonComponents';
import TextInput from '../../commonComponents/Form/TextInput';

function LoginForm({
    
}) {

    const usernameInputId = 'login-form-username-input';
    const passwordInputId = 'login-form-password-input';

    const [usernameInputValue, setUsernameInputValue] = useState('');
    const [passwordInputValue, setPasswordInputValue] = useState('');

    const submit = () => {
        console.log('submit');
        // set loading state
        // make api call
        // then set userinfo in react app
        // then redirect
    };

    return (
        <Form
            formId='login-form'
            formTitle='Login Form'
            submitHandler={submit}
            submitButtonText='Submit Login'
        >
            <TextInput
                value={usernameInputValue}
                setValue={setUsernameInputValue}
                label='Username'
                placeholder='Type username here...'
                inputId={usernameInputId}
            />
            <TextInput
                value={passwordInputValue}
                setValue={setPasswordInputValue}
                label='Password'
                placeholder='Enter password...'
                inputId={passwordInputId}
            />

        </Form>
    );
}

export default LoginForm;