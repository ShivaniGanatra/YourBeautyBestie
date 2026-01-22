import "./MakeupCard.scss"

const MakeupCard = () => {

  return (
    <div className="makeup-card">
      <img src="" alt="api featured image" />
      <h1 className="makeup-card_title">Colourpop - No filter foundation </h1>
      <p className="makeup-card_price">$ - 12.0</p>
      <section className="makeup-card_colours">
        Colours
      </section>
      <section className="makeup-card_description">Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed 
        do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis 
        nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. </section>
    </div>
  )
}

export default MakeupCard
