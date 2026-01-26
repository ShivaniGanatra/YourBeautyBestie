import "./AsideShade.scss"

type AsideShadeProps = {
  color: {
    hex_value: string;
    colour_name: string;
  };
};
const AsideShade = ({ color }: AsideShadeProps) => {
  return (
    <div style={{backgroundColor: color.hex_value}} className="AsideShade">
      {color.colour_name}
    </div>
  )
}

export default AsideShade
