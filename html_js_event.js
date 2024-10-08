// 1.获取按钮
let btn = document.querySelector(".btn")
// 2.添加点击事件 为按钮增加事件监听
// addEventListener方法有两个参数：第一个 事件类型 click就是点击事件；第二个 回调函数 一旦触发事件 函数就会自动调用
btn.addEventListener("click", () => {
    alert("触发按钮点击事件")
})

// 按钮click事件修改文字
let mydiv = document.querySelector(".mydiv")
let mybtn = document.querySelector(".mybtn")
mybtn.addEventListener("click", () => {
    mydiv.innerHTML = "今天是雨天"
})

// 输入框表单change事件修改文字
let myinput = document.querySelector(".myinput")
let myh1 = document.querySelector(".myh1")
// change事件 当表单里面的值发生了变化 就会触发
myinput.addEventListener("change", (e) => {
    myh1.innerHTML = e.target.value
})

let inc = document.querySelector(".inc")
let inc1 = document.querySelector(".inc1")
inc.addEventListener("click", () => {
    // 自增会自动转换数据类型 隐式转换
    inc1.innerHTML++
    // 当数值等于5，让数字变成红色
    if (inc1.innerHTML == 5) {
        inc1.style.color = "red"
    }
})

