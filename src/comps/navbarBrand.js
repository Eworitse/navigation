import React from 'react';
import styled from 'styled-components';
import logo from '../image/soundrave.svg';

const Wrap = styled.div`
display: flex;
position: relative;
align-items: center;
justify-content: center;
`;

const Logo = styled.img`
width: 40px;
height: 40px;
`;

const BrandName = styled.span`
font-size: 1.1em;
font-weight: 500;
margin-left: 10px;
color: #fff;

&:hover{
    color: #cc0;
}
`;

const BrandAnchor = styled.a`
text-decoration: none;

&:hover{
    text-decoration: none;
}
`;

function Brand(props) {
    return(
        <Wrap>
            <BrandAnchor href="/">
                <Logo src={logo} />
                <BrandName>Brand Name</BrandName>
            </BrandAnchor>
        </Wrap>
    );
}

export default Brand;