import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { checkAuth } from "../services/auth";


const leadershipEmails = [
  "contact.me.for.question@gmail.com",
];


function ProtectedRoute({ children }) {
  const [user, setUser] = useState(undefined);


  useEffect(() => {
    const unsubscribe = checkAuth((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);


  // Wait for Firebase to check login
  if (user === undefined) {
    return <h2>Loading...</h2>;
  }


  // Not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }


  // Logged in but not leadership
  if (!leadershipEmails.includes(user.email)) {
    return (
      <div>
        <h1>Access Denied</h1>
        <p>
          You do not have permission to access the Riftline admin panel.
        </p>
      </div>
    );
  }


  return children;
}


export default ProtectedRoute;