import orderlist from "../assets/orderlist.svg";
import orderlistdark from "../assets/orderlistdark.svg";

interface ECommerceProps {
  isDarkMode: boolean;
}
const ECommerce: React.FC<ECommerceProps> = ({ isDarkMode }) => {
  return (
    <>
      {isDarkMode ? (
        <img src={orderlistdark} alt="" className="w-[100%]" />
      ) : (
        <img src={orderlist} alt="" className="w-[100%]" />
      )}
    </>
  );
};
export default ECommerce;
