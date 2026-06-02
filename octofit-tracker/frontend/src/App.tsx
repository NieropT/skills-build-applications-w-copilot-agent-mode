import { Routes, Route, Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container py-5">
      <h1 className="mb-4">OctoFit Tracker</h1>
      <p className="lead">
        Modern multi-tier fitness tracking with React, Vite, and MongoDB.
      </p>
      <Link to="/dashboard" className="btn btn-primary">
        View Dashboard
      </Link>
    </div>
  );
}

function DashboardPage() {
  return (
    <div className="container py-5">
      <h1 className="mb-4">Dashboard</h1>
      <p>Track workouts, teams, and progress with OctoFit.</p>
      <Link to="/" className="btn btn-outline-secondary">
        Back to Home
      </Link>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
