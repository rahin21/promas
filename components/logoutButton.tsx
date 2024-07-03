// components/LogoutButton.js
import { logout } from '@/lib/logut';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Button } from '@/components/ui/button';
import { FaSignOutAlt } from 'react-icons/fa';

const LogoutButton = () => {
    const router = useRouter();
  const handleLogout = async () => {
    await logout();
    // Optional: Redirect to home or login page after logout
    router.push('/');
  };

  return (
    <button className='text-destructive' onClick={handleLogout}>
      <FaSignOutAlt/>
    </button>
  );
};

export default LogoutButton;
