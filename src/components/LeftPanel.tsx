import React from "react";
import ProfileIcon from "../assets/icons/ProfileIcon.svg";
import FavRecentTabs from "./FavRecentTabs";
import MenuItems from "./MenuItems";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

const LeftPanel: React.FC = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.layout);

  return (
    <div
      className={`bg-white border-r-2 dark:border-gray-500 dark:bg-[#1C1C1C] min-h-full transition-all duration-300 ease-in-out p-6 w-[250px] flex flex-col`}
    >
      {/* Flex column to stack children vertically */}
      <div className="flex items-center gap-4">
        <img src={ProfileIcon} alt="Profile" className="h-[30px]" />
        {/* Apply dark mode to the text */}
        <p className={`text-xl ${isDarkMode ? "text-white" : "text-black"}`}>
          ByeWind
        </p>
      </div>
      {/* Ensure dark mode is applied to the child components */}
      <FavRecentTabs />
      <MenuItems />
    </div>
  );
};

export default LeftPanel;
