import { environment } from '../environments/environment';

export class AppSettings {
    public static envEndpoints = new Map([['dev', 'http://localhost:8080/'],[ 'sit', 'http://13.228.156.28/'],[ 'uat', 'http://13.228.156.28/'],[ 'prod', 'http://13.228.156.28/']]);
    public static onPremEndpoints = new Map([['dev', 'http://localhost:8080/'],[ 'sit', 'http://13.228.156.28/'],[ 'uat', 'http://13.228.156.28/'],[ 'prod', 'http://13.228.156.28/']]);
    //public static onPremEndpoints = new Map([['local', 'http://localhost:8097/'],['dev', 'http://10.20.235.31:8088/'],[ 'sit', 'http://10.20.235.31:8088/'],[ 'uat', 'http://http://10.20.235.31:8088/'],[ 'prod', 'http://10.20.235.31:8088/']]);
    public static API_ENDPOINT= AppSettings.envEndpoints.get(environment.env);
    public static ONPREM_ENDPOINT= AppSettings.onPremEndpoints.get(environment.env);
  }