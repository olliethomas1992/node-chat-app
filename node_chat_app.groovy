job('Node Chat App') {
    scm {
        git('https://github.com/olliethomas1992/node-chat-app.git') {  node -> // is hudson.plugins.git.GitSCM
            node / gitConfigName('olliethomas1992')
            node / gitConfigEmail('ollie.thomas1992@gmail.com')
        }
    }
    triggers {
        scm('H/5 * * * *')
    }
    wrappers {
        nodejs('nodejs') 
    }
    steps {
        shell("npm install")
    }
}