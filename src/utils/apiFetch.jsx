export const fetchDataFromApi=async({limit,pageNumber})=>{
    const baseUrl=`https://randomuser.me/api/?results=${limit}&page=${pageNumber}`
    try {
        const response=await fetch(baseUrl);
        if(!response.ok){
            throw new Error("there is error ",response.status);  
        }
        const data=await response.json();
        return data.results
    } catch (error) {
        console.log("error aa gai bhai ",error)
    }
}