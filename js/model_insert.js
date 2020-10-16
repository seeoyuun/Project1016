$(function () { ////////////////////// JQB /////////////////////
    console.log("로딩완료");

    ////////////////////////////////////////////////////////////////////
    //////// 메뉴 클릭시 메뉴창 나오기 //////////////////////////////////

    $(".menu").click(function () {
        $('.menu_wrap').addClass("on");
    }); ///////////// click /////////////////
    $(".menu_close").click(function () {
        $('.menu_wrap').removeClass("on");
    }); ///////////// click /////////////////

    //// 소개페이지에 링크 걸기 ////
    var carin =["avante","sonata","grandeur","venu","kona","tucson","santafe","palisade"];
    $('.small_car_top_area li').click(function(e){
        e.preventDefault();
        var idx=$(this).index();
        console.log("차종 : "+carin[idx]);
       location.href="model_details.html?cn="+carin[idx];
        
    });///////////// click //////////
     $('.small_car_bt_area li').click(function(e){
        e.preventDefault();
        var idx=$(this).index();
        console.log("차종 : "+carin[idx]);
       location.href="model_details.html?cn="+carin[idx];
        
    });///////////// click //////////
    






}); ///////////////// JQB /////////////////////////////////////
