import { getData } from "@/app/lib/data"
import { Company } from "@/app/lib/definitions"
import Link from "next/link";

export default async function CompaniesList() {

    const companies: Company[] = await getData('/companies');

    return (
      <ul role="list" className="divide-y divide-gray-100">
        {companies.map((company) => (
          <li key={company.slug} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" className="size-12 flex-none rounded-full bg-gray-50" />
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
  