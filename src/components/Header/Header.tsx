import React from 'react';
import TopHeader from './TopHeader/TopHeader';
import MidHeader from './MidHeader';
import BottomHeader from './BottomHeader/BottomHeader';

const Header = () => {
    return (
        <section>
            <header>
                <TopHeader />
                <MidHeader />
                <BottomHeader />
            </header>
        </section>
    );
};

export default Header;
