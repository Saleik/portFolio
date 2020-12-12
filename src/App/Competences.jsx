import React from 'react'
import styled from 'styled-components'
import { bgCompetences } from '../ui/colorsTheme'
import { Section } from '../ui/Section'
import { colorsTheme } from '../ui/colorsTheme'
import { Div } from '../ui/Div'
import { Card } from '../ui/Card'

const CstDiv = styled(Div)`
        border: solid 1px lightgray;
        border-radius: 10px;
        background-color: white;
        box-shadow: lightgrey 1px 1px;
        `
const CstMe = styled.div`
    font-family:'Dosis', sans-serif;
    color:white;
    font-weight: 300;
`
const CstH4 = styled.h4`
    font-family: 'Oswald-regular', sans-serif;
    `

export const Competences = () => {
    return <Section background={bgCompetences}>
        <div className="container">
            <div className="row ">
                <CstMe className="col-md-10 offset-md-1 text-center">
                    <CstH4>Hi! I'm Kevin. Nice to meet you!</CstH4>
                    <p>
                        Lorem ipsum dolor sit amet  consectetur adipisicing elit. Beatae ipsum illo deleniti quos hic? Quidem dolore minima nesciunt ipsum eum labore iste, in itaque sit, inventore quo aliquid laboriosam quaerat!
            </p>
                </CstMe>
            </div>

            <CstDiv className="row w-75 m-0">
                <Card name="desktop" title="Front-end" languages="HTML, CSS, JS, Reactjs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam assumenda debitis illum, quis at explicabo.
            </Card>
                <Card name="code" title="Frameworks" languages="Bootstrap, Sass, Spring">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam assumenda debitis illum, quis at explicabo.
            </Card>
                <Card name="tools" title="Outils" languages={['VScode', 'Github', 'Sourcetree', 'Terminal', 'Yarn', 'Webpack']}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam assumenda debitis illum, quis at explicabo.
            </Card>
            </CstDiv>
        </div>
    </Section >
}
