import NavButton from "../../components/NavButton/NavButton";
import type { Product } from "../../interfaces";
import "./Navigation.scss"

type NavigationProps = {
  makeupData?: Product[];
  setBrand?: (brand: string) => void;
  brand?: string;
  depth?: string
};

const Navigation = ({ makeupData, setBrand, brand, depth }: NavigationProps) => {
  const makeuppBrands = makeupData?.map((product: Product) => product.brand) ?? [];
  const noRepeatedBrands = [...new Set(makeuppBrands)];
  const noNullandNoRepeatedBrands = noRepeatedBrands.filter((brand) => brand !== null);
  const brandsToAnArray = [...noNullandNoRepeatedBrands];

  return (
    <nav className="Navigation">
      <section className="Navigation_buttons">
        <NavButton setBrand={setBrand} key="All Brands" brand="All Brands" value=""/>
        {brandsToAnArray?.map((brand:string) => (
        <NavButton setBrand={setBrand} key={brand} brand={brand} value={brand}/>))}
      </section>
      <section className="Navigation_descriptor">{depth} {brand? " in " + brand : " in all brands"}</section>
    </nav>
  )
}

export default Navigation

