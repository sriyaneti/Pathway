export default function App() {
  return (
    <div className="page">
      <nav className="navbar">
        <div className="nav-left">Pathway</div>
        <div className="nav-right">
          <a href="#">Testimonials</a>
          <a href="#">Sign Up</a>
          <button className="login-btn">Login</button>
        </div>
      </nav>

      <main className="hero">
        <h1>PATHWAY</h1>
        <button className="cta-btn">sign in</button>
      </main>
    </div>
  );
}
