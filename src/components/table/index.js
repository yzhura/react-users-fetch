import React, { useContext } from 'react'
import styles from './table.module.css';
import { AppContext } from "../appContext";

const UsersTable = () => {

    const { 
        localData, 
        error, 
        openModalInfo, 
        sortBy,
        activeSortClass
    } = useContext(AppContext);

    const headtTitlesArr = ['Name', 'Username', 'Email', 'Website'];

    if(error) {
        return (
            <>
                <h1>Поломалось &#9785;</h1>
                <p>Код ошибки: {error}</p>
            </>
        )
    }

    if(!localData) {
        return <h1>Loading...</h1>
    }

    const userInfo = localData.map((user) => {
        const {name, username, email, website, id} = user;
        return (
            <tr key={id} onClick={() => openModalInfo(user)}>
                <td >{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{website}</td>
            </tr>
        )
    });

    const thElements = headtTitlesArr.map((title, ind) => {
        return (
            <th 
                onClick={() => sortBy(title.toLowerCase())} 
                key={ind}>
                <span className={styles[title.toLowerCase()]}>{title}</span>
            </th>
        )
    })

    return (
        <div className={styles.tableResponsive}>
            <table className={styles.table}>
                <thead className={styles[activeSortClass]}>
                    <tr>
                        {thElements}
                    </tr>
                </thead>
                <tbody>
                    {userInfo}
                </tbody>
            </table>
        </div>
    )
}

export default UsersTable;
