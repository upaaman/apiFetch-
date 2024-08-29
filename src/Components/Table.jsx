import { useEffect, useState } from "react";

import { fetchDataFromApi } from "../utils/apiFetch"
import Headings from "./Headings"
import Pagination from "./Pagination"
import UserDetails from "./UserDetails"



const Table = () => {
  const [currPage, setCurrPage] = useState(1);
  const [limit,setLimit]=useState(15);
  const [userData,setUserData]=useState([]);

  const [selected,setSelected]=useState([]);

  const fetchData=async()=>{

    const data=await fetchDataFromApi({limit:limit,pageNumber:currPage})
    // console.log(data)
    setUserData(data);
  }
  useEffect(() => {

      fetchData();

  }, [currPage,limit])
  return (
  
    <div className="w-full flex flex-col  ">
        <Headings />
        <div className="bg-green-500 justify-center flex  w-full">total selected {selected.length}</div>
      <table className="w-full">
        <UserDetails userData={userData} setSelected={setSelected}  selected={selected}/>
      </table>
      <Pagination setCurrPage={setCurrPage} limit={limit} setLimit={setLimit} currPage={currPage} />

    </div>
  )
}

export default Table

