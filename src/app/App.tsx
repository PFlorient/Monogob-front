import { Outlet } from 'react-router';

export default function App() {
  return (
    <div className="text-green-500 text-xl">
      <main className="p-8">
        <Outlet />
      </main>
    </div>
  );
}
