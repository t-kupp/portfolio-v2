import Link from 'next/link';
import { useState } from 'react';
import LoginPage from '@/components/LoginPage';

export default function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <LoginPage setIsLoggedIn={setIsLoggedIn} />;
  }

  if (isLoggedIn) {
    return (
      <div className='text-description p-8 text-sm'>
        <Link href={'/'}>← Home</Link>
        <div className='mx-auto flex flex-col items-center gap-2'>
          <h1>Admin Panel</h1>
        </div>
      </div>
    );
  }
}
