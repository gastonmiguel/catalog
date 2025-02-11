import ProductsFilters from "@/app/ui/products/products-filters";

export default async function Products(props: { params: Promise<{ company: string }> }) {
    const params = await props.params;
    const company = params.company;

    console.log(company);
    return (
        <>
            <ProductsFilters />
        </>
    )
}