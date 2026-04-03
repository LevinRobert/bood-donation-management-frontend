const API_BASE_URL = "https://blood-donation-backend-694682083942.asia-south1.run.app";

export const loginUser = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data;
};

export const getProfile = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_BASE_URL}/api/auth/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch profile");
  }

  return data;
};

export const registerDonor = async (donorData) => {
  const response = await fetch(`${API_BASE_URL}/api/donor/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(donorData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Registration failed");
  }

  return data;
};