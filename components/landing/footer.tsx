export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="text-xl font-bold mb-4">
          <span className="text-white">PEDRO</span>
          <span className="text-blue-400">CONVOS</span>
        </div>
        <p className="text-slate-400 text-sm mb-2">
          © {new Date().getFullYear()} Pedro Convos. Todos os direitos
          reservados.
        </p>
        <p className="text-slate-500 text-xs">
          Metodo Exclusivo de Ensino One a One.
        </p>
      </div>
    </footer>
  )
}
