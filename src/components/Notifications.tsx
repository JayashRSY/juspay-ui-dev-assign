// import BugIcon from "../assets/icons/BugIcon";
import SignalIcon from "../assets/icons/SignalIcon.svg";
import UserIcon from "../assets/icons/UserIcon.svg";
import BugIcon from "../assets/icons/BugIcon.svg";
const Notifications = () => {
  const data = [
    {
      title: "You have a bug that needs...",
      timestamp: "Just now",
      icon: BugIcon,
    },
    {
      title: "New user registered",
      timestamp: "59 minutes ago",
      icon: UserIcon,
    },
    {
      title: "You have a bug that needs...",
      timestamp: "12 hours ago",
      icon: BugIcon,
    },
    {
      title: "Andi Lane subscribed to you",
      timestamp: "Today, 11:59 AM",
      icon: SignalIcon,
    },
  ];
  return (
    <div className="mb-4">
      <h2 className="font-bold text-xl mb-4 dark:text-white">Notifications</h2>

      {data.map((item) => (
        <div className="flex py-2">
          <img src={item.icon} alt="" className="h-[30px] mr-2" />
          <div>
            <p className="text-xl dark:text-white">{item.title}</p>
            <p className="text-sm text-slate-400">{item.timestamp}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Notifications;
