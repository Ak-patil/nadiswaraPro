import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './BaseModule/Redux/Store/ConfigureStore';
import AppNavigation from './nadiswaraPro/Navigation/AppNavigation';

function App() {
    return (
        <GluestackUIProvider mode="light">
            <Provider store={store}>
                <PersistGate bootstrapped={true} persistor={persistor}>
                    <StatusBar backgroundColor={'#E5ECF9'} barStyle="dark-content" />
                    <AppNavigation initialRouteName="launchscreen" />
                </PersistGate>
            </Provider>
        </GluestackUIProvider>
    );
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
