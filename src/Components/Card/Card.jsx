/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const Card = ({card}) => {
    const {id, picture, title, category, category_bg, card_bg, text_bg} = card || {};
    return (
        <Link to={`/cards/${id}`}>
        <div  className=" rounded-lg">
            <div style={{background: card_bg}} className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
            <img
            src={picture}
            alt="ui/ux review check"
    />
  </div>
  <div className="px-6 py-4">
    <h4 style={{color:text_bg,background: category_bg }} className="px-3 py-1 w-max rounded-lg font-medium text-xm">
      {category}
    </h4>
</div>
 <div className="px-6 pb-4">
    <h2 style={{color:text_bg}} className=" font-medium text-xl">
      {title}
    </h2>
  </div>
        </div>
        </div>
        </Link>
    );
};

export default Card;