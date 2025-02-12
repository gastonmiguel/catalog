import Link from "next/link";

export default function Index() {

    return (
        <>
            <h1>Products</h1>
            <p className="mt-1 truncate text-xs/5 text-gray-500">
                <Link
                    href={`/demo/products`}
                    className="rounded-md border p-2 hover:bg-gray-100"
                >
                    Productos
                </Link>
            </p>
        </>
    )
}