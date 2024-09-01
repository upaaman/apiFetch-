import { useEffect, useState } from "react";

import { fetchDataFromApi } from "../utils/apiFetch"
import Headings from "./Headings"
import Pagination from "./Pagination"
import UserDetails from "./UserDetails"



const Table = () => {
  const [currPage, setCurrPage] = useState(1);
  const [limit, setLimit] = useState(15);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState([]);

  const fetchData = async () => {
{/*------------------------ this fetch function is in utils section  -------------------------*/}
    const data = await fetchDataFromApi({ limit: limit, pageNumber: currPage })
    // console.log(data)
    setUserData(data);
  }
  {/*------------------------ useEffect calls the fetch function and set the loader when the data is being fetched -------------------------*/}
  useEffect(() => {
    setLoading(true);
    fetchData();
    setLoading(false);

  }, [currPage, limit])
  return (
    <div className="bg-blue-50 w-full ">
      {loading ?
      <span>Loading</span>
      :
        <div className="px-7 mb-[49px] w-full ">
          <table className="w-full border border-collapse  border-black py-4">
            <thead>

        {/*------------------------ headings of the table  -------------------------*/}
              <Headings />
              <span className="bottom-2 left-60 fixed z-10 text-xl font-semibold">Selected Employees : {selected.length}</span>
            </thead>
            <tbody>
              {/*------------------------ the details will be shown in this UserDetails Section -------------------------*/}
              <UserDetails userData={userData} selected={selected} setSelected={setSelected} />
            </tbody>
          </table>
        </div>}
        {/*------------------------ pagination logic  and number of selected person is shown here -------------------------*/}
      <Pagination currPage={currPage} setCurrPage={setCurrPage} limit={limit} setLimit={setLimit} />
    </div>

  )
}

export default Table

