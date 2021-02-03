import React from 'react'
import styled from 'styled-components'
import { MadeWith } from './components/MadeWith'
import { Saying } from './components/Saying'
import { SocialNetwork } from './components/SocialNetwork'
import { colorsTheme } from '../ui/colorsTheme'


const CstSection = styled.section`
    background-color: ${colorsTheme.primary};
    height: 100%;
    width: 100vw;
    margin-top: -5rem;

    @media screen and(min-width: 768px){
        margin-top: -3rem;
    }
    `
export function Footer() {
    return <CstSection>
        <div className="container">
            <div className="row">
                <div className="col-md-12 d-flex flex-column align-items-center justify-content-center">
                    <Saying>"Celui qui travaille avec fatigue mangera avec plaisir."</Saying>
                    <SocialNetwork />
                    <MadeWith />
                </div>
            </div>
        </div>
    </CstSection>

}
