import Detail from "./Detail"


const UserDetails = ({userData,setSelected,selected}) => {
  return (
    <>
        {   
            userData?.map((item)=><Detail setSelected={setSelected} selected={selected}  key={item.cell} detail={item}/>)
        }
    </>
  )
}

export default UserDetails