def performFullBuild(String timeStamp, String project_id,String deploy_env){
   stage('Clean'){
		sh 'rm -rf dist && rm -rf dist.tar.gz && rm -rf release/*.tar.gz'
   }
   stage('Get Dependencies'){
		sh 'npm install --max-old-space-size=200'
   }
   stage('Code Analysis'){
	   try{
	   sh 'npm run lint'
	   }catch(err){
		   echo 'Code Quality Analysis failed!'
	   }
   }
   stage('Build'){
		sh "npm run build -- --prod --environment=${deploy_env} --max-old-space-size=200"
   }
   stage('Archive')
   {
       sh 'mkdir -p release'
       sh "cd dist && tar -czvf ../release/${project_id}-${timeStamp}.tar.gz . && cd .."
       stash includes: 'release/*.tar.gz', name: "${project_id}"
       stash includes: 'dist/**/*', name: "${project_id}_dist"
   }
}

def publishToS3(String aws_s3_bucket_name, String aws_s3_bucket_region, String project_id){
stage('Publish to S3'){
	withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', 
	accessKeyVariable: 'AWS_ACCESS_KEY_ID', 
	credentialsId: 's3repoadmin', 
	secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']])  
	{
	unstash "${project_id}"
	awsIdentity() //show us what aws identity is being used
	def targetLocation = project_id + '/releases';
		withAWS(region: aws_s3_bucket_region) {
			s3Upload(file: 'release', bucket: aws_s3_bucket_name, path: targetLocation)
		}
	}
}
}

return this;