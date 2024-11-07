import { StyleSheet } from 'react-native';
import Colors from '../../../nadiswaraPro/Utils/Color';
import { horizontalScale, moderateScale, verticalScale } from '../../../nadiswaraPro/Utils/Metrics';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    signupImage: {
        width: '60%',
        height: verticalScale(250),
        alignSelf: 'center',
        marginTop: verticalScale(30)
    },

    getStartedText: { textAlign: 'center', fontSize: moderateScale(24) },

    accountCreateText: {
        textAlign: 'center',
        color: Colors.NEUTRAL.NEUTRAL_SHADOW_MOUNTAIN,
        fontSize: moderateScale(15),
        marginTop: verticalScale(5),
        marginHorizontal: horizontalScale(16)
    },

    inputContainer: {
        marginHorizontal: '16',
        marginTop: verticalScale(30),
        rowGap: moderateScale(25)
    },

    input: {
        height: verticalScale(55),
        marginHorizontal: horizontalScale(16),
        borderRadius: moderateScale(8),
        paddingLeft: horizontalScale(35),
        fontSize: moderateScale(16),
        backgroundColor: 'white',
        color: 'black'
    },

    icon1: {
        position: 'absolute',
        left: horizontalScale(24),
        top: verticalScale(17)
    },

    icon2: {
        position: 'absolute',
        left: horizontalScale(24),
        top: verticalScale(17.8),
        marginTop: verticalScale(-2)
    },

    visibleIcon: {
        position: 'absolute',
        right: horizontalScale(30),
        top: verticalScale(15)
    },

    buttonContainer: {
        backgroundColor: Colors.PRIMARY.PRIMARY_RETRO_BLUE,
        padding: moderateScale(16),
        borderRadius: moderateScale(50),
        marginHorizontal: horizontalScale(16)
    },

    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: moderateScale(16)
    },

    signupRedirect: {
        flexDirection: 'row',
        marginHorizontal: horizontalScale(16),
        justifyContent: 'center',
        marginBottom: verticalScale(20)
    },

    signupTextStyle: { fontSize: moderateScale(18) },

    signupText: {
        color: Colors.PRIMARY.PRIMARY_RETRO_BLUE,
        marginLeft: horizontalScale(5)
    },

    errorText: {
        color: 'red',
        fontSize: moderateScale(11),
        marginTop: -1
    },

    errorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: horizontalScale(16),
        position: 'absolute',
        top: verticalScale(45)
    },

    errorText1: {
        color: 'red',
        fontSize: moderateScale(11),
        marginTop: -1
    },

    errorContainer1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: horizontalScale(16),
        position: 'absolute',
        top: verticalScale(55)
    }
});

export default styles;
