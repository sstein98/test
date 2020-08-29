import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {  Typography } from '@material-ui/core';
import styles from '../../assets/styles/bookItemStyle';


class BookItem extends Component {


    render(){
    	const { book, classes} = this.props;
        return(
            <Card className={classes.card}>
                <CardMedia
                className={classes.cardMedia}
                //image={product.imgUrl[0]}
                />
                <CardContent className={classes.cardContent}>
                    <Typography variant="h5" component="h2" style={{fontWeight: '600', fontFamily: 'Quicksand'}}>
                        {book.name}
                    </Typography>
                    <Typography>
                        {book.author}
                    </Typography>
 
                    <Typography gutterBottom variant= "body2" className={classes.shipping} >
                            Genre : { book.genre}
                    </Typography>

                </CardContent>
                <CardActions className={classes.action}  >
                    <Button size="small" color="primary" component={Link} to={`/${book.id}`} >
                        more
                    </Button>
                    <Button size="small" color="primary" component={Link} to={`#`} >
                        Add
                    </Button>
                </CardActions>
            </Card>
        )
    }
}

export default (withStyles(styles)(BookItem));