

const Detail = ({ detail, selected, setSelected }) => {
  const handleCheck = (detail) => {
    let flag = false;
    selected?.map((item) => {
      if (item === detail.cell) {
        flag = true;
        console.log(item +"   " +detail.cell)
      }
    })
    if (flag == false) {
      setSelected([...selected, detail.cell])
    }else{
      const newSelected=selected.filter((item)=> item!==detail.cell)
      setSelected(newSelected);
    }
    console.log(selected)
  }
  return (
    <tr className="">

      <td className="pl-2"> <input type="checkbox" onChange={() => handleCheck(detail)} /></td>
      <td className="">
        <span>{detail.name.title}</span>
        <span>{detail.name.first}</span>
        <span>{detail.name.last}</span>
      </td>
      <td>{detail.gender}</td>
      <td>{detail.email}</td>
      <td>{detail.cell}</td>
      <td className="">{detail.location.country}</td>

    </tr>
  )
}

export default Detail