import http from './httpService';
import config from './../config.json';



export function news() {
    
    return http.post(config.newsApi, {
        filename: filename,
        ext: ext,
        byte:byte,
      }
    );   
}