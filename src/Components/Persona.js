import React from 'react';
import styled from 'styled-components';

const PersonaWrapper = styled.div`
    box-sizing: border-box;
    position: relative;
    width: 250.8px;
    height: 250.8px;
    background: #FFFFFF;
    border: 2px solid #808080;
    border-radius: 9.6px;
`;

const Rectangle = styled.div`
    position: absolute;
    width: 100%;
    height: 16.8px;
    left: 0px;
    top: 0px;
    border-radius: 9.6px 9.6px 0 0;
    background: ${() => {
        const colors = ['#FF5733', '#6C5CE7', '#5EFB6E', '#FFD700', '#FF1493', '#6495ED']; // List of more unique colors
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }};
`;

const Ellipse = styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 137.4px;
    height: 137.4px;
    left: 57px;
    top: 31.8px;
    border: 2.4px solid #000000;
    border-radius: 50%;
    background-image: url(${props => props.imgUrl});
    background-size: cover;
    background-position: center;
`;

const Text = styled.div`
    position: absolute;
    width: 200px;
    height: 37px;
    left: 25px;
    top: 190.2px;
    font-family: 'Lora';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 150%;
    text-align: center;
    color: #000000;
`;

const Text2 = styled.div`
    position: absolute;
    width: 200px;
    height: 37px;
    left: 25px;
    top: 215.2px;
    font-family: 'Lora';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 150%;
    text-align: center;
    color: #808080;
`;

const Persona = ({ name, pos, imgUrl }) => {
    return (
        <PersonaWrapper>
            <Rectangle />
            <Ellipse imgUrl={process.env.PUBLIC_URL + imgUrl} />
            <Text>{name}</Text>
            <Text2>{pos}</Text2>
        </PersonaWrapper>
    );
};

export default Persona;
