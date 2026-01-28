import ShadeSection from '../ShadeSection/ShadeSection';
import './MakeupCard.scss';

type MakeupCardProps = {
  name: string;
  key: number;
  description: string;
  price: string;
  image_link: string;
  brand: string;
  product_colors: { 
    hex_value: string;
     colour_name: string }[];
};

const MakeupCard = ({ name, description, price, image_link, brand, product_colors }: MakeupCardProps) => {
  return (
    <div className="makeup-card">
      <div className="makeup-card_brand">{brand} - £{price}</div>
      <div className="makeup-card_image-container">
        <img className="makeup-card_image" src={image_link} alt="api featured image" />
      </div>
      <h1 className="makeup-card_title">{name}</h1>
      <section className="makeup-card_colours">
        {product_colors.length > 1 ? (<ShadeSection product_colors={product_colors} />) : ("No shade range information available")}
      </section>
      <section className="makeup-card_description">{description}</section>
    </div>
  )
}

export default MakeupCard
