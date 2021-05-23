import React, { useState, useEffect } from 'react';
import useUsersService from '../../hooks/useUsersService';

const AppContext = React.createContext();

const AppProvider = (props) => {

    const { dataFromService, error } = useUsersService();
    const [localData, setLocalData] = useState(null);
    const [isOverlayActive, setOverlay] = useState(false);
    const [activeUser, setActiveUser] = useState(null);
    const [activeSortClass, setActiveClass] = useState('');
    const [sortReverse, setSortReverse] = useState(false);

    useEffect(() => {
      setLocalData(dataFromService)
    }, [dataFromService])

    const openModalInfo = (user) => {
      setActiveUser(user);
      setOverlay(true);
    }

    const closeModalInfo = () => {
      setActiveUser(null);
      setOverlay(false);
    }

    const sortBy = (sortTitle) => {

      if(sortReverse) {
        setActiveClass(`active-down-${sortTitle}`);
      } else {
        setActiveClass(`active-${sortTitle}`);
      }
      
      setSortReverse(state => !state);
      let sortArr = sortData();

      const newArr = [];
      
      for(let i = 0; i < dataFromService.length; i++) {
        newArr.push(dataFromService.find(el => el[sortTitle] === sortArr[i]));
      }

      function sortData() {
        const sortArr = dataFromService.map((el) => {
          return el[sortTitle]
        }).sort();

        if(sortReverse) {
          return sortArr.reverse();
        }

        return sortArr;
      }

      setLocalData(newArr);
    }

    return (
        <AppContext.Provider
          value={{
              localData,
              error,
              activeUser,
              isOverlayActive,
              setOverlay,
              openModalInfo,
              closeModalInfo,
              setActiveUser,
              sortBy,
              sortReverse,
              activeSortClass
          }}>
          {props.children}
        </AppContext.Provider>
      )
}

export { AppContext };
export default AppProvider;