import Home from './pages/Home';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-white shadow p-4 text-2xl font-bold text-center">
        ToDo List
      </header>
      <main className="max-w-xl mx-auto p-4">
        <Home />
      </main>
    </div>
  );
}
