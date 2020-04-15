// 定义最大的 fontsize
const MAX_FONT_SIZE = 42

// 监听 html 文档被解析完成的事件
document.addEventListener('DOMContentLoaded', () => {
  // 获取 html 标签
  const html = document.querySelector('html')
  // 获取根元素 fontSize 标准
  let fontSize = window.innerWidth / 10
  // 获取到的 fontSize 不允许超过我们定义的最大值
  fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize
  // 定义根元素 (html) fontSize 的大小 (rem)
  html.style.fontSize = fontSize + 'px'
})
