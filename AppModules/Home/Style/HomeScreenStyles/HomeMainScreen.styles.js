import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Colors from '../../../../nadiswaraPro/Utils/Color';
import { horizontalScale, moderateScale, verticalScale } from '../../../../nadiswaraPro/Utils/Metrics';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    categoryContainer: {
        flex: 1,
        paddingLeft: horizontalScale(16)
    },

    topCategoryWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: verticalScale(20),
        alignItems: 'center'
    },

    topCategoryText: {
        fontWeight: 'bold',
        fontSize: responsiveFontSize(3),
        color: '#000000'
    },

    seeAllButtonText: {
        color: Colors.PRIMARY.PRIMARY_RETRO_BLUE,
        fontSize: responsiveFontSize(2.3),
        paddingRight: 16
    },

    touchableContainer: {
        width: responsiveWidth(43),
        height: responsiveHeight(23),
        backgroundColor: Colors.NEUTRAL.NEUTRAL_WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: moderateScale(10),
        marginHorizontal: horizontalScale(5),
        marginTop: verticalScale(16)
    },

    touchableImage: {
        width: responsiveWidth(12.5),
        height: responsiveWidth(12.5)
    },

    touchableCategory: {
        fontWeight: '700',
        fontSize: responsiveFontSize(2.5),
        marginTop: verticalScale(10),
        color: Colors.NEUTRAL.NEUTRAL_DARK_VOID,
        textAlign: 'center'
    },

    touchableCourses: {
        color: Colors.NEUTRAL.NEUTRAL_SHADOW_MOUNTAIN,
        fontSize: responsiveFontSize(2),
        marginTop: verticalScale(5)
    },

    touchableImageWrapper: {
        width: horizontalScale(20),
        height: verticalScale(20),
        borderRadius: moderateScale(50),
        justifyContent: 'center',
        alignItems: 'center'
    }
});
