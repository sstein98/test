import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SignedIn from '../layout/SignedIn';
import { Grid, Paper, Typography,Container, Divider } from '@material-ui/core';
import { withStyles, withTheme } from '@material-ui/core/styles';
import styles from '../../assets/styles/bookDetailsStyle';
import Button from '@material-ui/core/Button';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';




class BookDetails extends Component{

	constructor(props){
		super(props);
		this.state = {
			book : [],
		}
		this.componentDidMount = this.componentDidMount.bind(this);
	}

	componentDidMount(){
		console.log(this.props);
		const id = this.props.match.params.id;
		axios.get(`http://127.0.0.1:8000/${encodeURIComponent(id)}`)
		.then(response => {
			this.setState({
				book : response.data,
			});
						console.log(response.data);
		});
	}

	render(){
		console.log(this.props);
		const { classes } = this.props;
		//const id = this.props.match.params.id;
		return(
			<SignedIn>
				<Grid container>
					<Grid item xs={12} >
						<Paper variant="outlined" className={classes.paper}>
						    <Container >

                                <Typography component="h2" variant="h4" className={classes.title} color="primary" gutterBottom>
									 <IconButton component={Link} to={`/`} color="primary" >
									  <KeyboardBackspaceIcon fontSize="default"  /> 
									 </IconButton>
									 {this.state.book.name}
                                </Typography>
                                <Grid container direction="row" justify="center" alignItems="center" spacing={3} >
                                	<Grid item xs={12} md={8}  className={classes.container} >
					                	<Card variant="outlined">
							                <CardMedia
							                	className={classes.cardMedia}
							                //image={product.imgUrl[0]}
							                />					                		
					                    </Card>

								    </Grid>
								    <Grid item xs={12} md={4} className={classes.container}>
										<Typography align='left' variant='h5' style={{fontWeight: '600', fontFamily: 'Quicksand'}} >
								    		{this.state.book.author}
								    	</Typography>   
					                    

										<Divider />
								    	<Typography align='left' variant='subtitle1' gutterBottom>
								    	<p className={classes.descriptionContainer} dangerouslySetInnerHTML={{__html: this.state.book.description}}/>
								    	</Typography>
								    	<Typography align='center' className={classes.right}>

								    	</Typography>
								    </Grid>
                                </Grid>
                            </Container>
						</Paper>
					</Grid>
				</Grid>
			</SignedIn>

			);
	}
}

export default (withTheme(withStyles(styles)(BookDetails)));