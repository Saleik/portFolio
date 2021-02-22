import React from 'react'
import styled from 'styled-components'
import { Button } from '../ui/Button'
import { bgQuiSuisJe, colorsTheme, portrait } from '../ui/colorsTheme'
import { Title } from '../ui/Title'

const CstSection = styled.section`
    position: relative;
    height: 100vh;
    width: 100vw;
    font-family:'Avenir', sans-serif;
    font-size: 1.25rem;
    background: url(${bgQuiSuisJe}) no-repeat center;
    background-size: cover;
    `
const CenterDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media screen and (min-width: 992px){
        transform: translate(-50%, -70%);

    }
    `
const CstImg = styled.img`
    width:12rem;
    @media screen and (max-width: 767px) and (orientation: landscape){
            width: 9rem;
        }    
    `

const CstP = styled.p`
    color: darkgray;
    font-weight: 300;`

export const QuiSuisJe = () => {
    return <CstSection>
        <div className="container mx-0">
            <div className="row">
                <CenterDiv className="col-md-12 text-center">
                    <Title color={colorsTheme.primary} fontSize="2rem" fontFamily="Hammersmith One">Développeur Front-end, Junior</Title>
                    <CstP>Ma mission, coder ce que vous imaginez et ça c'est plutôt sympa.</CstP>
                    <CstImg className="img-fluid" src={portrait} alt="portrait" />
                    <div className="mt-5">
                        <a href="#portfolio"><Button>Mes projets</Button></a>
                    </div>

                </CenterDiv>
            </div>
        </div>
    </CstSection >
}

