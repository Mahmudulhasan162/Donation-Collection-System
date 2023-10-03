/* eslint-disable react/prop-types */


const DonatedCards = ({card}) => {
    const { picture, title, category, category_bg, card_bg, text_bg} = card || {};
    return (
      <div style={{background: card_bg}} className="card card-side bg-base-100 shadow-xl">
      <figure><img className=" h-full" src={picture} alt="Movie"/></figure>
      <div className="card-body">
      <h2 style={{color:text_bg,background: category_bg }} className="card-title w-max px-3 py-1 rounded">{category}</h2>
        <h2 className="card-title text-2xl font-semibold">{title}</h2>
        <p style={{color:text_bg}} className=" text-base font-semibold">$290.00</p>
        <div className="card-actions ">
          <button style={{background:text_bg}} className="text-lg font-semibold px-4 py-2 rounded text-white">View Details</button>
        </div>
      </div>
    </div>
    );
};

export default DonatedCards;