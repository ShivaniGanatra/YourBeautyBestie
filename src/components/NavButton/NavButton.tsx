import "./NavButton.scss"

type NavButtonProps = {
    brand: string;
}

const NavButton = ({ brand }: NavButtonProps) => {
  return (
    <button className="NavButton">
      {brand}
    </button>
  )
}

export default NavButton
