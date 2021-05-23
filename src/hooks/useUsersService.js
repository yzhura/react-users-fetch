import { useState, useEffect } from 'react';

const useUsersService = () => {

  const [dataFromService, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!result.ok) {
            setError(result.status)
        }
      return await result.json();
    };
    
    fetchData().then(data => setData(data));
  }, []);

  return {
    dataFromService,
    error
  }
}

export default useUsersService;