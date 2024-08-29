

const Pagination = ({setCurrPage,limit,setLimit,currPage}) => {
    const handleNext=()=>{
        setCurrPage(prev=>prev+1)
    }
    const handlePrev=()=>{
        setCurrPage(prev=>prev-1)
    }
    return (
        <div className=" relative  ">
            <div className="flex fixed justify-center items-center gap-10 bg-blue-500 w-full py-5 h-5 bottom-0">
                <div className="flex gap-5">
                    {currPage!==1 && <button
                    onClick={()=>handlePrev()}
                    >Prev</button>}
                    <div>{currPage}</div>
                    <button
                    onClick={()=>handleNext()}
                    >Next</button>
                </div>
                <div>
                    <label>Choose

                        <select value={limit} className="ml-4" onChange={(e)=>setLimit(e.target.value)}>
                            <option value="15">15</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                
                    </label>
                </div>
            </div>
        </div >
    )
}

export default Pagination