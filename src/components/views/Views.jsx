import Image from "next/image";

export default function Views(request) {
  console.log(request);
  return (
    <div>
      <div className=" bg-white h-min p-2 rounded-lg space-y-1 w-80">
        <div>
          <Image
            className="rounded"
            src={request.imagen}
            width={500}
            height={500}
            alt="Imagen"
          />
        </div>
        <div className="flex justify-between w-full">
          <h2>{request.categoria} </h2>
          <h3>{request.titulo} </h3> <span>dispinible</span>
        </div>
        <p className="text-xs">{request.descripcion} </p>
        <button
          type="button"
          className="bg-green-400 w-auto px-2 py-1 rounded-full hover:bg-sky-400">
          Contactar Proveedor
        </button>
      </div>
    </div>
  );
}
