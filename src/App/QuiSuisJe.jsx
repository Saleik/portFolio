import React from 'react'
import styled from 'styled-components'
import { Nav } from '../ui/Nav.jsx'
import { bgQuiSuisJe, portrait } from '../ui/colorsTheme'
import { Section } from '../ui/Section'
import { Title } from '../ui/Title'
import { logo } from '../ui/colorsTheme'

const CstImg = styled.img`
    width:60%;
    @media (min-width: 768px){
        width:40%;
        }
        @media screen and (max-width: 767px) and (orientation: landscape){
            width: 20%;
        }`

const CstDiv = styled.div`
    font-family:'Dosis', sans-serif;
    font-size: 1.25rem;
    height: 100%;
    padding-top: 2em;
    @media screen and (min-width: 768px){
             height:75vh;
        }

`
const CstP = styled.p`
    color: darkgray;
    font-weight: 300;`

export const QuiSuisJe = () => {
    return <Section background={bgQuiSuisJe}>
        <Nav brand={logo} />
        <div className="container">
            <CstDiv className="row align-items-center">
                <div className="col-md-12 text-center">
                    <Title fontSize="2em" fontFamily="Hammersmith One">Développeur Front-end, Junior</Title>
                    <CstP>Ma mission, coder ce que vous imaginez et ça c'est plutôt sympa.</CstP>
                    <CstImg className="img-fluid" src={portrait} alt="portrait" />
                </div>
            </CstDiv>
        </div>
    </Section >
}

