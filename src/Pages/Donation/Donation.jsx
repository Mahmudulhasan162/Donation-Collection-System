import { useEffect, useState } from "react";
import DonatedCards from "../../Components/DonatedCards/DonatedCards";


const Donation = () => {
const [donation, setDonation] =useState();
const [noFound, setNoFound] =useState(false);
 const [isShow,setIsShow] = useState(false)

useEffect(()=>{

    const Donation = JSON.parse(localStorage.getItem("donations"));
    if(Donation){
    setDonation(Donation);
    }else{
        setNoFound(<div className="flex justify-center items-center my-16">
            <h1 className=" text-3xl md:text-5xl font-bold">No Donation Yet😥</h1>
        </div>)
    }

},[])

    return (
        <div>
            {
                noFound? <p>{noFound}</p> : <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
                        {
                           isShow? donation?.map( card => <DonatedCards key={card.id} card={card}></DonatedCards>)
                           : donation?.slice(0,4).map( card => <DonatedCards key={card.id} card={card}></DonatedCards>)
                        }
                    </div>
                    {
                        donation?.length > 4 && <button onClick={()=> setIsShow(!isShow)} className="text-white rounded-lg px-4 py-2 bg-[#009444] flex mb-16 mx-auto" >{isShow?  '': "See All"}</button>
                    }
                </div>
            }
        </div>
    );
};

export default Donation;