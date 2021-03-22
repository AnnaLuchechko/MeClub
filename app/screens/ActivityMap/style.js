import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: null,
        height: null,
        backgroundColor:'#090f2e'
    },
    autoCompleteContainer: {
        margin: 0,
        borderColor: 'red',
        borderWidth: 1,
        overflow: 'visible'
    },
    autoCompleteListContainer: {
        margin: 0,
        paddingHorizontal: 0,
        borderWidth: 1,
        borderColor: 'green'
    },
    autoCompleteList: {
        margin: 0,
        paddingHorizontal: 3
    },
    autoCompleteInput: {
        borderRadius: 3,
        backgroundColor: 'white',
        height: 30,
        marginBottom: 0
    },
    autoCompleteItemText: {
        fontSize: 12
    },
    content: {
        flex: 1,
        width: null,
        height: null,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    activity: {
        width: 66,
        height: 78,
        marginHorizontal: 3
    },
    mapMarker: {
        zIndex: 1000,
    },
    input:{
        borderRadius:3,
        backgroundColor:'white',
        marginLeft:15,
        height:30,
        paddingVertical:0,
        paddingHorizontal:10,
        flex:1
    },
    searchWrap:{
        flexDirection:'row',
        alignItems:'flex-start',
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        paddingHorizontal:20,
        marginTop:10,
        marginBottom: 10,
        backgroundColor: 'transparent'
    },
    btnMap:{
        width:40,
        height:40,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#4a4e62',
    },
    btnMapText:{
        fontSize:9,
        color:'white',
        textAlign:'center'
    },
    timeWrap:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:10,
    },
    btnTimeItem:{
        height:20,
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    btnTimeItemText:{
        fontSize:10,
        color:'#4a4e62',
        textAlign:'center',
    }
});

