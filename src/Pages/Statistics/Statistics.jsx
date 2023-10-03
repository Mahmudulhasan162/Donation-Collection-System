import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";




const Statistics = () => {
    const cards = useLoaderData();
    const[donationLength, setDonationLength] = useState(0);
    const totalDonation = cards.length;


    useEffect(()=>{
        const storedLocalStorageData=JSON.parse(localStorage.getItem('donations'))
        if(storedLocalStorageData){
            setDonationLength(storedLocalStorageData.length);
        }
    },[])
    
    const percentageString = ((donationLength/totalDonation)*100).toFixed(1);
    const percentage = parseFloat(percentageString)
    const leftDonation = totalDonation-donationLength;
    const leftDonationPercentage =((leftDonation/totalDonation)*100).toFixed(1);
    const donation= parseFloat(leftDonationPercentage);
    console.log(percentage);
    console.log(donation);


   const data = [
    {name: `Your Donation`, value: percentage},
    {name: `Total Donation`, value: donation},
   ];

   const COLORS = ["#00C49F","#FF444A"]
   const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius =  innerRadius + (outerRadius - innerRadius) * 0.3;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text className="text-3xl font-bold text-center" x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="Central">
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};
    return (
        <div className="mb-14">
           <ResponsiveContainer width="100%" height={500}>
        <PieChart className="text-white">
          <Pie 
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
            label={renderCustomizedLabel}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend align="center" />
        </PieChart>
      </ResponsiveContainer>
        </div>
    );
};

export default Statistics;