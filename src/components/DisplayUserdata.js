import React from "react";
import moment from "moment"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import { borders } from '@material-ui/system';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 15,
    maxWidth: '100%',
  },
  content: {
    padding: 16,
    paddingTop: 0,
},
  media: {
    height: 0,
    paddingTop: '20%', // 16:9
  },
  title:{
    fontSize:20,
    paddingBottom:10
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const DisplayUserdata = (props) =>{
  /*const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };*/

  return (
    <Card elevation={2} borderRadius={50} className="Displayuser">
            <div>
                    <img className="userprofile"  src={`${props.userdata.imgurl}`}></img>
                    <p className="username">{props.userdata.Username}<br></br><span className="flatno">{props.userdata.time}</span></p>
                    
            </div>
    
            <div  >
                <p className="usertitle">{props.userdata.title}</p>
                <p className="usercontent">{props.userdata.content}</p>
            </div>            
            <div className="buttons">
                <button className="comment"> <FavoriteBorderIcon /> <span className="comtimg" > {props.userdata.Likes} Likes </span></button>
                <button className="like" ><ModeCommentOutlinedIcon /><span className="comtimg" > {props.userdata.Replies} Replies</span></button>
            </div>
        </Card>

            
        

    
    )
}
export default DisplayUserdata;
/*<img src="./images/CHAT ICON PNG.png" className="comtimg"></img>
<img src="./images/HEART .png" className="comtimg"></img>
*/
/*
<div className="Displayuser">
<div>
                <img className="userprofile" style={{}} src={`${props.userdata.imgurl}`}></img>
                <p className="username"><b>{props.userdata.Username}</b><br></br><span className="flatno">{props.userdata.flatno}</span></p>
                <p className="postingtime"><img src="./images/clock.png" className="clockimg" style={{}}></img>  {moment(props.userdata.time).fromNow()}</p>
            </div>
            <div  >
                <p className="usertitle">{props.userdata.title}</p>
                <p className="usercontent">{props.userdata.content}</p>
            </div>            
            <div className="buttons">
                <button className="comment"> <FavoriteBorderIcon /> <span className="comtimg" > {props.userdata.Likes}Likes </span></button>
                <button className="like" ><ModeCommentOutlinedIcon /><span className="comtimg" > {props.userdata.Replies}Replies</span></button>
            </div>
    </div>
*/
/*
    <Card boxShadow={2} className={classes.root}>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVertIcon />
                </IconButton>
                }
                title={props.userdata.Username}
                subheader={moment(props.userdata.time).fromNow()}
            />
            <CardContent className={classes.content}>
                <Typography variant="body1" color="textPrimary" component="p" className={classes.title}>
                    {props.userdata.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.userdata.content}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                <ShareIcon />
                </IconButton>
                
            </CardActions>
    </Card>
    <p className="postingtime"><img src="./images/clock.png" className="clockimg" ></img>  {moment(props.userdata.time).fromNow()}</p>
*/