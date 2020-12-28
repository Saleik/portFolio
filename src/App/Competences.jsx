import React from 'react'
import styled from 'styled-components'
import { bgCompetences } from '../ui/colorsTheme'
import { Section } from '../ui/Section'
import { Card } from '../ui/Card'
import { Title } from '../ui/Title'

const BorderCards = styled.div`
        border: solid 1px lightgray;
        border-radius: 10px;
        background-color: white;
        box-shadow: lightgrey 1px 1px;
        `
const Me = styled.div`
    font-family:'Dosis', sans-serif;
    color:white;
    font-weight: 300;
`
const CstDiv = styled.div`
        @media screen and (min-width: 768px){
            height:70vh;
        }
    `

export const Competences = () => {
    return <Section background={bgCompetences}>
        <div className="container">
            <CstDiv className="row align-items-center">
                <div className="col-md-12">
                    <div className="row">
                        <Me className="col-md-12 text-center">
                            <Title fontWeight="400" color="white">Hi! I'm Kevin. Nice to meet you!</Title>
                            <p>
                                Lorem ipsum dolor sit amet  consectetur adipisicing elit. Beatae ipsum illo deleniti quos hic? Quidem dolore minima nesciunt ipsum eum labore iste, in itaque sit, inventore quo aliquid laboriosam quaerat!
                         </p>
                        </Me>
                    </div>
                </div>

                <BorderCards className="row mx-2">
                    <Card icon="desktop" title="Front-end" subtitle="Langages" languages={['HTML', 'CSS', 'JS']}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam assumenda debitis illum, quis at explicabo.
                    </Card>
                    <Card icon="code" title="Frameworks" subtitle="Librairies" languages={['Bootstrap', 'Sass', 'Spring', 'Styled-Components', 'Reactjs']}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam assumenda debitis illum, quis at explicabo.
                    </Card>
                    <Card icon="tools" title="Outils" languages={['VScode', 'Github', 'Sourcetree', 'Terminal', 'Yarn', 'Webpack']}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam assumenda debitis illum, quis at explicabo.
                    </Card>
                </BorderCards>
            </CstDiv>
        </div>
    </Section >
}
