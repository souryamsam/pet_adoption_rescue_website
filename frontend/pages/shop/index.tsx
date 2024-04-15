import { queryGetSpeciesWithProducts } from "@/gql/queries";
import { QueryGetSpeciesWithProducts } from "@/gql/query-types";
import { linkContainer, shop } from "@/styles/home";
import { useQuery } from "@apollo/client";
import Link from "next/link";

export default function Shop() {
  const { data } = useQuery<QueryGetSpeciesWithProducts>(
    queryGetSpeciesWithProducts
  );
  const mapper = (
    spe: QueryGetSpeciesWithProducts["allSpecies"]["data"][0],
    index: number
  ) => {
    return (
      <Link key={index} href={`/shop/${spe.attributes.name}`}>
        {spe.attributes.name}
      </Link>
    );
  };
  return (
    <section className="page-wrapper" css={shop}>
      <h1 className="main-heading">Welcome To Pet Shopping World</h1>
      <div css={linkContainer}>{data?.allSpecies.data.map(mapper)}</div>
    </section>
  );
}
