//import { CARD_LOGO } from "../utils/Constants";

import { CARD_LOGO } from "../utils/Constants";

const RestrauantCard = (props) => {
  const { name, costForTwo, cuisines, avgRating } = props.resData.info;
  return (
    <div className="res-card">
      <img
        src={CARD_LOGO + props.resData.info.cloudinaryImageId}
        className="res-image"
      />
      <h3>{name}</h3>
      <h5 className="temp">{costForTwo}</h5>
      <h5 className="temp">{cuisines.join(", ")}</h5>
      <h5 className="temp">Rating {avgRating}</h5>
    </div>
  );
};
export default RestrauantCard;
