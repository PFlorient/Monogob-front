import { Outlet, Link } from 'react-router';

export default function App() {
  return (
    <div className="text-green-500 text-xl">
      <nav className="p-4 space-x-4">
        <Link to="/">Accueil</Link>
        <Link to="/signUp">S&apos;inscrire</Link>
        <Link to="/rooms">Liste des salles</Link>
      </nav>
      <main className="p-8">
        <Outlet />
      </main>
    </div>
  );
}
