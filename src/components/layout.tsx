import React from 'react';
import Header from './header/index'


const Layout = ({ children }: any) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
            
        </div>
    );
}

export default Layout;