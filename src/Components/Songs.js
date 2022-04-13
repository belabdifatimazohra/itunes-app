import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { BsFillCartCheckFill } from "react-icons/bs";
function Songs() {
    const { search } = useParams();
    const [songs, setSongsList] = useState();
    const [addedSongs, setAddedSongs] = useState([]);
    // Get the songs list with axios
    const getSongs = async () => {
        const response = await axios.get(
            `https://itunes.apple.com/search?term=${search}&entity=song`
        );
        setSongsList(response.data.results);
    };
    const handleClick = (song) => {

        // Check if the song is already in the cart
        addedSongs.find((item) => item.id === song.id) ?

            setAddedSongs(addedSongs.filter(el => el.id !== song.id)) :

            setAddedSongs(prevState => [...prevState, song])

        console.log(addedSongs);
    }
    // Load All searched songs
    useEffect(() => {
        getSongs();
    }, []);
    return (
        <div className="songsList">
            <Link to={`/songs/myCart/`}>
                <BsFillCartCheckFill />
            </Link>

            <div className="songs-container">
                {songs &&
                    songs.map((s) => (
                        <Card
                            style={{ width: "18rem", height: "20vh", margin: "20px 0" }}
                            key={s.trackId}
                        >
                            <Card.Body className="songCard">
                                <Card.Title>{s.trackName} </Card.Title>
                                <Card.Text>{s.artistName}</Card.Text>
                            </Card.Body>

                            <Button
                                className={addedSongs.findIndex(x => x.id === s.trackId) === -1 ? "btnAdd" : "btnRed"}
                                onClick={(e) => handleClick({ id: s.trackId, track: s.trackName, artist: s.artistName })}
                            >
                                {/* Add to cart */}
                                {addedSongs.findIndex(x => x.id === s.trackId) === -1 ? "Add" : "Remove"}
                            </Button>
                        </Card>
                    ))}
            </div>
        </div>
    );
}

export default Songs;
