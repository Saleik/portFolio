import React from 'react'
import { IconLink } from './IconLink'

export const MadeWith = () => {
    return <div className="row text-center">
        <div className="col-md-12">
            Conçu avec React <IconLink name="react" link="https://reactjs.org/" />
        </div>
    </div>

}