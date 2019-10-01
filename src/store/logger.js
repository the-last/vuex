
import createLogger from 'vuex/dist/logger';

const logger = createLogger({
    collapsed: true,                               // 自动展开记录的 mutation
    filter (mutation) {                            // 此处可以返回true，如果需要记录 mutation  
                                                   // filter (mutation, stateBefore, stateAfter)
        return mutation.type !== "BlackListMutation";   
    },
    transformer (state) {
                                                   // 在记录之前，转换状态，值返回指定的子树
        return  state.subTree
    },
    mutationTransformer (mutation) {
        return mutation.type;                      // mutation 是 Payload 的格式，这里可以重新指定返回的格式
    },
    logger: console                                //指定在控制台 console 上打印log
});

export default logger;