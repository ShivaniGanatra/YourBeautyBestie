import { getBrightness } from "../../functions/geGetColourDepth";
import Shade from "../Shade/Shade";
import "./ShadeSection.scss"
type ShadeSectionProps = {
    product_colors: { hex_value: string;
    colour_name: string }[];
};

const ShadeSection = ({ product_colors }: ShadeSectionProps) => {
    
    return (
        <div className="shade-section">
            <p className="shade-section_title">Shade range - {product_colors.length} shades</p>
            <section className="shade-section_area"> 
                {product_colors.map((color,index)=> (
                    // breakdown: pass brightness as prop to Shade component
                    // calculate brightness using getBrightness function
                    //and then convert to string and slice to 3 characters
                    <Shade key={color.colour_name + index} color={color.hex_value} colour_name={color.colour_name} brightness={getBrightness(color.hex_value)}/>)
                )}
            </section>
        </div>
    );
};

export default ShadeSection;