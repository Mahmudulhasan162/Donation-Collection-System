import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {
    const {id} =useParams();
    const cards = useLoaderData();
    const [card, setCard] =useState();

    useEffect(()=>{

        const findCard = cards?.find(card => card.id== id);
        setCard(findCard);
    },[id,cards]);
    if(!card){
        return <div>loading</div>
    }
    const handleDonationDetails = () =>{
        
        const DonationArray =[];
        const Donations= JSON.parse(localStorage.getItem('donation'))

        if(!Donations){
            DonationArray.push(card)
            localStorage.setItem('donation',JSON.stringify(DonationArray))
        }else{
            const isExist = Donations.find(Card => Card.id ===id);

            if(!isExist){
            DonationArray.push(...Donations,card);
            localStorage.setItem('donation', JSON.stringify(DonationArray))
            }else{
                alert("Already Added")
            }
        }
    }
    return (
        <div className="relative" >
            <div className="relative">
                <div className="relative">
                <img className="mt-16" src={card.rectangle_img} alt="" />
                <div className=" relative bottom-32 left-0 w-full h-32 bg-black opacity-50">
                
                </div>
                <button style={{backgroundColor: card.text_bg}} className="text-white w-max px-6 py-4 text-xl font-semibold relative bottom-56 left-10" onClick={handleDonationDetails}>Donate $290</button>
                </div>
            </div>
            <div>
            <h1 className="text-5xl font-bold pb-5">{card.title}</h1>
            <p className="pb-10 text-[#0b0b0bb3]">{card.description}</p>
            </div>
        </div>
    );
};

export default CardDetails;