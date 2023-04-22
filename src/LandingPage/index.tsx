import { useState } from 'react';
import './style.css';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

function LandingPage({}) {

    const [isNewUser, setIsNewUser] = useState(true);

    let formSelectLoginClass, formSelectSignUpClass;
    formSelectLoginClass = formSelectSignUpClass = 'form-selection-option';
    if (isNewUser) {
        formSelectSignUpClass += ' selected';
    }
    else {
        formSelectLoginClass += ' selected';
    }

    return (
        <div id="landing-pg">
            <h1>WELCOME!</h1>
            <div className="form-area">
                <div id="landing-pg-form-selector"      >
                    <button
                        className={formSelectLoginClass}
                        onClick={() => setIsNewUser(false)}
                    >
                        Login
                    </button> |
                    <button
                        className={formSelectSignUpClass}
                        onClick={() => setIsNewUser(true)}
                    >
                        Sign Up
                    </button>
                </div>
                <div id="landing-pg-main-form-area">
                    {isNewUser ? (
                        <SignUpForm />
                    ) : (
                        <LoginForm />
                    )}
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
