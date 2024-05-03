export function filterData(searchText,restaurants){
    const filterData = restaurants?.filter((restaurant)=>
      restaurant.data?.name.toLowerCase()?.includes(searchText.toLowerCase())
    )
    return filterData
  }


  //utils sopprts readability , reusability , makes the code more testable (can Easily write seperate test cases) , maintainable ( can easily find filterFun and modify)  and Hooks are also used for the same reason 

//   modular :- Broken down code into meaningful pieces ex components  here 