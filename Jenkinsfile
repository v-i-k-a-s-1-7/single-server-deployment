pipeline {
    agent any
    
    tools {nodejs "nodejs"}

    stages {
        stage('Checkout Code') {
            steps {
                echo "This stage pulls code from my git repository"
                git url: "https://github.com/v-i-k-a-s-1-7/mini-project-ci-cd.git", branch: "main"
                echo "Cloning successful"
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install dependencies
                sh 'npm install'
            }
        }

        stage('Run Unit Tests') {
            steps {
                // Run unit tests
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                // Deploy the application
                sh 'sudo systemctl deamon-reload'
                sh 'sudo systemctl restart myapp.service'
                sh 'sudo systemctl status myapp.service'
                sh 'sudo systemctl enable myapp.service'
            }
        }
    }

}
