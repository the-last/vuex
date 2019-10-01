
/** 
 * 
 * DOM  文档流 滚动条 网页 的高度和宽度问题
 * 屏幕分辨率  屏幕工作区 高度和宽度的问题
 * 
*/

console.log('网页可见区域宽：', document.body.clientWidth )
console.log('网页可见区域高：', document.body.clientHeight )
console.log('网页可见区域宽：', document.body.offsetWidth ,'(包括边线的宽)' )
console.log('网页可见区域高：', document.body.offsetHeight,'(包括边线的宽)' )
console.log('网页正文全文宽：', document.body.scrollWidth )
console.log('网页正文全文高：', document.body.scrollHeight )
console.log('网页被卷去的高：', document.body.scrollTop )
console.log('网页被卷去的左：', document.body.scrollLeft )
console.log('网页正文部分上： ', window.screenTop )
console.log('网页正文部分左： ', window.screenLeft )
console.log('屏幕分辨率的高： ', window.screen.height) 
console.log('屏幕分辨率的宽： ', window.screen.width )
console.log('屏幕工作区高度： ', window.screen.availHeight) 
console.log('屏幕工作区宽度： ', window.screen.availWidth)

/** 
 * 
 * Vue的事件默认会给第一个参数设置，一个MouseEvent的实例对象作为默认参数
 * 参数结构如下
 * 
*/


var MouseEvent = {
    altKey: false,
    bubbles: true,
    button: 0,
    buttons: 0,
    cancelBubble: false,
    cancelable: true,
    clientX: 705,
    clientY: 329,
    composed: true,
    ctrlKey: false,
    currentTarget: null,
    defaultPrevented: false,
    detail: 1,
    eventPhase: 0,
    fromElement: null,
    isTrusted: true,
    layerX: 705,
    layerY: 481,
    metaKey: false,
    movementX: 0,
    movementY: 0,
    offsetX: 34,
    offsetY: 11,
    pageX: 705,
    pageY: 481,
    path: (7) [button, div.hello, 'div#app', body, html, document, Window],
    relatedTarget: null,
    returnValue: true,
    screenX: 705,
    screenY: 463,
    shiftKey: false,
    sourceCapabilities: 'InputDeviceCapabilities {firesTouchEvents: false}',
    srcElement: 'button',
    target: 'button',
    timeStamp: 825690.1700000017,
    toElement: button,
    type: "click",
    view: 'Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}',
    which: 1,
    x: 705,
    y: 329

}