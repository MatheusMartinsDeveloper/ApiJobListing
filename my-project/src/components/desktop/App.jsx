import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./Filter";
import Card from "./Card";
import CardContext from "../context/CardContext";
import FilterContext from "../context/FilterContext";

export default function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const [filter, setFilter] = useState([]);
  const [remove, setRemove] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("./src/data.json");
        setData(response.data);
      }

      catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const clearFilter = () => {
    setFilter([]);
    setRemove(true);
  }

  const handleFilter = (data) => {
    setFilter((prevValue) => [...prevValue, data.value]);
  }

  return (
    <>
      <header className="bg-DesaturatedDarkCyan z-0 w-full">
        <img src={window.innerWidth > 410 ? `./src/assets/images/bg-header-desktop.svg` : `./src/assets/images/bg-header-mobile.svg`} alt="Image Bg Header" />
      </header>
      <FilterContext.Provider value={{ filter, setFilter, clearFilter, handleFilter }}>
        <div className={`relative -top-10 left-[15%] z-50 w-[70%] sm:w-[90%] sm:left-5 sm:right-5 ${remove ? `hidden` : `block`} ${filter.length > 0 ? `block` : `hidden`}`}>
          <Filter />
        </div>
        <CardContext.Provider value={{ data }}>
          <main className="flex justify-center items-center bg-LightGrayishCyanBackground py-10 w-full">
            <div className="flex flex-col justify-center items-center gap-4 w-[70%] sm:w-[90%] sm:gap-10">
              <Card />
            </div>
          </main>
        </CardContext.Provider>
      </FilterContext.Provider>
    </>
  );
}