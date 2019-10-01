
/**
 * 专业测试
 * 
 * 对mutation断言测试，测试工具 mocha chai
 *  
 * 构建测试用例，断言语句
 *  */

import { expect } from 'chai';  // 默认mocha不提供断言
import { mutations } from './index';

const { increment } = mutations;

describe('mutation', function() {
    it('INCREMENT', () => {
        const state = { count: 0 }

        increment(state, {count: 90});
        expect(state.count).to.equal(90);
    })
})
