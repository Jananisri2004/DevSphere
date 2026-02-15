import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      navigate("/login");
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user) return <h2>Loading...</h2>;

  return (
    <div className="container">
      <h2>Welcome {user.fullName}</h2>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      <p>College: {user.college}</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
