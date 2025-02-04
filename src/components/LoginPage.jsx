import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const adminPass = process.env.NEXT_PUBLIC_ADMIN_PASS;

  function handleLogin() {
    if (username == 'admin' && password == adminPass) {
      setIsLoggedIn(true);
    } else {
      alert('Failed to login.');
    }
  }

  return (
    <div className='text-description p-8 text-sm'>
      <Link href={'/'}>← Home</Link>
      <div className='mx-auto flex flex-col items-center gap-2'>
        <div className='flex gap-4'>
          <label htmlFor='username'>Username:</label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            autoComplete='off'
            type='text'
            id='username'
          />
        </div>
        <div className='flex gap-4'>
          <label htmlFor='password'>Password:</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleLogin();
              }
            }}
            autoComplete='off'
            type='password'
            id='password'
          />
        </div>
        <button
          onClick={handleLogin}
          className='hover-effect mt-4 border border-myDark px-2 py-1 uppercase dark:border-myLight'
        >
          Login
        </button>
      </div>
    </div>
  );
}
