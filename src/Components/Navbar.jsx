import React, { useState } from 'react';
import Logo from '../Assets/Logo.svg';
import { BsCart2 } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOption = [
        {
            id: 1,
            name: 'Home',
            icon: <HomeIcon />
        },
        {
            id: 2,
            name: 'About Us',
            icon: <InfoIcon />
        },
        {
            id: 3,
            name: 'Testimonial',
            icon: <CommentRoundedIcon />
        },
        {
            id: 4,
            name: 'Contact Us',
            icon: <PhoneRoundedIcon />
        },
        {
            id: 5,
            name: 'Cart',
            icon: <ShoppingCartRoundedIcon />
        }
    ]




    return (
        <nav>
            <div className='nav-logo-container'>
                <img src={Logo} alt="logo" />
            </div>
            <div className='navbar-links-container'>
                <a href="/">Home</a>
                <a href="/">About Us</a>
                <a href="/">Testimonial</a>
                <a href="/">Contact Us</a>
                <a href='/'>
                    <BsCart2 className='navbar-cart-icon' />
                </a>
                <button className='primary-button' >Booking Now</button>
            </div>
            <div className='navbar-menu-container'>
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)}
                anchor='right'>
                <Box sx={{ width: 250 }}
                    role='presentation'
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}>
                    <List>
                        {
                            menuOption.map((item) => (
                                <ListItem key={item.id} disablePadding>
                                    <ListItemButton>
                                        <ListItemText primary={item.text} />
                                    </ListItemButton>
                                </ListItem>
                            ))
                        }
                    </List>

                </Box>

            </Drawer>
        </nav>
    )
}

export default Navbar;