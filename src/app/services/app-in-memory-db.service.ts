import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class AppInMemoryDbService implements InMemoryDbService {

  createDb() {
    const loginusers = [
      {id: 3, username: 'admin@devopsboard.sc', password: 'password1', permissions: ['all']}
    ];

    const environments = [
      {id: 1, systemName: 'T24', component: 'WEB', environmentType: 'DEV', environmentName: 'DEV1', serverIp: ''},
      {id: 1, systemName: 'T24', component: 'APP', environmentType: 'DEV', environmentName: 'DEV1', serverIp: ''},
      {id: 1, systemName: 'T24', component: 'DB', environmentType: 'DEV', environmentName: 'DEV1', serverIp: ''},
      {id: 1, systemName: 'T24', component: 'WEB', environmentType: 'SIT', environmentName: 'SIT1', serverIp: ''},
      {id: 1, systemName: 'T24', component: 'APP', environmentType: 'SIT', environmentName: 'SIT1', serverIp: ''},
      {id: 1, systemName: 'T24', component: 'DB', environmentType: 'SIT', environmentName: 'SIT1', serverIp: ''},
      {id: 1, systemName: 'TAP', component: 'FIN', environmentType: 'DEV', environmentName: 'DEV1', serverIp: ''},
      {id: 1, systemName: 'TAP', component: 'OCS', environmentType: 'DEV', environmentName: 'DEV1', serverIp: ''},
      {id: 1, systemName: 'TAP', component: 'TCIB', environmentType: 'DEV', environmentName: 'DEV1', serverIp: ''},
      {id: 1, systemName: 'TAP', component: 'DB', environmentType: 'DEV', environmentName: 'DEV1', serverIp: ''},
      {id: 1, systemName: 'TDS', component: 'DB', environmentType: 'DEV', environmentName: 'DEV1', serverIp: ''}
    ];

    const serverinfos = [
      {
        subDepartment: 'Enable',
        program: 'WS 1.0',
        environmentGroup: 'DEV',
        environment: 'Dev 1',
        applicationName: 'TAP',
        componentName: 'WEB',
        serverIp: '10.64.100.010',
        comments: 'SCB Server'
      }
    ];

    let products = [
      {id: 1, name: 'TAP', component: [{id: 1, componentname: 'OCS', ip: '1.1.1.1', env: 'env1', regNo:1, perNo:2, staNo:3, prodNo:2}]},
      {id: 2, name: 'T24', component: [{id: 1, componentname: 'APP', ip: '1.1.1.2', env: 'env1', regNo:2, perNo: 2, staNo:1, prodNo:2}]},
      {id: 3, name: 'TDS', component: [{id: 1, componentname: 'TCIB', ip: '1.1.1.3', env: 'env1', regNo:3, perNo: 1, staNo:1, prodNo:2}]}
    ];

    let port1 = [
      {id: 1, name: 'TAP', component: [{id: 1, componentname: 'OCS', devNo: 2, sitNo: 3, uatNo:2, ptNo:1, drhNo:2}]},
      {id: 2, name: 'TAP', component: [{id: 1, componentname: 'OCS', devNo: 1, sitNo: 2, uatNo:1, ptNo:3, drhNo:1}]},
      {id: 3, name: 'TAP', component: [{id: 1, componentname: 'OCS', devNo: 2, sitNo: 1, uatNo:3, ptNo:2, drhNo:1}]}
    ];

    return {loginusers, environments, serverinfos, products, port1};
  }

}
