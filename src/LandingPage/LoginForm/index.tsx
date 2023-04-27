import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from '../../commonComponents';
import TextInput from '../../commonComponents/Form/TextInput';
import { login } from '../../util';
import { UserInfo } from '../../util/data/user/types';

function LoginForm({
    
}) {

    const usernameInputId = 'login-form-username-input';
    const passwordInputId = 'login-form-password-input';

    const [usernameInputValue, setUsernameInputValue] = useState('');
    const [passwordInputValue, setPasswordInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const submit = () => {
        console.log('submit');
        setIsLoading(true);
        login({
            username: usernameInputValue,
            password: passwordInputValue
        })
        .then((user: UserInfo) => {
            navigate('/app');
        });
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
                placeholder='Your username...'
                inputId={usernameInputId}
            />
            <TextInput
                value={passwordInputValue}
                setValue={setPasswordInputValue}
                label='Password'
                placeholder='Your password...'
                inputId={passwordInputId}
                inputType='password'
            />
        </Form>
    );
}

export default LoginForm;