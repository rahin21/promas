// components/LogoutButton.js
import { logout } from '@/lib/logut';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Button } from './ui/button';

const LogoutButton = () => {
    const router = useRouter();
  const handleLogout = async () => {
    await logout();
    // Optional: Redirect to home or login page after logout
    router.push('/');
  };

  return (
    <Button onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
