$(function() {

  let titles = ['JavaScript', 'CSS', 'HTML', 'HTML5', 'SVG', 'PHP', 'Python', 'Shell', 'WebGL', '呜呜呜啦啦啦哇哇哇哈哈哈']
  let words = []
  for(let i = 0; i < titles.length; i++) {
    words[i] = {
      'title' : titles[i],
      'url' : ''
    }
  }
  let colors1 = ['#F46779', '#045DA4']    
  let colors2 = ['#D59A3E', '#C58B59']    
  let colors3 = ['#49B4E0', '#FCBDA2', '#EBADBD', '#D5C2AF', '#C0BDE5', '#CBCC7F', '#FFDA7F', '#8dd0c3', '#bbbfc6', '#a4d9ef', '#bbdb98']

  // responsive
  // 响应式wordbox需要有外层嵌套div    
  let wb1 = new dodoroy.WordBox('#box-responsive', {
    isLead: false,          //是否包含“全部”分类  
    leadWord: null,
    words: words,
    colors: colors1,
    borderWidth: 2,
    isFixedWidth: false
  })

  // fixed width
  $('#box-fixedWidth1').wordbox({
    isLead: false,    
    leadWord: null,
    words: words,
    colors: colors2,
    borderWidth: 2,
    isFixedWidth: true,
    width: 800,
    height: 200
  })

  $('#box-fixedWidth2').wordbox({
    isLead: true,          
    leadWord: {'title': '全部', 'url': ''},
    words: words,
    colors: colors3,
    borderWidth: 2,
    isFixedWidth: true,
    width: 280,
    height: 300
  })


  // 鼠标浮动时添加下划线
  $('.box a').hover(function(event) {            
    $(this).css({'text-decoration': 'underline'})
    event.stopPropagation()
  }, function(event) {
    $(this).css({'text-decoration': 'none'})
    event.stopPropagation()
  })
  // 鼠标浮动时字体变大
  let fontSize = $('#box-responsive').css('font-size')
  $('#box-fixedWidth1 .box a').hover(function(event) {  
    $(this).css({'font-size': '1.4em'})
    event.stopPropagation()
  }, function(event) {
    $(this).css({'font-size': fontSize})
    event.stopPropagation()
  })

})