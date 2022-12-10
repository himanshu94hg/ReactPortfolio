import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './skills.scss'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container skills">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's', ' ', '&']}
              idx={11}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
              idx={18}
            />
          </h1>
          <p>
            Expert in front-end development including technologies like
            <span className="tech-tag"> HTML5</span>,
            <span className="tech-tag"> CSS3</span>,
            <span className="tech-tag"> JavaScript</span>,
            <span className="tech-tag"> React</span>,
            <span className="tech-tag"> Bootstrap</span>,
            <span className="tech-tag"> Sass</span>,
            <span className="tech-tag"> Git</span>, etc.
          </p>
          <p>
            I’m not a designer but I have a good sense of aesthetics, and
            experience in responsive, mobile-first web design. I put special
            effort into optimizing my code and providing the best user
            experience. I would love to give you any kind of support also after
            the project's completion. I guarantee a commitment during work on
            your project.
          </p>
          <p>
            Visit my{' '}
            <a
              id="linkedin"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/himanshugrover-hg/"
            >
              LinkedIn{' '}
            </a>
            profile for more details.
          </p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills
