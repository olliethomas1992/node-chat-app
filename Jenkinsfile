node {
	def commit_id
	stage('Preparation') {
    	checkout scm
    	sh "git rev-parse --short HEAD > .git/commit-id"                        
    	commit_id = readFile('.git/commit-id').trim()
   	} 
	stage('test') {
		def myTestContainer = docker.image('node:boron-alpine')
    	myTestContainer.pull()
    	myTestContainer.inside {
			sh 'npm install'
			sh 'npm test'
		}
	}
	stage('docker build/push') {
		docker.withRegistry('https://index.docker.io/v1/', 'dockerhub') {
			def app = docker.build("olliethomas1992/node-chat-app:${commit_id}", '.').push()
		}	
    }
}