import { useContext } from "react";
import { AuthContext } from "../components/AuthContext";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Welcome, {user?.name}!</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
