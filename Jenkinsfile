pipeline {
  agent any
  
  stages {
    stage('Build..') {
      steps {
        sh 'yarn install'
      }
    }
    stage('Test') {
      steps {
        sh 'yarn test'
      }
    }
    stage('Staging') {
        when { branch 'staging' }
      steps {
      
        sh './jenkins_script/staging.sh'
      }
    }

    stage('Production') {
        when { branch 'master' }
      steps {
      
        sh './jenkins_scripts/production.sh'
      }
    }
  }
  environment {
    CI = 'true'
  }
}