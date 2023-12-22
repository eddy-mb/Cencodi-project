"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ViewsPage({ params }) {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`/api/${params.id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((obj) => {
        const data = obj.data;
        setItem(data);
      });
  }, []);

  return (
    <div className=" bg-white h-min p-2 rounded-lg space-y-1 w-80">
      <div>
        <Image
          className="rounded"
          src={item.imagen}
          width={500}
          height={500}
          alt="Imagen"
        />
      </div>
      <div className="flex justify-between w-full">
        <h2>{item.categoria} </h2>
        <h3>{item.titulo} </h3> <span>dispinible</span>
      </div>
      <p className="text-xs">{item.descripcion} </p>
      <button
        type="button"
        className="bg-green-400 w-auto px-2 py-1 rounded-full hover:bg-sky-400">
        Contactar Proveedor
      </button>
    </div>
  );
}
