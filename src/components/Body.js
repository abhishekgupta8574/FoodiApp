import { useEffect, useState } from "react";
import RestrauantCard from "./RestrauantCard";
import ShimmerUI from "./ShimmerUI";

const Body = () => {
  let [list, newlist] = useState([]);
  let [searchText, setSearchText] = useState("");
  let [filteredList, setFilteredList] = useState([]);
  const [isFilter, setIsFilter] = useState(true);
  //let currentLength=list.length;
  useEffect(() => {
    fetchData().catch((err) => console.log(err));
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    json = await data.json();

    newlist(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
     );
    setFilteredList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return list.length === 0 ? (  
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="search-container">
        <div>
          <input
            className="input-box"
            type="text"
            onChange={(e) => {
              setSearchText(e.target.value);
              //console.log(searchText);
            }}
          ></input>
          <button
            onClick={() => {
              //console.log(searchText);
              const filterResturant = list.filter((e) => {
                return e.info.name
                  .toUpperCase()
                  .includes(searchText.toUpperCase());
                //console.log(e.info.name.toLowerCase().includes(searchText));
              });
              //console.log(filterResturant);
              setFilteredList(filterResturant);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            if(isFilter){
              const myList = list.filter((res) => res.info.avgRating > 4.5);
              // console.log(myList);
              setFilteredList(myList);
              setIsFilter(false)

            }else{
              setFilteredList(list);
              setIsFilter(true)
            }
            // setListLength(myList.length);
          }}
        >
          Sort
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((restaurant) => (
          <RestrauantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
