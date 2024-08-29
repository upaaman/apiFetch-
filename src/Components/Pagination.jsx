

const Pagination = ({ setCurrPage, limit, setLimit, currPage }) => {
    const handleNext = () => {
        setCurrPage(prev => prev + 1)
    }
    const handlePrev = () => {
        setCurrPage(prev => prev - 1)
    }
    return (

        <div className="flex items-center gap-10 justify-center bg-green-600 h-[50px] fixed bottom-0 w-full ">
            <div className="flex gap-8">
                {currPage !== 1 && <button
                className="bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-1 text-white font-semibold"
                    onClick={() => handlePrev()}
                >Prev</button>}
                <div className="px-4 py-2 text-md font-bold text-white flex items-center justify-center rounded-full bg-red-400">{currPage}</div>
                <button
                    className="bg-blue-500 hover:bg-blue-600 rounded-md px-3 py-1 text-white font-semibold"
                    onClick={() => handleNext()}
                >Next</button>
            </div>
            <div >
                <label className="text-white font-semibold flex gap-2">Choose

                    <select value={limit} className="bg-red-200 text-black" onChange={(e) => setLimit(e.target.value)}>
                        <option value="15">15</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>

                </label>
            </div>
        </div >
    )
}

export default Pagination