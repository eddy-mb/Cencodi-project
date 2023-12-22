"use client";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Form from "./Form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HomeCard() {
  const { register, handleSubmit } = useForm();
  const [item, setItem] = useState([]);
  const router = useRouter();
  const getById = (data) => {
    router.push(`/views/${data.id}`);
  };

  useEffect(() => {
    fetch(`/api`, {
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
    <section className="w-5/6">
      <div className="flex flex-wrap">
        {item.map((res) => (
          <div
            key={res.id}
            className=" bg-white h-min p-2 rounded-lg space-y-1 w-80">
            <div>
              <Image
                className="rounded"
                src={res.imagen}
                width={500}
                height={500}
                alt="Imagen"
              />
            </div>
            <div className="flex justify-between w-full">
              <h2>{res.categoria} </h2>
              <h3>{res.titulo} </h3> <span>dispinible</span>
            </div>
            <p className="text-xs">{res.descripcion} </p>
            <button
              type="button"
              className="bg-green-400 w-auto px-2 py-1 rounded-full hover:bg-sky-400">
              Contactar Proveedor
            </button>
            <span>ID: {res.pk}</span>
          </div>
        ))}
      </div>

      <div className="flex space-x-10 justify-center">
        <Form />
        <div>
          <form
            onSubmit={handleSubmit(getById)}
            className="flex flex-col space-y-2">
            <label htmlFor="buscar">Buscar por ID</label>
            <input
              {...register("id")}
              type="text"
              placeholder="Ingrese el id"
            />
            <button
              type="submit"
              className="bg-green-500 rounded-full p-1">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
