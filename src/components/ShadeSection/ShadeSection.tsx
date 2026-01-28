import type { ShadeInterface } from "../../interfaces";
import Shade from "../Shade/Shade";
import "./ShadeSection.scss"
type ShadeSectionProps = {
    product_colors: ShadeInterface[];
};

const ShadeSection = ({ product_colors }: ShadeSectionProps) => {
    
    return (
        <div className="shade-section">
            <p className="shade-section_title">Shade range - {product_colors.length} shades</p>
            <section className="shade-section_area"> 
                {product_colors.map((color,index)=> (
                    <Shade key={color.colour_name + index} color={color.hex_value} colour_name={color.colour_name}/>)
                )}
            </section>
        </div>
    );
};

export default ShadeSection;