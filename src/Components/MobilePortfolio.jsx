import React from 'react'
import Data from './Data'

const MobilePortfolio = React.forwardRef((props, ref) =>
{

    const projectCards = Data.map(project => (
        <div className="portfolio--card--mobile">
          <div className="card--title--mobile">
            <h2>{project.title}</h2>
          </div>
          <div className="card--copy--mobile" dangerouslySetInnerHTML={{__html: project.copy}}>
          </div>
          <div className="sketch--container--mobile">
           <a href={project.url} target="_blank" rel="noopener noreferrer">
            <img className="pic--mobile" src={project.pic}></img></a>
            <div className="pic--caption--mobile" dangerouslySetInnerHTML={{__html: project.caption}}>
            </div>
            <div className="type--mobile">{project.type}</div>
          </div>
        </div>
      ));

    return (
        <div className="portfolio--container--mobile" ref={ref}>
        <h1>MY PORTFOLIO</h1>
        {projectCards}
        </div>
    )
})

export default MobilePortfolio