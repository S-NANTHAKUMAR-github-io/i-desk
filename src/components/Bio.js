import React from "react"; 
const Bio = () => {
    const editForm = (
        <form className='edit-bio-form'>
            <p>Virat kohli Indian Captian</p>
            <input type="text"id="" placeholder="Add Comments" />
            <br/>
            <button type='button' className="cancel-button">Back</button>
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