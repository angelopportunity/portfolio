import React from 'react';

export default function Portfolio() {
  return (
    <div className="portfolio--container">
      <div className="white--wrap">
      <h1>EVOLVING SHIPS</h1>
      <p>This is the project that taught me how to code. I saw that natural selection could be simulated in code, and importantly I saw just how simple the fundamental idea was. I knew I could do it, and even though I didn't even know what a variable or a function was, I resolved to code natural selection on my own.</p>
      <p>This project was made in p5js, which is a simple physics library for Javascript. Each ship has genes corresponding to a grid on the canvas. For each grid location, a ship has 20 genes which contain random combinations of thrust and turn directions. A ship can turn left right, or not at all; and it can thrust forward, backward, or not at all. When a ship hits a wall, it loses half of its "life," and when its life reaches zero, it explodes. The ships track their lifespans, and when all ships in a population have exploded, a new population is formed by crossing over the genes of the ships with the longest lifespans. A random chance of mutation is also possible. Child ships mix colors from their parents, while mutated ships take on a new random color so that mutations are easily visible.</p>
      <p>If you watch the ships over several generations, you'll notice they tend to move less. The first generation of ships often careen full thrust into the walls, while the 20th generation usually shows ships which barely move. Natural selection selects for ships that have fewer thrust genes.</p>
      <p>This project taught me functions, variables, and object-oriented programming, but most importantly it taught me to think in code. While I was deep in this project, I started to dream in code. I was hooked.</p>
<div className="sketch--container">
<iframe className="iframe" src="https://editor.p5js.org/angelopportunity/full/8BwQvne6W" scrolling="no" height="450"width="710" frameBorder="0">
</iframe>
</div>
</div>
<h1>CODING TUTORIALS</h1>
<p>I've always been fascinated by the learning process, and it's always been greatly beneficial to my own learning to teach what I know. I've taught English and German professionally, and I'm currently teaching English Writing on Saturdays. Teaching is something I love to do, and teaching coding is especially rewarding. Teaching requires me to think about how I learned, what ideas I struggled most with, and how I would do things over if I could. Most importantly, teaching forces me to truly understand the subject matter. Whenever I switch my mind into teaching mode, I learn that I don't know things quite as well as I think I did, and I get better.</p>
<p>While learning front-end skills, I also wanted to try some other languages. I learned Lua so that I could use Love2d, which is a framework that has no GUI and runs much faster than p5js. This three-part tutorial series is what I wish I would have had when I had first started learning to code. I approach the concept of variables, functions, and other coding basics with the idea that the viewer has zero experience at all coding. When I first started learning, most tutorials would make incorrect assumptions about what I knew or what was intuitive to a beginner.</p>
<iframe className="iframe" width="560" height="315" src="https://www.youtube.com/embed/aho63tCS8KI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<h1>COVER STORE</h1>
<p>Even though I'm winding down my publishing business, I still enjoy making covers. After learning React, I wanted to put my skills to use and make a fully functional site. Rather than making a proof-of-concept site, I decided to make something that I could actually use to sell covers. The main reason I turned to making my own covers many years ago was because the back-and-forth process with designers was often incredibly frustrating. Pre-made covers were usually a niche market designed for people who didn't really know what they were doing, and finding a high-quality pre-made cover was like striking gold. With Darkstar Design, I am trying to fill the niche of high-quality premade book covers. Seeing a design that you know is good is much less risky than paying a designer up-front and hoping they can produce what you need before your publishing deadlines hit. </p>
<p>This site was made with React. It uses a database for the portfolio and the store. I found this important so that I can easily just type some information into the database and throw the .png file into the images folder when I finish a new cover. The site then renders in the new cover onto a card prop.</p>
<p>React was a total game-changer for me. Prior to learning it, using HTML and having separate .js files felt so patchwork. The way that React makes everything feel more like Javascript feels very natural to me.</p>
</div>

  )
}