import NavButton from "../../components/NavButton/NavButton";
import "./Navigation.scss"

type NavigationProps = {
  makeupData?: object[];
};

const Navigation = ({ makeupData }: NavigationProps) => {
  console.log(makeupData);

  const makeuppBrands = makeupData?.map((product: any) => product.brand);
  console.log(makeuppBrands);

  const noRepeatedBrands = [...new Set(makeuppBrands)];
  const noNullandNoRepeatedBrands = noRepeatedBrands.filter((brand) => brand !== null);
  console.log(noNullandNoRepeatedBrands);

  return (
    <nav className="Navigation">
      {noNullandNoRepeatedBrands?.map((brand, index) => (
        <NavButton key={index} brand={brand} />
      ))}
    </nav>
  )
}

export default Navigation

