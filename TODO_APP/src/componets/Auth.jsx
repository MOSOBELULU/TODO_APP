import { useHistory } from 'react-router-dom';

export default function Auth() {
  const history = useHistory();

  const handleLogin = () => {
    // Simulating a login process (replace with actual logic)
    const isLoggedIn = true; // Assume login is successful

    if (isLoggedIn) {
      // Redirect to home page (/home) after successful login
      history.push('/home');
    } else {
      // Handle unsuccessful login (optional)
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}


