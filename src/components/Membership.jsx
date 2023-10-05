import { membership } from '../data';
const Membership = () => {
  return (
    <div className="memberships">
      <div className="main-membership">
          <img src={membership.image} alt="Membership" />
        <div className="main-membership-info">
          <h1>Membership Program</h1>
          <p>Be a Vape Pi member and get our special exclusive offers</p>
          <a href="#">View</a>
        </div>
      </div>
      <div className="other-memberships">
      <div className="secondary-membership">
        <img src="./shopdoora/transparent-vape.png" alt="Transparent" />
        <div className="secondary-membership-info">
            <div className="secondary-membership-name">
                <div className="secondary-membership-title">
                    Devices
                </div>
                <div className="secondary-membership-content">
                    Find the best for you here
                </div>
            </div>
            <div className="secondary-membership-button">
                &gt;
            </div>
        </div>
      </div>
      <div className="final-memberships">
        <div className="final-membership">
        <img src="./shopdoora/bigvape.png" alt="Transparent" />
        <div className="final-membership-info">
            <div className="final-membership-name">
                <div className="final-membership-title">
                    Devices
                </div>
                <div className="final-membership-content">
                    Find the best for you here
                </div>
            </div>
            <div className="final-membership-button">
                &gt;
            </div>
        </div>
        </div>
        <div className="final-membership">
        <img src="./shopdoora/bigvape2.png" alt="Transparent" />
        <div className="final-membership-info">
            <div className="final-membership-name">
                <div className="final-membership-title">
                    Devices
                </div>
                <div className="final-membership-content">
                    Find the best for you here
                </div>
            </div>
            <div className="final-membership-button">
                &gt;
            </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Membership;
