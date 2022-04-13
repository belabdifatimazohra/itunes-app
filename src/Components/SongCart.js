import { React, useState, useEffect } from "react";
import { Card} from "react-bootstrap";
function Song() {

    const [addedSong, setSongsList] = useState();
    // Load All searched songs
    useEffect(() => {
        setSongsList(JSON.parse(localStorage.getItem("addedSongs")));
        
    }, []);
    return (
        <div>
             {addedSong &&
                    addedSong.map((s) => (
                        <Card
                            style={{ width: "18rem", height: "20vh", margin: "20px 0" }}
                            key={s.id}
                        >
                            <Card.Body className="songCard">
                                <Card.Title>{s.track} </Card.Title>
                                <Card.Text>{s.artist}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
        </div>
    );
}

export default Song;