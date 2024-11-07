import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { ToastProvider } from 'react-native-toast-notifications';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './BaseModule/Redux/Store/ConfigureStore';
import AppNavigation from './nadiswaraPro/Navigation/AppNavigation';

function App() {
    return (
        <Provider store={store}>
            <PaperProvider>
                <PersistGate bootstrapped={true} persistor={persistor}>
                    <StatusBar backgroundColor={'#E5ECF9'} barStyle="dark-content" />
                    <ToastProvider>
                        <AppNavigation initialRouteName="launchscreen" />
                    </ToastProvider>
                </PersistGate>
            </PaperProvider>
        </Provider>
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
