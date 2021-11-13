import React , {useEffect , useState} from "react";
import {
  makeStyles,
  Box,
  InputBase,
  Typography,
 
} from "@material-ui/core";
import {MdSearch, MdSettings} from 'react-icons/md';
import {BsBellFill} from 'react-icons/bs';
import firebase from '../firebase/config';

const useStyles = makeStyles((theme) => ({
  topNavWrapper: {
    backgroundColor: "#fff",
    padding: theme.spacing(2.25, 4),
    width: "calc(100% - 0px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  search: {
    backgroundColor: "#EEF2F5",
    borderRadius: "23px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(1, 3),
    width: "300px",
    "& svg": {
      fill: "#878787",
      cursor:'pointer',
    },
  },
  inputRoot: {
    fontSize: "14px",
    flex: 1,
    marginRight: theme.spacing(0.75),
  },
  userDetails: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export const TopNav = () => {

  const [getName , setGetName] = useState([]);
  const [search , setSearch] = useState('');
  const [display , setDisplay] = useState('');
  const [pictures , setPictures] = useState('');

  const classes = useStyles();

  const fetchSearchApi = async() => {
    try {
      const apiKey = 'd00bacaa40dd4ddba1f4c0a9d161ce89';
      const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${apiKey}`);
      const data = await response.json();
      if(response.status === 200){
        console.log(data);
      }else{
        console.log({error:'data sended'});
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getUser = () => {
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        console.log(user);
        setPictures(user.photoURL);
        setDisplay(user.displayName);
        firebase.firestore().collection('users').doc(user.uid).get().then((data)=>{
          console.log(data.data());
          setGetName(data.data());
        }).catch((error)=>{
          console.log({error:'can not read data'});
        })
      }else{
        console.log({error:'user not found'});
      }
    })
  }


  useEffect(() => {
    getUser();
  }, [])


  let name;
  if(getName){
    name = <Box fontWeight="bold">{getName.Fullname}</Box>;
  }else{
    name = <Box fontWeight="bold">{display}</Box>
  }


  return (
    <Box className={classes.topNavWrapper}>
      <div className={classes.search}>
        <InputBase
          placeholder="Search here..."
          onChange={(e)=>{setSearch(e.target.value)}}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
        <div className={classes.searchIcon} onClick={fetchSearchApi}>
          <MdSearch />
        </div>
      </div>
      <Box className={classes.userDetails}>
        <BsBellFill style={{ color: "#878787", fontSize:'1.25rem' }} />
        <MdSettings style={{ color: "#878787", marginLeft: "10px" }} />
        
        <Typography
          variant="body2"
          style={{ marginLeft: "30px", marginRight: "8px" }}
        >
          {name}
        </Typography>
        <img alt="userPic" style={{width:'2rem',borderRadius:'50%'}} src={pictures !== null?pictures:'./images/blank user.svg'} />
      </Box>
    </Box>
  );
};
