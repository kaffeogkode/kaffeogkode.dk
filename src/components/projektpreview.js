import { Link } from 'gatsby'
import React from 'react'

const ProjectPreview = ({p}) => (
    <>
        <h2>{p.title}</h2>
        <p>{p.exerpt}</p>
        <Link to={`/projekt/${p.slug}`}>Læs mere</Link>
        <hr />
    </>
)

export default ProjectPreview