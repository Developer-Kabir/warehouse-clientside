import React from 'react';
import './Header.css'
import ContactHeader from '../Contact Header/ContactHeader';
import Menubar from '../Menubar/Menubar';


const Header = () => {
    return (
        <div className='main-header'>
            <ContactHeader></ContactHeader>
            <Menubar></Menubar>
        </div>
    );
};

export default Header;