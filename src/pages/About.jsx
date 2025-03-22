// import FormCheck from '../components/FormCheck'
// import { AuthProvider } from '../components/AuthContext';;
import { useState, useContext } from 'react';
import { AuthContext } from '../components/AuthContext';
function About() {
    const { user, login, logout } = useContext(AuthContext)
    const [username, SetUserName] = useState("");

    return (
        <div>
            {user ? (
                <>
                    <h1>welcome , {user.name}</h1>
                    <button onClick={logout}>Logout</button>
                </>

            )
                :
                <>
                    <p>Please login</p>
                    <input
                        type="text"
                        placeholder="Enter the name"
                        value={username}
                        onChange={(e) => SetUserName(e.target.value)}
                    />
                    <button onClick={() => login(username)}>login</button>
                </>
            }

        </div>

    )


}

export default About;
