import { Platform } from 'react-native'


let baseURL = '';

{Platform.OS == 'android'
? baseURL = 'http://192.168.148.32:4001/api/v1/'
: baseURL = 'http://192.168.148.32:4001/api/v1/'
}

export default baseURL;