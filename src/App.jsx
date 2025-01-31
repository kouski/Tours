import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {

  const[tours,setTours]= useState([])
  const[loading,setLoading]= useState(true)

  const fetchTours = async()=>{
    setLoading(true)
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data)
    } catch (error) {
      console.error("Error fetching tours:", error);
    }
    setLoading(false)
  }

  useEffect(()=>{fetchTours()},[])

  if (loading) {
    return <main>
      <Loading />
    </main>;
  }


  return <>
  <main>
   <Tours tours={tours}/> 
  </main>
  
  

  
  
  Tours Starter</>;
};
export default App;
