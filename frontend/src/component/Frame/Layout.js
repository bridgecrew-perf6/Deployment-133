import React from 'react'
import Main from './Main'
import { Outlet } from 'react-router';

const Layout = () => {
    return (
        <Main >
            <Outlet />
        </Main>
    )
}

export default Layout