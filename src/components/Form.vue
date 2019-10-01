<template>
    <div>
        <h2>
            <router-link to="/hello">首页</router-link>
        </h2>
        <form>
            <label for="message">信息   </label>
            <input v-model="message">
            <input type="button" @keyup.enter="keyMethod" value="键盘点击事件" >
        </form>
        <p :class="$style.pfrom">
            来自mock数据：  Mock Test
            <button
               @click="getPersonList"
               :style="{float: 'right', color: 'red', borderColor: 'red'}"
            >
                获取mock数据，通过 Action
            </button>
        </p>
        <p :key="flag" v-for="(item, flag) in mockData">
            {{ item }}
        </p>
        
    </div>
</template>


<script>
import { mapState, mapMutations, mapActions } from 'vuex';
// import Vue from 'vue';
// import Profile from '../extend';


export default {
    name: 'Form',
    data () {
        return {
            obj: {
                message: 'form 信息',
            }
        }
    },
    computed: {
        message: {
            get () {
                return this.count
            },
            set (value) {
                this.increment({count: value})
            }
        },
        ...mapState([
            'count',
            'mockData'
        ]),
    },
    methods: {
        ...mapMutations([
            'increment'
        ]),
        ...mapActions({
            getPersonList: 'actionGetMockDataPersonList'
        }),
        keyMethod(e) {
            console.log('keycode 13 按钮编号： ', e)
        }
    },
    components: {
        // Pro: Vue.extend({
        //     template: '<p> {{ name }}  {{ age }} info {{ alias }} </p>',
        //     data: function () {
        //         return {
        //             name: 'koa',
        //             age: 23,

        //             alias: 'thelat',
        //         }
        //     }
        // })
        // pro: Profile
    }
}
</script>

<style lang="less" scoped >
    div {
        width: 900px;
        margin: auto
    }
    .pfrom {
        text-align: left;
        color: red;
        display: flow-root;
    }
</style>
