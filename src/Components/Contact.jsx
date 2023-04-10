import React from 'react'

export default function Contact() {
            const [name, setName] = React.useState("");
            const [email, setEmail] = React.useState("");
            const [body, setBody] = React.useState("");
        
            const handleSubmit = (event) => {
                alert('Thank You! I will get back to you as soon as possible.')
            }
        
        return (
            <div className="contactform--container">
                <h1 className="h1--center">LET'S WORK TOGETHER</h1>
                <form className="contactform" onSubmit={handleSubmit} action="https://formbold.com/s/6rKPD" method="POST">
          

                <div className="contact--flex--wrapper">
                <label className="contact--label"><span className="contact--label--wrapper">Name:</span>
                <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} name="name"
                />
                </label>
        
                <label className="contact--label"><span className="contact--label--wrapper">Email:</span>
                <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)} name="email"
                />
                </label>

                </div>
        
                <label className="contact--textarea--label"><span className="contact--textarea--label--wrapper">Your Message:</span></label>
                <textarea className="contact--textarea"
                type="text"
                value={body}
                onChange={(e) => setBody(e.target.value)} name="body"
                />
                
        
                <button className="contact--submitbutton">SUBMIT</button>
                </form>
            </div>
        )
}