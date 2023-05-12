import { useState, useEffect } from "react";

export default function useJsonFetch(url) {
   const [data, setData] = useState(null);
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(false);
   
   useEffect(()=> {
      const fetchData = async () =>{
         setLoading(true);             
         try {
            const response = await fetch(url);
            const data = await response.json();
            if (response.status === 500) {
               setData(null);
               setError(data.status);
            } 
            if (response.ok) {      
               setData(data.status);
               setError(null);
            }
         } catch(e) {
            if (e.name === "SyntaxError") {
               setError(e.message)
            }
         } finally {
            setLoading(false);
         } 
      }
      fetchData();
      
   }, [url])
   return [data, error, loading]; 
}