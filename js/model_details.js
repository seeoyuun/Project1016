// Get방식으로 url 파라미터 가져오기
var pm = location.href;
pm = pm.split("?")[1].split("=")[1];
//console.log("경로:" + pm);


////// 전역변수구역 //////////////////
// 1. 각 스크롤 액션 실행여부(0실행전,1실행후)
var p1 = 0,
    p2 = 0,
    p3 = 0,
    p4 = 0,
    p5 = 0,
    p6 = 0,
    p7 = 0;
// 2. 스크롤 액션 기준선 요소의 top값 셋팅변수
var p1pos, p2pos, p3pos, p4pos, p5pos, p6pos, p7pos;
// 3. 스크롤 액션 기준선차
const gap = 200;

// 부드러운 스크롤 적용함수 호출!
$(".wrap").smoothWheel();
/////////////////////////////////////////////////////////


// 각 자동차 셋팅하기!
var cinfo = {
    // 1. 투싼
    "tucson": {
        "첫이미지": "images/main/bg_tc.png",
        "제목": "2020 TUCSON",
        "외부이미지1": "images/main/main_tucson.png",
        "외부이미지1설명": "전면부를 감싼 듯한 보닛 디자인과 프레임리스 도어는 품격과 우아함을 발산하며,클래식한 패스트백 세단 스타일을 반영한 후면부 디자인과 아름다운 조화를 이룹니다.특히, 도어의 프레임리스 윈도우는 그랜드 투어러의 전형적인 스타일 요소를 담아 냈으며,뒷유리와 함께 위로 크게 열리는 테일게이트가 적용되어 여유로운 적재공간을 보다 손쉽게 이용할 수 있어 편리합니다.",
        "외부이미지2": "images/main/main_tucson2.png",
        "외부이미지2설명": "시트에 편안히 앉아 아테온의 인테리어를 감상해보십시오.현대적이며 스타일리시한 인테리어 마감 및 수준 높은 편의 사양의 완벽한 조합으로 고급스러운 실내 공간을 연출합니다. 시트는 ‘Nappa’ 가죽으로 마감하여고급스러움을 더했으며, 인체공학적으로 설계된 앞좌석 시트는 통풍시트,요추지지대를 포함한 전동 시트가 적용되어 편안하고 안정적인 착좌감을제공합니다.",
        "외부컬러이미지": "images/main/main_tucson5.JPG",
        "외부스타일1": "images/main/main_tucson3.JPG",
        "외부스타일2": "images/main/main_tucson4.JPG"
    },
    // 2. 코나
    "kona": {
        "첫제목": "The All-New KONA",
        "첫이미지": "images/main/main_kona.jpg",
        "제목": "2020 KONA",
        "외부이미지1": "images/main/main_kona1.png",
        "외부이미지1설명": "역동적인 실루엣으로 차의 볼륨감을 살리고 더 넓어진 스탠스와&nbsp; 안정적인 범퍼 디자인으로 단단한 이미지를 보여주고,&nbsp;라디에이터 그릴과 보닛 사이 예리한 모서리로 &nbsp;날렵해진 인상이 더해져 미래지향적인 디자인 아이덴티티를 전달합니다.",
        "외부이미지2": "images/main/main_kona3.png",
        "외부이미지2설명": "미래지향적인 가치를 담아 더욱 스타일리시하고 강렬하게, 하이테크 감성으로 다듬어진 디테일로 디자인 완성도를 높였습니다.",
        "외부컬러이미지": "images/main/main_kona6.png",
        "외부스타일1": "images/main/main_kona4.JPG",
        "외부스타일2": "images/main/main_kona5.JPG"
    },
    //3. 아반떼
    "avante": {
        "첫제목": "The All-New AVANTE",
        "첫이미지": "images/main/main_avante2.JPG",
        "제목": "2020 AVANTE",
        "외부이미지1": "images/main/main_avante6.png",
        "외부이미지1설명": "코나예요1",
        "외부이미지2": "images/main/main_avante7.png",
        "외부이미지2설명": "코나예요2",
        "외부컬러이미지": "images/main/main_avante8.JPG",
        "외부스타일1": "images/main/main_avante.JPG",
        "외부스타일2": "images/main/main_avante5.JPG"
    },
    // 4. 그랜져
    "grandeur": {
        "첫제목": "The All-New GRANDEUR",
        "첫이미지": "images/main/main_grandeur7.jpg",
        "제목": "2020 GRANDEUR",
        "외부이미지1": "images/main/main_grandeur1.png",
        "외부이미지1설명": "코나예요1",
        "외부이미지2": "images/main/main_grandeur3.png",
        "외부이미지2설명": "코나예요2",
        "외부컬러이미지": "images/main/main_grandeur4.png",
        "외부스타일1": "images/main/main_grandeur2.jpg",
        "외부스타일2": "images/main/main_grandeur5.png"
    },
    // 5. 싼타페
    "santafe": {
        "첫제목": "The All-New SANTAFE",
        "첫이미지": "images/main/main_santafe.JPG",
        "제목": "2020 SANTAFE",
        "외부이미지1": "images/main/main_santafe3.png",
        "외부이미지1설명": "코나예요1",
        "외부이미지2": "images/main/main_santafe4.png",
        "외부이미지2설명": "코나예요2",
        "외부컬러이미지": "images/main/main_santafe7.png",
        "외부스타일1": "images/main/main_santafe2.jpg",
        "외부스타일2": "images/main/main_santafe6.JPG"
    },
    // 6. 소나타
    "sonata": {
        "첫제목": "The All-New SONATA",
        "첫이미지": "images/main/main_sonata2.JPG",
        "제목": "2020 SONATA",
        "외부이미지1": "images/main/main_sonata4.JPG",
        "외부이미지1설명": "코나예요1",
        "외부이미지2": "images/main/main_sonata6.JPG",
        "외부이미지2설명": "코나예요2",
        "외부컬러이미지": "images/main/main_sonata1.png",
        "외부스타일1": "images/main/main_sonata3.JPG",
        "외부스타일2": "images/main/main_sonata5.JPG"
    },
    // 7. 베뉴
    "venu": {
        "첫제목": "The All-New VENU",
        "첫이미지": "images/main/main_venu.JPG",
        "제목": "2020 VENU",
        "외부이미지1": "images/main/main_venu4.png",
        "외부이미지1설명": "코나예요1",
        "외부이미지2": "images/main/main_venu5.png",
        "외부이미지2설명": "코나예요2",
        "외부컬러이미지": "images/main/main_venu7.png",
        "외부스타일1": "images/main/main_venu3.png",
        "외부스타일2": "images/main/main_venu6.png"
    },
    // 8. 펠리세이드
    "palisade": {
        "첫제목": "The All-New PALIISADE",
        "첫이미지": "images/main/main_palisade.JPG",
        "제목": "2020 PALISADE",
        "외부이미지1": "images/main/main_palisade4.JPG",
        "외부이미지1설명": "코나예요1",
        "외부이미지2": "images/main/main_palisade5.JPG",
        "외부이미지2설명": "코나예요2",
        "외부컬러이미지": "images/main/main_palisade6.JPG",
        "외부스타일1": "images/main/main_palisade7.JPG",
        "외부스타일2": "images/main/main_palisade8.JPG"
    }
};




