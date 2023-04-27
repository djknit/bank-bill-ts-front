import { useEffect, useState } from "react";
import { redirect } from 'react-router-dom'
import { Form, TextInput } from '../../commonComponents';
import { login, UserInfo, signUp } from '../../util';

function SignUpForm({
    
}) {

    const usernameInputId = 'sign-up-form-username-input';
    const passwordInputId = 'sign-up-form-password-input';

    const [usernameInputValue, setUsernameInputValue] = useState('');
    const [passwordInputValue, setPasswordInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false);

    const submit = () => {
        console.log('submit');
        setIsLoading(true);
        signUp({ username: usernameInputValue, password: passwordInputValue })
        .then(({ username }) => {
            setIsSignedIn(true);
        });
        // signup({})
        // .then((user: UserInfo) => {

        // })
    };

    return (
        <Form
            formId='signup-form'
            formTitle="New User"
            submitHandler={submit}
            submitButtonText="Create"
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
                inputType="password"
            />
        </Form>
    );
}

export default SignUpForm;
