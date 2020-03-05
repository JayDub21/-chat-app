import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typorgraphy from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { CTX } from "./Store";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "50px",
    padding: theme.spacing(3, 2)
  },
  flex: {
    display: "flex",
    alignItems: "center"
  },
  listingCard: {
    width: "30%",
    height: "300px",
    borderRight: "1px solid grey"
  },
  chatWindow: {
    width: "70%",
    height: "300px",
    padding: "20px"
  },
  chatBox: {
    width: "85%"
  },
  btn: {
    width: "15%"
  }
}));

export default function Dashboard() {
  const classes = useStyles();

  // CTX Store
  const { allChats, sendChatAction, user } = React.useContext(CTX);

  console.log({ allChats });

  const listings = Object.keys(allChats);

  // local state
  const [activeListing, changeActiveListing] = React.useState(listings[0]);
  const [textValue, changeTextValue] = React.useState("");

  //   handleKeyPress = event => {
  //     if (event.key === "Enter") {
  //         console.log("enter was pressed");
  //     }
  //   };

  return (
    <div>
      <Paper className={classes.root}>
        <Typorgraphy variant="h4" component="h4">
          Chat App
        </Typorgraphy>
        <Typorgraphy variant="h5" component="h5">
          {activeListing}
        </Typorgraphy>
        <div className={classes.flex}>
          <div className={classes.listingCard}>
            <List>
              {listings.map(listing => (
                <ListItem
                  onClick={e => changeActiveListing(e.target.innerText)}
                  key={listing}
                  button
                >
                  <ListItemText primary={listing}></ListItemText>
                </ListItem>
              ))}
            </List>
          </div>
          <div className={classes.chatWindow}>
            {allChats[activeListing].map((chat, i) => (
              <div className={classes.flex} key={i}>
                <Chip label={chat.from} className={classes.chip} />
                <Typorgraphy variant="body1" gutterBottom>
                  {chat.msg}
                </Typorgraphy>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.flex}>
          <TextField
            label="Send a chat"
            className={classes.chatBox}
            value={textValue}
            onChange={e => changeTextValue(e.target.value)}
            onKeyPress={event => {
              if (event.key === "Enter") {
                console.log("enter was pressed");
                sendChatAction({
                  from: user,
                  msg: textValue,
                  listing: activeListing
                });
                changeTextValue("");
              }
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={() => {
              sendChatAction({
                from: user,
                msg: textValue,
                listing: activeListing
              });
              changeTextValue("");
            }}
          >
            Send
          </Button>
        </div>
      </Paper>
    </div>
  );
}
