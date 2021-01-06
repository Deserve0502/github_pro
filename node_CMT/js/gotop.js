window.onload = function () {
  let ogotop = document.querySelector(".return_con")
  let body = document.querySelector("body");
  // console.log('body',body.offsetHeight)
  // 获取页面可视区的高度
  var clientHeight = document.documentElement.clientHeight;

  var timer = null
  var isTop = true

  // 滚动条滚动时触发
  window.addEventListener('scroll', function () {
    var osTop = document.documentElement.scrollTop || document.body.scrollTop
    if (osTop >= clientHeight) {
      ogotop.style.opacity = '1'
    } else {
      ogotop.style.opacity = '0'
    }
    if (!isTop) {
      clearInterval(timer)
    }
    isTop = false
  })

  ogotop.onclick = function () {
    timer = setInterval(function () {
      // 获取滚动条距离顶部的高度
      var osTop = document.documentElement.scrollTop || document.body.scrollTop
      var ispeed = Math.floor(-osTop / 5)
      document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
      isTop = true
      if (osTop === 0) {
        clearInterval(timer)
      }
    }, 30)
  }
}
