import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function FacultyRegister() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    role: "hospital",
    facilityType: "hospital",
    name: "",
    email: "",
    password: "",
    phone: "",
    emergencyContact: "",
    registrationNumber: "",
    facilityCategory: "Private",
    address: {
      street: "",
      city: "",
      state: "",
      pincode: "",
    },
    documents: {
      registrationProof: {
        url: "",
      },
    },
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [name]: value,
      },
    }));
  };

  const handleDocumentChange = (e) => {
    const { value } = e.target;

    setFormData((prev) => ({
      ...prev,
      documents: {
        ...prev.documents,
        registrationProof: {
          ...prev.documents.registrationProof,
          url: value,
        },
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const payload = {
      role: formData.facilityType,
      facilityType: formData.facilityType,
      name: formData.name.trim(),
      email: formData.email.trim(),
      password: formData.password,
      phone: formData.phone.trim(),
      emergencyContact: formData.emergencyContact.trim(),
      registrationNumber: formData.registrationNumber.trim(),
      facilityCategory: formData.facilityCategory,
      address: {
        street: formData.address.street.trim(),
        city: formData.address.city.trim(),
        state: formData.address.state.trim(),
        pincode: formData.address.pincode.trim(),
      },
      documents: {
        registrationProof: {
          url: formData.documents.registrationProof.url.trim(),
        },
      },
    };

    try {
      setLoading(true);

      const response = await fetch("https://blood-donation-backend-694682083942.asia-south1.run.app/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      let data = {};
      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (!response.ok) {
        console.error("Facility register error:", data);
        throw new Error(data.error || data.message || "Registration failed");
      }

      setSuccess(data.message || "Facility registered successfully");

      setTimeout(() => {
        navigate("/login");
      }, 1200);
    } catch (err) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Register as Facility</h2>
        <p style={styles.subtitle}>Create your hospital or blood bank account</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.grid}>
            <div style={styles.field}>
              <label style={styles.label}>Facility Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter facility name"
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Facility Type</label>
              <select
                name="facilityType"
                value={formData.facilityType}
                onChange={handleChange}
                style={styles.input}
                required
              >
                <option value="hospital">Hospital</option>
                <option value="blood-lab">Blood Lab</option>
              </select>
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Phone</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Emergency Contact</label>
              <input
                type="text"
                name="emergencyContact"
                placeholder="Enter emergency contact"
                value={formData.emergencyContact}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Registration Number</label>
              <input
                type="text"
                name="registrationNumber"
                placeholder="Enter registration number"
                value={formData.registrationNumber}
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Facility Category</label>
              <select
                name="facilityCategory"
                value={formData.facilityCategory}
                onChange={handleChange}
                style={styles.input}
              >
                <option value="Government">Government</option>
                <option value="Private">Private</option>
                <option value="Trust">Trust</option>
                <option value="Charity">Charity</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <h3 style={styles.sectionTitle}>Address</h3>

          <div style={styles.grid}>
            <div style={styles.field}>
              <label style={styles.label}>Street</label>
              <input
                type="text"
                name="street"
                placeholder="Enter street"
                value={formData.address.street}
                onChange={handleAddressChange}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>City</label>
              <input
                type="text"
                name="city"
                placeholder="Enter city"
                value={formData.address.city}
                onChange={handleAddressChange}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>State</label>
              <input
                type="text"
                name="state"
                placeholder="Enter state"
                value={formData.address.state}
                onChange={handleAddressChange}
                style={styles.input}
                required
              />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Pincode</label>
              <input
                type="text"
                name="pincode"
                placeholder="Enter pincode"
                value={formData.address.pincode}
                onChange={handleAddressChange}
                style={styles.input}
                required
              />
            </div>
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Registration Proof URL</label>
            <input
              type="text"
              name="registrationProofUrl"
              placeholder="Enter document URL"
              value={formData.documents.registrationProof.url}
              onChange={handleDocumentChange}
              style={styles.input}
              required
            />
          </div>

          {error ? <p style={styles.error}>{error}</p> : null}
          {success ? <p style={styles.success}>{success}</p> : null}

          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Registering..." : "Register Facility"}
          </button>
        </form>

        <p style={styles.footerText}>
          Already have an account?{" "}
          <Link to="/login" style={styles.link}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f8fafc",
    padding: "24px",
  },
  card: {
    maxWidth: "900px",
    margin: "0 auto",
    background: "#ffffff",
    padding: "32px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  },
  title: {
    margin: 0,
    fontSize: "30px",
    fontWeight: "700",
    color: "#111827",
  },
  subtitle: {
    marginTop: "8px",
    marginBottom: "24px",
    color: "#6b7280",
  },
  sectionTitle: {
    marginTop: "8px",
    marginBottom: "16px",
    fontSize: "20px",
    color: "#111827",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "16px",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#374151",
  },
  input: {
    padding: "12px 14px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    fontSize: "15px",
    outline: "none",
  },
  button: {
    marginTop: "8px",
    padding: "12px 16px",
    borderRadius: "10px",
    border: "none",
    background: "#dc2626",
    color: "#ffffff",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
  },
  error: {
    margin: 0,
    color: "#dc2626",
    fontSize: "14px",
  },
  success: {
    margin: 0,
    color: "#16a34a",
    fontSize: "14px",
  },
  footerText: {
    marginTop: "20px",
    color: "#6b7280",
  },
  link: {
    color: "#dc2626",
    textDecoration: "none",
    fontWeight: "600",
  },
};

export default FacultyRegister;