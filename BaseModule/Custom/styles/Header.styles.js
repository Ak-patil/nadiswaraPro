import { StyleSheet } from 'react-native';
import Colors from '../../../nadiswaraPro/Utils/Color';
import { horizontalScale, moderateScale, verticalScale } from '../../../nadiswaraPro/Utils/Metrics';

export const styles = StyleSheet.create({
    container: {
        paddingTop: verticalScale(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: horizontalScale(16),
        marginBottom: verticalScale(16)
    },

    headerWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    image: {
        width: horizontalScale(45),
        height: verticalScale(45),
        marginRight: horizontalScale(8)
    },

    text: {
        fontSize: moderateScale(16)
    },

    bellButton: {
        borderWidth: 1,
        borderColor: '#E1E2E5',
        width: horizontalScale(45),
        height: verticalScale(45),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: moderateScale(8)
    },

    bellIcon: {
        alignSelf: 'center'
    },

    bellContainer: {
        width: horizontalScale(10),
        height: verticalScale(10),
        backgroundColor: '#FF6464',
        position: 'absolute',
        borderRadius: moderateScale(50),
        right: horizontalScale(0),
        top: verticalScale(0)
    },

    helloText: { color: '#7C7C80', fontSize: 14 },

    userActive: {
        width: horizontalScale(14),
        height: verticalScale(14),
        backgroundColor: Colors.SUCCESS,
        borderRadius: moderateScale(50),
        position: 'absolute',
        right: horizontalScale(5),
        zIndex: 1,
        borderWidth: 1.5,
        borderColor: '#fff'
    },

    backIconWrapper: {
        borderWidth: 1,
        borderColor: '#E1E2E5',
        width: horizontalScale(45),
        height: verticalScale(45),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: moderateScale(8)
    }
});
