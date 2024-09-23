import GrowIcon from "../assets/icons/GrowIcon";
import SinkIcon from "../assets/icons/SinkIcon";
import barchart from "../assets/barchart.svg";
import barchartdark from "../assets/barchartdark.svg";
import graph from "../assets/graph.svg";
import graphdark from "../assets/graphdark.svg";
import table from "../assets/table.svg";
import tabledark from "../assets/tabledark.svg";
import mapview from "../assets/mapview.svg";
import mapviewdark from "../assets/mapviewdark.svg";
import piechart from "../assets/piechart.svg";
import piechartdark from "../assets/piechartdark.svg";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

const Default: React.FC = () => {
  const { isDarkMode } = useSelector((state: RootState) => state.layout);

  return (
    <div className="flex justify-center px-4">
      <div className="w-full">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-6">
            <div className="rounded-lg bg-blue-200 p-6 dark:text-black">
              <div className="font-bold text-lg">Customers</div>
              <div className="flex items-center gap-2">
                <p className="font-bold text-[25px]">3,781</p>
                <p className="flex items-center gap-1">
                  +11.01%
                  <GrowIcon />
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-gray-100 p-6 dark:bg-[#282828]">
              <div className="font-bold text-lg">Orders</div>
              <div className="flex items-center gap-2">
                <p className="font-bold text-[25px]">1,219</p>
                <p className="flex items-center gap-1">
                  -0.03%
                  <SinkIcon />
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-gray-100 p-6 dark:bg-[#282828]">
              <div className="font-bold text-lg">Revenue</div>
              <div className="flex items-center gap-2">
                <p className="font-bold text-[25px]">$695</p>
                <p className="flex items-center gap-1">
                  +15.03%
                  <GrowIcon />
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-gray-300 p-6 dark:text-black">
              <div className="font-bold text-lg">Growth</div>
              <div className="flex items-center gap-2">
                <p className="font-bold text-[25px]">30.01%</p>
                <p className="flex items-center gap-1">
                  +6.08%
                  <GrowIcon />
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            {isDarkMode ? (
              <img
                src={barchartdark}
                alt="Bar Chart"
                className="w-full h-auto"
              />
            ) : (
              <img src={barchart} alt="Bar Chart" className="w-full h-auto" />
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-4 grid-cols-1 gap-6 my-6">
          {isDarkMode ? (
            <img
              src={graphdark}
              alt="Graph"
              className="md:col-span-3 w-full h-auto"
            />
          ) : (
            <img
              src={graph}
              alt="Graph"
              className="md:col-span-3 w-full h-auto"
            />
          )}
          {isDarkMode ? (
            <img
              src={mapviewdark}
              alt="Map View"
              className="md:col-span-1 w-full h-auto"
            />
          ) : (
            <img
              src={mapview}
              alt="Map View"
              className="md:col-span-1 w-full h-auto"
            />
          )}
        </div>

        <div className="grid md:grid-cols-4 grid-cols-1 gap-6 my-6">
          {isDarkMode ? (
            <img
              src={tabledark}
              alt="Table"
              className="md:col-span-3 w-full h-auto"
            />
          ) : (
            <img
              src={table}
              alt="Table"
              className="md:col-span-3 w-full h-auto"
            />
          )}
          {isDarkMode ? (
            <img
              src={piechartdark}
              alt="Pie Chart"
              className="md:col-span-1 w-full h-auto"
            />
          ) : (
            <img
              src={piechart}
              alt="Pie Chart"
              className="md:col-span-1 w-full h-auto"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Default;
