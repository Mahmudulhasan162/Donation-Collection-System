const Banner = () => {
    return (
        <div className="my-20 text-center relative py-72"
        style={{backgroundImage: `linear-gradient(rgba(0, 0,0, 0.9), rgba(11, 127, 171, 0.6)),url('https://i.ibb.co/cbrbLgt/BV-Acharya-3.jpg')`,
    backgroundSize: 'cover', backgroundPosition: 'center',
    }}
        >
            <div style={{opacity: '100%'}} className="relative z-10">
            <p className="text-5xl font-bold text-black">I Grow By Helping People In Need</p>
            <div className="mt-5">
            <input className="border  py-3 px-3 rounded-s-lg" placeholder="Search Here" type="text" name="" id="" />
            <button className="rounded-e-lg bg-red-500 py-3 px-3 text-white">Search</button>
            </div>
            </div>
            
        </div>
    );
};

export default Banner;