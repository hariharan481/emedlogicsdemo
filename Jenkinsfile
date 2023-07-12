pipeline{
    agent any
stages {
     
        stage('Build') {
       checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/hariharan481/emedlogicsdemo.git']])
                sh 'npm install'
            }
        }
    
     steps {
        script {
          docker.build("17-alpine").run('-p 8009:3000')
        }
      }
}
