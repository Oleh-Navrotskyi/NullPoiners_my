export default function App() {
  return (
      <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
        <div className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700 text-center max-w-md">
          <h1 className="text-3xl font-bold text-emerald-400 mb-2">Hacktoberfest Ready 🚀</h1>
          <p className="text-slate-400 mb-6">React + Vite + Tailwind працюють коректно.</p>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-emerald-500/20 active:scale-95">
            Тестова кнопка
          </button>
        </div>
      </div>
  );
}