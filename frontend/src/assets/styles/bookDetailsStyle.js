const styles = (theme) => ({
    paper: {
        marginTop: '5vh',
        padding: '2vh',
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        minHeight: '70vh',
    },
    title: {
        padding: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(1)
    },
    img: {
        height: 400,
        maxWidth: 400,
        //paddingLeft: theme.spacing(2),
        overflow: 'hidden',
        display: 'block',
        width: '100%',
    },
    root: {
        maxWidth: 400,
        flexGrow: 1,
    },
    container: {
        // marginTop: 25,
        alignSelf: "flex-start",
    },
    right: {
        justifyContent:'center'
    },
    descriptionContainer: {
        align: 'flex-start',
        color: '#616161',
        '& ul':{
            listStyleType: 'none',
            paddingLeft: theme.spacing(2),
            '& li': {
                paddingLeft: '1.3em',
                '&::before': {
                    //content:"x",
                    content: "'\\f00c'", /* FontAwesome Unicode */
                    color: '#616161',
                    fontFamily: 'FontAwesome',
                    //float: 'left',
                    display: 'inline-block',
                    marginLeft: '-1.3em', /* same as padding-left set on li */
                    width: '1.3em' /* same as padding-left set on li */
                }
            },
        },
        
        
    },
    rate: {
        fontFamily: "Ubuntu",
        color: '#616161',
    },
    oldRate: {
        textDecorationLine: 'line-through',
        fontFamily: "Ubuntu",
        marginRight: "1vw",
        color: '#9e9e9e',
        
    },
    shipping: {
        fontFamily: "Ubuntu",
        color: '#616161',
    },
    snackbarcontent: {
        maxWidth: '100%',
        width: '70vh',
        backgroundColor: '#7986cb',
    },
    viewcartbutton:{
        justifyContent: 'center'
    },
});


export default styles;