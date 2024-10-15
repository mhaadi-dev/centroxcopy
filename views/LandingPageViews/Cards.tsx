// "use client"
// import React, { useState } from 'react';

// const Cards = () => {
//   const [activeCards, setActiveCards] = useState([1]); // Default to card 1

//   // Function to handle header tab clicks
//   const handleCardClick = (cardIndex:any) => {
//     // Create a new array of cards to be stacked based on the clicked tab
//     const newActiveCards = Array.from({ length: cardIndex }, (_, i) => i + 1);
//     setActiveCards(newActiveCards);
//   };

//   return (
//     <div className="container relative mx-auto w-[90%] bg-red-400 overflow-hidden ">
//       {/* Header */}
//       <div className="flex justify-around items-center border-b-2 border-gray-300 mb-6 text-white">
//         {['Card 1', 'Card 2', 'Card 3', 'Card 4'].map((card, index) => (
//           <div
//             key={index}
//             className={`relative px-4 py-2 cursor-pointer text-lg transition-colors duration-300 ${
//               activeCards.includes(index + 1) ? 'bg-blue-500 text-white' : 'hover:bg-yellow-300'
//             }`}
//             onClick={() => handleCardClick(index + 1)}
//           >
//             {card}
//             <div
//               className={`absolute bottom-0 left-0 h-1 w-full ${
//                 activeCards.includes(index + 1) ? 'bg-blue-500' : 'hover:bg-blue-500'
//               }`}
//             ></div>
//           </div>
//         ))}
//       </div>

//       {/* Cards */}
//       <ul className="list-none p-0  h-auto">
//         {[1, 2, 3, 4].map((cardIndex) => (
//           <li
//             key={cardIndex}
//             className={`card absolute top-0 w-full transition-transform duration-500 ${
//               activeCards.includes(cardIndex)
//                 ? `translate-y-[${(cardIndex - 1) * 30}rem] z-${cardIndex}`
//                 : 'translate-y-[30rem]'
//             }`}
//             style={{
//               zIndex: activeCards.includes(cardIndex) ? cardIndex : -1,
//               transform: `translateY(${(activeCards.indexOf(cardIndex) + 1) * 87}vh)`,
//             }}
//           >
//             <div
//               className={`card-body box-border p-8 rounded-[50px] shadow-[0_0_30px_0_rgba(0,0,0,0.3)] h-[87vh] flex justify-center items-center transition-all duration-500 ${
//                 cardIndex === 1
//                   ? 'bg-[#52B2CF]'
//                   : cardIndex === 2
//                   ? 'bg-[#E5A36F]'
//                   : cardIndex === 3
//                   ? 'bg-[#9CADCE]'
//                   : 'bg-[#D4AFB9]'
//               }`}
//             >
//               <h2 className="text-4xl">Card {cardIndex}</h2>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Cards;
