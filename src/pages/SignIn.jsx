import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

function SignIn() {
    const { login } = useContext(AuthContext);

    // Novi project-id:
    // {
    // 'novi-education-project-id': '1a3cf68c-7efb-4295-a36a-681e9ea8ee2b'
    // }


    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post('https://novi-backend-api-wgsgz.ondigitalocean.app/api/login', {
                email: 'regular.user@example.com',
                password: 'regular123',
            }, {
                headers: {
                    'novi-education-project-id': '1a3cf68c-7efb-4295-a36a-681e9ea8ee2b',
                }
            });

            login(response.data);
        } catch(e) {
            console.error(e);
        }

    }

    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

            <form onSubmit={handleSubmit}>
                <p>*invoervelden*</p>
                <button type="submit">Inloggen</button>
            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;