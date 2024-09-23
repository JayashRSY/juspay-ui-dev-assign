import React from "react";
import DrawerIcon from "../assets/icons/DrawerIcon";
import StarIcon from "../assets/icons/StarIcon";
import HistoryIcon from "../assets/icons/HistoryIcon";
import BellIcon from "../assets/icons/BellIcon";
import SunIcon from "../assets/icons/SunIcon";
import Breadcrumb from "antd/es/breadcrumb";
import SearchBar from "./SearchBar";
import DrawerIconDark from "../assets/icons/DrawerIconDark";
import StarIconDark from "../assets/icons/StarIconDark";
import HistoryIconDark from "../assets/icons/HistoryIconDark";
import BellIconDark from "../assets/icons/BellIconDark";
import SunIconDark from "../assets/icons/SunIconDark";

interface HeaderProps {
  isLeftExpanded: boolean;
  setIsLeftExpanded: (value: boolean) => void;
  isRightExpanded: boolean;
  setIsRightExpanded: (value: boolean) => void;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  isLeftExpanded,
  setIsLeftExpanded,
  isRightExpanded,
  setIsRightExpanded,
  isDarkMode,
  setIsDarkMode,
}) => {
  const breadcrumbStyle = isDarkMode
    ? { color: "#FFFFFF" } // White for dark mode
    : { color: "#000000" }; // Default black for light mode

  const breadcrumbSeparatorStyle = isDarkMode
    ? { color: "#FFFFFF" } // White separator in dark mode
    : { color: "#000000" }; // Default black separator

  return (
    <div className="flex items-center justify-between p-4 dark:bg-[#1C1C1C] border-b-2 dark:border-gray-500">
      <div className="flex gap-4 items-center">
        <span
          onClick={() => setIsLeftExpanded(!isLeftExpanded)}
          className="cursor-pointer"
        >
          {isDarkMode ? <DrawerIconDark /> : <DrawerIcon />}
        </span>
        <span className="cursor-pointer">
          {isDarkMode ? <StarIconDark /> : <StarIcon />}
        </span>

        <Breadcrumb
          separator={<span style={breadcrumbSeparatorStyle}>/</span>}
          items={[
            {
              title: <span style={breadcrumbStyle}>Dashboards</span>,
            },
            {
              title: <span style={breadcrumbStyle}>Default</span>,
            },
          ]}
        />
      </div>
      <div className="flex gap-4 items-center">
        <SearchBar />
        <span
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="cursor-pointer"
        >
          {isDarkMode ? <SunIconDark /> : <SunIcon />}
        </span>
        {isDarkMode ? <HistoryIconDark /> : <HistoryIcon />}

        {isDarkMode ? <BellIconDark /> : <BellIcon />}

        <span
          onClick={() => setIsRightExpanded(!isRightExpanded)}
          className="cursor-pointer"
        >
          {isDarkMode ? <DrawerIconDark /> : <DrawerIcon />}
        </span>
      </div>
    </div>
  );
};

export default Header;
