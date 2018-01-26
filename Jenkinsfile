import java.text.SimpleDateFormat

node {
    
currentBuild.result = "SUCCESS";
def currentBranch;
def timeStamp;
def project_id;
def aws_s3_bucket_name;
def aws_s3_deploy_bucket_name;
def aws_s3_bucket_region;
def deploy_env;
def baseDir;
def userInput;
def didTimeout;

try {
   stage('Checkout') { // for display purposes
    checkout scm;
   }
   stage('Initialize') {
   	   project_id = 'dashboard-ui';
	   aws_s3_bucket_name = 'devopshub-repo';
	   aws_s3_bucket_region = 'ap-southeast-1';
	   timeStamp = getTimeStamp();
	   currentBranch = env.BRANCH_NAME;
	   deploy_env=getTargetEnv(currentBranch);
	   baseDir = pwd();
	   
	}

def fullBuild = load "${baseDir}/jenkins/full_build.groovy";
fullBuild.performFullBuild(timeStamp,project_id,deploy_env);

fullBuild.publishToS3(aws_s3_bucket_name, aws_s3_bucket_region,project_id);


if(deploy_env=="all"){
	def envlist = ["dev", "sit", "uat", "release","prod"];
	for(itm in envlist){
		stage("Checkpoint ${itm}"){
			checkAndDeploy(baseDir, itm, timeStamp,project_id);
		}
	}
}
else{
	if(deploy_env!='none')
	{
		stage("Deploy to ${deploy_env}")
		{
			checkAndDeploy(baseDir, deploy_env, timeStamp,project_id);
		}
	}
}

}catch (err) {

        currentBuild.result = "FAILURE"

        throw err
    }
}


def getTargetEnv(String branchName){
	def deploy_env="dev";
	switch(branchName){
		case('develop'):
		deploy_env="dev";
		break;
		case('sit'):
		deploy_env="sit";
		break;
		case('uat'):
		deploy_env="uat";
		break;
		case('release'):
		deploy_env="release";
		break;
		case('master'):
		deploy_env="prod";
		break;
		case('cdp'):
		deploy_env="all";
		break;
		default:
			if(branchName.startsWith("feature")){
				deploy_env="none"
			}
		break;
	}
	return deploy_env;
}

def checkAndDeploy(String baseDir, String envname, String timeStamp, String project_id){
	  def  c_userInput = false;
	  def c_didTimeout = false;

	if(envname=="dev"){
	//Deploy directly to dev environment
		run_playbook("main.yaml",envname);
	}
	else{

	try {
	    timeout(time: 5, unit: 'DAYS') { // change to a convenient timeout for you
	        c_userInput = input(message: "Do you approve deployment to ${envname}?", ok: "Proceed", 
                        parameters: [booleanParam(defaultValue: true, 
                        description: "If you would want to proceed for deployment to ${envname}, just tick the checkbox and click Proceed!",name: "Yes?")])
	    }
	} catch(err) { // timeout reached or input false
	    def user = err.getCauses()[0].getUser()
	    if('SYSTEM' == user.toString()) { // SYSTEM means timeout.
	        c_didTimeout = true
	    } else {
	        c_userInput = false
	        echo "Aborted by: [${user}]"
	    }
	}
        if ((c_didTimeout)||(!c_userInput)) {
            // do something on timeout
            echo "no input was received before timeout"
            currentBuild.result = 'ABORTED'
        } else {
            	run_playbook("main.yaml",envname);
        } 
   }
}

def getTimeStamp(){
	def dateFormat = new SimpleDateFormat("yyyyMMddHHmm")
	def date = new Date()
	return dateFormat.format(date);
}

def run_playbook(playbook_name, deploy_env) {
	sh "ansible-playbook ${playbook_name} --extra-vars deploy_host=${deploy_env}";
}