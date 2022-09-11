import React from "react";
import "../styles/Main.css"
import "../images/trollface.jpeg"

function Main () {
    //States
    const [memesArray, setMemesArray] = React.useState([]);
    const [meme, setMeme] = React.useState({
        topText: "One does not simply",
        bottomText: "change career in a recession",
        image: "http://i.imgflip.com/1bij.jpg"
    })

    //fetch from imgflip api


    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setMemesArray(data.data.memes))
    }, [meme])

    function getUrl () {
        const randomdigit = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomdigit].url
        setMeme(prevMeme => ({
            ...prevMeme,
            image: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }







    return (
        <div className="Main">
            <input 
            type='text' 
            placeholder="Top Text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
            ></input>

            <input 
            type='text' 
            placeholder="Bottom Text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
            ></input>

            <button onClick={getUrl} className="Main--button">Get A New Meme Image</button>
            <div className="meme">
                <img className="meme--image" src={meme.image} alt="memeimage"></img>
                <h2 className="meme--toptext">{meme.topText}</h2>
                <h2 className="meme--bottomtext">{meme.bottomText}</h2>
            </div>
            
        </div>
    )
}

export default Main