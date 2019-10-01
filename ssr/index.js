// ssr 关键一步，主要的api就是这个
// renderer.renderToString(app, (err, html) => {
//     if (err) throw err
// })

// 在 2.5.0+，如果没有传入回调函数，则会返回 Promise：
// renderer.renderToString(app).then(html => {
//   console.log(html)
// }).catch(err => {
//   console.error(err)
// })


// 引入插件
const fs  = require('fs');
const server = require('express')();

// 
const renderer = require('vue-server-renderer').createRenderer({
    template: fs.readFileSync('./index.template.html', 'utf-8'),
    directives: {
        example (vnode, directiveMeta) {
        // 基于指令绑定元数据(metadata)转换 vnode
        }
    }
})



// 传入一个渲染上下文对象
const context = {
    title: '偶就是一个title 网站title',
    meta: `
        <meta chartset="utf-8" />
    `
}


server.get('*', (req, res) => {
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    
    

    renderer.renderToString(app, context, (err, html) => {
        if (err) {
            res.status(500).end('internal server error');
            return;
        }
        console.log(html)
        res.end(html)
    })

})

server.listen(9000)


















































































