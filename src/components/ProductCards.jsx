import { productCards } from '../data';
const ProductCards = () => {
  return (
    <div className="cards-container">
        <div className="cards-header">
            <h1><span>New</span>Released</h1>
            <h3>Try Our Latest Flavors Here</h3>
        </div>
      <div className="product-cards">
        {productCards.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="product-card-info">
              <div className="product-card-name">
                Strawberry Yogurt with Refreshing Flavor Nic 3 Percent
              </div>
            <div className="product-card-price">
                30,000 MMK
            </div>
            </div>
            <div className="product-card-image">
              <img src={item.image} alt="Strawberry Vape" />
            </div>
          </div>
        ))}
      </div>
      <div className="view-more-button">
            <a className="button" href="#">View More &gt;</a>
        </div>
    </div>
  );
};

export default ProductCards;
