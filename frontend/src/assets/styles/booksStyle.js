const styles = (theme) => ({
    paper: {
        marginTop: '5vh',
        padding: '2vh',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '75vh',
    },
    productList:{
        display: 'flex',
        flexWrap: 'wrap',
        paddingBottom: '5vh'
    },
    title:{
        padding: '1vh',
    },
    snackbarcontent: {
        maxWidth: '100%',
        width: '70vw',
        backgroundColor: '#7986cb',
        marginTop: theme.spacing(3),
        // '& > * + *': {
        //   marginTop: theme.spacing(1),
        // },
    },
});

export default styles;