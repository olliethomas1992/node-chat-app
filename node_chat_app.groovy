job('Node Chat App') {
    scm {
        git('git@github.com:olliethomas1992/node-chat-app.git')
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