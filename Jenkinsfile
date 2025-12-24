pipeline {
  agent any

  environment {
    IMAGE_NAME = "abhinava533289/hello-compose:latest"
  }

  stages {

    stage('Clone Repo') {
      steps {
        checkout scm
      }
    }

    stage('Build Image') {
      steps {
        sh 'docker build -t $IMAGE_NAME .'
      }
    }

    stage('Login to Docker Hub') {
      steps {
        withCredentials([usernamePassword(
          credentialsId: 'dockerhub-creds',
          usernameVariable: 'DOCKER_USER',
          passwordVariable: 'DOCKER_PASS'
        )]) {
          sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
        }
      }
    }

    stage('Push Image') {
      steps {
        sh 'docker push $IMAGE_NAME'
      }
    }

    stage('Deploy with Docker Compose') {
      steps {
        sh '''
          docker compose down || true
          docker compose up -d
        '''
      }
    }
  }
}
