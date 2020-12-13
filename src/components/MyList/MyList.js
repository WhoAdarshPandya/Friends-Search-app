import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import lo from "../../assets/lo.jpg";

function MyList({ friend, removeFriend }) {
  const onClickHandle = () => {
    removeFriend(friend);
  };
  return (
    <div className="card_container">
      <Card className="card">
        <CardActionArea>
          <CardMedia
            className="card_image"
            image={lo}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Avatar src={friend.picture.large} className="avatar" />
            <br />
            <br />
            <h4>
              Name : {friend.name.first} {friend.name.last}
            </h4>
            <h4>Gender : {friend.gender}</h4>
            <h4>Email : {friend.email}</h4>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton
            onClick={() => {
              onClickHandle();
            }}
            color="primary"
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default MyList;
