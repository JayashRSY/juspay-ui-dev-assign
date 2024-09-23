// import BugIcon from "../assets/icons/BugIcon";
import user5 from "../assets/user5.svg";
import user6 from "../assets/user6.svg";
import user7 from "../assets/user7.svg";
import user8 from "../assets/user8.svg";
import user9 from "../assets/user9.svg";
import user10 from "../assets/user10.svg";
const Contacts = () => {
  const data = [
    {
      title: "Natali Craig",
      icon: user5,
    },
    {
      title: "Drew Cano",
      icon: user6,
    },
    {
      title: "Orlando Diggs",
      icon: user7,
    },
    {
      title: "Andi Lane",
      icon: user8,
    },
    {
      title: "Kate Morrison",
      icon: user9,
    },
    {
      title: "Koray Okumus",
      icon: user10,
    },
  ];
  return (
    <div className="mb-4">
      <h2 className="font-bold text-xl mb-4 dark:text-white">Accounts</h2>

      {data.map((item) => (
        <div className="flex py-2">
          <img src={item.icon} alt="" className="h-[30px] mr-2" />
          <div>
            <p className="text-xl dark:text-white">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Contacts;
