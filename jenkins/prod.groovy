def deploy(String timeStamp, String project_id){
    node{
        stage('Deploy PROD')
            {
                def userInput = false;
                def didTimeout = false;
                def aws_s3_deploy_bucket_name = 'ddb.mywire.org';
                def aws_s3_deploy_bucket_region = 'ap-southeast-1';

                echo "performing deployment"

                withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', 
                accessKeyVariable: 'AWS_ACCESS_KEY_ID', 
                credentialsId: 's3repoadmin', 
                secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']])  
                {
                    dir("${project_id}_dist") {
                        unstash "${project_id}_dist"
                    }
                    awsIdentity() //show us what aws identity is being used
                    withAWS(region: aws_s3_deploy_bucket_region) {
                    s3Delete(bucket: aws_s3_deploy_bucket_name, path: '/')
                    s3Upload(file: "${project_id}_dist/dist", bucket: aws_s3_deploy_bucket_name, path: '')
                    }
                }

            }
    }
}

return this;