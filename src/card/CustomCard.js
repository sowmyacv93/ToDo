
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core"; 
const useStyles = makeStyles({
    root:{
        marginBottom:30,
    },
     title: {
        flex:1,
    } ,
 });

const CustomCard = ({item,onDelete}) => {
    const classes = useStyles();
    return(
        <Card>
            <CardActionArea>
                <CardContent>
                    <Typography variant="h5">{item.title}</Typography>
                    <Typography variant="body2">{item.details}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size ="small" color="primary">Share</Button>
                <Button size ="small" color="primary" onClick={onDelete(item.id)}>Delete</Button>
            </CardActions>
        </Card>
    );
}
export default CustomCard;