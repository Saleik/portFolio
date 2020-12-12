import React from 'react'
import { Button } from '../../ui/Button'
import { JobTitle } from './JobTitle'

export function Header() {
    return <div className="row m-0">
        <div className="col-md-10 my-2">
            <JobTitle title="Freelance Developer" />
        </div>
        <div className="col-md-2 my-2">
            <Button href="#contact">Me Contacter</Button>
        </div>
    </div>
}
