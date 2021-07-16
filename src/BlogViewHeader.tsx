import React from 'react';
import { Navbar, NavbarBrand, Container } from 'reactstrap';

interface BlogViewHeaderProps {
    blogName: string,
    logo: string,
}

const BlogViewHeader = ({ blogName, logo }: BlogViewHeaderProps) =>
    <Navbar className="header navbar sticky-top navbar-dark bg-dark">
        <Container className="justify-content-center">
            <NavbarBrand href="#" style={{ fontFamily: 'Georgia', fontSize: 'xx-large' }}>
                <img src={logo} alt="" width="50" className="d-inline-block align-text-bottom me-3"/>{blogName}
            </NavbarBrand>
        </Container>
    </Navbar>;

export default BlogViewHeader;