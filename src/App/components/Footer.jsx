import React from 'react'
import styled from 'styled-components'
import { MadeWith } from './MadeWith'
import { Saying } from './Saying'
import { SocialNetwork } from './SocialNetwork'

const CstDiv = styled.div`
        font-size: 0.75rem;
        font-family: 'Dosis', sans-serif;
         @media screen and (min-width: 768px){
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 0;
            padding-bottom: 0;
        }
    `

export function Footer() {
    return <CstDiv>
        <Saying>"Celui qui travaille avec fatigue mangera avec plaisir."</Saying>
        <SocialNetwork />
        <MadeWith />
    </CstDiv>
}
