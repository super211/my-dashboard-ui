export class TCIBDeployModel {

      constructor(){
            this.form_war = "FOPM-7.49-20180126.045906-1.war";
            this.fopm_liscence_file = "forms_lic";
            this.user = "tcibuser";
            this.deploy_env = "dev";
            this.artifactory_location = "artifactory.global.standardchartered.com/artifcatory/maven-sc-snapshot-local/com/scb/tcib/pvb/FOPM/7.49-SNAPSHOT";
            this.download_location="tmp";
            this.ocs_server_ip = "10.23.219.39";
      }

      form_war: string;
      fopm_liscence_file: string;
      user: string;
      deploy_env: string;
      artifactory_location: string;
      download_location: string;
      ocs_server_ip: string;
      system: string;
      mode: string;
      time: string;
}