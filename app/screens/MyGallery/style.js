import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container:{
        flex:1,
    },
    active: {
        backgroundColor: '#fff',
    },
    viewIcon: {
        width: 20,
        height: 20,
    },
    albumGridRow: {
        flexDirection: 'row'
    },
    albumGridItem: {
        width: screenWidth / 3,
        height: screenWidth / 3,
        flex: 1
    },
    albumItemDetail: {
        backgroundColor: '#fff',
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
    },
    albumItemActions: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    albumItemActionIcon: {
        flex: 1,
    },
    albumItemLikeCount: {
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 16,
        color: '#000'
    },
    albumItemCaption: {
        color: "#000",
        fontSize: 16,
    },
    albumItemHash: {
        color: '#013667',
        fontSize: 16
    },
    albumItemPostTime: {
        opacity: .7,
        fontSize: 16,
    },
    albumViewPickerRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    albumViewType: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#777a81',
        paddingTop: 10,
        paddingBottom: 10,
    },
    albumSocialMediaBtn: {

    }
});
