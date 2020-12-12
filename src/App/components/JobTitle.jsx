import React from 'react'
import styled from 'styled-components'
import { colorsTheme } from '../../ui/colorsTheme'


const CstH4 = styled.h4`
    font-family:'Oswal-regular', sans-serif;
    width:auto;
    &:hover{
        color: ${colorsTheme.secondary};
    }; `

export const JobTitle = props => {
    return <div className="row">
        <div className="col-md-5">
            <CstH4>{props.title}</CstH4>
        </div>
    </div>


}
