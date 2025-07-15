import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const resp = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await resp.json();
      if (data.access_token) {
        setMessage('Login successful!');
        // Save token, update UI, etc.
      } else {
        setMessage(data.error || 'Login failed.');
      }
    } catch (err) {
      setMessage('Login failed: ' + err.message);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleLogin}>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit" disabled={loading}>{loading ? 'Logging in...' : 'Log In'}</button>
      {message && <div>{message}</div>}
    </form>
  );
};

export default LoginPage;