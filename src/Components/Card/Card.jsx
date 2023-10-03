/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const Card = ({card}) => {
    const {id, picture, title, category, category_bg, card_bg, text_bg} = card || {};
    return (
        <Link to={`/cards/${id}`}>
        <div style={{background: card_bg}} className="card card-compact shadow-xl">
  <figure><img src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 style={{color:text_bg,background: category_bg }} className="card-title w-max px-3 py-1 rounded">{category}</h2>
    <p className=" text-xl font-semibold" style={{color:text_bg}}>{title}</p>
  </div>
</div>
        </Link>
    );
};

export default Card;