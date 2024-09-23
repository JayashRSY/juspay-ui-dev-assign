// src/components/MenuItems.tsx
import React, { useState } from "react";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  BookOutlined,
  UserOutlined,
  IdcardOutlined,
  BuildOutlined,
  FileTextOutlined,
  MessageOutlined,
  EditOutlined,
} from "@ant-design/icons";
import ArrowBottom from "../assets/icons/ArrowBottom.svg";
import ArrowBottomDark from "../assets/icons/ArrowBottomDark.svg";
import ArrowRight from "../assets/icons/ArrowRight.svg";
import ArrowRightDark from "../assets/icons/ArrowRightDark.svg";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

// Define TypeScript types for menu data
interface MenuItem {
  name: string;
  icon: React.ReactNode;
  path?: string;
  children?: MenuItem[]; // Optional property
}

interface MenuSection {
  header?: string;
  items: MenuItem[];
}

// Define your data with headers
const menuData: MenuSection[] = [
  {
    header: "Dashboards",
    items: [
      {
        name: "Default",
        path: "/",
        icon: <HomeOutlined />,
      },
    ],
  },
  {
    items: [
      {
        name: "eCommerce",
        icon: <ShoppingCartOutlined />,
        children: [
          {
            name: "Items",
            path: "/ecommerce",
            icon: <EditOutlined />,
          },
        ],
      },
    ],
  },
  {
    items: [
      {
        name: "Online Courses",
        icon: <BookOutlined />,
        children: [
          {
            name: "Project",
            icon: <EditOutlined />,
            path: "/courses/project", // Added path here
          },
        ],
      },
    ],
  },
  {
    header: "Pages",
    items: [
      {
        name: "User Profile",
        icon: <UserOutlined />,
        children: [
          {
            name: "Overview",
            icon: <EditOutlined />,
            path: "/profile/overview", // Added path here
          },
          {
            name: "Projects",
            icon: <EditOutlined />,
            path: "/profile/projects", // Added path here
          },
          {
            name: "Campaigns",
            icon: <EditOutlined />,
            path: "/profile/campaigns", // Added path here
          },
          {
            name: "Documents",
            icon: <EditOutlined />,
            path: "/profile/documents", // Added path here
          },
          {
            name: "Followers",
            icon: <EditOutlined />,
            path: "/profile/followers", // Added path here
          },
        ],
      },
    ],
  },
  {
    items: [
      {
        name: "Account",
        icon: <IdcardOutlined />,
        path: "/account", // Added path here
      },
      {
        name: "Corporate",
        icon: <BuildOutlined />,
        path: "/corporate", // Added path here
      },
      {
        name: "Blog",
        icon: <FileTextOutlined />,
        path: "/blog", // Added path here
      },
      {
        name: "Social",
        icon: <MessageOutlined />,
        path: "/social", // Added path here
      },
    ],
  },
];

// Recursively render menu items
const renderMenuItems = (
  items: MenuItem[],
  activeKey: string,
  setActiveKey: React.Dispatch<React.SetStateAction<string>>,
  expandedKeys: string[],
  toggleExpand: (key: string) => void,
  isDarkMode: boolean,
  handleMenuClick: (path?: string) => void // Now accepting path as optional
) =>
  items.map((item) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedKeys.includes(item.name);

    return (
      <div
        key={item.name}
        className="flex flex-col dark:text-white dark:bg-[#1c1c1c]"
      >
        <div
          onClick={() => {
            if (hasChildren) {
              toggleExpand(item.name);
            } else {
              setActiveKey(item.name);
              if (item.path) {
                handleMenuClick(item.path); // Ensure path exists before navigating
              }
            }
          }}
          className={`flex items-center cursor-pointer p-2 rounded-lg ${
            activeKey === item.name
              ? "bg-gray-200 text-black dark:text-white dark:bg-[#323232]"
              : "text-gray-700"
          } hover:bg-grey-200 hover:text-black dark:hover:text-gray-400 dark:text-white transition-all`}
        >
          {hasChildren && (
            <div className="ml-2">
              {isExpanded ? (
                isDarkMode ? (
                  <img src={ArrowBottomDark} alt="" className="h-[20px]" />
                ) : (
                  <img src={ArrowBottom} alt="" className="h-[20px]" />
                )
              ) : isDarkMode ? (
                <img src={ArrowRightDark} alt="" className="h-[20px]" />
              ) : (
                <img src={ArrowRight} alt="" className="h-[20px]" />
              )}
            </div>
          )}
          <div className="relative">
            {activeKey === item.name && (
              <span className="absolute -left-2 w-[5px] h-[25px] bg-black dark:bg-gray-300 rounded-full">
                {""}
              </span>
            )}
            <div className="flex items-center pl-2">
              {item.icon}
              <span className="ml-2">{item.name}</span>
            </div>
          </div>
        </div>
        {hasChildren && isExpanded && (
          <div className="ml-4">
            {renderMenuItems(
              item.children!,
              activeKey,
              setActiveKey,
              expandedKeys,
              toggleExpand,
              isDarkMode,
              handleMenuClick
            )}
          </div>
        )}
      </div>
    );
  });

const MenuItems: React.FC = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.layout);

  const [activeKey, setActiveKey] = useState<string>("Default");
  const [expandedKeys, setExpandedKeys] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleMenuClick = (path?: string) => {
    if (path) {
      navigate(path); // Only navigate if the path is defined
    }
  };

  const toggleExpand = (key: string) => {
    setExpandedKeys((prevExpandedKeys) =>
      prevExpandedKeys.includes(key)
        ? prevExpandedKeys.filter((k) => k !== key)
        : [...prevExpandedKeys, key]
    );
  };

  return (
    <div className="w-full h-full bg-white dark:bg-[#1c1c1c]">
      {menuData.map((section, index) => (
        <React.Fragment key={index}>
          {section.header && (
            <div className="text-gray-400 dark:text-white dark:bg-[#1c1c1c] font-bold text-sm mb-2">
              {section.header}
            </div>
          )}
          <div>
            {renderMenuItems(
              section.items,
              activeKey,
              setActiveKey,
              expandedKeys,
              toggleExpand,
              isDarkMode,
              handleMenuClick
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default MenuItems;
