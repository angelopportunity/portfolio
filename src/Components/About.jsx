import React from 'react'

export default function About() {
    return (
        <div className="about--main">
            <div className="about">
                <div className="about--container">
                    Hey! My name is 
                    <h1>MICHAEL SMITH</h1>
                    <p>I'm a front-end developer with design and marketing background. I used to make and sell books, but I've fallen in love with coding.</p>
                    <button className="about--button">CONTACT ME</button>
                </div>
                <div className="about--image--container">
                    <img className="pixelart" src="public/pixelart.png" alt="Pixel Art"></img>
                    <p>I also do pixel art.</p>
                </div>
            </div>
            <div className="about--more">
                <h1 className="about--bottom--header">ABOUT ME</h1>
                <p className="about--text">My name is Michael Smith. I'm a front-end developer with a background in design, marketing, and education. I am most interested in making functional, aesthetically pleasing designs.</p>
                    <p className="about--text">I founded Darkstar Press in 2016. As Darkstar Press, I wrote, published, and promoted over 50 novels. Early in my publishing career I learned that customers do judge books by their covers.</p>
                    <p className="about--text">In publishing, covers are king, and when I couldn't get the right product from cover designers, I soon started making my own. Designing best-selling covers gave me a strong eye for fonts, colors, and design. To promote my books, I also made my own ad copy and promotional materials. I've carried this skillset over to front-end and webdesign.</p>
                    <p className="about--text">Many years ago, I taught myself Chinese and German, and I approached learning coding with the same mentality. I strongly believe that "the hard way" is always the best way to learn, so I dove in head-first. With no prior coding knowledge, I took on a project that I was passionate about. Making Evolving Ships taught me everything from making a for loop, to a function, to full-on object-oriented programming. I was fascinated that from relatively simple code, I could create a fully functioning simulation of evolution by natural selection could emerge. It was like magic, and I was hooked.</p>
                    <p className="about--text">I want to keep making things. I've since learned Lua and Python, and I build websites using React. My current work-in-progress project is to make a fully self-sufficient ecosystem of creatures that evolve in response to each other. I'm making the simulation in Lua using Love2D, and then I'm going to create a front-end for it in Javascript that lets people set the parameters for how the creatures can mutate.</p>
            </div>
            </div>
    )

}