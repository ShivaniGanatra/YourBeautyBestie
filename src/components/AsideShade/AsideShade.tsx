import "./AsideShade.scss"

type AsideShadeProps = {
  color: {
    hex_value: string;
    colour_name: string;
    brightness: number;
    min: number;
    max: number;
  };
  setMinimumDepth?: (depth: number) => void;
  setMaximumDepth?: (depth: number) => void;
};
const AsideShade = ({ color, setMinimumDepth, setMaximumDepth }: AsideShadeProps) => {
  return (
    <button onClick={() => {
      setMinimumDepth?.(color.min);
      setMaximumDepth?.(color.max);
    }} style={{backgroundColor: color.hex_value}} className="AsideShade">
      {` Color = ${color.colour_name} $ (Brightness: ${color.brightness}, Min: ${color.min}, Max: ${color.max})`}
    </button>
  )
}

export default AsideShade
