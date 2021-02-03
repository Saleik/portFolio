import React from 'react'
import { QuiSuisJe } from './QuiSuisJe'
import { Competences } from './Competences';
import { Contact } from './Contact';
import { Portfolio } from './PortFolio';
import { Nav } from '../ui/Nav';
import { logo } from '../ui/colorsTheme';
import { Footer } from './Footer';
import { Introduction } from './Introduction';


export function Site() {
    return <>
        <Nav brand={logo} />
        <QuiSuisJe />
        <Introduction />
        <Competences />
        <Portfolio />
        <Contact />
        <Footer />
    </>
}
