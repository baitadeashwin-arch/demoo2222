
pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Fetching source code from GitHub'
                checkout scm
            }
        }

        stage('Check Files') {
            steps {
                echo 'Checking project files'

                bat 'dir'

                bat 'if not exist index.html exit 1'
                bat 'if not exist style.css exit 1'
                bat 'if not exist script.js exit 1'
            }
        }

        stage('Build') {
            steps {
                echo 'Validating Student Management Application'

                bat 'echo HTML file found'
                bat 'echo CSS file found'
                bat 'echo JavaScript file found'
            }
        }

        stage('Complete') {
            steps {
                echo 'Student Management Project Build Successful!'
            }
        }
    }

    post {
        success {
            echo 'BUILD SUCCESS'
        }

        failure {
            echo 'BUILD FAILED'
        }
    }
}
