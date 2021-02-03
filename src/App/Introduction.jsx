import React from 'react'
import styled from 'styled-components'
import { colorsTheme } from '../ui/colorsTheme'
import { Title } from '../ui/Title'

const CstSection = styled.section`
        background-color: ${colorsTheme.primary};
        width: 100vw; 
        font-family: 'Avenir', 'sans-serif';
        color: white;
        font-size: 1.2rem;
        font-weight: 300;
        padding: 5rem 1.5rem;
        padding-bottom: 14rem;
        margin-top: -1rem;
        @media screen and (min-width: 769px){
            padding-bottom: 16rem;
            margin-top: -.5rem;
        }
    `
export const Introduction = () => {
    return (
        <CstSection>
            <div className="container">
                <div className="row">
                    <div className="text-center col-md-10 offset-md-1">
                        <Title fontSize="1.3rem" fontWeight="400" color="white">Bienvenue ! Moi c'est Kevin, heureux de vous rencontrer.</Title>
                        <p>
                            Après une première expérience de manager, le besoin de revenir à mes premières passions était trop fort. De nature curieux, j'aime partir à la découverte de nouveau framework, essayer de nouvelle features, avec l'objectif d'éprouver continuellement mon code. Mon credo, c'est d'offrir un service technique moderne et une relation client de qualité.
                 </p>
                    </div>
                </div>
            </div>
        </CstSection>


    )
}
