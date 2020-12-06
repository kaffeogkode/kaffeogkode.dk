import { Link } from 'gatsby'
import React from 'react'

const ProjectPreview = ({p}) => (
    <>
        <h2>{p.title}</h2>
        <p><span dangerouslySetInnerHTML={{ __html: p.excerpt}} /></p>
        <p><Link to={`/projekt/${p.slug}`}>Læs mere</Link></p>
        <hr />
    </>
)

export default ProjectPreview