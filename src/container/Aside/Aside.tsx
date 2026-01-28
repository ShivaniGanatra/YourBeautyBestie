import AsideShade from "../../components/AsideShade/AsideShade"
import "./Aside.scss"
import { getBrightness } from "../../functions/geGetColourDepth";

type AsideProps = {
  makeupData?: any[];
  setMinimumDepth?: (depth: number) => void;
  setMaximumDepth?: (depth: number) => void;
  setDepth?: (depth: string) => void;
};  

const Aside = ({ makeupData,setMinimumDepth,setMaximumDepth, setDepth }: AsideProps) => {
  const haloLiquidFoundation = makeupData?.[19];

  // This funtion will use the Halo Liquid Foundation which will have 5 different shades
  // It will map through the product colors and get the brightness for each color using getBrightness function

  const colorsWithBrightness = haloLiquidFoundation?.product_colors?.map((color: any) => {
  const brightness = getBrightness(color.hex_value);
  return { ...color, brightness};
  });
  
  console.log(colorsWithBrightness);
  // This function will add min and max brightness values for each shade based on the colour_name

  const coloursWithMinMax = colorsWithBrightness?.map((color: any) => {
    let min = 0;
    let max = 0;
    if (color.colour_name === "1") {
      min = 225;
      max = 255;
      color.colour_name = "Light shades";

    } else if (color.colour_name === "3") {
      min = 203;
      max = 224;
      color.colour_name = "Light Medium shades";

    } else if (color.colour_name === "4") {
      min = 150;
      max = 202;
      color.colour_name = "Medium shades";
    } else if (color.colour_name === "9") {
      min = 90;
      max = 149;
      color.colour_name = "Medium Deep shades";
    } else if (color.colour_name === "10") {
      min = 0;
      max = 89;
      color.colour_name = "Deep shades";
    }
    return { ...color, min, max };
    });

    // Adding an extra button to revert back to original state
  coloursWithMinMax?.unshift({hex_value: '#c2f0ff', colour_name: 'All shades', brightness: 228, min: 0, max: 255})

  return (
    <section className="Aside">
        {coloursWithMinMax?.map((color: any) => 
        <AsideShade setDepth={setDepth} setMinimumDepth={setMinimumDepth} setMaximumDepth={setMaximumDepth} key={color.colour_name} color={color}/>)}
    </section>
  )
}

export default Aside
