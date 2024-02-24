import React from 'react'


const Eleven = () => {
    const [name, setName] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [userList, setUserList] = React.useState([
        { name: "abc", password: 123 }
    ])


    const userExists = (user, pass) => {
        for (const account of userList) {
            if (account.username === user && account.password == pass) {
                return true
            }
        }
        return false
    }

    const handleForm = (e) => {
        e.preventDefault();
        if (userExists(name, password)) {
            alert(`Logged in successfully! Hi, ${name}`)
        } else if (name.length > 6 && password.length > 6) {
            setUserList([...userList], { name, password })
            alert(`New account created! Welcome, ${name}`)
        } else {
            alert("Username and password must be more than 6 characters.");
            return;
        }
        setName("");
        setPassword("");
    }

    const loginForm = () => {
        return (
            <form onSubmit={handleForm} style={{ display: "flex", flexDirection: "column" }}>
                <h2>Login Form</h2>
                <input type={"text"} style={{ margin: "5px" }} value={name} placeholder="username" onChange={(e) => setName(e.target.value)} />
                <input type={"password"} style={{ margin: "5px" }} value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>)
    }

    return (
        <>
            {loginForm()}
        </>
    )
}

export default Eleven