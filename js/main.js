
var car_name = "tucson";
  


$(function () { ////////////////////// JQB /////////////////////
    console.log("로딩완료");

    /// 전역변수구역 //////////////

    // 1.현재 페이지번호
    var pno = 0;
    // 2.스크롤액션 실행여부(메뉴변경)
    var pm1 = 0,
        pm2 = 0,
        pm3 = 0,
        pm4 = 0,
        pm5 = 0,
        pm6 = 0,
        pm7 = 0;
    // 3.스크롤액션 기준위치
    var p1pos, p2pos, p3pos, p4pos, p5pos, p6pos, p7pos;
    // 4.기준선 범위 갭
    var gap = 200;
    // 5.메뉴를 클릭할 경우 상태변수
    var click_sts = 0; //0-클릭안함,1-클릭함
    // 6. 탑메뉴 변경 실행 여부체크 상태변수
    var tmsts = 0; // 0-실행전 , 1-실행후
    // 탑버튼위치값(top:70%)
    var tbpos = $(window).height() * 0.7;
    //console.log("70%값:" + tbpos);
    // 창 세로크기의 70%값을 px수치로 계산

    ///// 스크롤 이벤트 함수 ////////
    /// scroll() /////////////////
    $(window).scroll(function (e) {

        // 현재 스크롤 위치값(세로스크롤)
        var scTop = $(this).scrollTop();
        ////console.log("위치:"+scTop);


        // 1.스크롤위치가 200px 미만일때
        if (scTop < 200) {

            // 버튼숨기고 처음위치로
            $("#tbtn").hide().css({
                top: tbpos + "px"
            }); /// css ///////

        } //// if ////////////////////
        // 2.스크롤위치가 200px 이상일때
        else {

            // 버튼보이고 위치이동하기
            $("#tbtn").show().stop()
                .animate({
                    top: (tbpos + scTop) + "px"
                }, 400, "easeOutCirc");

        } //// else //////////////////
    }); ///////////////// scroll /////////////////////////////////////

    /// 탑버튼 클릭시 맨위로 이동하기 ////
    $("#tbtn").click(function () {
        click_sts = 1; //스크롤잠금
        $("html,body").animate({
            scrollTop: "0px"
        }, 800, "easeInOutQuint", function () {
            click_sts = 0; //해제   
        }); /// animate /////

        // 메뉴변경하기 //
        pno = 0;

    }); ////////// click ///////////




    //// 링크 연결하기 ///////
    $("#menu_ul a").click(function () {
        var idx = $(this).parent().index(); //li순번
        //alert(idx);

        // 이동위치설정하기
        var url;
        switch (idx) {
            case 0:
                url = "model_insert.html";
                break;
            case 1:
                url = "http://www.naver.com";
                break;
            default:
                url = "model_insert.html";
        }

        // 이동하기
        location.href = url;


    }); ////////// click /////////////

    //////// 링크 연결하기 ////////////////
    $(".click").click(function () {
        console.log("들어와?"+car_name);
        location.href = "model_details.html?cn="+car_name;
    }); //////////// click ///////////////////

    // 링크 시 홈으로 ////
    $('.logo,.banner li:nth-child(2)').click(function () {
        location.href = "index.html";
    }); ////////////////// click /////////////////
    
    // 배너 상세모델 검색 클릭시 모델검색창으로 이동하기 //
    $('.banner li:nth-child(1)').click(function(){
        location.href="model_insert.html";
    });/////////// click //////////////
    
    // 시승신청하기 클릭 시 시승신청기창으로 이동하기 ////
    $('.banner li:nth-child(2),.banner li:nth-child(4)').click(function(){
        location.href="contact.html";
    });///////////// click ////////////////
    
    
    
    
    // 자동차 프로모션 링크 박스
    var set_pm = ["avante","grandeur","sonata","kona","tucson","santafe"];
    $(".promo a").click(function(e){
        e.preventDefault();
        var idx = $(this).index();
        //console.log("차종:"+set_pm[idx]);
        
       location.href = "model_details.html?cn="+set_pm[idx];
    });///////// click  ///////////////
    
    
    // 자동차 라인업 링크 박스
    $(".car_lineup a").click(function(e){
        e.preventDefault();
        // 자동차이름 읽어오기
        var txt = $("span",this).text();
        // 중앙자동차 여부
        var center = $(this).parent().is(".car_lineup li:nth-child(3)");
        console.log("차이름:"+txt+"/"+center);
        
        if(center)
            location.href = "model_details.html?cn="+txt;
    });///////// click  ///////////////
    
    



    ///////////  메인 슬라이드  시작 /////////////////////////////////////
    ////////////////////////////////////////////////////////
    var artprot = 0;

    $(".slide_next").click(function (e) {
        e.preventDefault(); //기본이동막기

        /// 광클금지 //////////////////////
        if (artprot === 1) return false; //돌아가
        artprot = 1; //잠금!
        setTimeout(function () {
            artprot = 0; //해제
        }, 1000);
        ///////////////////////////////
        
        
        car_name = $("#imgslide li").eq(1).attr("data-nm");
        console.log("차이름:"+car_name);
        


        $("#imgslide")
            .animate({
                left: "-100%"
            }, 1000, "easeOutQuad", function () {

                $(this)
                    .append($("#imgslide>li").first())
                    .css({
                        left: "0"
                    });

            }); //////// animate //////////////

    }); /////////// click ///////////////////////////////////////////////

    $(".slide_prev").click(function (e) {
        e.preventDefault(); //기본이동막기

        /// 광클금지 //////////////////////
        if (artprot === 1) return false; //돌아가
        artprot = 1; //잠금!
        setTimeout(function () {
            artprot = 0; //해제
        }, 1000);
        ///////////////////////////////
        
        
        car_name = $("#imgslide li").eq(4).attr("data-nm");
        console.log("차이름:"+car_name);


        // 4번째(3번째될 li)요소에 class="on"넣기
        /*$(".mv_list_1>li").eq(1).addClass("on")
        .siblings().removeClass("on");*/

        $("#imgslide")
            .prepend($("#imgslide>li").last())
            .css({
                left: "-100%"
            });


        $("#imgslide")
            .animate({
                left: "0%"
            }, 1000, "easeOutQuad"); //////// animate //////////////

    }); /////////// click //////////


    ////////////////////////////////////////////////////////////////////
    //////// 메뉴 클릭시 메뉴창 나오기 //////////////////////////////////

    $(".menu").click(function () {
        $('.menu_wrap').addClass("on");
    }); ///////////// click /////////////////
    $(".menu_close").click(function () {
        $('.menu_wrap').removeClass("on");
    }); ///////////// click /////////////////


    /////////////////////////////////////////////////////////////////////
    /////////// 차종라인업 슬라이드 //////////////////////////////////////////
    // 광클 금지
    var car_lineup_Slide_sts = 0;

    var car_lineup_Slide = function (dir) { // dir - 방향(1-왼쪽, 0-오른쪽)

        /// 광클금지 //////////////////////
        if (car_lineup_Slide_sts === 1) return false; //돌아가
        car_lineup_Slide_sts = 1; //잠금!
        setTimeout(function () {
            car_lineup_Slide_sts = 0; //해제
        }, 400);
        ///////////////////////////////




        if (dir) { // 왼쪽 버튼

            // 중앙으로 올 2번째 변경하기
            $(".car_lineup li").eq(1).css({
                    transform: "scale(1.2)"
                })
                .siblings().css({
                    transform: "scale(0.8)"
                });

            // 6,3번 li 흐리게
            $(".car_lineup li:eq(6),.car_lineup li:eq(3)").css({
                opacity: .5
            });

            $(".car_lineup li:eq(0),.car_lineup li:eq(2),.car_lineup li:eq(4)").css({
                opacity: 1
            });

            $('.car_lineup').prepend($('.car_lineup li').last())
                .css({
                    left: "-20%"
                })

                .animate({
                    left: '0%'
                }, 400, "easeInSine");
            //////////// animate /////
        } ////// if /////////////
        else { /// 오른쪽버튼
            // 중앙으로 올 4번째 변경하기
            $(".car_lineup li").eq(3).css({
                    transform: "scale(1.2)"
                })
                .siblings().css({
                    transform: "scale(0.8)"
                });


            // 1,5번 li 흐리게
            $(".car_lineup li:eq(1),.car_lineup li:eq(5)").css({
                opacity: .5
            });
            $(".car_lineup li:eq(2),.car_lineup li:eq(3),.car_lineup li:eq(4)").css({
                opacity: 1
            });



            $('.car_lineup').stop().animate({
                left: '-20%'
            }, 400, "easeInSine", function () {
                $(this).append($('.car_lineup li').first())
                    .css({
                        left: "0%"
                    });
            }); //////////// animate ///////////////////////////
        } //////// else //////////////////


    }; //////////// 차종라인업 슬라이드 함수 ///////////


    // 오른쪽 버튼
    $('.lineup_next').click(function (e) {
        // 기본이동막기
        e.preventDefault();

        //이동함수 호출
        car_lineup_Slide(0);

    }); /////////////////// click //////////////////////
    // 왼쪽 버튼
    $('.lineup_prev').click(function (e) {
        // 기본이동막기
        e.preventDefault();

        //이동함수 호출
        car_lineup_Slide(1);

    }); /////////////////// click //////////////////////
    
    
    
    

    $('.car_lineup').click(function (e) {
        // 기본이동막기
        e.preventDefault();

        //이동함수 호출
        car_lineup_Slide(1);
        

    }); /////////////////// click //////////////////////


    /* // 드래그 대상 : #move
            var move = $(".car_lineup")
            move.draggable({
                    axis: "x" // 축고정 (x는 x축 , y는 y축)
                })
                // 트래지션 설정
                .css({
                    transition: "all .8s ease-out"
                });

            // 위치 이동 한계 설정
            // 화면 한계값 계산

            // 화면의 1/3 크기는?
            // 첫번째 한계값
            var fpt = $(window).width()/2;
            console.log("첫째한계 : " + fpt);

            // 마지막 한계값
            var lpt=move.width() - (fpt*3);
            // 마지막 한계값은 전체 크기에서 화면 2/3크기를 빼면됨
            console.log("마지막한계 : "+lpt);
            
    
            
            $("html,body").on("mousedown mouseup mousemove touchstart touchend touchmove", function() {
                //console.log("마우스냐 터치냐");

                // 1. 움직이는 박스(#move)의 left값 구하기
                var mpos = move.offset().left;
                //console.log("현재 left : " + mpos);

                // 2. 처음 한계값 체크 후 위치고정하기
                if (mpos > fpt) {
                    move.css({
                        left: fpt + "px"
                    });////////// css /////////////
                } ////// if //////////////////////
                
                // 3. 마지막 한계값 체크 후 위치고정하기
                else if(mpos < -lpt){
                    move.css({
                        left: -lpt +"px"
                    });////// css ///////////////////////
                }

            }); /////////// 마우스와 터치 이벤트 ///////////////////////

*/
    /// 글씨 쓰기 제이쿼리

    var typed = new Typed("#typed", {
        // 타이핑될 문구
        strings: [
            "모두를 위한 현대.현대자동차의 새로운 모델과 혁신적인 기술을 경험해보세요 .^500\n이 달의 프로모션을 구경해보세요."
            // ^숫자 - 대기시간(1/1000초), \n - 줄바꿈
        ],
        // 타이핑스피드
        typeSpeed: 100,
        // 지우기스피드
        backSpeed: 0,
        // 반복여부
        loop: false

    }); /// typed ///









}); ////////////////// jqb /////////////////////////////////////////////////
