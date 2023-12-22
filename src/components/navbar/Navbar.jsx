import Link from "next/link";
export default function Navbar() {
  const getTech = (e) => {
    fetch("", { method: "GET" });
  };
  return (
    <nav className="h-16 w-full flex bg-slate-200 space-x-4 px-10 items-center justify-around">
      <div className="flex items-center">
        <span className="text-red-600">L</span>OGO
      </div>

      <form className="flex rounded-full bg-slate-300">
        <div className="flex flex-col items-center">
          <select
            id="categorias"
            className="bg-slate-300 rounded-l-full p-2">
            <option value="1">Todo</option>
            <option value="1">Categoria 1</option>
            <option value="2">Categoria 2</option>
            <option value="3">Categoria 3</option>
            <option value="4">Categoria 4</option>
            <option value="5">Categoria 5</option>
          </select>
        </div>
        <input
          className="w-96 p-2"
          type="text"
          placeholder="Buscar servicios"
        />
        <button
          type="button"
          className="p-2">
          Buscar
        </button>
      </form>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <button className="rounded-full bg-slate-300 px-2 py-1">
          Registrarse
        </button>
        <button className="rounded-full bg-slate-300 px-2 py-1">
          Iniciar sesión
        </button>
      </div>
    </nav>
  );
}
