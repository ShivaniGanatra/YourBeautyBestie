import "./AsideShade.scss"

type AsideShadeProps = {
  color: {
    hex_value: string;
    colour_name: string;
    brightness: number;
    min: number;
    max: number;
  };
  setDepth?: (depth: string) => void
  setMinimumDepth?: (depth: number) => void;
  setMaximumDepth?: (depth: number) => void;
};
const AsideShade = ({ color, setMinimumDepth, setMaximumDepth, setDepth}: AsideShadeProps) => {
  return (
    <button onClick={() => {
      setMinimumDepth?.(color.min);
      setMaximumDepth?.(color.max);
      setDepth?.(color.colour_name)
    }} style={{backgroundColor: color.hex_value}} className="AsideShade">
      {color.colour_name}
    </button>
  )
}

export default AsideShade
