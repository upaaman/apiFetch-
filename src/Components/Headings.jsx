

const Headings = () => {
  const allHeadings=["Selected","Name","Gender","Email","Phone","Country"];
  return (

        <tr className=" h-[80px] bg-green-600">
           {allHeadings.map((item,index)=>
          <th key={index} className="border border-collapse border-black py-4 px-2 border-b-0 text-lg">{item}</th>
          )}
        </tr>

  )
}

export default Headings