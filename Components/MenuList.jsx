const MenuList = (props) => {
  const { resMenu } = props;
  const { name, price,description , imageId } = resMenu.card.info;
  // console.log( 100 || resMenu.card.info.variantsV2.pricingModels[0].price);
  return (
    <div className="container10">
      <div className="menuDetails">
        <h2>Restaurant Name: {name}</h2>
        <h3>Price: Rs {price / 100 || 100}</h3>
        <h4>{description || "This is my description "}</h4>
      </div>
      <div className="menuImage">
        <img className="menuImageNew"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
            imageId 
          }
          alt="MenuImage"
        />
      </div>
    </div>
  );
};

export default MenuList;
