import React from 'react'
import styled from 'styled-components'
import { Copyright } from './Copyright'
import { MadeWith } from './MadeWith'
import { SocialNetwork } from './SocialNetwork'

const CstDiv = styled.div`
      position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        padding-bottom: 0;
        font-size: 0.75rem;
        font-family: 'Dosis', sans-serif;`

export function Footer() {
    return <CstDiv>
        <SocialNetwork />
        <Copyright />
        <MadeWith />
    </CstDiv>
}
