import PropTypes from "prop-types";

const CartDetails = ({ card }) => {
  const { title, image, details } = card;
  return (
    <div className="bg-gray-100 rounded-md shadow-lg my-3 flex items-center">
      <div className="relative m-0 w-full md:w-2/5 shrink-0 overflow-hidden rounded-t-xl md:rounded-l-xl  bg-white bg-clip-border text-gray-700">
        <img src={image} alt="image" className="w-full h-full" />
      </div>
      <div className="p-6">
        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title}
        </h4>
        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
          {details.slice(0, 150)}...
        </p>
      </div>
    </div>
  );
};
CartDetails.propTypes = {
  card: PropTypes.object,
};
export default CartDetails;
