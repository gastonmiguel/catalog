import ProductsFilters from "@/app/ui/products/products-filters";
import SkeletonList from "@/app/ui/home/skeleton-list";
import {Suspense} from "react";


export default async function Products(props: { params: Promise<{ company: string }> }) {

    const params = await props.params;
    const company = params.company;

    console.log(company);
    return (
        <>
            <Suspense key={company} fallback={<SkeletonList />}>
                <ProductsFilters company = {company} />
            </Suspense>
        </>
    )
}