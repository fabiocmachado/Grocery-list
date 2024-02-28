"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FormatedList } from "../Lib/definitions";

async function fetchProducts() {
  const res = await fetch("http://localhost:3333/list");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

interface ProductTableProps {
  products: FormatedList[];
}

function ProductTable({ products }: ProductTableProps) {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr className="px-6 py-3">
          <th>Produto</th>
          <th>Seção</th>
        </tr>
      </thead>
      <tbody>
        {products?.map((product) => (
          <tr
            key={product.product}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {product.product}
            </td>
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {product.section}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function List() {
  const [products, setProducts] = useState<FormatedList[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <main>
      <section className="w-full">
        <div className="text-gray-500">
          <h1>Hello, List page!</h1>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          {products.length > 0 ? (
            <ProductTable products={products} />
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div>
          <button
            type="button"
            className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          >
            <Link href="/add">Adicionar produto</Link>
          </button>
        </div>
      </section>
    </main>
  );
}
