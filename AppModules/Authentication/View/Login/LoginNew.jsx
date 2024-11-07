import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Border, Color, FontFamily, FontSize, Gap, Padding } from '../../Utils/GlobalStyles';

const Login = () => {
    return (
        <LinearGradient
            style={[styles.login, styles.loginLayout]}
            locations={[0, 1]}
            colors={['#6a00b8', '#cb14ba']}
            useAngle={true}
            angle={180}>
            <View style={[styles.loginChild, styles.groupItemBorder]} />
            <Image style={[styles.oohyLogoCopy1, styles.loginToYourPosition]} resizeMode="cover" source="OOHY logo copy 1.png" />
            <View style={styles.loginItem} />
            <Text style={[styles.forgotPassword, styles.loginTypo]}>Forgot password?</Text>
            <Text style={[styles.loginToYour, styles.loginToYourClr]}>Login to your existing account using your email and password.</Text>
            <Text style={[styles.login1, styles.loginTypo]}>Login</Text>
            <View style={[styles.textField, styles.textPosition]}>
                <Text style={[styles.existingAccountNumber, styles.dontHaveAnContainerTypo]}>Email address</Text>
                <Image style={[styles.textFieldChild, styles.loginLayout]} resizeMode="cover" source="Vector 981.png" />
            </View>
            <View style={[styles.textField1, styles.textPosition]}>
                <Text style={[styles.existingAccountNumber, styles.dontHaveAnContainerTypo]}>Password</Text>
                <Image style={[styles.textFieldChild, styles.loginLayout]} resizeMode="cover" source="Vector 981.png" />
            </View>
            <Image style={styles.visibilityIcon} resizeMode="cover" source="visibility.png" />
            <View style={[styles.rectangleParent, styles.groupPosition]}>
                <View style={[styles.groupChild, styles.groupPosition]} />
                <Text style={[styles.login2, styles.loginTypo]}>Login</Text>
            </View>
            <View style={[styles.rectangleGroup, styles.groupPosition]}>
                <View style={[styles.groupItem, styles.groupPosition]} />
                <View style={[styles.continueWithGoogleParent, styles.iosLightRdSi4x1IconLayout]}>
                    <Text style={[styles.continueWithGoogle, styles.loginTypo]}>Continue with google</Text>
                    <Image
                        style={[styles.iosLightRdSi4x1Icon, styles.iosLightRdSi4x1IconLayout]}
                        resizeMode="cover"
                        source="ios_light_rd_SI@4x 1.png"
                    />
                </View>
            </View>
            <Text style={[styles.dontHaveAnContainer, styles.dontHaveAnContainerPosition]}>
                <Text style={styles.dontHaveAn}>{`Don’t have an account? `}</Text>
                <Text style={[styles.signup, styles.signupClr]}>Signup</Text>
            </Text>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    loginLayout: {
        overflow: 'hidden',
        width: '100%'
    },
    groupItemBorder: {
        borderWidth: 1,
        borderStyle: 'solid',
        top: 0
    },
    loginToYourPosition: {
        left: '50%',
        position: 'absolute'
    },
    loginTypo: {
        textAlign: 'left',
        fontWeight: '500',
        left: '50%',
        position: 'absolute'
    },
    loginToYourClr: {
        color: Color.colorGray_100,
        fontFamily: FontFamily.clashGrotesk
    },
    textPosition: {
        gap: Gap.gap_md,
        paddingTop: Padding.p_11xl,
        width: 305,
        marginLeft: -152.5,
        backgroundColor: Color.colorWhite,
        left: '50%',
        position: 'absolute'
    },
    dontHaveAnContainerTypo: {
        fontSize: FontSize.size_base,
        textAlign: 'left'
    },
    groupPosition: {
        height: 50,
        width: 305,
        marginLeft: -152.5,
        left: '50%',
        position: 'absolute'
    },
    iosLightRdSi4x1IconLayout: {
        height: 30,
        position: 'absolute'
    },
    dontHaveAnContainerPosition: {
        marginLeft: -105.5,
        left: '50%'
    },
    signupClr: {
        color: Color.colorIndigo,
        fontFamily: FontFamily.clashGrotesk
    },
    loginChild: {
        marginLeft: -196.5,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowRadius: 4,
        elevation: 4,
        backgroundColor: '#572673',
        borderColor: '#000',
        width: 393,
        height: 404,
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: 4
        },
        borderStyle: 'solid',
        left: '50%',
        position: 'absolute'
    },
    oohyLogoCopy1: {
        marginTop: -372.78,
        marginLeft: -120.5,
        width: 240,
        height: 164,
        top: '50%'
    },
    loginItem: {
        top: 229,
        left: 24,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowRadius: 20,
        elevation: 20,
        borderRadius: 20,
        width: 345,
        height: 573,
        backgroundColor: Color.colorWhite,
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: 4
        },
        position: 'absolute'
    },
    forgotPassword: {
        marginLeft: 37.5,
        top: '58.8%',
        color: Color.colorIndigo,
        fontFamily: FontFamily.clashGrotesk,
        fontSize: FontSize.size_sm
    },
    loginToYour: {
        marginLeft: -138.5,
        top: '34.04%',
        textAlign: 'center',
        width: 277,
        fontSize: FontSize.size_sm,
        left: '50%',
        position: 'absolute'
    },
    login1: {
        marginLeft: -29.5,
        top: '29.69%',
        fontSize: 24,
        color: Color.colorGray_200,
        fontFamily: FontFamily.clashGrotesk
    },
    existingAccountNumber: {
        color: Color.colorGray_100,
        fontFamily: FontFamily.clashGrotesk
    },
    textFieldChild: {
        alignSelf: 'stretch',
        maxWidth: '100%',
        maxHeight: '100%'
    },
    textField: {
        top: 348
    },
    textField1: {
        top: 430
    },
    visibilityIcon: {
        top: 462,
        left: 329,
        width: 20,
        height: 20,
        position: 'absolute'
    },
    groupChild: {
        backgroundColor: Color.colorIndigo,
        top: 0,
        borderRadius: Border.br_11xl
    },
    login2: {
        marginTop: -12,
        marginLeft: -24.5,
        fontSize: 20,
        color: Color.colorWhite,
        fontFamily: FontFamily.clashGrotesk,
        top: '50%'
    },
    rectangleParent: {
        top: 542
    },
    groupItem: {
        borderColor: '#989a99',
        borderWidth: 1,
        borderStyle: 'solid',
        top: 0,
        borderRadius: Border.br_11xl
    },
    continueWithGoogle: {
        marginTop: -11,
        marginLeft: -66,
        fontSize: 18,
        fontFamily: FontFamily.robotoMedium,
        color: Color.colorGray_200,
        top: '50%'
    },
    iosLightRdSi4x1Icon: {
        left: 0,
        width: 31,
        top: 0
    },
    continueWithGoogleParent: {
        marginTop: -15,
        width: 210,
        marginLeft: -105.5,
        left: '50%',
        top: '50%'
    },
    rectangleGroup: {
        top: 612
    },
    dontHaveAn: {
        color: Color.colorGray_200,
        fontFamily: FontFamily.clashGrotesk
    },
    signup: {
        fontWeight: '500',
        color: Color.colorIndigo
    },
    dontHaveAnContainer: {
        top: '80.52%',
        fontSize: FontSize.size_base,
        textAlign: 'left',
        position: 'absolute'
    },
    login: {
        backgroundColor: 'transparent',
        flex: 1,
        height: 852,
        borderRadius: Border.br_11xl
    }
});

export default Login;
