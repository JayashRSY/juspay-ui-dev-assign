// import BugIcon from "../assets/icons/BugIcon";
import user from "../assets/user.svg";
import user1 from "../assets/user1.svg";
import user2 from "../assets/user2.svg";
import user3 from "../assets/user3.svg";
import user4 from "../assets/user4.svg";

const Activities = () => {
  const data = [
    {
      title: "You have a bug that needs...",
      timestamp: "Just now",
      icon: user,
    },
    {
      title: "Released a new version",
      timestamp: "59 minutes ago",
      icon: user1,
    },
    {
      title: "Submitted a bug",
      timestamp: "12 hours ago",
      icon: user2,
    },
    {
      title: "Modified A data in Page X",
      timestamp: "Today, 11:59 AM",
      icon: user3,
    },
    {
      title: "Deleted a page in Project X",
      timestamp: "Feb 2, 2023",
      icon: user4,
    },
  ];
  return (
    <div className="mb-4">
      <h2 className="font-bold text-xl mb-4 dark:text-white">Activities</h2>

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
export default Activities;
