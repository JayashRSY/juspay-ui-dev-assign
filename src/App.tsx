import React, { useEffect } from "react";
import { ConfigProvider } from "antd";
// import { SunOutlined, MoonOutlined } from "@ant-design/icons";
import Layout from "./components/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

const App: React.FC = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.layout);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: isDarkMode ? "#1c1c1c" : "#000000",
        },
      }}
    >
      <Router>
        <Layout />
      </Router>
    </ConfigProvider>
  );
};

export default App;
