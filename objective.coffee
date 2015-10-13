objective
    
    title: 'errorize'
    uuid: 'df751115-b5c6-46ca-87e4-19d4b1d9d8a8'
    description: 'Ensure it is (or make it an) error'
    repl: listen: '/tmp/socket-df751115-b5c6-46ca-87e4-19d4b1d9d8a8'
    once: false
    plugins: 
        'objective_dev':
            sourceDir: 'lib'
            testDir: 'test'
            testAppend: '_test'
            timeout: 500
            runAll: true
            showTrace: true
            filterTrace: true

.run ->

