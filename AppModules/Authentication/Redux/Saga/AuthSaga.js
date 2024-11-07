import AsyncStorage from '@react-native-async-storage/async-storage';
import { Toast } from 'react-native-toast-notifications';
import { all, put, takeLeading } from 'redux-saga/effects';
import { isValidElement } from '../../../../BaseModule/Utils/helpers';
import { handleNavigation } from '../../../../nadiswaraPro/Navigation/NaviagationHelper';
import { apiCall } from '../../../../nadiswaraPro/Network/NetworkWrapper';
import { AuthNetwork } from '../../Network/AuthNetwork';
import * as AuthActions from '../Actions/AuthAction';

function* loginViaEmailRequest(action) {
    try {
        const response = yield apiCall(AuthNetwork.LoginViaEmailRequestApiCall, action.payload);
        const loginResponse = yield response;
        if (loginResponse) {
            if (
                isValidElement(loginResponse) &&
                isValidElement(loginResponse?.data?.data) &&
                isValidElement(loginResponse?.data?.status === 200)
            ) {
                const { refresh, access } = loginResponse.data.data;
                yield AsyncStorage.setItem('access_token', access);
                yield AsyncStorage.setItem('refresh_token', refresh);
                yield put(AuthActions.loginViaEmailSuccess(loginResponse.data));
                Toast.show(loginResponse?.data?.message, {
                    type: 'success',
                    placement: 'bottom',
                    duration: 3000,
                    animationType: 'zoom-in',
                    successColor: 'green'
                });
                handleNavigation('appstack');
            } else {
                yield put(
                    AuthActions.loginViaEmailError({
                        message: 'Invalid Credentials'
                    })
                );
                Toast.show('Invalid Credentials', {
                    type: 'danger',
                    placement: 'bottom',
                    duration: 3000,
                    animationType: 'zoom-in',
                    dangerColor: 'red'
                });
            }
        }
    } catch (e) {
        yield put(AuthActions.loginViaEmailError({ message: 'Network Error' }));
        Toast.show('Network Error', {
            type: 'danger',
            placement: 'bottom',
            duration: 3000,
            animationType: 'zoom-in',
            dangerColor: 'red'
        });
    }
}

function* signupViaEmailRequest(action) {
    try {
        const response = yield apiCall(AuthNetwork.SignupViaEmailRequestApiCall, action.payload);
        const signupResponse = yield response;
        if (signupResponse) {
            if (signupResponse && signupResponse?.data?.status === 'success' && signupResponse?.status === 200) {
                yield put(AuthActions.signupViaEmailSuccess(signupResponse.data));
                Toast.show('Account created successfully', {
                    type: 'success',
                    placement: 'bottom',
                    duration: 3000,
                    animationType: 'zoom-in',
                    successColor: 'green'
                });
                handleNavigation('Account Confirmation');
            } else {
                yield put(
                    AuthActions.signupViaEmailError({
                        message: 'User already Exists'
                    })
                );
                Toast.show('User already Exists', {
                    type: 'danger',
                    placement: 'bottom',
                    duration: 3000,
                    animationType: 'zoom-in',
                    dangerColor: 'red'
                });
            }
        }
    } catch (e) {
        yield put(AuthActions.signupViaEmailError({ message: 'Network Error' }));
        Toast.show('Network Error', {
            type: 'danger',
            placement: 'bottom',
            duration: 3000,
            animationType: 'zoom-in',
            dangerColor: 'red'
        });
    }
}

function* AuthSaga() {
    yield all([
        takeLeading(AuthActions.loginViaEmailRequest, loginViaEmailRequest),
        takeLeading(AuthActions.signupViaEmailRequest, signupViaEmailRequest)
    ]);
}

export default AuthSaga;
