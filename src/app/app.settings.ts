import { environment } from '../environments/environment';

export class AppSettings {
    public static envEndpoints = new Map([['dev', 'http://localhost:8080/'],[ 'sit', 'http://13.228.156.28/'],[ 'uat', 'http://13.228.156.28/'],[ 'prod', 'http://13.228.156.28/']]);
    public static API_ENDPOINT= AppSettings.envEndpoints.get(environment.env);
  }