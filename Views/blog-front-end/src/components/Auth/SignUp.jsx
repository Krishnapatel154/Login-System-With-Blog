import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/user/sin', { username, email, password });
            alert(response.data.message);

            navigate('/login');
        } catch (error) {
            console.error(error);
            alert('Sign-up failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUp;

