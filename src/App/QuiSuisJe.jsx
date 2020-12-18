import React from 'react'
import styled from 'styled-components'
import { Nav } from '../ui/Nav.jsx'
import { bgQuiSuisJe, portrait } from '../ui/colorsTheme'
import { Section } from '../ui/Section'
import { Title } from '../ui/Title'

const CstImg = styled.img`
    max-width:10em;
    max-height:10em;`

const CstDiv = styled.div`
    font-family:'Dosis', sans-serif;
    font-size: 1.25rem;
    height:75vh;
`
const CstP = styled.p`
    color: darkgray;
    font-weight: 300;`

export const QuiSuisJe = () => {
    return <Section background={bgQuiSuisJe}>
        <Nav />
        <div className="container">
            <CstDiv className="row align-items-center">
                <div className="col-md-12 text-center">
                    <Title fontFamily="Hammersmith One">Développeur Front-end, Junior</Title>
                    <CstP>lorem je sais pas mais toi peut etre que non</CstP>
                    <CstImg className="img-fluid" src={portrait} alt="portrait" />
                </div>
            </CstDiv>
        </div>
    </Section >
}

