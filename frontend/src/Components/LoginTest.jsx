import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const LoginTest = () => {
  const getUser = async () => {
    try {
      const response = await axios.get("https://api.punca.my.id/logged-in-user");
      console.log(`this session's user: ${response.data.name}`);
      console.log(`this session's email: ${response.data.email}`);
      console.log(`this session's uid: ${response.data.user_id}`);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  const { user, isLoading } = useSelector((state) => state.auth);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {user ? (
        <div>
          Welcome Back <strong>{user.name}</strong>
        </div>
      ) : (
        <div>Not logged in</div>
      )}
    </div>
  );
};

export default LoginTest;
