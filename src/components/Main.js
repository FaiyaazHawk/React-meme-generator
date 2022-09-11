import React from "react";
import "../styles/Main.css"
import "../images/trollface.jpeg"

function Main () {
    //States
    const [memesArray, setMemesArray] = React.useState([]);
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        image: "http://i.imgflip.com/1bij.jpg"
    })

    //fetch from imgflip api


    React.useEffect(() => {
        console.log("Effect ran")
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

    







    return (
        <div className="Main">
            <input type='text' placeholder="Top Text"></input>
            <input type='text' placeholder="Bottom Text"></input>
            <button onClick={getUrl} className="Main--button">Get A New Meme Image</button>
            <img src={meme.image} alt="memeimage"></img>
        </div>
    )
}

export default Main