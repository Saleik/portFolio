import React from 'react'
import styled from 'styled-components'
import { colorsTheme } from '../../ui/colorsTheme'

const CstLink = styled.a`
        font-weight: bold;
        color: black;
        &:hover{
            text-decoration: none;
            color: ${colorsTheme.secondary};
        }`

export const Copyright = () => {
    return <div className="m-0 row text-center">
        <div className="col-md-12">
            <p>Copyright © 2020 KURIOS DIGITAL. All rights reserved.-
            <CstLink href='/cgv'>GTC</CstLink>
            </p>
        </div>
    </div>
}
