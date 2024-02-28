"use client";

import { FormatedList } from "../Lib/definitions";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddForm = () => {
  const router = useRouter();

  const handleChange = (e: { target: { value: any; name: any } }) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState: FormatedList) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const startingList: FormatedList = {
    product: "",
    section: "",
  };

  const [formData, setFormData] = useState(startingList);

  const handleSubmit = async (e: { preventDefault: any }) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    const res = await fetch("http://localhost:3333/list", requestOptions);
    if (!res.ok) {
      throw new Error("Failed to add product");
    }

    router.refresh();
    router.push("/list");
  };

  return (
    <div className="flex justify-center">
      <form
        className=" flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <div>
          <h3>Add your product</h3>
        </div>
        <label>Product</label>
        <input
          id="product"
          name="product"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.product}
          placeholder="Product"
        ></input>
        <label>
          Section
          <select
            name="section"
            onChange={handleChange}
            required={true}
            value={formData.section}
          >
            <option value="" disabled selected hidden>
              Escolha uma seção
            </option>
            <option value="bebidas">Bebidas</option>
            <option value="comida">Comida</option>
            <option value="Higiene pessoal">Higiene pessoal</option>
            <option value="limpeza">Limpeza</option>
          </select>
        </label>
        <input type="submit" className="btn max-w-sm" value="Create product" />
      </form>
    </div>
  );
};

export default AddForm;
