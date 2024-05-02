
import { useSession, signIn } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ProtectedRoute({ children, requiredRole }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login'); // Redirect to login page
    }
  }, [status, router]);

  if (status === 'authenticated') {
    // Check if the user's role matches the required role
    if (requiredRole && session.user.role !== requiredRole) {
      return <p>You do not have permission to view this page.</p>; // Unauthorized access
    }

    return children; // Render the protected content
  }

  return <p>Loading...</p>; // Show a loading message while checking authentication
}
