import lightGreen from '@material-ui/core/colors/lightGreen';

const styles = (theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    action: {
        display: 'flex',
    },
    right: {
        justifyContent:'flex-start'
    },
    left: {
        marginRight: 'auto',
    },
     media: 
    {
        paddingTop: '56.25%'
    },
    container: {
        marginTop: 25,
        alignSelf: "auto",
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
    greenButton: {
        color: lightGreen[50],
        boxShadow: "none",
        backgroundColor: lightGreen[500],
        "&:hover": {
            backgroundColor: lightGreen[700],
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
                backgroundColor: lightGreen[500]
            }
        }
    },
    root: 
    {   
        marginBottom:10,
        marginTop:10,
        backgroundColor:"white",
    },
    paper: {
        padding: '2vh',
        display: 'flex',
        overflow: 'auto',
        flexGrow: 1,
        flexDirection: 'row',
        minHeight: '30vh',
        minWidth: '45vw',
        
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1/2),
        top: theme.spacing(1/2),
        color: theme.palette.grey[500],
    },

});


export default styles;