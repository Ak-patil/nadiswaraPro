import { Raleway_700Bold, useFonts } from '@expo-google-fonts/raleway';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { horizontalScale, moderateScale } from '../../nadiswaraPro/Utils/Metrics';
import { styles } from './styles/Header.styles';

const Header = () => {
    const navigation = useNavigation();

    let [fontsLoaded, fontError] = useFonts({
        Raleway_700Bold
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <TouchableOpacity style={styles.backIconWrapper} onPress={() => navigation.openDrawer()}>
                    <FontAwesome5 name="bars" size={moderateScale(24)} color={'black'} />
                </TouchableOpacity>
                <View style={{ paddingLeft: horizontalScale(10) }}>
                    <Text style={[styles.text, { fontFamily: 'Raleway_700Bold' }]}>Hello! Anand Kumar</Text>
                </View>
            </View>
        </View>
    );
};

export default Header;
