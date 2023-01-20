import React from "react"; 
const Bio = () => {
    const editForm = (
        <form className='edit-bio-form'>
            <input type="text"id="" placeholder="Your name" />
            <input type="text"id="" placeholder="About You" />
            <br/>
            <button type='button' className="cancel-button">Cancel</button>
            <button type='button'>Save</button>
        </form>
    )
    return (
        <section className="bio">
            <div className="profile-photo" role="button" title='Click to edit photo'>
            <img src="logo.jpg" alt="profile" />
            </div>
            <div className="profile-info">
                <p className="name">Virat kohli</p>
                <p className="about">Carpediem!</p>
                <a href="#">one.8.com</a><br/>
                <button>Follow</button>
                <button>Message</button>
                {editForm}
            </div>
            
        </section>
    )
}
 export default Bio;