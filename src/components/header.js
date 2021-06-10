import { AppBar, Toolbar,Button, IconButton,Typography, makeStyles, Container, Drawer,List,ListItem,ListItemIcon, ListItemText, Divider } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useState} from "react";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';


const useStyles = makeStyles({
   root: {
       marginBottom : 30,
   },
    title: {
       flex: 1,
   } ,
   list: {
       width: 250,
   }
});
const Header = () => {
    const classes = useStyles();
    const [state, setState] = useState(false);

    const toggleDrawer =(toggle) => (event)=>{
        if(
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "shift")
        ) {
            return;

        }
        setState(toggle);
    }
    const list = () => (
        <div 
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
        <List>
            <ListItem button>
                <ListItemIcon>
                    <HomeOutlinedIcon/>
                </ListItemIcon>
                    <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <HomeOutlinedIcon/>
                </ListItemIcon>
                    <ListItemText primary="About" />
            </ListItem>

        </List>
        <Divider/>
        <List>
            <ListItem button>
                <ListItemIcon>
                    <HomeOutlinedIcon/>
                </ListItemIcon>
                    <ListItemText primary="Settings" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <HomeOutlinedIcon/>
                </ListItemIcon>
                    <ListItemText primary="Login" />
            </ListItem>

        </List>
        </div>
    );
    return (
        <div className={ classes.root}>
            <AppBar position="static">
                <Container>
                    <Toolbar>
                        <IconButton 
                            color="inherit" 
                            edge="start" 
                            aria-label="Menu"
                            
                            onClick={ toggleDrawer(true) } > 
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title} >React Material ui</Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </Container>        
            </AppBar>
            <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
                {list}
            </Drawer>
        </div>
                
    );
}
export default Header;
