import React from 'react';

const Portfolio = React.forwardRef((props, ref) => {
  return (

    <div className="portfolio--container" ref ={ref}>
      <div className="portfolio--content">
      <h1>MY PORTFOLIO</h1>
      <div className="portfolio--card">
      <p className="card--toptext">JAVASCRIPT, P5JS, SIMULATED EVOLUTION</p>
      <div className="card--flexbox">

      <div className="sketch--container">

<iframe className="iframe" src="https://editor.p5js.org/angelopportunity/full/8BwQvne6W" scrolling="no" height="450"width="710" frameBorder="0">
</iframe>
<div className="card--copy">
<p>If you watch the ships over several generations, you'll notice they tend to move less. The first generation of ships often careen full thrust into the walls, while the 20th generation usually shows ships which barely move. Natural selection selects for ships that have fewer thrust genes.</p>
</div>
</div>
        <div className="card--copy">
 
          <h2>Evolving Ships</h2>
      <p>This is the project that taught me how to code. I saw that natural selection could be simulated in code, and even though I couldn't code, I resolved to learn everything needed to make this project.</p>
      <p>The ships' genes control how they fly, and longer-living ships are more likely to pass on their genes. Mutations and ship geneology is easily tracked by ship color.</p>
      <p></p>
      <p>This project taught me functions, variables, arrays, and object-oriented programming, but most importantly it taught me to think in code. While I was deep in this project, I started to dream in code. I was hooked.</p>
      </div>

</div>
</div>

<p className="card--toptext--right">LUA, LOVE2D, GAMEDEV</p>
<div className="card--flexbox">
  <div className="card--copy">
<h2>Coding Tutorials</h2>
<div className="card--copy--left">
<p>I've always been fascinated by the learning process, and nothing solidifies learning like teaching. I've taught English and German professionally, and I'm currently teaching English Writing on Saturdays. Teaching is something I love to do, and teaching coding is especially rewarding.</p> <p>Teaching requires me to think about how I learned, what ideas I struggled most with, and how I would do things over if I could. Most importantly, teaching forces me to truly understand the subject matter. Whenever I switch my mind into teaching mode, I learn that I don't know things quite as well as I think I did, and I get better. While learning front-end skills, I also learned Lua on the side.</p>
</div>
</div>
<div className="sketch--container--pink">

<iframe className="iframe" width="560" height="315" src="https://www.youtube.com/embed/aho63tCS8KI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<div className="card--copy">
<p>This three-part tutorial series is what I wish I would have had when I had first started learning. I approach the concept of variables, functions, etc. with the idea that the viewer has zero experience at all. When I first started learning, most tutorials would make incorrect assumptions about what I knew or what was intuitive to a beginner.</p>
</div>
</div>
</div>

<p className="card--toptext">REACT, CSS, HTML, DESIGN</p>
<div className="card--flexbox">
      <div className="sketch--container--tan">

      <a href="https://darkstardesign.netlify.app/" target="_blank" rel="noopener noreferrer">
<img className="screenshot" src="coverstore.png"></img></a>
<div className="card--copy">
<p>This site was made with React. It uses a database for the portfolio and the store. I found this important so that I can easily just type some information into the database and throw the .png file into the images folder when I finish a new cover. The site then renders in the new cover onto a card prop.</p>
</div>
</div>
        <div className="card--copy">
 
          <h2>Cover Store</h2>
          <p>Even though I'm winding down my publishing business, I still enjoy making covers. After learning React, I wanted to put my skills to use and make a fully functional site. Rather than making a proof-of-concept site, I decided to make something that I could actually use to sell covers. Premade covers are great because the back-and-forth process with designers can be slow and frustrating. Pre-made covers are usually a niche market designed for people who didn't really know what they were doing, and finding a high-quality pre-made cover was like striking gold. With Darkstar Design, I am trying to fill the niche of high-quality premade book covers.</p>
<p>React was a total game-changer for me. Prior to learning it, using HTML and having separate .js files felt so patchwork. The way that React makes everything feel more like Javascript feels very natural to me.</p>
      </div>

</div>
</div>
</div>



  )
})

export default Portfolio;