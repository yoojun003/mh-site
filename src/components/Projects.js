import React from 'react'
import Img from 'gatsby-image'

const Project = ({ project }) => (
    <article className="6u 12u$(xsmall) work-item">
        <a href={project.node.frontmatter.github} target="__blank" className="image fit">
            <Img sizes={project.node.frontmatter.image.childImageSharp.sizes} />
        </a>

        <h3>{project.node.frontmatter.title}</h3>
        <p>{project.node.frontmatter.description}</p>

        <ul className="actions">
            <li>
                <p>
                    More on{' '}
                    <a href={project.node.frontmatter.github} target="__blank" className="icon fa-github">
                        <span className="label">Github</span>
                    </a>
                </p>
            </li>
        </ul>
    </article>
)

const Projects = ({ projects }) => (
    <div>
        <h2>Stuff I've Worked On</h2>
        <div className="row">
            {projects.map(project => (
                <Project key={project.node.frontmatter.title} project={project} />
            ))}
        </div>
    </div>
)

export default Projects
