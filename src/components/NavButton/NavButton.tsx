import "./NavButton.scss"

type NavButtonProps = {
    brand: string;
    value?: string;
    key?: string;
    setBrand?: (brand: string) => void;
}

const NavButton = ({ brand, value, key, setBrand }: NavButtonProps) => {
  const brandCapitalised = brand.charAt(0).toUpperCase() + brand.slice(1);
  return (
    <button className="NavButton" key={key} value={value} onClick={() => setBrand?.(value? value : "")}>
      {brandCapitalised}
    </button>
  )
}

export default NavButton
