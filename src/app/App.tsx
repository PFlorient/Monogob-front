import { Outlet, Link } from 'react-router';

export default function App() {
  return (
    <div>
      <nav className="p-4 space-x-4">
        <Link to="/">Accueil</Link>
        <Link to="/login">Connexion</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <main className="p-8">
        <Outlet />
      </main>
    </div>
  );
}