$(function () { ////////////////////// JQB /////////////////////
    console.log("로딩완료");

    // 자동차 정보 셋팅! //
    // for in문 - 객체의 개수만큼 알아서 돈다!
    for (var x in cinfo[pm]) {
        console.log(x);

        // switch case문!
        switch (x) {
            case "첫제목":
                $('.mmw_tit').text(cinfo[pm][x]);
            case "첫이미지":
                $(".main_bg img").attr("src", cinfo[pm][x]);
                break;
            case "제목":
                $(".main_txt").text(cinfo[pm][x]);
                break;
            case "외부이미지1":
                $(".ext_sec1 img").attr("src", cinfo[pm][x]);
                break;
            case "외부이미지1설명":
                $("ext_txt").eq(0).text(cinfo[pm][x]);
                break;
            case "외부이미지2":
                $(".ext_sec2 img").attr("src", cinfo[pm][x]);
                break;
            case "외부이미지2설명":
                $("ext_txt").eq(1).text(cinfo[pm][x]);
                break;
            case "외부컬러이미지":
                $(".ecimg img").attr("src", cinfo[pm][x]);
                break;
            case "외부스타일1":
                $(".ext_model img").eq(0).attr("src", cinfo[pm][x]);
                break;
            case "외부스타일2":
                $(".ext_model img").eq(1).attr("src", cinfo[pm][x]);
                break;
        } //// switch case ///////////

    } //////// for in문 ///////

    ////////////////////////////////////////////////////////////////////
    //////// 메뉴 클릭시 메뉴창 나오기 //////////////////////////////////

    $(".menu").click(function () {
        console.log("아아아아아아");
        $('.menu_wrap').addClass("on");
    }); ///////////// click /////////////////
    $(".menu_close").click(function () {
        $('.menu_wrap').removeClass("on");
    }); ///////////// click ////////////////////////
    /*

        //////// space공간 클릭 시 나오는 영역
        var csimg = ["사진1", "사진2", "사진3", "사진4"];
        var cstit = ["제목1", "제목2", "제목3", "제목4"];
        var cstxt = ["설명1", "설명2", "설명3", "설명4"];


        $('.space_wrap a').click(function (e) {
            e.preventDefault();
            var idx = $(this).index(".space_wrap a");
            console.log(csimg[idx] + "/" + cstit[idx] + "/" + cstxt[idx]);


            //        $(".ext_sec1 img").attr("src",csimg[idx]);
            //        $("ext_txt").eq(0).text(cstit[idx]);
            //        $("ext_txt").eq(0).text(cstxt[idx]);
        }); //////////////// click /////////////////////////////
    */

    //////////////////////////////////////////////////////////////
    ///// 스크롤 액션 하기 //////////////////////////////////////////

    // 각 등장이미지 셋팅
    // 대상 : .sca
    // 내용 : 아래로 이동 투명하게
    $('.sca').css({
        top: '60%',
        opacity: 0
    }); //////////// css //////////////////

    // 등장할 요소 지정 클래스 : .sca
    var sca = $('.sca');
    // 위치할당변수
    var scpos = [];
    // 등장요소 위치 셋업
    for (var i = 0; i < sca.length; i++) {
        scpos[i] = sca.eq(i).offset().top;
    } ///////////// for ///////////////

    //console.log('위치셋팅 : ' + scpos);

    //// 스크롤 액션 //////////////////////////////////////
    $(window).scroll(function () {
        // 현재 스크롤바 위치
        var scTop = $(this).scrollTop();
        //console.log('스위 : '+scTop);

        // 1. 2페이지 등장
        if (scTop > scpos[0] - 200 && scTop < scpos[0] - 100) {
            $('.sca').eq(0).css({
                top: '20%',
                opacity: 1
            }); //////////// css //////////////////
        } /////////////////// if /////////////////////////
        if (scTop > scpos[1] - 200 && scTop < scpos[1] - 100) {
            $('.sca').eq(1).css({
                top: '20%',
                opacity: 1
            }); //////////// css //////////////////
        } /////////////////// if /////////////////////////




    }); //////////// scroll //////////////////////////////
    /////////////////////////////////////////////////////



    /////////////////////////////////////////////////////////////////
    /////////////////// 인테리어 시트지 슬라이드 ///////////////
    $(".int_slide_next").click(function (e) {
        e.preventDefault();

        $('#interior_slide').animate({
            left: '-100%'
        }, 1000, 'easeOutCubic', function () {
            $(this).append($("#interior_slide li").first())
                .css({
                    left: 0
                });
        });

    }); ////////// click ////////////////////////////////////
    $('.int_slide_prev').click(function (e) {
        e.preventDefault();
        $('#interior_slide').animate({
            left: '0%'
        }, 1000, 'easeOutCubic', function () {
            $(this).prepend($("#interior_slide li").last())
                .css({
                    left: '-100%'
                });
        });
    }); ////////////////// click ///////////////////////
    $(".md_ban1").click(function (e) {
        e.preventDefault();
        location.href = "contact.html";
    });


}); ///////////////// JQB /////////////////////////////////////
