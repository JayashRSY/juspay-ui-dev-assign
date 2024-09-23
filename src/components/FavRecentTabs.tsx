import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const FavRecentTabs: React.FC = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.layout);
  const [activeTab, setActiveTab] = useState("favourites");

  return (
    <div className={`py-4 w-full ${isDarkMode ? "dark" : ""}`}>
      {/* Tab buttons */}
      <div className="flex space-x-4 mb-1">
        <button
          onClick={() => setActiveTab("favourites")}
          className={`py-2 px-2 rounded-t-lg ${
            activeTab === "favourites"
              ? `${isDarkMode ? "text-white" : "text-black"}`
              : "text-gray-400"
          }`}
        >
          Favourites
        </button>
        <button
          onClick={() => setActiveTab("recents")}
          className={`py-2 px-2 rounded-t-lg ${
            activeTab === "recents"
              ? `${isDarkMode ? "text-white" : "text-black"}`
              : "text-gray-400"
          }`}
        >
          Recents
        </button>
      </div>

      {/* Tab content */}
      <div
        className={`p-2 rounded-lg ${isDarkMode ? "bg-[#1C1C1C]" : "bg-white"}`}
      >
        {activeTab === "favourites" ? (
          <ul
            className={`list-disc pl-5 ${
              isDarkMode ? "text-gray-200" : "text-black"
            }`}
          >
            <li>Favourite Item 1</li>
            <li>Favourite Item 2</li>
            <li>Favourite Item 3</li>
          </ul>
        ) : (
          <ul
            className={`list-disc pl-5 ${
              isDarkMode ? "text-gray-200" : "text-black"
            }`}
          >
            <li>Recent Item 1</li>
            <li>Recent Item 2</li>
            <li>Recent Item 3</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default FavRecentTabs;
