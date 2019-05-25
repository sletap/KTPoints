import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    // About_Me Page Stuff
    iconPadding: {
       margin: 4,
    },
    phonePadding: {
        marginLeft: 8,
        marginRight: 8,
    },
    userName: {
        paddingTop: 8,
        fontSize: 30,
        color: '#2c3e50',
        justifyContent: 'center',
        alignItems: 'center',
    },
    userStatus: {
        paddingTop: 8,
        fontSize: 22,
        color: '#2c3e50',
        justifyContent: 'center',
        alignItems: 'center',
      },
    buttonContainer:{
        backgroundColor: '#2c3e50',
        paddingVertical: 20,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 32,
    },
    mask: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 147,
        height: 137,
        borderRadius: 8,
        backgroundColor: "#d8d8d8",
        shadowColor: "rgba(0, 0, 0, 0.5)",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowRadius: 4,
        shadowOpacity: 1,
        paddingBottom: 8,
      },
    buttonText:{
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '700'
    }, 
    loginButton:{
      backgroundColor:  '#2c3e50',
       color: '#fff'
    },
    text_style:{
         fontSize: 22,
         textAlign: 'left',
         color: '#fff'
    },
    last_item:{
        marginTop: 32,
        marginBottom: 24,
    },
    gradientBackground:{
        position: 'absolute', 
        top: 0, 
        bottom: 0, 
        left: 0, 
        right: 0,
    },
    fullScreen: {
        flex: 1,
    },
    headerContentStyle: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center' 
    },
    changePassword: {
        maxWidth: 250,
    },
    // Spacing
    pb0: {
        paddingBottom: 0,
    },
});