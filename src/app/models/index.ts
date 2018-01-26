export class CheckMobileNumber {
    MobileNumber: number;
}

export class Login {
    userid: string;
    password: string;
    domainName: string;
    email: string;
    projectId: string;
}

export class Registration {
    countryCode: string;
    phone: string;
    password: string;
    domainName: string;
    otp: string;
}

export class VerifyUserPhone {
    userid:string;
    code:string;
}

export class Serverinfo{
    subDepartment: string;
    productName: string;
    envCategory: string;
    environmentName: string;
    productCategory: string;
    assignedTo: string;
    serverIp: string;
    comments: string;
}

export class EnvSummary{
    totalServers:string;
    totalEnvironments:string;
}

export class EnvHomeView{
    pageTitle:string;
    totalServersCount:string;
    envInfos: Map<string,EnvSummary>;
}

export class Product {
  id: number;
  name: string;
  component: Map<string,ComInfo>;

  constructor() {
    this.name = "";
  }
}

export class ComInfo{
  id:number;
  componentname:string;
  ip:string;
  env:string;
}
