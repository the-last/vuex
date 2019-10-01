import Vue from 'vue';

/**
 * 什么？？？❓ 开发环境竟然不能使用。。心塞
 * 创建你构造器
 * 内置目标
 * 内置data函数
 */

const Profile = Vue.extend({
    template: '<p> {{ name }}  {{ age }} info {{ alias }} </p>',
    propsData: {
        name: {
            type: String,
            default: 'kom'
        },
        age: {
            type: String,
            default: '28'
        },

        alias: {
            type: String,
            default: 'thelast'
        },
    }
});

export default Profile
