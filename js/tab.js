$(function(){
    $.ajax({
        type : "GET",
        url : "/lhkjson/DB_json/lhkportfolioDB.json",
        data :"json",
        success : function(lhkportfolioDB){
           var activeIndex = 0;
           var thumbImg = '';
           var linkinfo = '';

        //    for(let x in lhkportfolioDB[activeIndex].thumbImg){
        //     thumbImg += `<li><img src=${lhkportfolioDB[activeIndex].thumbImg[x]}></li>`;
        //    }
        $.each(lhkportfolioDB[activeIndex].thumbImg, (index,item)=>{
            thumbImg += `<li><img src="${item}"></li>`
        })
        $.each(lhkportfolioDB[activeIndex].pLinkinfo, (index,item)=>{
            linkinfo += `<li class="${item.iconCs}"><a href="${item.iconLink}">${item.iconText}</a></li>`;
        })


           $('.titleImg img').attr('src', lhkportfolioDB[activeIndex].titleImg);
           $('.description h2').html(lhkportfolioDB[activeIndex].descriptionH2)
           $('.description p').html(lhkportfolioDB[activeIndex].description)

           $('.thumbImg').html(thumbImg)
           $('.p_linkinfo').html(linkinfo)

           

        },
        error : function(){

        }

        
    })
})