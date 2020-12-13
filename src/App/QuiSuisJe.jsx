import React from 'react'
import styled from 'styled-components'
import { Nav } from '../ui/Nav.jsx'
import { bgQuiSuisJe, colorsTheme } from '../ui/colorsTheme'
import { Section } from '../ui/Section'
import { Div } from '../ui/Div'

const CstDiv = styled(Div)`
    font-family:'Dosis', sans-serif;
    font-size: 1.25rem;
`
const CstSpan = styled.span`
    font-weight:600;
    color: ${colorsTheme.primary};
    font-size: 1.30rem;`

const CstH4 = styled.h4`
    font-family: 'Oswald-regular', sans-serif;
    color: ${colorsTheme.primary};
    font-weight: bold;
    `
export const QuiSuisJe = () => {
    return <Section background={bgQuiSuisJe}>
        <Nav />
        <div className="container">
            <CstDiv className="w-75">
                <CstH4>Hi! I'm Kevin and i'm french junior Front-end Developer!</CstH4>
                <p>
                    Lorem ipsum <CstSpan>dolor</CstSpan> sit amet  consectetur adipisicing elit. Beatae ipsum <CstSpan>illo</CstSpan> deleniti quos hic? Quidem <CstSpan>dolore</CstSpan> minima nesciunt ipsum eum labore iste, in itaque sit, <CstSpan>inventore</CstSpan> quo aliquid <CstSpan>laboriosam</CstSpan> quaerat!
            </p>
            </CstDiv>
        </div>
    </Section >
}

