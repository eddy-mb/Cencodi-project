"use client";
import { useRef } from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const form = useRef();
  const { register, handleSubmit, setValue } = useForm();

  const postData = (data) => {
    fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    form.current.reset();
  };

  return (
    <div className="flex flex-col items-center">
      <h1>FORMULARIO</h1>
      <form
        ref={form}
        onSubmit={handleSubmit(postData)}
        className="flex flex-col w-96 space-y-2">
        <label htmlFor="category"> Categoria</label>
        <input
          {...register("categoria")}
          id="category"
          type="text"
          placeholder="Categoria"
        />
        <label htmlFor="titulo">Titulo</label>
        <input
          id="titulo"
          type="text"
          placeholder="Titulo"
          {...register("titulo")}
        />
        <label htmlFor="descripcion">Descripcion</label>
        <input
          id="descripcion"
          type="text"
          placeholder="Descripcion"
          {...register("descripcion")}
        />
        <label htmlFor="imagen">Imagen</label>
        <input
          type="url"
          name="imagen"
          id="imagen"
          {...register("imagen")}
        />
        <button
          type="submit"
          className="bg-green-600 w-max px-2 py-1 rounded-full self-center">
          Crear datos
        </button>
      </form>
    </div>
  );
}
