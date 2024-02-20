import { useState, useContext } from "react";
import FilterContext from "../context/FilterContext";

export default function Filter() {
    const { filter, setFilter, clearFilter } = useContext(FilterContext);

    const handleRemove = (index) => {
        const updatedFilter = [...filter];
        updatedFilter.splice(index, 1);
        setFilter(updatedFilter);
    };

    return (
        <div className="absolute flex justify-between items-center bg-LightGrayishCyanFilterTablets shadow-md rounded-lg py-5 px-10 w-full">
            <div className="flex justify-center items-center gap-7 sm:grid sm:grid-cols-2 sm:px-0">
                {
                    filter.map((item, index) => (
                        <div className="flex items-center shadow-lg">
                            <span className="text-DesaturatedDarkCyan text-base font-LeagueSpartan font-[700] bg-LightGrayishCyanBackground rounded-tl-md rounded-bl-md py-0.5 px-3" key={index}>{item}</span>
                            <img onClick={() => handleRemove(index)} className="bg-DesaturatedDarkCyan rounded-tr-md rounded-br-md py-2 px-2 w-[40%] cursor-pointer hover:bg-VeryDarkGrayishCyan" src="./src/assets/icons/icon-remove.svg" alt="Icon Remove" />
                        </div>
                    ))
                }
            </div>
            <div>
                <span onClick={clearFilter} className="text-DesaturatedDarkCyan text-base font-LeagueSpartan font-[700] pb-3 cursor-pointer hover:underline">Clear</span>
            </div>
        </div>
    );
}