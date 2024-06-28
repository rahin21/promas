// lib/auth.js
import { auth } from '@/app/firebase/config';
import { signOut } from 'firebase/auth';
const logout = async () => {
  try {
    await signOut(auth);
    console.log('User signed out');
  } catch (error) {
    console.error('Error signing out:', error);
  }
};

export { logout };
