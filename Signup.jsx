import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = ({ onSignup }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // useNavigate hook for programmatic navigation

    const handleSignup = () => {
        if (username && password) {
            // Perform the signup action
            onSignup({ username, password });
            setUsername('');
            setPassword('');
            // After signup, navigate to the Login page
            navigate('/login');
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignup}>Sign Up</button>
            <p>Already have an account? <a href="/login">Log in here</a></p>
        </div>
    );
};

export default Signup;
