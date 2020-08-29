import React, {Component} from 'react';
import axios from 'axios';
import { Container, Typography, Paper, Grid,  } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SignedIn from '../layout/SignedIn';
import styles from '../../assets/styles/booksStyle';
import BookItem from './BookItem';

class Books extends Component{

	constructor(){
        super();
		this.state = {
			books : [],
		}
	}

	componentDidMount(){
		axios.get('http://127.0.0.1:8000/booklist')
		.then(response => {
			this.setState({
                 books : response.data,
            });
		});
        console.log("books mounted");
	}

    componentWillUnmount(){
        console.log("boooks umnounted");
    }

	render(){
        console.log(this.state.books);
        const { classes } = this.props;
		return(
			<SignedIn>
                <Container>
                    <Paper variant="outlined" className={classes.paper}>
                        <Typography component="h2" variant="h4" color="primary" className={classes.title} gutterBottom>
                            Books
                        </Typography>
                        <Grid container className={classes.productList} spacing={5}>
                            {this.state.books && this.state.books.map((book) => {
                                return (
                                    <Grid key={book.id} item xs={12} sm={6} md={4}>
                                        <BookItem 
                                            book={book}
                                         />
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Paper>
                 </Container>
            </SignedIn>
		);
	}

}
export default (withStyles(styles)(Books));