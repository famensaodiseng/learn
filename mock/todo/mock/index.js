if(MOCK == 'true'){
    Mock.mock('/todo/task','get', function(options){
        let a = []
        for (let i = 0; i < 5; i++) {
           let o = Mock.mock({
            _id: "@id()",
            title: '@string("lower", 5)',
            completed: "@boolean"
           }) 
           a.push(o)
        }
        return a
    })
    Mock.mock('/todo/addTask','post', function(options){
        let o = JSON.parse(options.body)
        return Mock.mock({
            _id: "@id()",
            title: o.title,
            complete: false
        })
    })
    Mock.mock(/^\/todo\/deleteTask/,'get', function(options){
        let o = JSON.parse(options.body)
        return o
    })
    Mock.mock('/todo/modifyTask','post', function(options){
        let o = JSON.parse(options.body)
        return o
    })
}
