import { CircularProgress, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import FriendCard from "./components/FriendCard/FriendCard";
import MyList from "./components/MyList/MyList";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [friends, setFriends] = useState(null);
  const [selectedFriends, setSelectedFriends] = useState([]);
  useEffect(() => {
    const getFriends = async () => {
      const friends = await fetch(
        "https://randomuser.me/api/?results=10"
      ).then((res) => res.json());
      setFriends(friends.results);
      setIsLoading(false);
    };
    getFriends();
  }, []);

  const addFriend = (frnd) => {
    setSelectedFriends((prev) => [...prev, frnd]);
  };

  const removeFriend = (frnd) => {
    let new_frnds = [
      ...selectedFriends.filter((friend) => friend.cell !== frnd.cell),
    ];
    setSelectedFriends(new_frnds);
  };
  return (
    <div className="App">
      {isLoading ? (
        <div className="loading">
          <CircularProgress color="primary" />{" "}
        </div>
      ) : (
        <>
          <Typography
            align="center"
            variant="h4"
            className="main_heading"
            color="primary"
          >
            Friends Recommedation
          </Typography>
          <br />
          <div className="container">
            <div className="card_wrapper">
              {friends.map((friend) => (
                <FriendCard
                  key={friend.cell}
                  friend={friend}
                  addFriend={addFriend}
                />
              ))}
            </div>
          </div>
          <Typography
            variant="h4"
            align="center"
            className="main_heading"
            color="primary"
          >
            Friends Added
          </Typography>
          <div className="container">
            <div className="card_wrapper">
              {selectedFriends.map((friend) => (
                <MyList
                  key={friend.cell}
                  friend={friend}
                  removeFriend={removeFriend}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
