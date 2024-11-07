import { NETWORK_METHOD, REST_API_TYPE } from '../../../nadiswaraPro/Network/SessionConst';
import { LoginviaemailrequestEndpoint, SignupviaemailrequestEndpoint } from '../../../nadiswaraPro/Network/urls';

export const AuthNetwork = {
    LoginViaEmailRequestApiCall: (payload) => ({
        method: NETWORK_METHOD.POST,
        url: LoginviaemailrequestEndpoint,
        config: {
            headers: {
                'Content-Type': 'application/json'
            }
        },
        data: payload,
        restAPIType: REST_API_TYPE.AUTH
    }),
    SignupViaEmailRequestApiCall: (payload) => ({
        method: NETWORK_METHOD.POST,
        config: {
            headers: {
                'content-type': 'multipart/form-data',
                'User-Agent': 'PostmanRuntime/7.40.0',
                Accept: '/',
                'Accept-Encoding': 'gzip, deflate, br',
                Connection: 'keep-alive'
            }
        },
        url: SignupviaemailrequestEndpoint,
        data: payload,
        restAPIType: REST_API_TYPE.AUTH
    })
};
