

const DonatedCards = ({card}) => {
    const {id, picture, title, category, category_bg, card_bg, text_bg} = card || {};
    return (
        <div className="rounded-xl" >
            <div style={{background: card_bg}} className="relative flex max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0  shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={picture}
      alt="image"
      className=" md:w-full md:h-full object-cover"
    />
  </div>
  <div className="p-6">
    <h6 className="mb-4 w-max px-3 block font-sans text-sm font-normal leading-relaxed tracking-norma antialiased" style={{color: text_bg,background: category_bg}}>
      {category}
    </h6>
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {title}
    </h4>
    <h6 className="mb-4 block font-sans text-lg font-semibold leading-relaxed tracking-norma antialiased" style={{color: text_bg}}>
      $290
    </h6>
    <a className="inline-block" href="#">
      <button
       className="text-white text-lg font-semibold px-4 py-2 rounded" style={{background: text_bg}}
        type="button"
      >
        View Details
      </button>
    </a>
  </div>
</div>
        </div>
    );
};

export default DonatedCards;