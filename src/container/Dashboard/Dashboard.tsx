import MakeupCard from "../../components/MakeupCard/MakeupCard"
import "./Dashboard.scss"
import { getBrightness } from "../../functions/geGetColourDepth";

type DashboardProps = {
 makeupData: any[];
 minimumDepth: number;
 maximumDepth: number;
 brand?: string;
};


const Dashboard = ({ makeupData, minimumDepth, maximumDepth, brand }: DashboardProps) => {

  const makeupDataWithBrightnessValues = makeupData.map((makeupItem: any) => {
    const productColorsWithBrightness = makeupItem.product_colors.map((color: any) => {
      const brightness = getBrightness(color.hex_value);
      return { ...color, brightness };
    });
    return { ...makeupItem, product_colors: productColorsWithBrightness };
  });

  console.log(makeupDataWithBrightnessValues);

  const filteredMakeupData = makeupDataWithBrightnessValues.filter((makeupItem: any) => {
    makeupItem.product_colors = makeupItem.product_colors.filter((color: any) => {
      return color.brightness >= minimumDepth && color.brightness <= maximumDepth;
    });
    return makeupItem.product_colors.length > 0;
  }).filter((makeupItem: any) => {
    if (!brand || brand === "") {
      return true; // No brand filter applied
    }
    return makeupItem.brand === brand;
  });

  return (
    <section className="Dashboard">
      {filteredMakeupData.map((makeupItem) => (
        <MakeupCard 
        key={makeupItem.id} 
        name={makeupItem.name} 
        description={makeupItem.description} 
        price={makeupItem.price} 
        image_link={makeupItem.image_link}
        brand={makeupItem.brand}
        product_colors={makeupItem.product_colors}
        />
      ))}
    </section>

  )
}

export default Dashboard
