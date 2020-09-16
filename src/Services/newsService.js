import http from './httpService';
import config from './../config.json';



export function news() {
    
    return http.post(config.loginApi, JSON.stringify({
        filename: filename,
        ext: ext,
      })
    );   
}