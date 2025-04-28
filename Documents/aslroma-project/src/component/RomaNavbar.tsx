
import sponsorPremiumLogo from "../assets/sponsorPremiumLogo.png";
import { romaNavbarList } from "../utils/data";

const RomaNavbar = () => {
  return (
    <div className="Navbar">
        <div className="first-row">
            <div className="first-row-right">
                <div className="sponsor-premium-logo">
                    <img loading="lazy" className="asr-sponsors__premium-item-image" 
                    src="https://media.asroma.com/prod/images/gm_list_thumbnail/8c40564ecd73-riyadh-season-horizontal-white.png" 
                    alt="Riyadh Season"></img>
                    
                </div>
            </div>
        </div>
        <div className="second-row">
            <div className="second-row-left">
                {romaNavbarList.map((element) => (
            <div>{element.text}</div>
          ))}
            </div>
            <div className="second-row-right"></div>
        </div>
    </div>
  );
};
export default RomaNavbar;