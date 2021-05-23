import React, { useContext } from 'react'
import UsersTable from '../table';
import SectionWrap from "../section-wrap";
import { AppContext } from "../appContext";
import Overlay from '../overlay';
import Modal from '../modal';

const App = () => {
    
    const { 
        isOverlayActive, 
        activeUser, 
        closeModalInfo,
    } = useContext(AppContext);

    let name, website, address, company, phone;

    console.log('activeUser: ', activeUser);
    if(activeUser) {
        name = activeUser.name;
        phone = activeUser.phone;
        address = activeUser.address;
        company = activeUser.company.name;
        website = activeUser.website;
    }

    return (
        <>
            <SectionWrap sectionClass='users-section'>
                <h1>Our users:</h1>
                <UsersTable/>
            </SectionWrap>
            {isOverlayActive ? <Overlay/> : null}
            {
                activeUser
                ?
                <Modal title={name} closeFunction={closeModalInfo} >
                    <ul className="additional-list">
                        <li>City: <em>{address.city}</em></li>
                        <li>Street: <em>{address.street}</em></li>
                        <li>Zipcode: <em>{address.zipcode}</em></li>
                        <li>Company: <em>{company}</em></li>
                        <li>Phone: <a href={`tel:${phone}`}>{phone}</a></li>
                        <li>Website: <a href={`http://${website}`}>{website}</a></li>
                    </ul>
                </Modal> 
                :
                null
            }
        </>
    )
}

export default App;
