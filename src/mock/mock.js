

/** 
 * 
 * 
 * 引入mock 方便本地提交表单，多数据请求实验。
 */


const Mock = require('mockjs');

const Random = Mock.Random;  // 看名字是知道啥意思了吧

const domain = 'http://mockjs.com/api';

const code = 200;

const postData = req => {

    console.log(req);  

    let posts = [];

    for (let i = 0; i < 10; i++) {
        let post = {
            title: Random.csentence(10, 25),  // 随机生成标题
            icon: Random.dataImage('250*250', '文章icon'),  // 图片链接也可以随机生成，你看是不是很厉害，吓人啊
            author: Random.cname(), // 随机生成一个名字,
            date: Random.date() + ' ' + Random.time()
        }

        posts.push(post);
    }

    return {
        code,
        posts,
    }

}

Mock.mock(`${domain}/posts`, 'get', postData);

