import axios from 'axios';
import { useEffect, useState } from 'react';

const UseAxios = (param) => {

     const [data, setData] = useState(null);
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState('')


     axios.defaults.baseURL = "https://api.coingecko.com/api/v3/" ;

  const getData = async (param) => {
    try {
      const response = await axios(param);
      setData(response.data)
    }
    catch (error) {
      console.log(error);
      setError(error)
    }finally{
        setLoading(false)
    }
  }
  
  useEffect(() => {
    getData(param);
    
    const intervalId = setInterval(() => {
      getData(param);
    }, 30000);
    return () => {
      clearInterval(intervalId);
    }
    
  }, [param]);

  return {
    data, error, loading, getData
  }
}

export default UseAxios