import styled from 'styled-components';
import NavBar from './NavBar';
import SecondaryNav from './SecondaryNav';
import SearchNav from './SearchNav';

const Header = () => {
    return (
        <Wrapper>
            <NavBar />
            <SecondaryNav />
            <SearchNav />
        </Wrapper>
    );
};

const Wrapper = styled.nav`
    color: white;
`;

export default Header;
