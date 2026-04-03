import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../utils/api";

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        setUser(data.user);
      } catch (err) {
        setError(err.message);

        if (
          err.message === "No token provided" ||
          err.message === "Token invalid or expired"
        ) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto" }}>
      <h2>Profile</h2>

      {user && (
        <div>
          <p><strong>Name:</strong> {user.fullName || "N/A"}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
          <p><strong>Blood Group:</strong> {user.bloodGroup || "N/A"}</p>
          <p><strong>Phone:</strong> {user.phone || "N/A"}</p>
          <p><strong>Gender:</strong> {user.gender || "N/A"}</p>
          <p><strong>Age:</strong> {user.age || "N/A"}</p>
        </div>
      )}

      <button onClick={handleLogout} style={{ marginTop: "20px", padding: "10px 16px" }}>
        Logout
      </button>
    </div>
  );
};

export default Profile;