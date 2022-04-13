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
                className="btnAdd"
                onClick={(e) => setAddedSongs({id: s.trackId, track: s.trackName, artist: s.artistName})}
              >
                {/* Add to cart */}
                {/* {JSON.stringify(addedSongs).includes(JSON.stringify({id: s.trackId, track: s.trackName, artist: s.artistName})) ? "Remove" : "Add"} */}
                {addedSongs.findIndex(x => x.id === s.trackId) === -1 ? "Add" : "Remove"}
              </Button>
            </Card>
          ))}
      </div>
    </div>
  );
}

export default Songs;
