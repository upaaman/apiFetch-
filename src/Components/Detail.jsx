import { useState } from "react";


const Detail = ({ detail, selected, setSelected }) => {
  const [highlighted,setHighlighted]=useState(false);
  
  const handleCheck = (detail) => {
    setHighlighted(prev=>!prev);
    let flag = false;
    selected?.map((item) => {
      if (item === detail.cell) {
        flag = true;
        // console.log(item + "   " + detail.cell)
      }
    })
    if (flag == false) {
      setSelected([...selected, detail.cell])
    } else {
      const newSelected = selected.filter((item) => item !== detail.cell)
      setSelected(newSelected);
    }
    console.log(selected)
  }
  const commonCss = "border border-collapse border-black py-4 px-2";
  return (
    <tr className={`${highlighted?"bg-blue-400":""}`}>

      <td className={`${commonCss} items-center w-full flex  border-b-0 border-r-0 border-l-0 justify-center`}>
        <input
          className="w-[17px] h-[17px]"
          type="checkbox" onChange={() => handleCheck(detail)} /></td>
      <td className={commonCss}>
        <span>{detail.name.title+". "}</span>
        <span>{detail.name.first+" "}</span>
        <span>{detail.name.last}</span>
      </td>
      <td className={commonCss}>{detail.gender}</td>
      <td className={commonCss} >{detail.email}</td>
      <td className={commonCss}>{detail.cell}</td>
      <td className={commonCss}>{detail.location.country}</td>

    </tr>
  )
}

export default Detail