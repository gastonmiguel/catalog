import { getData } from "@/app/lib/data"
import { Company } from "@/app/lib/definitions"
import Link from "next/link";
import Image from "next/image";

export default async function CompaniesList() {

    const companies: Company[] = await getData('/companies');

    return (
      <ul role="list" className="divide-y divide-gray-100">
        {companies.map((company) => (
          <li key={company.slug} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
                <Image src="/product.jpg"
                       alt="Image"
                       width = "100"
                       height = "100"
                       className="size-12 flex-none rounded-full bg-gray-50"
                />

              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">{company.name}</p>
                <p className="mt-1 truncate text-xs/5 text-gray-500">
                    <Link
                        href={`/${company.slug}`}
                        className="rounded-md border p-2 hover:bg-gray-100"
                        >
                        Entrar
                        </Link>
                    </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    )
}
  