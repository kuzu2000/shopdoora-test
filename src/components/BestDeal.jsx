import { bestDeals } from "../data"
const BestDeal = () => {
  return (
    <div className="bestDeals">
        <div className="bestDealsHeader">
            <h1>Best Deals</h1>
            <h3>Just For You</h3>
        </div>
        <div className="bestDealsItems">
            {bestDeals.map((item) => (
                <div className="bestDealsItem" key={item.id}>
                <div className="img-inner">
                    <img className="product-image" src={item.image} alt={item.name} />
                    <div className="bestDealsDiscount">{item.discount}% Off</div>
                </div>
                <div className="bestDealsInfo">
                    <div className="bestDealsName">{item.name}</div>
                    <div className="bestDealsCurrentPrice">{item.currentPrice.toLocaleString()} MMK</div>
                    <div className="bestDealsOriginalPrice">{item.originalPrice.toLocaleString()} MMK</div>
                    <div className="bestDealsPoints"><i className="fa fa-star"></i> {item.points} Points</div>
                </div>
            </div>
            ))}       
        </div>
        <div className="view-more-button">
            <a className="button" href="#">View More &gt;</a>
        </div>
    </div>
  )
}

export default BestDeal