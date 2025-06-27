import { User } from './mockData';

const AUTH_STORAGE_KEY = 'xagent_user';

export function setAuthUser(user: User): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
  }
}

export function getAuthUser(): User | null {
  if (typeof window === 'undefined') {
    return null;
  }
  
  const stored = localStorage.getItem(AUTH_STORAGE_KEY);
  if (!stored) {
    return null;
  }
  
  try {
    return JSON.parse(stored) as User;
  } catch {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    return null;
  }
}

export function clearAuthUser(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(AUTH_STORAGE_KEY);
  }
}

export function isAuthenticated(): boolean {
  return getAuthUser() !== null;
}