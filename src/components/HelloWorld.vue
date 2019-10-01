<template>
  <div class="hello">
	
	<button @click="scrollsmooth">到底部平滑滚动</button>
	
	<router-link :style="{float: 'right', color: 'blue'}" to="form">Form页</router-link>
    <h1>{{ count }}</h1>
	<p>
		来自命名空间的state值
		{{ admin }} {{ userNa }}
	</p>
    <p>
      From Store Getters 两次 传参getter .
      <span>{{ doneTodos('',2) }}</span>
    </p>
    <p>
      From Store Getters .
      <span>{{ getFillName }}</span>
    </p>
	<p>
      Store manage Test.
      <button @click="StoreCommit">commit -Store-Module 非module </button>
    </p>
	<p>
      From Store Module A .
      <span>{{ doneVegetables }}</span> <!--  从 getter 中取值 -->
      <!-- <span>{{ this.$store.state.a.slump }}</span> -->
    </p>
    <p>
      Store manage Test.
      <button @click="StoreCommitA">commit -Store-Module A</button>
    </p>

	<p>
      From Store Module B.
      <span>{{ doneLoads }}</span>
      <!-- <span>{{ this.$store.state.b.bike }}</span>   从模块中取值  -->
    </p>
    <p>
      Store manage Test.
      <button @click="StoreCommitB">commit -Store-Module B</button>
    </p>

    <p :style="{backgroundColor: 'white'}">
		<span  class="fullSpan">我特别高</span>
		<span  class="fullSpan">我特别高</span>
		<span  class="fullSpan">我特别高</span>
		<span  class="fullSpan">我特别高</span>
		<span  class="fullSpan">路过的路人甲-</span>
		<span  class="fullSpan">我特别高</span>
		<span  class="fullSpan">我特别高</span>
		<span  class="fullSpan">我特别高</span>
		<span  class="fullSpan">我特别高</span>
		<span  class="fullSpan">我特别高</span>
		<span  class="fullSpan">我特别高</span>
	</p>
    <p ref="bottom01"><span>我在底部</span></p>
    <button @click="scrollsmooth(-100)">到顶部平滑滚动</button>
	<p>
		modules 模块中嵌入的 state 
		<span>{{ logined }}</span>
	</p>
	<p>
		modules 模块中嵌入的 dispatch 这个mutation 
		<button @click="logDispatch">commit -Store 嵌入的-Modules </button>
	</p>
	<my-component></my-component>
	<!-- <layer ></layer> -->
	<p>{{ docs }}</p>

  </div>
</template>

<script>
import Vue from 'vue';
import { mapGetters, mapState, mapActions, mapMutations} from "vuex";
// const { mapState } = createNamespacedHelpers('account') ;
import store from "../store/index";
import utils from "../utils/index";
import Layer from './Layer.vue';

const MyCom = Vue.component('my-component', {
	data: function () {
		return {
			count: 0
		}
	},
	template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

export default {
	name: "HelloWorld",
	props: {},
	data() {
		return {
			localCount: 999,
			docs: Layer.__docs
		};
	},
	store,
	created() {
		// this.$store.registerModule('moduleA', moduleA);
		// this.$store.replaceState({what: 10000});  // 谨慎使用 replaceState

		/**
		 *  只接受函数，函数只有两个传参，传参第一个是
		 *  State + Module + Route 
		 *  传参第二个是
		 *  Getters 所有的getter，包括所有的module， 注册的module， 具名module。
		 */
		this.$store.watch((StateModuleRoute, Getters) => {
			console.log(StateModuleRoute, Getters, 'watch--callback');
		});
	},
	computed: {
		...mapGetters(["doneTodos", "doneVegetables", "doneLoads", "getFillName" ]),
		...mapGetters('account', {
			admin: "isAdmin",
		}),
		...mapState({
			count: state => state.count,
			userNa: "userName"  // 直接访问state无效，需要配置命名空间。 或者使用 createNamespacedHelpers
		}),
		...mapState('account', {logined: 'logined', userNa: 'userName'}) // 添加命名空间   才能访问到空间的 state
	},
	methods: {
		...utils,
		...mapActions([
			'actionS',
			'changeBike',
			'changeFruit',
			
		]),
		...mapMutations([
			'changeName'
		]),
		...mapActions('account', {
            logDispatch: 'logDispatch'
		}),
		StoreCommitA() {
			this.changeFruit();  // commit 触发 mutation。
		},
		StoreCommitB() {
			this.changeBike();
		},
		StoreCommit() {
			this.changeName();
		},
		CommitActionB() {
            this.actionS();
		},
        scrollsmooth(scope) {
			this.$nextTick(() => {
				this.smoothScroll( typeof scope === "number" ? scope : "" || this.$refs.bottom01, null, 500);
			});
		},
	},
	components: {
		'my-component': MyCom,
		// Layer
    }
};
</script>

<style lang="less" scoped>
.hello {
	width: 800px;
	margin: auto;
	padding: 20px;
	text-align: left;
}
h3 {
margin: 40px 0 0;
}
ul {
list-style-type: none;
padding: 0;
}
li {
display: inline-block;
margin: 0 10px;
}
a {
color: #42b983;
}
p {
	display: flow-root;
	position: relative;
	border-bottom: 1px solid rgba(200, 200, 200, .5);
	min-height: 40px;
	line-height: 40px;
	color: #FF4C4C;
}
p > span, p > button{
	float: right;
	display: block;
	width: 300px;
	white-space: normal;
	font-weight: 700;
	color: green;
	text-align: left;
	word-break: break-all;

}

.fullSpan {
	display: inline-block;
	width: 100%;
	height: 70px;
	line-height: 100px;
	border-bottom: 1px solid gray;
}
</style>
