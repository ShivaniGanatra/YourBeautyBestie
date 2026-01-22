import "./MakeupCard.scss"

type MakeupCardProps = {
  makeupData?: object[];
  name: string;
  key: number;
  description: string;
  price: string;
  image_link: string;
  currency: string;
};

const MakeupCard = ({ name, description, price, image_link, currency }: MakeupCardProps) => {

  return (
    <div className="makeup-card">
      <img className="makeup-card_image" src={image_link} alt="api featured image" />
      <h1 className="makeup-card_title">{name}</h1>
      <p className="makeup-card_price">{currency}{price}</p>
      <section className="makeup-card_colours">
        Colours
      </section>
      <section className="makeup-card_description">{description}</section>
    </div>
  )
}

export default MakeupCard
