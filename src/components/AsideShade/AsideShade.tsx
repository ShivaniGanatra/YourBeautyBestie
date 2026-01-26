import "./AsideShade.scss"

type AsideShadeProps = {
  color: {
    hex_value: string;
    colour_name: string;
    brightness: number;
    min: number;
    max: number;
  };
};
const 
AsideShade = ({ color }: AsideShadeProps) => {
  return (
    <button style={{backgroundColor: color.hex_value}} className="AsideShade">
      {` Color = ${color.colour_name} $ (Brightness: ${color.brightness}, Min: ${color.min}, Max: ${color.max})`}
    </button>
  )
}

export default AsideShade
