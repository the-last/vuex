/**
 * 涉及到的document接口
 * scrollTo(x: 横轴, y: 纵轴);  滑动滚动条位置的api
 * document.documentElement.scrollTop ;  获取当前位置举例文档流顶部的距离
 * targetDOM.offsetTop;  获取某个节点距离文档流顶部的距离
 * 
 * 默认滑动
 * */

 const DURATION = 500;
//  const FULLDOMHEIGHT = document.body.scrollHeight;

/**
*
*  @param {Number} i 跳转的量
*  @param {Number} duration 延迟执行时间，单位（ms）
**/
function jump (i, durationItem) {
    let time = window.setTimeout(() => {
        window.scrollTo(0, i);
        window.clearTimeout(time);

    }, durationItem);
}

/**
 *  实现到节点的平滑滚动，完成后回调函数
 *  @param {Any}  DOM结点 或 number(小数会转为整数) 要求在滚动范围内 否则默认值 0，超过文档流最大高度静默失败。
 *  @param {Function} callback 回调函数
 *  @param {Number} duration 从滚动开始到结束滚动的时间， 单位ms
 **/
function smoothScroll(targetDOM, callback, duration) {
    duration ? duration : DURATION;
    // 支持输dom节点，或具体滚动的大小
    let targetDomTop    = typeof targetDOM === 'object' ? targetDOM.offsetTop :
                          typeof targetDOM === 'number' ? Number(parseInt(targetDOM)): 0;
    
    let currentPosition = document.documentElement.scrollTop;
    let scrollScope     = targetDomTop - currentPosition;
    let durationItem    = duration / scrollScope;
    
    // 向下
    if (scrollScope>0) {
        let scope = scrollScope;
        for (let i = 0; i <= scope; i++) {
            jump(i, i * durationItem);
        }
    }

    // 向上
    if (scrollScope<0) {
        let scope = Number(-(scrollScope));
        let duration = Number(-(durationItem));
        for (let j = 0; j <= scope; j++) {
            let aimp = currentPosition - j;
            jump(aimp, j * duration);
        }
    }

    // 回调
    callback && typeof callback === 'function' && callback();

}

export default {
    smoothScroll,
}