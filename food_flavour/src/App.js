import { useEffect, useState } from 'react'; 
import Search from './Component/Search';
import styled from "styled-components"
 export const BASE_URL="http://localhost:9000";


function App() {
  const [data,setData]=useState(null);
  const [filteredData,setfilteredData]=useState(null);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);
  const [selectedBtn,setselectedBtn]=useState("all");
useEffect(()=>{
  const fetchFoodData=async()=>{
    setLoading(true)
try{
    const response=await fetch(BASE_URL);
    const json=await response.json();
    setData(json);
    setfilteredData(json);
    setLoading(false);
  }
    catch(error){
      setError("Unable to fetch the error.")
    }
  };
  fetchFoodData();
  
},[]);

const searchFood=(e)=>{
  const searchValue=(e.target.value);
  console.log(searchValue);
  if(searchValue==="")
  {
    setfilteredData(null);
  }
  const filter=data?.filter((food)=>
    food.name.toLowerCase().includes(searchValue.toLowerCase()))

setfilteredData(filter);
};

const filterFood=(type)=>{
if (type==="all"){
  setfilteredData(data);
  setselectedBtn("all");
  return;
}
const filter=data?.filter((food)=>
    food.type.toLowerCase().includes(type.toLowerCase()))
    setfilteredData(filter);
  setselectedBtn(type);
  return;


}
  if (error) return <h2>{error}</h2>
  if (loading) return <h2>Loading...</h2>
  return (
    <>
    <Container>
      <TopContainer>
        <div className='logo'>
          <img src="./Images/logo.png" alt="logo" height="150px" width="180px"/>
        </div>
        <div className='search'>
          <input onChange={searchFood} placeholder='Search'/>
        </div>
      </TopContainer>
      <FilterContainer>
        {filterBtns.map((value)=>(
          <Button 
          isSelected ={selectedBtn === value.type} 
          key={value.name}
          onClick={()=>filterFood(value.type)}
          >{value.name}</Button>
        ))}
      </FilterContainer>
      
    </Container>
    <Search data={filteredData}/>
    </>
  );
}

export default App;
export const Container=styled.div`
max-width:1200px;
margin: 0px auto;

`;
const filterBtns=[
  {
    name:"All",
    type:"all"
  },
  {
    name:"Breakfast",
    type:"breakfast"
  },
  {
    name:"Lunch",
    type:"lunch"
  },
  {
    name:"Dinner",
    type:"dinner"
  },
];
const FilterContainer=styled.section`
  display:flex;
  justify-content:center;
  gap:12px;
 padding-bottom:30px;
`;
export const Button=styled.button`
  background:#ff4343;
  outline:solid 1px ${({isSelected})=>isSelected?"#f22f2f":"#ff4343"}
  border-radius:5px;
  padding:6px 12px;
  border:none; 
  cursor:pointer;
  &:hover{
  background-color:#f22f2f;
  } 
`;
const TopContainer=styled.section`
height:140px;
display:flex;
justify-content:space-between;
padding:16px;
align-item :center;

.search {
  input{
  background-color:transparent;
  border:2px solid red;
  color:black;
  border-radius:5px;
  height:40px;
  font-size:16px;
  padding:0px 10px;
  }
}
@media (0< width<600 px){
flex-direction:column;
height:120px;
}

`;