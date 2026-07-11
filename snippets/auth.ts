import { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: any; // Adjust the type based on your user data structure
}

const useAuth = (): [AuthState, (token: string) => void, () => void] => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    token: null,
    user: null,
  });

  useEffect(() => {
    const storedToken = localStorage.getItem('jwtToken');
    if (storedToken) {
      authenticate(storedToken);
    }
  }, []);

  const authenticate = (token: string) => {
    try {
      const decodedUser = jwtDecode(token);
      setAuthState({
        isAuthenticated: true,
        token,
        user: decodedUser,
      });
      localStorage.setItem('jwtToken', token);
    } catch (error) {
      logout();
    }
  };

  const logout = () => {
    setAuthState({
      isAuthenticated: false,
      token: null,
      user: null,
    });
    localStorage.removeItem('jwtToken');
  };

  return [authState, authenticate, logout];
};

export default useAuth;