// src/components/RightPanel.tsx
import React from "react";
import Notifications from "./Notifications";
import Activities from "./Activities";
import Contacts from "./Contacts";

const RightPanel: React.FC = () => {
  return (
    <div className="bg-white border-l-2 dark:border-gray-500 dark:bg-[#1C1C1C] h-full transition-all duration-300 ease-in-out p-6">
      <Notifications />
      <Activities />
      <Contacts />
    </div>
  );
};

export default RightPanel;
