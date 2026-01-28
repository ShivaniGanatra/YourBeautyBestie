import NavButton from "../../components/NavButton/NavButton";
import "./Navigation.scss"

type NavigationProps = {
  makeupData?: object[];
  setBrand?: (brand: string) => void;
};

const Navigation = ({ makeupData, setBrand }: NavigationProps) => {
  const makeuppBrands = makeupData?.map((product: any) => product.brand);
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
    </nav>
  )
}

export default Navigation

