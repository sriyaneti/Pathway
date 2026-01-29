import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState<any>(null);

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
          Authorization: `Bearer ${tokenResponse.access_token}`,
        },
      });

      const userInfo = await res.json();
      setUser(userInfo);
    },
    onError: () => alert("Login Failed"),
  });

  return (
    <div className="page">
      <nav className="navbar">
        <div className="nav-left">Pathway</div>

        <div className="nav-right">
          <a href="#">Testimonials</a>

          {user ? (
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img src={user.picture} width={32} style={{ borderRadius: "50%" }} />
              <span>{user.name}</span>
            </div>
          ) : (
            <>
              <a href="#">Sign Up</a>
              <button className="login-btn" onClick={() => login()}>
                Login
              </button>
            </>
          )}
        </div>
      </nav>

      <main className="hero">
        <h1>PATHWAY</h1>

        {!user && (
          <button className="cta-btn" onClick={() => login()}>
            sign in
          </button>
        )}

        {user && <p style={{ color: "white" }}>Welcome, {user.given_name}</p>}
      </main>
    </div>
  );
}
