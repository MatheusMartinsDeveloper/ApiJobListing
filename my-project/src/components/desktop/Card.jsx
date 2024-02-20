import { useContext } from "react";
import CardContext from "../context/CardContext";
import FilterContext from "../context/FilterContext";

export default function Card() {
    const { data } = useContext(CardContext);
    const { filter, handleFilter } = useContext(FilterContext);

    const doesItemMatchFilter = (item) => {
        return filter.every(value => {
            return (
                item.role === value ||
                item.level === value ||
                item.languages.includes(value) ||
                item.tools.includes(value)
            );
        });
    };

    const filteredData = data.filter(doesItemMatchFilter);

    return (
        <>
            {filteredData.map((item) => (
                <div key={item.id} className={`flex justify-between items-center bg-white rounded-lg shadow-xl py-7 px-5 w-full ${item.new ? `border-l-4 border-DesaturatedDarkCyan` : ``} sm:relative sm:flex-col sm:justify-start sm:items-start sm:gap-5 ${filter ? `sm:mt-[8%]` : ``}`}>
                    <div className="flex items-center gap-10 w-[50%]">
                        <div className="w-[20%] sm:absolute sm:-top-4 sm:w-[13%]">
                            <img className="w-full" src={item.logo} alt={item.company} />
                        </div>
                        <div className="flex flex-col gap-2 sm:mt-[5%]">
                            <div className="flex gap-2">
                                <span className="text-DesaturatedDarkCyan text-lg font-LeagueSpartan font-[700]">{item.company}</span>
                                {item.new ?
                                    <span className="text-LightGrayishCyanFilterTablets text-sm font-LeagueSpartan font-[700] uppercase bg-DesaturatedDarkCyan rounded-full pt-1 px-2">New!</span> : ``
                                }
                                {item.featured ?
                                    <span className="text-LightGrayishCyanFilterTablets text-sm font-LeagueSpartan font-[700] uppercase bg-VeryDarkGrayishCyan rounded-full pt-1 px-2">Featured</span> : ``
                                }
                            </div>
                            <div>
                                <span className="text-VeryDarkGrayishCyan text-xl font-LeagueSpartan font-[700] hover:text-DesaturatedDarkCyan hover:delay-75 delay-75 cursor-pointer sm:whitespace-nowrap">{item.position}</span>
                            </div>
                            <div className="relative flex justify-between items-center gap-4 w-full sm:w-full sm:whitespace-nowrap">
                                <span className="relative text-DarkGrayishCyan text-base font-LeagueSpartan font-[500]">{item.postedAt}</span>
                                <div className="separator-left"></div>
                                <span className="relative text-DarkGrayishCyan text-base font-LeagueSpartan font-[500]">{item.contract}</span>
                                <div className="separator-right"></div>
                                <span className="relative text-DarkGrayishCyan text-base font-LeagueSpartan font-[500]">{item.location}</span>
                            </div>
                        </div>
                    </div>
                    {
                        window.innerWidth <= 410 ?
                        <div className="border-t-[2px] border-DarkGrayishCyan w-full"></div> : ``
                    }
                    <div className="flex justify-around items-center w-[50%] sm:flex-wrap sm:justify-start sm:gap-2.5 sm:w-full">
                        <span onClick={() => handleFilter({ value: item.role })} className="text-DesaturatedDarkCyan text-base font-LeagueSpartan font-[700] bg-LightGrayishCyanBackground shadow-md rounded-md py-1.5 px-2.5 cursor-pointer delay-75 hover:delay-75 hover:text-LightGrayishCyanFilterTablets hover:bg-DesaturatedDarkCyan">{item.role}</span>
                        <span onClick={() => handleFilter({ value: item.level })} className="text-DesaturatedDarkCyan text-base font-LeagueSpartan font-[700] bg-LightGrayishCyanBackground shadow-md rounded-md py-1.5 px-2.5 cursor-pointer delay-75 hover:delay-75 hover:text-LightGrayishCyanFilterTablets hover:bg-DesaturatedDarkCyan">{item.level}</span>
                        {
                            item.languages.map((lang, index) => (
                                <span onClick={() => handleFilter({ value: lang })} className="text-DesaturatedDarkCyan text-base font-LeagueSpartan font-[700] bg-LightGrayishCyanBackground shadow-md rounded-md py-1.5 px-2.5 cursor-pointer delay-75 hover:delay-75 hover:text-LightGrayishCyanFilterTablets hover:bg-DesaturatedDarkCyan" key={index}>{lang}</span>
                            ))
                        }
                        {
                            item.tools.map((tool, index) => (
                                <span onClick={() => handleFilter({ value: tool })} className="text-DesaturatedDarkCyan text-base font-LeagueSpartan font-[700] bg-LightGrayishCyanBackground shadow-md rounded-md py-1.5 px-2.5 cursor-pointer delay-75 hover:delay-75 hover:text-LightGrayishCyanFilterTablets hover:bg-DesaturatedDarkCyan" key={index}>{tool}</span>
                            ))
                        }
                    </div>
                </div>
            ))
            }
        </>
    );
}