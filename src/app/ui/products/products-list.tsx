
import {Product} from "@/app/lib/definitions";
import {useState} from "react";
import Image from "next/image";
  
  export default function ProductsList({ company, query }: { company: string; query: string;}) {

      const [products, setProducts] = useState([])

    fetch(`http://gastonmiguel.ddns.net/api/demo/products${query}`).then(response => response.json())
        .then(json => setProducts(json))



    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product : Product) => (
              <div key={product.id} className="group relative">
                  <Image src="/product.jpg"
                         alt={product.description}
                         width = "100"
                         height = "200"
                         className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                  />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={`/${company}/products/${product.slug}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.sku}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  