import React from 'react'
import {NavLink, Outlet} from 'react-router-dom';
import { CustomLink } from './CustomLink';

const Layout = () => {
    // className={({isActive}) => isActive ? "კლასის სახელი" : ''}, როცა შენი ვარიანტი გინდა აქტიური კლასისს
    // style={({isActive}) => ({color: isActive ? 'var(--color-active)': "white"})} მეორე ვარიანტი
  return (
    <>
        <header>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/posts">Blog</NavLink>
            <NavLink to="/about">About</NavLink>
            {/* <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/posts">Blog</CustomLink>
            <CustomLink to="/about">About</CustomLink> */}
        </header>
        <main className='container'>
            <Outlet />
        </main>
        <footer className='container'>2022</footer>
    </>
  )
}

export default Layout