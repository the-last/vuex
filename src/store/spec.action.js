/**
 * 专业测试
 * 
 * 对 actions 断言测试，测试工具 mocha chai
 *  
 * 构建测试用例，断言语句
 *  */

import { expect } from 'chai';                                    // 默认mocha不提供断言
// const actionsInjector = require('inject-loader!./actions');       // 返回一个 可以注入 mock 依赖的模块工长
import { actionGetMockDataPersonList } from './index';

// const actions = actionsInjector({
//     '/posts': {
//         getMockList (cb) {
//             setTimeout(() => {
//                 cb(['空数组']);
//             }, 100);
//         }
//     }
// })

const testAction = (action, args, state, expectedMutations, done) => {
    let count = 0;
    // 模拟提交
    const commit  = (type, payload) => {
        const mutation = expectedMutations[count];

        try {
            expect(mutation.type).to.equal(type);
            if (payload) {
                expect(mutation.payload).to.deep.equal(payload);
            }
        } catch (error) {
            done(error);
        }

        count++;
        if (count >= expectedMutations.length) {
            done();
        }
    }

    action({ commit, state }, ...args);

    // 检查被dispatch 的次数
    if (expectedMutations.length === 0) {
        expect(count).to.equal(0);
        done()
    }
} 


describe('actions', function() {
    it('actionGetMockDataPersonList', (done) => {
        testAction(actions.actionGetMockDataPersonList, [], {}, [
            {type: 'changeMock', payload: {mockData: []}}
        ], done)
    
    })
})
