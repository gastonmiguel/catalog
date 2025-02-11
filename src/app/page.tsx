import { Suspense } from "react";
import CompaniesList from "./ui/home/companies-list";
import SkeletonList from "./ui/home/skeleton-list";

export default async function Home() {

  return (
      <>
        <h1>ups! No hemos encontrado su vendedor, por favor seleecione uno de la lista</h1>
        <Suspense fallback={<SkeletonList />}>
          <CompaniesList />
        </Suspense>
      </>
  );
}
