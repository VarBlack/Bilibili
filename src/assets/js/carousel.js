function carousel(list,lis,btns,texts){
    let n = 0;
    let w = lis.width()
    let len = lis.length
    list.css('width',w*len)
    let timer = null;
    timer =  setInterval(tabImg,3000)
    list.on('mouseover',()=>{
        clearInterval(timer)
    })
    list.on('mouseout',()=>{
         timer =  setInterval(tabImg,3000)
    })

    btns.on('click',function(){
        n = $(this).index()-1
        tabImg()
    })
    function tabImg(){
            n++
            btns.removeClass('on')
            btns.eq(n).addClass('on')
            if(texts.length){
                texts.removeClass('on')
                texts.eq(n).addClass('on')
            }
            
            list.animate({'left':-n * w},300,function(){
                if(n==len-1){
                    n=-1
                }
            })
        }
        
    }

export {
    carousel
}