import React from 'react'
import styled from 'styled-components'

const CstLink = styled.a`
        font-weight: bold;
        color: black;
        &:hover{
            text-decoration: none;
            color: white;
        }`

export const Copyright = () => {
    return <div className="row text-center">
        <div className="col-md-12">
            <p>Copyright © 2020 KURIOS DIGITAL. All rights reserved.-
            <CstLink href='/cgv'>CGV</CstLink>
            </p>
        </div>
    </div>
}
