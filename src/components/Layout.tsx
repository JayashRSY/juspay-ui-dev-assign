import React, { useState, useEffect } from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import Header from "./Header";
import Default from "../pages/Default";
import ECommerce from "../pages/ECommerce";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setIsDarkMode } from "../features/layout/layoutSlice";

const Layout: React.FC = () => {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state: RootState) => state.layout);

  const [isLeftExpanded, setIsLeftExpanded] = useState(true);
  const [isRightExpanded, setIsRightExpanded] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle window resize to toggle panels on small screens
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setIsLeftExpanded(true);
        setIsRightExpanded(true);
      } else {
        setIsLeftExpanded(false);
        setIsRightExpanded(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`flex relative transition-all duration-300 ${
        isDarkMode ? "bg-[#1c1c1c]" : "bg-white"
      }`}
    >
      {/* Left Panel: Absolute on small screens, static on large screens */}
      {isLeftExpanded && (
        <div
          className={`${
            windowWidth < 768 ? "absolute inset-0 z-40" : "relative"
          } ${
            isDarkMode ? "bg-[#333]" : "bg-gray-800"
          } transition-all duration-300`}
        >
          <LeftPanel />
          {windowWidth < 768 && (
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setIsLeftExpanded(false)}
            >
              Close
            </button>
          )}
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-col flex-grow transition-all duration-300">
        <Header
          isLeftExpanded={isLeftExpanded}
          setIsLeftExpanded={setIsLeftExpanded}
          isRightExpanded={isRightExpanded}
          setIsRightExpanded={setIsRightExpanded}
          isDarkMode={isDarkMode}
          setIsDarkMode={() => dispatch(setIsDarkMode(!isDarkMode))}
        />
        <div
          className={`p-6 ${
            isDarkMode ? "bg-[#1c1c1c] text-white" : "bg-white text-black"
          }`}
        >
          <Routes>
            <Route path="/" element={<Default />} />
            <Route
              path="/ecommerce"
              element={<ECommerce isDarkMode={isDarkMode} />}
            />
            <Route path="*" element={<ECommerce isDarkMode={isDarkMode} />} />
          </Routes>
        </div>
      </div>

      {/* Right Panel: Absolute on small screens, static on large screens */}
      {isRightExpanded && (
        <div
          className={`${
            windowWidth < 768 ? "absolute inset-0 z-40" : "relative"
          } ${
            isDarkMode ? "bg-[#333]" : "bg-gray-800"
          } transition-all duration-300`}
        >
          <RightPanel />
          {windowWidth < 768 && (
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setIsRightExpanded(false)}
            >
              Close
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Layout;
