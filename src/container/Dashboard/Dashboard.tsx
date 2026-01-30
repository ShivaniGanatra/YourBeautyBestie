import MakeupCard from "../../components/MakeupCard/MakeupCard"
import "./Dashboard.scss"
import { getBrightness } from "../../functions";
import type { Product, ShadeInterface } from "../../interfaces";

type DashboardProps = {
 makeupData: Product[];
 minimumDepth: number;
 maximumDepth: number;
 brand?: string;
};


const Dashboard = ({ makeupData, minimumDepth, maximumDepth, brand }: DashboardProps) => {

  const makeupDataWithBrightnessValues = makeupData.map((makeupItem: Product) => {
    const productColorsWithBrightness = makeupItem.product_colors.map((color: ShadeInterface) => {
      const brightness = getBrightness(color.hex_value);
      return { ...color, brightness };
    });
    return { ...makeupItem, product_colors: productColorsWithBrightness };
  });

  const filteredMakeupData = makeupDataWithBrightnessValues.filter((makeupItem: Product):Product[] => {
    makeupItem.product_colors = makeupItem.product_colors.filter((color: any) => {
      return color.brightness >= minimumDepth && color.brightness <= maximumDepth;
    });
    return [];
  }).filter((makeupItem => makeupItem.product_colors.length > 0)).filter((makeupItem: Product) => {
    if (!brand || brand === "") {
      return []; 
    }
    return makeupItem.brand === brand;
  });

  return (
    <section className="Dashboard">
      {filteredMakeupData.length
        ? filteredMakeupData.map((makeupItem) => (
        <MakeupCard 
        key={makeupItem.id} 
        name={makeupItem.name} 
        description={makeupItem.description} 
        price={makeupItem.price} 
        image_link={makeupItem.image_link}
        brand={makeupItem.brand}
        product_colors={makeupItem.product_colors}
        />
      ))
      : "No products match your criteria."}
    </section>

  )
}

export default Dashboard
