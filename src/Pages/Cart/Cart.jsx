import { useEffect, useState } from "react";
import Navbar from "../../Layouts/Navbar";
import CartDetails from "./CartDetails";

const Cart = () => {
  const [card, setCard] = useState([]);
  const [noFound, setNoFound] = useState("");
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    const getTicket = JSON.parse(localStorage.getItem("ticket"));
    if (getTicket) {
      setCard(getTicket);
    } else {
      setNoFound("No Data Found.");
    }
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      {noFound && (
        <div className="container mx-auto h-screen flex flex-col items-center justify-center">
          <h1 className="text-6xl">{noFound}</h1>
        </div>
      )}

      <div className="container mx-auto my-20 flex flex-col">
        {card.slice(0, dataLength).map((card) => (
          <CartDetails key={card.id} card={card}></CartDetails>
        ))}
      </div>
      {card.length >= 5 && (
        <div className={dataLength === card.length ? "hidden" : ""}>
          <div className="text-center">
            <button
              className="px-5 py-3 text-white bg-violet-500 rounded-lg text-xl mt-10"
              onClick={() => setDataLength(card.length)}
            >
              Show All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
