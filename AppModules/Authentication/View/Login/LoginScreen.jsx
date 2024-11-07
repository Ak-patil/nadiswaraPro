import React, { useState } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Card, TextInput } from 'react-native-paper';
import styles from '../../Style/SigninScreen.styles';

import { Nunito_400Regular, Nunito_500Medium, Nunito_600SemiBold, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { Raleway_600SemiBold, Raleway_700Bold, useFonts } from '@expo-google-fonts/raleway';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import Colors from '../../../../nadiswaraPro/Utils/Color';
import { loginViaEmailRequest } from '../../Redux/Actions/AuthAction';
import { loginViaEmailStateSelector } from '../../Redux/Reducer/AuthSelector';

const Login = ({ navigation }) => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [userInfo, setUserInfo] = useState({ email: '', password: '' });
    const [error, setError] = useState({ password: '' });
    const [required, setRequired] = useState('');
    const dispatch = useDispatch();
    const loginViaEmailState = useSelector((state) => loginViaEmailStateSelector(state));

    const handleSignIn = async () => {
        if (userInfo.email && userInfo.password) {
            setRequired('');
            dispatch(loginViaEmailRequest({ email: userInfo.email, password: userInfo.password }));
        } else {
            setRequired('Fill Up The All Required Field');
        }
    };

    const handlePasswordValidation = (value) => {
        const passwordSpecialCharacter = /(?=.*[!@#$&*])/;
        const passwordOneNumber = /(?=.*[0-9])/;
        const passwordSixValue = /(?=.{6,})/;

        if (!passwordSpecialCharacter.test(value)) {
            setError({ ...error, password: 'Write at least one special character' });
            setUserInfo({ ...userInfo, password: '' });
        } else if (!passwordOneNumber.test(value)) {
            setError({ ...error, password: 'Write at least one number' });
            setUserInfo({ ...userInfo, password: '' });
        } else if (!passwordSixValue.test(value)) {
            setError({ ...error, password: 'Write at least 6 characters' });
            setUserInfo({ ...userInfo, password: '' });
        } else {
            setError({ ...error, password: '' });
            setUserInfo({ ...userInfo, password: value });
        }
    };

    let [fontsLoaded, fontError] = useFonts({
        Raleway_600SemiBold,
        Raleway_700Bold,
        Nunito_400Regular,
        Nunito_500Medium,
        Nunito_700Bold,
        Nunito_600SemiBold
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <LinearGradient
            colors={[Colors.PRIMARY.PRIMARY_RETRO_BLUE, Colors.PRIMARY.PRIMARY_RETRO_BLUE, 'white']}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            locations={[0, 0.5, 0.5]}>
            <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
                <Image style={styles.signInImage} source={require('../../../../assets/Images/Sign_in/OOHY_LOGO.png')} />
                <Card mode="elevated" style={styles.card}>
                    <Text style={styles.login}>Login</Text>
                    <Text style={styles.loginToYour}>Login to your existing account using your email and password.</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            label="Email"
                            style={styles.input}
                            keyboardType="email-address"
                            value={userInfo.email}
                            onChangeText={(value) => setUserInfo({ ...userInfo, email: value })}
                        />
                        <TextInput
                            label="Password"
                            style={styles.input}
                            secureTextEntry={!isPasswordVisible}
                            onChangeText={handlePasswordValidation}
                        />
                    </View>
                    {required ? <Text style={styles.errorText}>{required}</Text> : null}
                    <TouchableOpacity onPress={() => navigation.navigate('Forgot Password')}>
                        <Text style={styles.forgotSection}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={handleSignIn}>
                        {loginViaEmailState?.isLoading ? (
                            <ActivityIndicator size={'small'} color={'white'} />
                        ) : (
                            <Text style={styles.buttonText}>Sign In</Text>
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainerGoogle} onPress={handleSignIn}>
                        {loginViaEmailState?.isLoading ? (
                            <ActivityIndicator size={'small'} color={'white'} />
                        ) : (
                            <Text style={styles.buttonTextGoogle}>Sign In</Text>
                        )}
                    </TouchableOpacity>
                    <View style={styles.signupRedirect}>
                        <Text style={styles.signupTextStyle}>Don't have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text style={styles.signupText}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </Card>
            </ScrollView>
        </LinearGradient>
    );
};

export default Login;
