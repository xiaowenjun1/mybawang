function parseUrl() {
    var n = location.href
      , t = n.indexOf("#");
    if (t != -1)
        return n.substr(t + 1)
}
function b() {
    h = $(window).height();
    t = $(document).scrollTop();
    t > h ? $("#top").show() : $("#top").hide()
}
function typing() {
    text = $("#banner_txt").text();
    $("#banner_txt").text("");
    $("#banner_txt").show();
    typed()
}
function typed() {
    result += text.charAt(index);
    $("#banner_txt").text(result + (index & 1 ? "_" : " "));
    index < text.length - 1 ? (index++,
    id = setTimeout("typed()", 100)) : clearTimeout(id)
}
function getTop() {
    var n = $(document).scrollTop();
    $(document).scrollTop() > 0 ? $(".lamp").addClass("active") : $(".lamp").removeClass("active");
    setTimeout(getTop)
}
function onsendemail() {
    var n = !0, r, t, i;
    if ($("#company").val() || ($("#company").prev().css("color", "red"),
    n = !1),
    $("#email").val() ? IsEmail($("#email").val()) || (n = !1) : ($("#email").prev().css("color", "red"),
    n = !1),
    $("#name").val() || ($("#name").prev().css("color", "red"),
    n = !1),
    $("#mobile").val() ? $("#mobile").val().length != 11 && ($("#mobile").val(""),
    $("#mobile").prev().css("color", "red"),
    $("#mobile").prev().text(""),
    $("#mobile").prev().css("display", "block"),
    n = !1) : ($("#mobile").prev().css("color", "red"),
    n = !1),
    r = $('input:radio[name="money"]:checked').val(),
    r == null && (n = !1),
    t = "",
    $("input[name='neirong']:checkbox").each(function() {
        $(this).is(":checked") && (t += $(this).attr("value") + ",")
    }),
    t != null && t.length > 1 && (t = t.substring(0, t.length - 1)),
    i = "",
    $("input[name='guanzhu']:checkbox").each(function() {
        $(this).is(":checked") && (i += $(this).attr("value") + ",")
    }),
    i != null && i.length > 1 && (i = i.substring(0, i.length - 1)),
    n == !1)
        return !1;
    if (n == !0) {
        var u = encodeURI($("#company").val())
          , f = encodeURI($("#email").val())
          , e = encodeURI($("#name").val())
          , o = encodeURI($("#mobile").val())
          , s = encodeURI($("#content").val());
        $.ajax({
            type: "get",
            url: "http://www.fasene.com/App_Handlers/sendmail.ashx",
            data: {
                lang: "cn",
                company: u,
                email: f,
                phone: o,
                name: e,
                minfo: s,
                service: t,
                guanzhu: i,
                yusuan: r
            },
            success: function(n) {
                n == "true" ? ($("#company").val(""),
                $("#email").val(""),
                $("#name").val(""),
                $("#mobile").val(""),
                $("#content").val(""),
                alert("留言提交成功，感谢您的支持!")) : alert("留言提交失败，请稍后重试!")
            }
        })
    }
}
function loadanimatebox() {
    $(".animate-enable").length > 0 && $(".animate-enable").each(function() {
        var n, t;
        if (!$(this).hasClass("animate-active")) {
            n = $(window).width() > 768 ? 180 : 80;
            $(this).attr("data-aheight") != undefined && $(this).attr("data-aheight") != "" && (n = parseInt($(this).attr("data-aheight")));
            var i = window.innerHeight ? window.innerHeight : $(window).height()
              , r = $(window).scrollTop() + i
              , u = $(this).offset().top + n;
            r > u && (t = $(this),
            $(this).imagesLoaded(function() {
                t.addClass("animate-active")
            }))
        }
    })
}
function totop() {
    return $("body,html").animate({
        scrollTop: 0
    }, 800),
    !1
}
function setprojs() {
    $(".casebox").length > 0 && $(".casebox .box_left").hover(function() {
        $(this).stop().css({
            position: "absolute"
        });
        $(this).find("img").stop().animate({
            "margin-left": "0px"
        }, 200);
        $(this).stop().animate({
            width: "100%"
        }, 200)
    }, function() {
        $(this).stop().css({
            position: "relative"
        });
        $(this).find("img").stop().animate({
            "margin-left": "-50%"
        }, 200);
        $(this).stop().animate({
            width: "50%"
        }, 200)
    })
}
function tiaoing(n) {
    $(n).find("img").transition({
        y: 10
    }, 400, "easeInQuad").transition({
        y: 0
    }, 400, "easeOutQuad");
    $(n).find("i").transition({
        y: -5
    }, 400, "easeInQuad").transition({
        y: 0
    }, 400, "easeOutQuad")
}
function ChangeDateFormat() {
    try {
        var n = new Date;
        return n.getFullYear() + "-" + (n.getMonth() + 1) + "-" + n.getDate() + " " + n.getHours() + ":" + n.getMinutes() + ":" + n.getSeconds()
    } catch (i) {
        return ""
    }
}
function cutstr(n, t) {
    var i = 0, u = 0, r;
    for (str_cut = new String,
    u = n.length,
    r = 0; r < u; r++)
        if (a = n.charAt(r),
        i++,
        escape(a).length > 4 && i++,
        str_cut = str_cut.concat(a),
        i >= t)
            return str_cut = str_cut.concat("...");
    if (i < t)
        return n
}
function getYMD(n) {
    var i = new Date(n).toLocaleDateString()
      , t = i.match(/\d+/g);
    return t ? t[0] + "-" + ("0" + t[1]).slice(-2) + "-" + ("0" + t[2]).slice(-2) : "日期错误"
}
function IsEmail(n) {
    return /^\w+([-+.\']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.exec(n) ? !0 : !1
}
function IsPhone(n) {
    return /^([\/0-9,()-－， ,——]){6,18}([a-zA-Z0-9_-])$/.exec(n) ? !0 : !1
}
function getvalue(n) {
    return document.getElementById(n) ? encodeURI(document.getElementById(n).value) : ""
}
function getrandom() {
    return Math.floor(Math.random() * 1e10)
}
function tomallsearch() {
    return event.keyCode == 13 && mallsearch(),
    !1
}
function towebsearch() {
    return event.keyCode == 13 && websearch(),
    !1
}
function resizemin() {
    var n = $(window).width();
    $(".homeservice .servicebox").length > 0 && $(".homeservice .servicebox ul li a i").each(function() {
        $(this).css({
            height: $(this).width() + "px",
            "line-height": $(this).width() + "px"
        })
    });
    $(".about .aboutbox .abouticon").length > 0 && $(".about .aboutbox .abouticon li p").each(function() {
        $(this).css({
            height: $(this).width() + "px",
            "line-height": $(this).width() + "px"
        })
    });
    $(".popbox").length > 0 && $(".popbox").height($(document).height());
    n < 992 || n > 1263
}
function showpopbox(n) {
    $(".pop:visible").length > 0 ? ($(".pop:visible").hide(),
    $("#" + n).show()) : $("#" + n).fadeIn(300);
    n == "editbox" && $.ajax({
        type: "get",
        url: "http://www.fasene.com/App_Handlers/vuser.ashx",
        data: {
            act: "getuser",
            rdm: getrandom()
        },
        contentType: "application/json",
        dataType: "json",
        success: function(n) {
            n != undefined && n.length > 0 && ($("#span_txt_username").html(n[0].UserName),
            $("#edit_txt_realname").val(n[0].RealName_cn),
            $("#edit_txt_telephone").val(n[0].Telephone),
            $("#edit_txt_address").val(n[0].Address),
            $("#edit_txt_email").val(n[0].Email))
        }
    });
    $(".pop .pop_form .form_input").removeClass("form_error");
    $(".pop .pop_form .form_tip").empty();
    $(".pop .pop_form .form_button .input_button").removeClass("off");
    setpopbox()
}
function hidepopbox(n) {
    $("#" + n).fadeOut(200)
}
function setpopbox() {
    $(".pop").each(function() {
        var t = $(window).width()
          , n = $(window).height()
          , r = $(this).find(".pop_box").width()
          , i = $(this).find(".pop_box").height();
        t - 400 > 0 || $(this).find(".pop_box").css("left", "0px");
        n - i > 0 ? $(this).find(".pop_box .pop_form").css("height", "auto") : ($(this).find(".pop_box").css("top", "0px"),
        $(this).find(".pop_box .pop_form").height(n - 130))
    })
}
function touserlogin() {
    return event.keyCode == 13 && userlogin(),
    !1
}
function loadingShow() {
    $(".loading").length == 0 && $("body").append(loadding);
    $(".loading").fadeIn(150)
}
function loadingHide() {
    $(".loading").fadeOut(150)
}
function scrollload(n, t, i, r) {
    i.totalpages > 1 && $(function() {
        function e() {
            var e;
            if (u.is(":visible") && !u.hasClass("disnone")) {
                var o = u.offset().top + u.height()
                  , s = window.innerHeight ? window.innerHeight : $(window).height()
                  , h = $(window).scrollTop() + s + 20;
                h > o && (e = parseInt(u.attr("pagenow")),
                e < i.totalpages & !f && (f = !0,
                e = e + 1,
                u.attr("pagenow", e),
                i.pageno = e,
                loadingShow(),
                $.ajax({
                    type: "get",
                    url: t,
                    data: i,
                    contentType: "application/json",
                    dataType: "json",
                    success: function(t) {
                        loadingHide();
                        f = !1;
                        t != undefined && r(n, t, !1, i)
                    }
                })))
            }
        }
        var u = $(n), o = $(window), s = $(document), f;
        (u.attr("pagenow") == undefined || u.attr("pagenow") == "") && u.attr("pagenow", "1");
        f = !1;
        $(window).unbind("scroll." + n.replace("#", "").replace(".", "")).bind("scroll." + n.replace("#", "").replace(".", ""), e)
    })
}
function newslist(n, t, i) {
    for (var f, r = "", u = 0; u < t.length; u++)
        r += '<li><a  target="_blank"  href="http://www.fasene.com/News/Info/' + t[u].NewsID + '.xhtml">',
        r += '<div class="list_center"><img class="lazyload" src="bg_img_news.png"/*tpa=http://www.fasene.com/App_Assets/Images/bg_img_news.png*/ data-original="',
        r += t[u].NewsImgBreviary != "" ? "/Sources/Images/News/" + t[u].NewsImgBreviary + "?rnd=" + getrandom() : "nopic_w.jpg"/*tpa=http://www.fasene.com/App_Assets/Images/nopic_w.jpg*/,
        r += '" /><\/div>',
        r += '<div class="list_right">',
        r += '<h3 class="title">' + t[u].NewsTitle + "<\/h2>",
        r += "<p>" + t[u].NewsIntr + "<\/p>",
        r += "<\/div><\/a><\/li>";
    i ? ($(n).html(r),
    f = $(n).offset().top - $("#header").height(),
    $.scrollTo(f, 800, {
        easing: "easeInOutCubic",
        axis: "y"
    })) : $(n).append(r);
    $(n).find("img.lazyload").lazyload({
        threshold: 50,
        failurelimit: 10
    })
}
function DynamicList(n, t, i) {
    for (var f, r = "", u = 0; u < t.length; u++)
        r += '<div class="col-md-4 col-sm-6"><div class="gt_blog_wrap default_width mb30"><figure><a  target="_blank"  href="http://www.fasene.com/dynamic/Info/' + t[u].NewsID + '.html" title="' + t[u].NewsTitle + '">',
        r += '<img class="lazyloadn" src="',
        r += t[u].NewsImg != "" ? "/Sources/Images/News/" + t[u].NewsImg + "?rnd=" + getrandom() : "nopic_w.jpg"/*tpa=http://www.fasene.com/App_Assets/Images/nopic_w.jpg*/,
        r += '" /><\/a><\/figure>',
        r += ' <div class="gt_blog_des default_width"><ul class="gt_event_meta">',
        r += '<li><i class="fa fa-calendar"><\/i>' + getYMD(t[u].NewsIssueDate) + "<\/li>",
        r += '<li style="display:none"><i class="fa fa-user"><\/i>' + t[u].NewsAuthor + "<\/li><\/ul>",
        r += '<h6><a  target="_blank"  href="http://www.fasene.com/dynamic/Info/' + t[u].NewsID + '.html" title=' + t[u].NewsTitle + ">" + t[u].NewsTitle + "<\/a><\/h6>",
        r += "<p>" + t[u].NewsIntr + "<\/p><\/div>",
        r += '<a  target="_blank"  href="http://www.fasene.com/dynamic/Info/' + t[u].NewsID + '.html">查看更多<i class="fa fa-long-arrow-right"><\/i><\/a>',
        r += "<\/div> <\/div>";
    i ? ($(n).html(r),
    f = $(n).offset().top - $("#header").height(),
    $.scrollTo(f, 800, {
        easing: "easeInOutCubic",
        axis: "y"
    })) : $(n).append(r);
    $(n).find("img.lazyload").lazyload({
        threshold: 50,
        failurelimit: 10
    })
}
function caselists(n, t, i) {
    for (var f, r = "", u = 0; u < t.length; u++)
        r += '<li><a target="_blank" href="http://www.fasene.com/Case/Info/' + t[u].NewsID + '.html" class="img">',
        r += '<img class="lazyload childImg" src="bg_img_news.gif"/*tpa=http://www.fasene.com/App_Assets/Images/bg_img_news.gif*/ data-original="',
        r += t[u].NewsTitleType != "" ? "/Sources/Images/News/" + t[u].NewsTitleType + "?rnd=" + getrandom() : "nopic_w.jpg"/*tpa=http://www.fasene.com/App_Assets/Images/nopic_w.jpg*/,
        r += '" alt=' + t[u].NewsTitle + " /><\/a><\/li>";
    i ? ($(n).html(r),
    f = $(n).offset().top - $("#header").height(),
    $.scrollTo(f, 800, {
        easing: "easeInOutCubic",
        axis: "y"
    })) : $(n).append(r);
    $(n).find("img.lazyload").lazyload({
        threshold: 50,
        failurelimit: 10
    })
}
function caselist(n, t, i) {
    for (var f, r = "", u = 0; u < t.length; u++)
        r += '<dl class="col-lg-4 col-md-4 col-sm-6 col-xs-6"><dd><a target="_blank" href="http://www.fasene.com/Case/Info/' + t[u].NewsID + '.html">',
        r += '<img class="lazyload childImg" src="bg_img_news.gif"/*tpa=http://www.fasene.com/App_Assets/Images/bg_img_news.gif*/ data-original="',
        r += t[u].NewsTitleType != "" ? "/Sources/Images/News/" + t[u].NewsTitleType + "?rnd=" + getrandom() : "nopic_w.jpg"/*tpa=http://www.fasene.com/App_Assets/Images/nopic_w.jpg*/,
        r += '" alt=' + t[u].NewsTitle + " />",
        r += ' <div class="work-item-cover"><div class="cover_img cover8" style="background: url(/Sources/Images/News/' + t[u].NewsRemarks + ' )no-repeat center center;"><\/div><\/div>',
        r += "<\/a><dt><h3>" + t[u].NewsTitle + "<\/h3><\/dt>",
        r += "<dt>" + t[u].NewsDescription + "<\/dt><\/dl>";
    i ? ($(n).html(r),
    f = $(n).offset().top - $("#header").height(),
    $.scrollTo(f, 800, {
        easing: "easeInOutCubic",
        axis: "y"
    })) : $(n).append(r);
    $(n).find("img.lazyload").lazyload({
        threshold: 50,
        failurelimit: 10
    })
}
function newscount(n, t, i) {
    $.ajax({
        type: "get",
        url: t,
        data: i,
        contentType: "application/json",
        dataType: "json",
        success: function(t) {
            loadingHide();
            showing = !1;
            t != undefined && (console.log(t),
            $(n).html(t))
        }
    })
}
function setpager(n) {
    $(".zxf_pagediv").createPage({
        pageNum: n,
        current: 1,
        shownum: 6,
        backfun: function(n) {
            NewsListpage(n.current);
            $.scrollTo($("#dynamic_con").offset().top - 70, 400, {
                easing: "easeInOutExpo",
                axis: "y"
            })
        }
    })
}
function newsClist(n, t, i) {
    $.ajax({
        type: "get",
        url: t,
        data: i,
        contentType: "application/json",
        dataType: "json",
        success: function(t) {
            var r, u;
            if (loadingHide(),
            showing = !1,
            t != undefined) {
                for ($(n).html(""),
                r = "",
                u = 0; u < t.length; u++)
                    r += '<div class="col-md-4 col-sm-6"><div class="gt_blog_wrap default_width mb30"><figure><a  target="_blank"  href="http://www.fasene.com/dynamic/Info/' + t[u].NewsID + '.html" title="' + t[u].NewsTitle + '">',
                    r += '<img class="lazyloadn childImg" src="',
                    r += t[u].NewsImg != "" ? "/Sources/Images/News/" + t[u].NewsImg + "?rnd=" + getrandom() : "newsloading.gif"/*tpa=http://www.fasene.com/App_Assets/Images/newsloading.gif*/,
                    r += '" /><\/a><\/figure>',
                    r += ' <div class="gt_blog_des default_width"><ul class="gt_event_meta">',
                    r += '<li><i class="fa fa-calendar"><\/i>' + getYMD(t[u].NewsIssueDate) + "<\/li>",
                    r += '<li><i class="fa fa-user"><\/i>' + t[u].NewsAuthor + "<\/li><\/ul>",
                    r += '<h6><a  target="_blank"  href="http://www.fasene.com/dynamic/Info/' + t[u].NewsID + '.html">' + t[u].NewsTitle + "<\/a><\/h6>",
                    r += "<p>" + t[u].NewsIntr + "<\/p><\/div>",
                    r += '<a  target="_blank"  href="http://www.fasene.com/dynamic/Info/' + t[u].NewsID + '.html">查看更多<i class="fa fa-long-arrow-right"><\/i><\/a>',
                    r += "<\/div> <\/div>";
                i.firstload != undefined && i.firstload && scrollload("#NewsList", "/Dynamic/ListPage", {
                    totalpages: t[0].NewsHot,
                    pagesize: 6,
                    pageno: 1,
                    typeid: i.typeid
                }, DynamicList);
                $(n).html(r);
                $(n).find("img.lazyloadn").lazyload({
                    threshold: 50,
                    failurelimit: 10
                })
            }
        }
    })
}
function aboutClist(n, t, i) {
    $.ajax({
        type: "get",
        url: t,
        data: i,
        contentType: "application/json",
        dataType: "json",
        success: function(t) {
            var r, i;
            if (loadingHide(),
            showing = !1,
            t != undefined)
                if (t != "") {
                    for ($(n).html(""),
                    i = "",
                    r = 0; r < t.length; r++)
                        i += '<div class="job"><ul class="position">',
                        i += ' <li class="position_name">' + t[r].NewsTitle + "<\/li>",
                        i += " <li>招聘人数：<span>2<\/span>人<\/li>",
                        i += ' <li class="on_test"><a  style="display:none"   href="http://www.fasene.com/About/OnlineTest">在线测试<\/a><\/li>    <\/ul>',
                        i += ' <div class="job_content"><div>职位要求：<\/div>' + t[r].NewsInfo + "<\/div><\/div>";
                    $(n).html(i)
                } else
                    i = "暂无招聘信息",
                    $(n).html(i)
        }
    })
}
function abouttest(n, t) {
    $.ajax({
        type: "get",
        url: t,
        success: function(t) {
            if (showing = !1,
            t != undefined)
                if (t != "")
                    $(n).html(t);
                else
                    $(n).html("暂无合适的岗位")
        }
    })
}
function SearchList(n, t) {
    for (var i = "", r = 0; r < t.length; r++)
        i += '<li> <a target="_blank"   href="http://www.fasene.com/dynamic/Info/' + t[r].NewsID + '.html" title="' + t[r].NewsTitle + '">',
        i += '<img class="lazyloadn" src="',
        i += t[r].NewsImg != "" ? "/Sources/Images/News/" + t[r].NewsImg + "?rnd=" + getrandom() : "nopic_w.jpg"/*tpa=http://www.fasene.com/App_Assets/Images/nopic_w.jpg*/,
        i += '" /> <div class="dy-list">',
        i += "<h3>" + t[r].NewsTitle + "<\/h3><ul>",
        i += "<li>发表时间:" + getYMD(t[r].NewsIssueDate) + "<\/li>",
        i += "<li>来源：" + t[r].NewsFrom + "<\/li>",
        i += "<li>作者：" + t[r].NewsAuthor + "<\/li><\/ul>",
        i += "<p>" + t[r].NewsDescription + "<\/p>",
        i += "<div>标签:<span>" + t[r].NewsComeFrom + "<\/span><\/div>",
        i += "<\/div><\/a> <\/li>";
    $(n).append(i);
    $(n).find("img.lazyloadn").lazyload({
        threshold: 50,
        failurelimit: 10
    })
}
var text, index, id, pagenow, loadding;
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(n, t, i, r, u) {
        return jQuery.easing[jQuery.easing.def](n, t, i, r, u)
    },
    easeInQuad: function(n, t, i, r, u) {
        return r * (t /= u) * t + i
    },
    easeOutQuad: function(n, t, i, r, u) {
        return -r * (t /= u) * (t - 2) + i
    },
    easeInOutQuad: function(n, t, i, r, u) {
        return (t /= u / 2) < 1 ? r / 2 * t * t + i : -r / 2 * (--t * (t - 2) - 1) + i
    },
    easeInCubic: function(n, t, i, r, u) {
        return r * (t /= u) * t * t + i
    },
    easeOutCubic: function(n, t, i, r, u) {
        return r * ((t = t / u - 1) * t * t + 1) + i
    },
    easeInOutCubic: function(n, t, i, r, u) {
        return (t /= u / 2) < 1 ? r / 2 * t * t * t + i : r / 2 * ((t -= 2) * t * t + 2) + i
    },
    easeInQuart: function(n, t, i, r, u) {
        return r * (t /= u) * t * t * t + i
    },
    easeOutQuart: function(n, t, i, r, u) {
        return -r * ((t = t / u - 1) * t * t * t - 1) + i
    },
    easeInOutQuart: function(n, t, i, r, u) {
        return (t /= u / 2) < 1 ? r / 2 * t * t * t * t + i : -r / 2 * ((t -= 2) * t * t * t - 2) + i
    },
    easeInQuint: function(n, t, i, r, u) {
        return r * (t /= u) * t * t * t * t + i
    },
    easeOutQuint: function(n, t, i, r, u) {
        return r * ((t = t / u - 1) * t * t * t * t + 1) + i
    },
    easeInOutQuint: function(n, t, i, r, u) {
        return (t /= u / 2) < 1 ? r / 2 * t * t * t * t * t + i : r / 2 * ((t -= 2) * t * t * t * t + 2) + i
    },
    easeInSine: function(n, t, i, r, u) {
        return -r * Math.cos(t / u * (Math.PI / 2)) + r + i
    },
    easeOutSine: function(n, t, i, r, u) {
        return r * Math.sin(t / u * (Math.PI / 2)) + i
    },
    easeInOutSine: function(n, t, i, r, u) {
        return -r / 2 * (Math.cos(Math.PI * t / u) - 1) + i
    },
    easeInExpo: function(n, t, i, r, u) {
        return t == 0 ? i : r * Math.pow(2, 10 * (t / u - 1)) + i
    },
    easeOutExpo: function(n, t, i, r, u) {
        return t == u ? i + r : r * (-Math.pow(2, -10 * t / u) + 1) + i
    },
    easeInOutExpo: function(n, t, i, r, u) {
        return t == 0 ? i : t == u ? i + r : (t /= u / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + i : r / 2 * (-Math.pow(2, -10 * --t) + 2) + i
    },
    easeInCirc: function(n, t, i, r, u) {
        return -r * (Math.sqrt(1 - (t /= u) * t) - 1) + i
    },
    easeOutCirc: function(n, t, i, r, u) {
        return r * Math.sqrt(1 - (t = t / u - 1) * t) + i
    },
    easeInOutCirc: function(n, t, i, r, u) {
        return (t /= u / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + i : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
    },
    easeInElastic: function(n, t, i, r, u) {
        var o = 1.70158
          , f = 0
          , e = r;
        return t == 0 ? i : (t /= u) == 1 ? i + r : (f || (f = u * .3),
        e < Math.abs(r) ? (e = r,
        o = f / 4) : o = f / (2 * Math.PI) * Math.asin(r / e),
        -(e * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * u - o) * 2 * Math.PI / f)) + i)
    },
    easeOutElastic: function(n, t, i, r, u) {
        var o = 1.70158
          , f = 0
          , e = r;
        return t == 0 ? i : (t /= u) == 1 ? i + r : (f || (f = u * .3),
        e < Math.abs(r) ? (e = r,
        o = f / 4) : o = f / (2 * Math.PI) * Math.asin(r / e),
        e * Math.pow(2, -10 * t) * Math.sin((t * u - o) * 2 * Math.PI / f) + r + i)
    },
    easeInOutElastic: function(n, t, i, r, u) {
        var o = 1.70158
          , f = 0
          , e = r;
        return t == 0 ? i : (t /= u / 2) == 2 ? i + r : (f || (f = u * .3 * 1.5),
        e < Math.abs(r) ? (e = r,
        o = f / 4) : o = f / (2 * Math.PI) * Math.asin(r / e),
        t < 1) ? -.5 * e * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * u - o) * 2 * Math.PI / f) + i : e * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * u - o) * 2 * Math.PI / f) * .5 + r + i
    },
    easeInBack: function(n, t, i, r, u, f) {
        return f == undefined && (f = 1.70158),
        r * (t /= u) * t * ((f + 1) * t - f) + i
    },
    easeOutBack: function(n, t, i, r, u, f) {
        return f == undefined && (f = 1.70158),
        r * ((t = t / u - 1) * t * ((f + 1) * t + f) + 1) + i
    },
    easeInOutBack: function(n, t, i, r, u, f) {
        return (f == undefined && (f = 1.70158),
        (t /= u / 2) < 1) ? r / 2 * t * t * (((f *= 1.525) + 1) * t - f) + i : r / 2 * ((t -= 2) * t * (((f *= 1.525) + 1) * t + f) + 2) + i
    },
    easeInBounce: function(n, t, i, r, u) {
        return r - jQuery.easing.easeOutBounce(n, u - t, 0, r, u) + i
    },
    easeOutBounce: function(n, t, i, r, u) {
        return (t /= u) < 1 / 2.75 ? r * 7.5625 * t * t + i : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i
    },
    easeInOutBounce: function(n, t, i, r, u) {
        return t < u / 2 ? jQuery.easing.easeInBounce(n, t * 2, 0, r, u) * .5 + i : jQuery.easing.easeOutBounce(n, t * 2 - u, 0, r, u) * .5 + r * .5 + i
    }
});
!function(n, t, i, r) {
    var u = n(t);
    n.fn.lazyload = function(f) {
        function s() {
            var t = 0;
            o.each(function() {
                var i = n(this);
                if ((!e.skip_invisible || i.is(":visible")) && !n.abovethetop(this, e) && !n.leftofbegin(this, e))
                    if (n.belowthefold(this, e) || n.rightoffold(this, e)) {
                        if (++t > e.failure_limit)
                            return !1
                    } else
                        i.trigger("appear"),
                        t = 0
            })
        }
        var h, o = this, e = {
            threshold: 0,
            failure_limit: 0,
            event: "scroll",
            effect: "show",
            container: t,
            data_attribute: "original",
            skip_invisible: !1,
            appear: null,
            load: null,
            placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };
        return f && (r !== f.failurelimit && (f.failure_limit = f.failurelimit,
        delete f.failurelimit),
        r !== f.effectspeed && (f.effect_speed = f.effectspeed,
        delete f.effectspeed),
        n.extend(e, f)),
        h = e.container === r || e.container === t ? u : n(e.container),
        0 === e.event.indexOf("scroll") && h.bind(e.event, function() {
            return s()
        }),
        this.each(function() {
            var i = this
              , t = n(i);
            i.loaded = !1;
            (t.attr("src") === r || t.attr("src") === !1) && t.is("img") && t.attr("src", e.placeholder);
            t.one("appear", function() {
                if (!this.loaded) {
                    if (e.appear) {
                        var r = o.length;
                        e.appear.call(i, r, e)
                    }
                    n("<img />").bind("load", function() {
                        var r = t.attr("data-" + e.data_attribute), u, f;
                        t.hide();
                        t.is("img") ? t.attr("src", r).css("background", "none") : t.css("background-image", "url('" + r + "')");
                        t[e.effect](e.effect_speed);
                        i.loaded = !0;
                        u = n.grep(o, function(n) {
                            return !n.loaded
                        });
                        (o = n(u),
                        e.load) && (f = o.length,
                        e.load.call(i, f, e))
                    }).attr("src", t.attr("data-" + e.data_attribute)).css("background", "none")
                }
            });
            0 !== e.event.indexOf("scroll") && t.bind(e.event, function() {
                i.loaded || t.trigger("appear")
            })
        }),
        u.bind("resize", function() {
            s()
        }),
        /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && u.bind("pageshow", function(t) {
            t.originalEvent && t.originalEvent.persisted && o.each(function() {
                n(this).trigger("appear")
            })
        }),
        n(i).ready(function() {
            s()
        }),
        this
    }
    ;
    n.belowthefold = function(i, f) {
        var e;
        return e = f.container === r || f.container === t ? (t.innerHeight ? t.innerHeight : u.height()) + u.scrollTop() : n(f.container).offset().top + n(f.container).height(),
        e <= n(i).offset().top - f.threshold
    }
    ;
    n.rightoffold = function(i, f) {
        var e;
        return e = f.container === r || f.container === t ? u.width() + u.scrollLeft() : n(f.container).offset().left + n(f.container).width(),
        e <= n(i).offset().left - f.threshold
    }
    ;
    n.abovethetop = function(i, f) {
        var e;
        return e = f.container === r || f.container === t ? u.scrollTop() : n(f.container).offset().top,
        e >= n(i).offset().top + f.threshold + n(i).height()
    }
    ;
    n.leftofbegin = function(i, f) {
        var e;
        return e = f.container === r || f.container === t ? u.scrollLeft() : n(f.container).offset().left,
        e >= n(i).offset().left + f.threshold + n(i).width()
    }
    ;
    n.inviewport = function(t, i) {
        return !(n.rightoffold(t, i) || n.leftofbegin(t, i) || n.belowthefold(t, i) || n.abovethetop(t, i))
    }
    ;
    n.extend(n.expr[":"], {
        "below-the-fold": function(t) {
            return n.belowthefold(t, {
                threshold: 0
            })
        },
        "above-the-top": function(t) {
            return !n.belowthefold(t, {
                threshold: 0
            })
        },
        "right-of-screen": function(t) {
            return n.rightoffold(t, {
                threshold: 0
            })
        },
        "left-of-screen": function(t) {
            return !n.rightoffold(t, {
                threshold: 0
            })
        },
        "in-viewport": function(t) {
            return n.inviewport(t, {
                threshold: 0
            })
        },
        "above-the-fold": function(t) {
            return !n.belowthefold(t, {
                threshold: 0
            })
        },
        "right-of-fold": function(t) {
            return n.rightoffold(t, {
                threshold: 0
            })
        },
        "left-of-fold": function(t) {
            return !n.rightoffold(t, {
                threshold: 0
            })
        }
    })
}(jQuery, window, document),
function(n) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], n) : "undefined" != typeof module && module.exports ? module.exports = n(require("jquery")) : n(jQuery)
}(function(n) {
    "use strict";
    function r(t) {
        return !t.nodeName || -1 !== n.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
    }
    function i(t) {
        return n.isFunction(t) || n.isPlainObject(t) ? t : {
            top: t,
            left: t
        }
    }
    var t = n.scrollTo = function(t, i, r) {
        return n(window).scrollTo(t, i, r)
    }
    ;
    return t.defaults = {
        axis: "xy",
        duration: 0,
        limit: !0
    },
    n.fn.scrollTo = function(u, f, e) {
        "object" == typeof f && (e = f,
        f = 0);
        "function" == typeof e && (e = {
            onAfter: e
        });
        "max" === u && (u = 9e9);
        e = n.extend({}, t.defaults, e);
        f = f || e.duration;
        var o = e.queue && 1 < e.axis.length;
        return o && (f /= 2),
        e.offset = i(e.offset),
        e.over = i(e.over),
        this.each(function() {
            function y(t) {
                var i = n.extend({}, e, {
                    queue: !0,
                    duration: f,
                    complete: t && function() {
                        t.call(c, s, e)
                    }
                });
                a.animate(h, i)
            }
            var p;
            if (null !== u) {
                var l = r(this), c = l ? this.contentWindow || window : this, a = n(c), s = u, h = {}, v;
                switch (typeof s) {
                case "number":
                case "string":
                    if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(s)) {
                        s = i(s);
                        break
                    }
                    s = l ? n(s) : n(s, c);
                case "object":
                    if (s.length === 0)
                        return;
                    (s.is || s.style) && (v = (s = n(s)).offset())
                }
                p = n.isFunction(e.offset) && e.offset(c, s) || e.offset;
                n.each(e.axis.split(""), function(n, i) {
                    var u = "x" === i ? "Left" : "Top"
                      , f = u.toLowerCase()
                      , r = "scroll" + u
                      , w = a[r]()
                      , b = t.max(c, i);
                    v ? (h[r] = v[f] + (l ? 0 : w - a.offset()[f]),
                    e.margin && (h[r] -= parseInt(s.css("margin" + u), 10) || 0,
                    h[r] -= parseInt(s.css("border" + u + "Width"), 10) || 0),
                    h[r] += p[f] || 0,
                    e.over[f] && (h[r] += s["x" === i ? "width" : "height"]() * e.over[f])) : (u = s[f],
                    h[r] = u.slice && "%" === u.slice(-1) ? parseFloat(u) / 100 * b : u);
                    e.limit && /^\d+$/.test(h[r]) && (h[r] = 0 >= h[r] ? 0 : Math.min(h[r], b));
                    !n && 1 < e.axis.length && (w === h[r] ? h = {} : o && (y(e.onAfterFirst),
                    h = {}))
                });
                y(e.onAfter)
            }
        })
    }
    ,
    t.max = function(t, i) {
        var u = "x" === i ? "Width" : "Height"
          , e = "scroll" + u;
        if (!r(t))
            return t[e] - n(t)[u.toLowerCase()]();
        var u = "client" + u
          , f = t.ownerDocument || t.document
          , o = f.documentElement
          , f = f.body;
        return Math.max(o[e], f[e]) - Math.min(o[u], f[u])
    }
    ,
    n.Tween.propHooks.scrollLeft = n.Tween.propHooks.scrollTop = {
        get: function(t) {
            return n(t.elem)[t.prop]()
        },
        set: function(t) {
            var r = this.get(t), i;
            if (t.options.interrupt && t._last && t._last !== r)
                return n(t.elem).stop();
            i = Math.round(t.now);
            r !== i && (n(t.elem)[t.prop](i),
            t._last = this.get(t))
        }
    },
    t
});
!function(n) {
    "use strict";
    var r = document
      , t = {
        modules: {},
        status: {},
        timeout: 10,
        event: {}
    }
      , i = function() {
        this.v = "2.1.4"
    }
      , e = function() {
        var n = r.scripts
          , t = n[n.length - 1].src;
        return t.substring(0, t.lastIndexOf("/") + 1)
    }()
      , u = function(t) {
        n.console && console.error && console.error("Layui hint: " + t)
    }
      , o = "undefined" != typeof opera && "[object Opera]" === opera.toString()
      , f = {
        layer: "modules/layer",
        laydate: "modules/laydate",
        laypage: "modules/laypage",
        laytpl: "modules/laytpl",
        layim: "modules/layim",
        layedit: "modules/layedit",
        form: "modules/form",
        upload: "modules/upload",
        tree: "modules/tree",
        table: "modules/table",
        element: "modules/element",
        util: "modules/util",
        flow: "modules/flow",
        carousel: "modules/carousel",
        code: "modules/code",
        jquery: "modules/jquery",
        mobile: "modules/mobile",
        "http://www.fasene.com//js/layui.all": "http://www.fasene.com//js/layui.all"
    };
    i.prototype.cache = t;
    i.prototype.define = function(n, i) {
        var r = this
          , f = "function" == typeof n
          , u = function() {
            return "function" == typeof i && i(function(n, i) {
                layui[n] = i;
                t.status[n] = !0
            }),
            this
        };
        return f && (i = n,
        n = []),
        layui["http://www.fasene.com//js/layui.all"] || !layui["http://www.fasene.com//js/layui.all"] && layui["layui.mobile"] ? u.call(r) : (r.use(n, u),
        r)
    }
    ;
    i.prototype.use = function(n, i, s) {
        function p(n, i) {
            var r = "PLaySTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/;
            ("load" === n.type || r.test((n.currentTarget || n.srcElement).readyState)) && (t.modules[h] = i,
            b.removeChild(c),
            function f() {
                return ++y > 250 * t.timeout ? u(h + " is not a valid module") : void (t.status[h] ? v() : setTimeout(f, 4))
            }())
        }
        function v() {
            s.push(layui[h]);
            n.length > 1 ? l.use(n.slice(1), i, s) : "function" == typeof i && i.apply(layui, s)
        }
        var l = this, w = t.dir = t.dir ? t.dir : e, b = r.getElementsByTagName("head")[0], h, y, c, a;
        return (n = "string" == typeof n ? [n] : n,
        window.jQuery && jQuery.fn.on && (l.each(n, function(t, i) {
            "jquery" === i && n.splice(t, 1)
        }),
        layui.jquery = layui.$ = jQuery),
        h = n[0],
        y = 0,
        s = s || [],
        t.host = t.host || (w.match(/\/\/([\s\S]+?)\//) || ["//" + location.host + "/"])[0],
        0 === n.length || layui["http://www.fasene.com//js/layui.all"] && f[h] || !layui["http://www.fasene.com//js/layui.all"] && layui["layui.mobile"] && f[h]) ? (v(),
        l) : (t.modules[h] ? !function k() {
            return ++y > 250 * t.timeout ? u(h + " is not a valid module") : void ("string" == typeof t.modules[h] && t.status[h] ? v() : setTimeout(k, 4))
        }() : (c = r.createElement("script"),
        a = (f[h] ? w + "lay/" : t.base || "") + (l.modules[h] || h) + ".js",
        c.async = !0,
        c.charset = "utf-8",
        c.src = a + function() {
            var n = t.version === !0 ? t.v || (new Date).getTime() : t.version || "";
            return n ? "?v=" + n : ""
        }(),
        b.appendChild(c),
        !c.attachEvent || c.attachEvent.toString && c.attachEvent.toString().indexOf("[native code") < 0 || o ? c.addEventListener("load", function(n) {
            p(n, a)
        }, !1) : c.attachEvent("onreadystatechange", function(n) {
            p(n, a)
        }),
        t.modules[h] = a),
        l)
    }
    ;
    i.prototype.getStyle = function(t, i) {
        var r = t.currentStyle ? t.currentStyle : n.getComputedStyle(t, null);
        return r[r.getPropertyValue ? "getPropertyValue" : "getAttribute"](i)
    }
    ;
    i.prototype.link = function(n, i, f) {
        var o = this
          , e = r.createElement("link")
          , h = r.getElementsByTagName("head")[0];
        "string" == typeof i && (f = i);
        var c = (f || n).replace(/\.|\//g, "")
          , s = e.id = "layuicss-" + c
          , l = 0;
        return e.rel = "stylesheet",
        e.href = n + (t.debug ? "?v=" + (new Date).getTime() : ""),
        e.media = "all",
        r.getElementById(s) || h.appendChild(e),
        "function" != typeof i ? o : (function a() {
            return ++l > 10 * t.timeout ? u(n + " timeout") : void (1989 === parseInt(o.getStyle(r.getElementById(s), "width")) ? function() {
                i()
            }() : setTimeout(a, 100))
        }(),
        o)
    }
    ;
    i.prototype.addcss = function(n, i, r) {
        return layui.link(t.dir + "css/" + n, i, r)
    }
    ;
    i.prototype.img = function(n, t, i) {
        var r = new Image;
        return r.src = n,
        r.complete ? t(r) : (r.onload = function() {
            r.onload = null;
            t(r)
        }
        ,
        void (r.onerror = function(n) {
            r.onerror = null;
            i(n)
        }
        ))
    }
    ;
    i.prototype.config = function(n) {
        n = n || {};
        for (var i in n)
            t[i] = n[i];
        return this
    }
    ;
    i.prototype.modules = function() {
        var n = {};
        for (var t in f)
            n[t] = f[t];
        return n
    }();
    i.prototype.extend = function(n) {
        var i = this, t;
        n = n || {};
        for (t in n)
            i[t] || i.modules[t] ? u("模块名 " + t + " 已被占用") : i.modules[t] = n[t];
        return i
    }
    ;
    i.prototype.router = function(n) {
        var i = this
          , n = n || location.hash
          , t = {
            path: [],
            search: {},
            hash: (n.match(/[^#](#.*$)/) || [])[1] || ""
        };
        return /^#\//.test(n) ? (n = n.replace(/^#\//, "").replace(/([^#])(#.*$)/, "$1").split("/") || [],
        i.each(n, function(n, i) {
            /^\w+=/.test(i) ? function() {
                i = i.split("=");
                t.search[i[0]] = i[1]
            }() : t.path.push(i)
        }),
        t) : t
    }
    ;
    i.prototype.data = function(t, i) {
        var r;
        if (t = t || "layui",
        n.JSON && n.JSON.parse) {
            if (null === i)
                return delete localStorage[t];
            i = "object" == typeof i ? i : {
                key: i
            };
            try {
                r = JSON.parse(localStorage[t])
            } catch (u) {
                r = {}
            }
            return i.value && (r[i.key] = i.value),
            i.remove && delete r[i.key],
            localStorage[t] = JSON.stringify(r),
            i.key ? r[i.key] : r
        }
    }
    ;
    i.prototype.device = function(t) {
        var i = navigator.userAgent.toLowerCase()
          , u = function(n) {
            var t = new RegExp(n + "/([^\\s\\_\\-]+)");
            return n = (i.match(t) || [])[1],
            n || !1
        }
          , r = {
            os: function() {
                return /windows/.test(i) ? "windows" : /linux/.test(i) ? "linux" : /iphone|ipod|ipad|ios/.test(i) ? "ios" : /mac/.test(i) ? "mac" : void 0
            }(),
            ie: function() {
                return !!(n.ActiveXObject || "ActiveXObject"in n) && ((i.match(/msie\s(\d+)/) || [])[1] || "11")
            }(),
            weixin: u("micromessenger")
        };
        return t && !r[t] && (r[t] = u(t)),
        r.android = /android/.test(i),
        r.ios = "ios" === r.os,
        r
    }
    ;
    i.prototype.hint = function() {
        return {
            error: u
        }
    }
    ;
    i.prototype.each = function(n, t) {
        var i, r = this;
        if ("function" != typeof t)
            return r;
        if (n = n || [],
        n.constructor === Object) {
            for (i in n)
                if (t.call(n[i], i, n[i]))
                    break
        } else
            for (i = 0; i < n.length && !t.call(n[i], i, n[i]); i++)
                ;
        return r
    }
    ;
    i.prototype.sort = function(n, t, i) {
        var r = JSON.parse(JSON.stringify(n));
        return t ? (r.sort(function(n, i) {
            var f = /^-?\d+$/
              , r = n[t]
              , u = i[t];
            return f.test(r) && (r = parseFloat(r)),
            f.test(u) && (u = parseFloat(u)),
            r && !u ? 1 : !r && u ? -1 : r > u ? 1 : r < u ? -1 : 0
        }),
        i && r.reverse(),
        r) : r
    }
    ;
    i.prototype.stope = function(t) {
        t = t || n.event;
        t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
    }
    ;
    i.prototype.onevent = function(n, i, r) {
        return "string" != typeof n || "function" != typeof r ? this : (t.event[n + "." + i] = [r],
        this)
    }
    ;
    i.prototype.event = function(n, i, r) {
        var o = this
          , u = null
          , f = i.match(/\(.*\)$/) || []
          , s = (i = n + "." + i).replace(f, "")
          , e = function(n, t) {
            var i = t && t.call(o, r);
            i === !1 && null === u && (u = !1)
        };
        return layui.each(t.event[s], e),
        f[0] && layui.each(t.event[i], e),
        u
    }
    ;
    n.layui = new i
}(window),
function(n, t, i) {
    function h(t, i) {
        this.bodyOverflowX;
        this.callbacks = {
            hide: [],
            show: []
        };
        this.checkInterval = null;
        this.Content;
        this.$el = n(t);
        this.$elProxy;
        this.elProxyPosition;
        this.enabled = !0;
        this.options = n.extend({}, f, i);
        this.mouseIsOverProxy = !1;
        this.namespace = "tooltipster-" + Math.round(Math.random() * 1e5);
        this.Status = "hidden";
        this.timerHide = null;
        this.timerShow = null;
        this.$tooltip;
        this.options.iconTheme = this.options.iconTheme.replace(".", "");
        this.options.theme = this.options.theme.replace(".", "");
        this._init()
    }
    function e(t, i) {
        var r = !0;
        return n.each(t, function(n) {
            if (typeof i[n] == "undefined" || t[n] !== i[n])
                return r = !1,
                !1
        }),
        r
    }
    function o() {
        return !s && r
    }
    function u() {
        var u = i.body || i.documentElement, r = u.style, n = "transition", t;
        if (typeof r[n] == "string")
            return !0;
        for (v = ["Moz", "Webkit", "Khtml", "O", "ms"],
        n = n.charAt(0).toUpperCase() + n.substr(1),
        t = 0; t < v.length; t++)
            if (typeof r[v[t] + n] == "string")
                return !0;
        return !1
    }
    var f = {
        animation: "fade",
        arrow: !0,
        arrowColor: "",
        autoClose: !0,
        content: null,
        contentAsHTML: !1,
        contentCloning: !0,
        debug: !0,
        delay: 200,
        minWidth: 0,
        maxWidth: null,
        functionInit: function() {},
        functionBefore: function(n, t) {
            t()
        },
        functionReady: function() {},
        functionAfter: function() {},
        hideOnClick: !1,
        icon: "(?)",
        iconCloning: !0,
        iconDesktop: !1,
        iconTouch: !1,
        iconTheme: "tooltipster-icon",
        interactive: !1,
        interactiveTolerance: 350,
        multiple: !1,
        offsetX: 0,
        offsetY: 0,
        onlyOne: !1,
        position: "top",
        positionTracker: !1,
        positionTrackerCallback: function() {
            this.option("trigger") == "hover" && this.option("autoClose") && this.hide()
        },
        restoration: "current",
        speed: 350,
        timer: 0,
        theme: "tooltipster-default",
        touchDevices: !0,
        trigger: "hover",
        updateAnimation: !0
    }, r, s;
    h.prototype = {
        _init: function() {
            var t = this, u, f;
            if (i.querySelector)
                if (u = null,
                t.$el.data("tooltipster-initialTitle") === undefined && (u = t.$el.attr("title"),
                u === undefined && (u = null),
                t.$el.data("tooltipster-initialTitle", u)),
                t.options.content !== null ? t._content_set(t.options.content) : t._content_set(u),
                f = t.options.functionInit.call(t.$el, t.$el, t.Content),
                typeof f != "undefined" && t._content_set(f),
                t.$el.removeAttr("title").addClass("tooltipstered"),
                !r && t.options.iconDesktop || r && t.options.iconTouch ? (typeof t.options.icon == "string" ? (t.$elProxy = n('<span class="' + t.options.iconTheme + '"><\/span>'),
                t.$elProxy.text(t.options.icon)) : t.$elProxy = t.options.iconCloning ? t.options.icon.clone(!0) : t.options.icon,
                t.$elProxy.insertAfter(t.$el)) : t.$elProxy = t.$el,
                t.options.trigger == "hover") {
                    t.$elProxy.on("mouseenter." + t.namespace, function() {
                        (!o() || t.options.touchDevices) && (t.mouseIsOverProxy = !0,
                        t._show())
                    }).on("mouseleave." + t.namespace, function() {
                        (!o() || t.options.touchDevices) && (t.mouseIsOverProxy = !1)
                    });
                    if (r && t.options.touchDevices)
                        t.$elProxy.on("touchstart." + t.namespace, function() {
                            t._showNow()
                        })
                } else if (t.options.trigger == "click")
                    t.$elProxy.on("click." + t.namespace, function() {
                        (!o() || t.options.touchDevices) && t._show()
                    })
        },
        _show: function() {
            var n = this;
            n.Status != "shown" && n.Status != "appearing" && (n.options.delay ? n.timerShow = setTimeout(function() {
                (n.options.trigger == "click" || n.options.trigger == "hover" && n.mouseIsOverProxy) && n._showNow()
            }, n.options.delay) : n._showNow())
        },
        _showNow: function(i) {
            var f = this;
            f.options.functionBefore.call(f.$el, f.$el, function() {
                var e, s, o;
                if (f.enabled && f.Content !== null) {
                    if (i && f.callbacks.show.push(i),
                    f.callbacks.hide = [],
                    clearTimeout(f.timerShow),
                    f.timerShow = null,
                    clearTimeout(f.timerHide),
                    f.timerHide = null,
                    f.options.onlyOne && n(".tooltipstered").not(f.$el).each(function(t, i) {
                        var r = n(i)
                          , u = r.data("tooltipster-ns");
                        n.each(u, function(n, t) {
                            var i = r.data(t)
                              , u = i.status()
                              , f = i.option("autoClose");
                            u !== "hidden" && u !== "disappearing" && f && i.hide()
                        })
                    }),
                    e = function() {
                        f.Status = "shown";
                        n.each(f.callbacks.show, function(n, t) {
                            t.call(f.$el)
                        });
                        f.callbacks.show = []
                    }
                    ,
                    f.Status !== "hidden")
                        s = 0,
                        f.Status === "disappearing" ? (f.Status = "appearing",
                        u() ? (f.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-" + f.options.animation + "-show"),
                        f.options.speed > 0 && f.$tooltip.delay(f.options.speed),
                        f.$tooltip.queue(e)) : f.$tooltip.stop().fadeIn(e)) : f.Status === "shown" && e();
                    else {
                        f.Status = "appearing";
                        s = f.options.speed;
                        f.bodyOverflowX = n("body").css("overflow-x");
                        n("body").css("overflow-x", "hidden");
                        var h = "tooltipster-" + f.options.animation
                          , c = "-webkit-transition-duration: " + f.options.speed + "ms; -webkit-animation-duration: " + f.options.speed + "ms; -moz-transition-duration: " + f.options.speed + "ms; -moz-animation-duration: " + f.options.speed + "ms; -o-transition-duration: " + f.options.speed + "ms; -o-animation-duration: " + f.options.speed + "ms; -ms-transition-duration: " + f.options.speed + "ms; -ms-animation-duration: " + f.options.speed + "ms; transition-duration: " + f.options.speed + "ms; animation-duration: " + f.options.speed + "ms;"
                          , l = f.options.minWidth ? "min-width:" + Math.round(f.options.minWidth) + "px;" : ""
                          , a = f.options.maxWidth ? "max-width:" + Math.round(f.options.maxWidth) + "px;" : ""
                          , v = f.options.interactive ? "pointer-events: auto;" : "";
                        f.$tooltip = n('<div class="tooltipster-base ' + f.options.theme + '" style="' + l + " " + a + " " + v + " " + c + '"><div class="tooltipster-content"><\/div><\/div>');
                        u() && f.$tooltip.addClass(h);
                        f._content_insert();
                        f.$tooltip.appendTo("body");
                        f.reposition();
                        f.options.functionReady.call(f.$el, f.$el, f.$tooltip);
                        u() ? (f.$tooltip.addClass(h + "-show"),
                        f.options.speed > 0 && f.$tooltip.delay(f.options.speed),
                        f.$tooltip.queue(e)) : f.$tooltip.css("display", "none").fadeIn(f.options.speed, e);
                        f._interval_set();
                        n(t).on("scroll." + f.namespace + " resize." + f.namespace, function() {
                            f.reposition()
                        });
                        if (f.options.autoClose)
                            if (n("body").off("." + f.namespace),
                            f.options.trigger == "hover") {
                                if (r && setTimeout(function() {
                                    n("body").on("touchstart." + f.namespace, function() {
                                        f.hide()
                                    })
                                }, 0),
                                f.options.interactive) {
                                    if (r)
                                        f.$tooltip.on("touchstart." + f.namespace, function(n) {
                                            n.stopPropagation()
                                        });
                                    o = null;
                                    f.$elProxy.add(f.$tooltip).on("mouseleave." + f.namespace + "-autoClose", function() {
                                        clearTimeout(o);
                                        o = setTimeout(function() {
                                            f.hide()
                                        }, f.options.interactiveTolerance)
                                    }).on("mouseenter." + f.namespace + "-autoClose", function() {
                                        clearTimeout(o)
                                    })
                                } else
                                    f.$elProxy.on("mouseleave." + f.namespace + "-autoClose", function() {
                                        f.hide()
                                    });
                                if (f.options.hideOnClick)
                                    f.$elProxy.on("click." + f.namespace + "-autoClose", function() {
                                        f.hide()
                                    })
                            } else if (f.options.trigger == "click" && (setTimeout(function() {
                                n("body").on("click." + f.namespace + " touchstart." + f.namespace, function() {
                                    f.hide()
                                })
                            }, 0),
                            f.options.interactive))
                                f.$tooltip.on("click." + f.namespace + " touchstart." + f.namespace, function(n) {
                                    n.stopPropagation()
                                })
                    }
                    f.options.timer > 0 && (f.timerHide = setTimeout(function() {
                        f.timerHide = null;
                        f.hide()
                    }, f.options.timer + s))
                }
            })
        },
        _interval_set: function() {
            var t = this;
            t.checkInterval = setInterval(function() {
                if (n("body").find(t.$el).length === 0 || n("body").find(t.$elProxy).length === 0 || t.Status == "hidden" || n("body").find(t.$tooltip).length === 0)
                    (t.Status == "shown" || t.Status == "appearing") && t.hide(),
                    t._interval_cancel();
                else if (t.options.positionTracker) {
                    var i = t._repositionInfo(t.$elProxy)
                      , r = !1;
                    e(i.dimension, t.elProxyPosition.dimension) && (t.$elProxy.css("position") === "fixed" ? e(i.position, t.elProxyPosition.position) && (r = !0) : e(i.offset, t.elProxyPosition.offset) && (r = !0));
                    r || (t.reposition(),
                    t.options.positionTrackerCallback.call(t, t.$el))
                }
            }, 200)
        },
        _interval_cancel: function() {
            clearInterval(this.checkInterval);
            this.checkInterval = null
        },
        _content_set: function(n) {
            typeof n == "object" && n !== null && this.options.contentCloning && (n = n.clone(!0));
            this.Content = n
        },
        _content_insert: function() {
            var n = this
              , t = this.$tooltip.find(".tooltipster-content");
            typeof n.Content != "string" || n.options.contentAsHTML ? t.empty().append(n.Content) : t.text(n.Content)
        },
        _update: function(n) {
            var t = this;
            t._content_set(n);
            t.Content !== null ? t.Status !== "hidden" && (t._content_insert(),
            t.reposition(),
            t.options.updateAnimation && (u() ? (t.$tooltip.css({
                width: "",
                "-webkit-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                "-moz-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                "-o-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                "-ms-transition": "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms",
                transition: "all " + t.options.speed + "ms, width 0ms, height 0ms, left 0ms, top 0ms"
            }).addClass("tooltipster-content-changing"),
            setTimeout(function() {
                t.Status != "hidden" && (t.$tooltip.removeClass("tooltipster-content-changing"),
                setTimeout(function() {
                    t.Status !== "hidden" && t.$tooltip.css({
                        "-webkit-transition": t.options.speed + "ms",
                        "-moz-transition": t.options.speed + "ms",
                        "-o-transition": t.options.speed + "ms",
                        "-ms-transition": t.options.speed + "ms",
                        transition: t.options.speed + "ms"
                    })
                }, t.options.speed))
            }, t.options.speed)) : t.$tooltip.fadeTo(t.options.speed, .5, function() {
                t.Status != "hidden" && t.$tooltip.fadeTo(t.options.speed, 1)
            }))) : t.hide()
        },
        _repositionInfo: function(n) {
            return {
                dimension: {
                    height: n.outerHeight(!1),
                    width: n.outerWidth(!1)
                },
                offset: n.offset(),
                position: {
                    left: parseInt(n.css("left")),
                    top: parseInt(n.css("top"))
                }
            }
        },
        hide: function(i) {
            var r = this, f, e;
            return i && r.callbacks.hide.push(i),
            r.callbacks.show = [],
            clearTimeout(r.timerShow),
            r.timerShow = null,
            clearTimeout(r.timerHide),
            r.timerHide = null,
            f = function() {
                n.each(r.callbacks.hide, function(n, t) {
                    t.call(r.$el)
                });
                r.callbacks.hide = []
            }
            ,
            r.Status == "shown" || r.Status == "appearing" ? (r.Status = "disappearing",
            e = function() {
                r.Status = "hidden";
                typeof r.Content == "object" && r.Content !== null && r.Content.detach();
                r.$tooltip.remove();
                r.$tooltip = null;
                n(t).off("." + r.namespace);
                n("body").off("." + r.namespace).css("overflow-x", r.bodyOverflowX);
                n("body").off("." + r.namespace);
                r.$elProxy.off("." + r.namespace + "-autoClose");
                r.options.functionAfter.call(r.$el, r.$el);
                f()
            }
            ,
            u() ? (r.$tooltip.clearQueue().removeClass("tooltipster-" + r.options.animation + "-show").addClass("tooltipster-dying"),
            r.options.speed > 0 && r.$tooltip.delay(r.options.speed),
            r.$tooltip.queue(e)) : r.$tooltip.stop().fadeOut(r.options.speed, e)) : r.Status == "hidden" && f(),
            r
        },
        show: function(n) {
            return this._showNow(n),
            this
        },
        update: function(n) {
            return this.content(n)
        },
        content: function(n) {
            return typeof n == "undefined" ? this.Content : (this._update(n),
            this)
        },
        reposition: function() {
            var r = this, k, y, vt, p, ut, ft, w, dt, a, nt, kt, tt, gt, ni;
            if (n("body").find(r.$tooltip).length !== 0) {
                r.$tooltip.css("width", "");
                r.elProxyPosition = r._repositionInfo(r.$elProxy);
                var o = null
                  , b = n(t).width()
                  , i = r.elProxyPosition
                  , e = r.$tooltip.outerWidth(!1)
                  , ui = r.$tooltip.innerWidth() + 1
                  , c = r.$tooltip.outerHeight(!1);
                if (r.$elProxy.is("area")) {
                    var yt = r.$elProxy.attr("shape")
                      , ti = r.$elProxy.parent().attr("name")
                      , et = n('img[usemap="#' + ti + '"]')
                      , ot = et.offset().left
                      , st = et.offset().top
                      , v = r.$elProxy.attr("coords") !== undefined ? r.$elProxy.attr("coords").split(",") : undefined;
                    if (yt == "circle") {
                        var pt = parseInt(v[0])
                          , wt = parseInt(v[1])
                          , ht = parseInt(v[2]);
                        i.dimension.height = ht * 2;
                        i.dimension.width = ht * 2;
                        i.offset.top = st + wt - ht;
                        i.offset.left = ot + pt - ht
                    } else if (yt == "rect") {
                        var pt = parseInt(v[0])
                          , wt = parseInt(v[1])
                          , ii = parseInt(v[2])
                          , ri = parseInt(v[3]);
                        i.dimension.height = ri - wt;
                        i.dimension.width = ii - pt;
                        i.offset.top = st + wt;
                        i.offset.left = ot + pt
                    } else if (yt == "poly") {
                        var it = 0
                          , rt = 0
                          , ct = 0
                          , lt = 0
                          , bt = "even";
                        for (k = 0; k < v.length; k++)
                            y = parseInt(v[k]),
                            bt == "even" ? (y > ct && (ct = y,
                            k === 0 && (it = ct)),
                            y < it && (it = y),
                            bt = "odd") : (y > lt && (lt = y,
                            k == 1 && (rt = lt)),
                            y < rt && (rt = y),
                            bt = "even");
                        i.dimension.height = lt - rt;
                        i.dimension.width = ct - it;
                        i.offset.top = st + rt;
                        i.offset.left = ot + it
                    } else
                        i.dimension.height = et.outerHeight(!1),
                        i.dimension.width = et.outerWidth(!1),
                        i.offset.top = st,
                        i.offset.left = ot
                }
                var u = 0
                  , at = 0
                  , l = 0
                  , s = parseInt(r.options.offsetY)
                  , h = parseInt(r.options.offsetX)
                  , f = r.options.position;
                function d() {
                    var i = n(t).scrollLeft();
                    u - i < 0 && (o = u - i,
                    u = i);
                    u + e - i > b && (o = u - (b + i - e),
                    u = b + i - e)
                }
                function g(r, u) {
                    i.offset.top - n(t).scrollTop() - c - s - 12 < 0 && u.indexOf("top") > -1 && (f = r);
                    i.offset.top + i.dimension.height + c + 12 + s > n(t).scrollTop() + n(t).height() && u.indexOf("bottom") > -1 && (f = r,
                    l = i.offset.top - c - s - 12)
                }
                f == "top" && (vt = i.offset.left + e - (i.offset.left + i.dimension.width),
                u = i.offset.left + h - vt / 2,
                l = i.offset.top - c - s - 12,
                d(),
                g("bottom", "top"));
                f == "top-left" && (u = i.offset.left + h,
                l = i.offset.top - c - s - 12,
                d(),
                g("bottom-left", "top-left"));
                f == "top-right" && (u = i.offset.left + i.dimension.width + h - e,
                l = i.offset.top - c - s - 12,
                d(),
                g("bottom-right", "top-right"));
                f == "bottom" && (vt = i.offset.left + e - (i.offset.left + i.dimension.width),
                u = i.offset.left - vt / 2 + h,
                l = i.offset.top + i.dimension.height + s + 12,
                d(),
                g("top", "bottom"));
                f == "bottom-left" && (u = i.offset.left + h,
                l = i.offset.top + i.dimension.height + s + 12,
                d(),
                g("top-left", "bottom-left"));
                f == "bottom-right" && (u = i.offset.left + i.dimension.width + h - e,
                l = i.offset.top + i.dimension.height + s + 12,
                d(),
                g("top-right", "bottom-right"));
                f == "left" && (u = i.offset.left - h - e - 12,
                at = i.offset.left + h + i.dimension.width + 12,
                p = i.offset.top + c - (i.offset.top + i.dimension.height),
                l = i.offset.top - p / 2 - s,
                u < 0 && at + e > b ? (ut = parseFloat(r.$tooltip.css("border-width")) * 2,
                ft = e + u - ut,
                r.$tooltip.css("width", ft + "px"),
                c = r.$tooltip.outerHeight(!1),
                u = i.offset.left - h - ft - 12 - ut,
                p = i.offset.top + c - (i.offset.top + i.dimension.height),
                l = i.offset.top - p / 2 - s) : u < 0 && (u = i.offset.left + h + i.dimension.width + 12,
                o = "left"));
                f == "right" && (u = i.offset.left + h + i.dimension.width + 12,
                at = i.offset.left - h - e - 12,
                p = i.offset.top + c - (i.offset.top + i.dimension.height),
                l = i.offset.top - p / 2 - s,
                u + e > b && at < 0 ? (ut = parseFloat(r.$tooltip.css("border-width")) * 2,
                ft = b - u - ut,
                r.$tooltip.css("width", ft + "px"),
                c = r.$tooltip.outerHeight(!1),
                p = i.offset.top + c - (i.offset.top + i.dimension.height),
                l = i.offset.top - p / 2 - s) : u + e > b && (u = i.offset.left - h - e - 12,
                o = "right"));
                r.options.arrow && (w = "tooltipster-arrow-" + f,
                dt = r.options.arrowColor.length < 1 ? r.$tooltip.css("background-color") : r.options.arrowColor,
                o ? o == "left" ? (w = "tooltipster-arrow-right",
                o = "") : o == "right" ? (w = "tooltipster-arrow-left",
                o = "") : o = "left:" + Math.round(o) + "px;" : o = "",
                f == "top" || f == "top-left" || f == "top-right" ? (a = parseFloat(r.$tooltip.css("border-bottom-width")),
                nt = r.$tooltip.css("border-bottom-color")) : f == "bottom" || f == "bottom-left" || f == "bottom-right" ? (a = parseFloat(r.$tooltip.css("border-top-width")),
                nt = r.$tooltip.css("border-top-color")) : f == "left" ? (a = parseFloat(r.$tooltip.css("border-right-width")),
                nt = r.$tooltip.css("border-right-color")) : f == "right" ? (a = parseFloat(r.$tooltip.css("border-left-width")),
                nt = r.$tooltip.css("border-left-color")) : (a = parseFloat(r.$tooltip.css("border-bottom-width")),
                nt = r.$tooltip.css("border-bottom-color")),
                a > 1 && a++,
                kt = "",
                a !== 0 && (tt = "",
                gt = "border-color: " + nt + ";",
                w.indexOf("bottom") !== -1 ? tt = "margin-top: -" + Math.round(a) + "px;" : w.indexOf("top") !== -1 ? tt = "margin-bottom: -" + Math.round(a) + "px;" : w.indexOf("left") !== -1 ? tt = "margin-right: -" + Math.round(a) + "px;" : w.indexOf("right") !== -1 && (tt = "margin-left: -" + Math.round(a) + "px;"),
                kt = '<span class="tooltipster-arrow-border" style="' + tt + " " + gt + ';"><\/span>'),
                r.$tooltip.find(".tooltipster-arrow").remove(),
                ni = '<div class="' + w + ' tooltipster-arrow" style="' + o + '">' + kt + '<span style="border-color:' + dt + ';"><\/span><\/div>',
                r.$tooltip.append(ni));
                r.$tooltip.css({
                    top: Math.round(l) + "px",
                    left: Math.round(u) + "px"
                })
            }
            return r
        },
        enable: function() {
            return this.enabled = !0,
            this
        },
        disable: function() {
            return this.hide(),
            this.enabled = !1,
            this
        },
        destroy: function() {
            var t = this, i, r;
            return t.hide(),
            t.$el[0] !== t.$elProxy[0] && t.$elProxy.remove(),
            t.$el.removeData(t.namespace).off("." + t.namespace),
            i = t.$el.data("tooltipster-ns"),
            i.length === 1 ? (r = null,
            t.options.restoration === "previous" ? r = t.$el.data("tooltipster-initialTitle") : t.options.restoration === "current" && (r = typeof t.Content == "string" ? t.Content : n("<div><\/div>").append(t.Content).html()),
            r && t.$el.attr("title", r),
            t.$el.removeClass("tooltipstered").removeData("tooltipster-ns").removeData("tooltipster-initialTitle")) : (i = n.grep(i, function(n) {
                return n !== t.namespace
            }),
            t.$el.data("tooltipster-ns", i)),
            t
        },
        elementIcon: function() {
            return this.$el[0] !== this.$elProxy[0] ? this.$elProxy[0] : undefined
        },
        elementTooltip: function() {
            return this.$tooltip ? this.$tooltip[0] : undefined
        },
        option: function(n, t) {
            return typeof t == "undefined" ? this.options[n] : (this.options[n] = t,
            this)
        },
        status: function() {
            return this.Status
        }
    };
    n.fn["tooltipster"] = function() {
        var t = arguments, r, i;
        if (this.length === 0) {
            if (typeof t[0] == "string") {
                r = !0;
                switch (t[0]) {
                case "setDefaults":
                    n.extend(f, t[1]);
                    break;
                default:
                    r = !1
                }
                return r ? !0 : this
            }
            return this
        }
        if (typeof t[0] == "string")
            return i = "#*$~&",
            this.each(function() {
                var f = n(this).data("tooltipster-ns"), r = f ? n(this).data(f[0]) : null, u;
                if (r) {
                    if (typeof r[t[0]] == "function")
                        u = r[t[0]](t[1], t[2]);
                    else
                        throw new Error('Unknown method .tooltipster("' + t[0] + '")');
                    if (u !== r)
                        return i = u,
                        !1
                } else
                    throw new Error("You called Tooltipster's \"" + t[0] + '" method on an uninitialized element');
            }),
            i !== "#*$~&" ? i : this;
        var u = []
          , e = t[0] && typeof t[0].multiple != "undefined"
          , o = e && t[0].multiple || !e && f.multiple
          , s = t[0] && typeof t[0].debug != "undefined"
          , c = s && t[0].debug || !s && f.debug;
        return this.each(function() {
            var f = !1
              , i = n(this).data("tooltipster-ns")
              , r = null;
            i ? o ? f = !0 : c && console.log('Tooltipster: one or more tooltips are already attached to this element: ignoring. Use the "multiple" option to attach more tooltips.') : f = !0;
            f && (r = new h(this,t[0]),
            i || (i = []),
            i.push(r.namespace),
            n(this).data("tooltipster-ns", i),
            n(this).data(r.namespace, r));
            u.push(r)
        }),
        o ? u : this
    }
    ;
    r = !!("ontouchstart"in t);
    s = !1;
    n("body").one("mousemove", function() {
        s = !0
    })
}(jQuery, window, document),
function(n) {
    function h(n, r, u) {
        var c = n[0], s = /er/.test(u) ? _indeterminate : /bl/.test(u) ? i : t, h = u == _update ? {
            checked: c[t],
            disabled: c[i],
            indeterminate: "true" == n.attr(_indeterminate) || "false" == n.attr(_determinate)
        } : c[s], l;
        if (/^(ch|di|in)/.test(u) && !h)
            o(n, s);
        else if (/^(un|en|de)/.test(u) && h)
            f(n, s);
        else if (u == _update)
            for (l in h)
                h[l] ? o(n, l, !0) : f(n, l, !0);
        else
            r && "toggle" != u || (r || n[_callback]("ifClicked"),
            h ? c[_type] !== e && f(n, s) : o(n, s))
    }
    function o(o, h, l) {
        var y = o[0]
          , p = o.parent()
          , w = h == t
          , b = h == _indeterminate
          , nt = h == i
          , d = b ? _determinate : w ? v : "enabled"
          , tt = r(o, d + s(y[_type]))
          , it = r(o, h + s(y[_type]));
        if (!0 !== y[h]) {
            if (!l && h == t && y[_type] == e && y.name) {
                var g = o.closest("form")
                  , k = 'input[name="' + y.name + '"]'
                  , k = g.length ? g.find(k) : n(k);
                k.each(function() {
                    this !== y && n(this).data(u) && f(n(this), h)
                })
            }
            b ? (y[h] = !0,
            y[t] && f(o, t, "force")) : (l || (y[h] = !0),
            w && y[_indeterminate] && f(o, _indeterminate, !1));
            a(o, w, h, l)
        }
        y[i] && r(o, _cursor, !0) && p.find("." + c).css(_cursor, "default");
        p[_add](it || r(o, h) || "");
        p.attr("role") && !b && p.attr("aria-" + (nt ? i : t), "true");
        p[_remove](tt || r(o, d) || "")
    }
    function f(n, u, f) {
        var e = n[0]
          , o = n.parent()
          , y = u == t
          , h = u == _indeterminate
          , p = u == i
          , l = h ? _determinate : y ? v : "enabled"
          , w = r(n, l + s(e[_type]))
          , b = r(n, u + s(e[_type]));
        !1 !== e[u] && ((h || !f || "force" == f) && (e[u] = !1),
        a(n, y, l, f));
        !e[i] && r(n, _cursor, !0) && o.find("." + c).css(_cursor, "pointer");
        o[_remove](b || r(n, u) || "");
        o.attr("role") && !h && o.attr("aria-" + (p ? i : t), "false");
        o[_add](w || r(n, l) || "")
    }
    function l(t, i) {
        t.data(u) && (t.parent().html(t.attr("style", t.data(u).s || "")),
        i && t[_callback](i),
        t.off(".i").unwrap(),
        n(_label + '[for="' + t[0].id + '"]').add(t.closest(_label)).off(".i"))
    }
    function r(n, t, i) {
        if (n.data(u))
            return n.data(u).o[t + (i ? "" : "Class")]
    }
    function s(n) {
        return n.charAt(0).toUpperCase() + n.slice(1)
    }
    function a(n, t, i, r) {
        r || (t && n[_callback]("ifToggled"),
        n[_callback]("ifChanged")[_callback]("if" + s(i)))
    }
    var u = "iCheck"
      , c = u + "-helper"
      , e = "radio"
      , t = "checked"
      , v = "un" + t
      , i = "disabled";
    _determinate = "determinate";
    _indeterminate = "in" + _determinate;
    _update = "update";
    _type = "type";
    _click = "click";
    _touch = "touchbegin.i touchend.i";
    _add = "addClass";
    _remove = "removeClass";
    _callback = "trigger";
    _label = "label";
    _cursor = "cursor";
    _mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);
    n.fn[u] = function(r, s) {
        var w = 'input[type="checkbox"], input[type="' + e + '"]'
          , v = n()
          , d = function(t) {
            t.each(function() {
                var t = n(this);
                v = t.is(w) ? v.add(t) : v.add(t.find(w))
            })
        };
        if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(r))
            return r = r.toLowerCase(),
            d(this),
            v.each(function() {
                var t = n(this);
                "destroy" == r ? l(t, "ifDestroyed") : h(t, !0, r);
                n.isFunction(s) && s()
            });
        if ("object" != typeof r && r)
            return this;
        var a = n.extend({
            checkedClass: t,
            disabledClass: i,
            indeterminateClass: _indeterminate,
            labelHover: !0
        }, r)
          , b = a.handle
          , p = a.hoverClass || "hover"
          , tt = a.focusClass || "focus"
          , g = a.activeClass || "active"
          , nt = !!a.labelHover
          , k = a.labelHoverClass || "hover"
          , y = ("" + a.increaseArea).replace("%", "") | 0;
        return ("checkbox" == b || b == e) && (w = 'input[type="' + b + '"]'),
        -50 > y && (y = -50),
        d(this),
        v.each(function() {
            var s = n(this);
            l(s);
            var v = this
              , d = v.id
              , it = -y + "%"
              , w = 100 + 2 * y + "%"
              , w = {
                position: "absolute",
                top: it,
                left: it,
                display: "block",
                width: w,
                height: w,
                margin: 0,
                padding: 0,
                background: "#fff",
                border: 0,
                opacity: 0
            }
              , it = _mobile ? {
                position: "absolute",
                visibility: "hidden"
            } : y ? w : {
                position: "absolute",
                opacity: 0
            }
              , ft = "checkbox" == v[_type] ? a.checkboxClass || "icheckbox" : a.radioClass || "i" + e
              , b = n(_label + '[for="' + d + '"]').add(s.closest(_label))
              , rt = !!a.aria
              , ut = u + "-" + Math.random().toString(36).substr(2, 6)
              , r = '<div class="' + ft + '" ' + (rt ? 'role="' + v[_type] + '" ' : "");
            if (rt && b.each(function() {
                r += 'aria-labelledby="';
                this.id ? r += this.id : (this.id = ut,
                r += ut);
                r += '"'
            }),
            r = s.wrap(r + "/>")[_callback]("ifCreated").parent().append(a.insert),
            w = n('<ins class="' + c + '"/>').css(w).appendTo(r),
            s.data(u, {
                o: a,
                s: s.attr("style")
            }).css(it),
            a.inheritClass && r[_add](v.className || ""),
            a.inheritID && d && r.attr("id", u + "-" + d),
            "static" == r.css("position") && r.css("position", "relative"),
            h(s, !0, _update),
            b.length)
                b.on(_click + ".i mouseover.i mouseout.i " + _touch, function(t) {
                    var u = t[_type]
                      , f = n(this);
                    if (!v[i]) {
                        if (u == _click) {
                            if (n(t.target).is("a"))
                                return;
                            h(s, !1, !0)
                        } else
                            nt && (/ut|nd/.test(u) ? (r[_remove](p),
                            f[_remove](k)) : (r[_add](p),
                            f[_add](k)));
                        if (_mobile)
                            t.stopPropagation();
                        else
                            return !1
                    }
                });
            s.on(_click + ".i focus.i blur.i keyup.i keydown.i keypress.i", function(n) {
                var i = n[_type];
                if (n = n.keyCode,
                i == _click)
                    return !1;
                if ("keydown" == i && 32 == n)
                    return v[_type] == e && v[t] || (v[t] ? f(s, t) : o(s, t)),
                    !1;
                "keyup" == i && v[_type] == e ? v[t] || o(s, t) : /us|ur/.test(i) && r["blur" == i ? _remove : _add](tt)
            });
            w.on(_click + " mousedown mouseup mouseover mouseout " + _touch, function(n) {
                var t = n[_type]
                  , u = /wn|up/.test(t) ? g : p;
                if (!v[i])
                    if (t == _click ? h(s, !1, !0) : (/wn|er|in/.test(t) ? r[_add](u) : r[_remove](u + " " + g),
                    b.length && nt && u == p && b[/ut|nd/.test(t) ? _remove : _add](k)),
                    _mobile)
                        n.stopPropagation();
                    else
                        return !1
            })
        })
    }
}(window.jQuery || window.Zepto);
!function(n, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : n.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var n = t.prototype;
    return n.on = function(n, t) {
        if (n && t) {
            var i = this._events = this._events || {}
              , r = i[n] = i[n] || [];
            return -1 == r.indexOf(t) && r.push(t),
            this
        }
    }
    ,
    n.once = function(n, t) {
        if (n && t) {
            this.on(n, t);
            var i = this._onceEvents = this._onceEvents || {}
              , r = i[n] = i[n] || {};
            return r[t] = !0,
            this
        }
    }
    ,
    n.off = function(n, t) {
        var i = this._events && this._events[n], r;
        if (i && i.length)
            return r = i.indexOf(t),
            -1 != r && i.splice(r, 1),
            this
    }
    ,
    n.emitEvent = function(n, t) {
        var r = this._events && this._events[n], u, i, f, e;
        if (r && r.length) {
            for (u = 0,
            i = r[u],
            t = t || [],
            f = this._onceEvents && this._onceEvents[n]; i; )
                e = f && f[i],
                e && (this.off(n, i),
                delete f[i]),
                i.apply(this, t),
                u += e ? 0 : 1,
                i = r[u];
            return this
        }
    }
    ,
    n.allOff = n.removeAllListeners = function() {
        delete this._events;
        delete this._onceEvents
    }
    ,
    t
}),
function(n, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
        return t(n, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(n, require("ev-emitter")) : n.imagesLoaded = t(n, n.EvEmitter)
}("undefined" != typeof window ? window : this, function(n, t) {
    function e(n, t) {
        for (var i in t)
            n[i] = t[i];
        return n
    }
    function h(n) {
        var t = [], i;
        if (Array.isArray(n))
            t = n;
        else if ("number" == typeof n.length)
            for (i = 0; i < n.length; i++)
                t.push(n[i]);
        else
            t.push(n);
        return t
    }
    function i(n, t, r) {
        return this instanceof i ? ("string" == typeof n && (n = document.querySelectorAll(n)),
        this.elements = h(n),
        this.options = e({}, this.options),
        "function" == typeof t ? r = t : e(this.options, t),
        r && this.on("always", r),
        this.getImages(),
        f && (this.jqDeferred = new f.Deferred),
        void setTimeout(function() {
            this.check()
        }
        .bind(this))) : new i(n,t,r)
    }
    function r(n) {
        this.img = n
    }
    function u(n, t) {
        this.url = n;
        this.element = t;
        this.img = new Image
    }
    var f = n.jQuery, o = n.console, s;
    return i.prototype = Object.create(t.prototype),
    i.prototype.options = {},
    i.prototype.getImages = function() {
        this.images = [];
        this.elements.forEach(this.addElementImages, this)
    }
    ,
    i.prototype.addElementImages = function(n) {
        var i, r, t, f, u, e;
        if ("IMG" == n.nodeName && this.addImage(n),
        this.options.background === !0 && this.addElementBackgroundImages(n),
        i = n.nodeType,
        i && s[i]) {
            for (r = n.querySelectorAll("img"),
            t = 0; t < r.length; t++)
                f = r[t],
                this.addImage(f);
            if ("string" == typeof this.options.background)
                for (u = n.querySelectorAll(this.options.background),
                t = 0; t < u.length; t++)
                    e = u[t],
                    this.addElementBackgroundImages(e)
        }
    }
    ,
    s = {
        1: !0,
        9: !0,
        11: !0
    },
    i.prototype.addElementBackgroundImages = function(n) {
        var i = getComputedStyle(n), r, t, u;
        if (i)
            for (r = /url\((['"])?(.*?)\1\)/gi,
            t = r.exec(i.backgroundImage); null !== t; )
                u = t && t[2],
                u && this.addBackground(u, n),
                t = r.exec(i.backgroundImage)
    }
    ,
    i.prototype.addImage = function(n) {
        var t = new r(n);
        this.images.push(t)
    }
    ,
    i.prototype.addBackground = function(n, t) {
        var i = new u(n,t);
        this.images.push(i)
    }
    ,
    i.prototype.check = function() {
        function n(n, i, r) {
            setTimeout(function() {
                t.progress(n, i, r)
            })
        }
        var t = this;
        return this.progressedCount = 0,
        this.hasAnyBroken = !1,
        this.images.length ? void this.images.forEach(function(t) {
            t.once("progress", n);
            t.check()
        }) : void this.complete()
    }
    ,
    i.prototype.progress = function(n, t, i) {
        this.progressedCount++;
        this.hasAnyBroken = this.hasAnyBroken || !n.isLoaded;
        this.emitEvent("progress", [this, n, t]);
        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, n);
        this.progressedCount == this.images.length && this.complete();
        this.options.debug && o && o.log("progress: " + i, n, t)
    }
    ,
    i.prototype.complete = function() {
        var t = this.hasAnyBroken ? "fail" : "done", n;
        (this.isComplete = !0,
        this.emitEvent(t, [this]),
        this.emitEvent("always", [this]),
        this.jqDeferred) && (n = this.hasAnyBroken ? "reject" : "resolve",
        this.jqDeferred[n](this))
    }
    ,
    r.prototype = Object.create(t.prototype),
    r.prototype.check = function() {
        var n = this.getIsImageComplete();
        return n ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image,
        this.proxyImage.addEventListener("load", this),
        this.proxyImage.addEventListener("error", this),
        this.img.addEventListener("load", this),
        this.img.addEventListener("error", this),
        void (this.proxyImage.src = this.img.src))
    }
    ,
    r.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }
    ,
    r.prototype.confirm = function(n, t) {
        this.isLoaded = n;
        this.emitEvent("progress", [this, this.img, t])
    }
    ,
    r.prototype.handleEvent = function(n) {
        var t = "on" + n.type;
        this[t] && this[t](n)
    }
    ,
    r.prototype.onload = function() {
        this.confirm(!0, "onload");
        this.unbindEvents()
    }
    ,
    r.prototype.onerror = function() {
        this.confirm(!1, "onerror");
        this.unbindEvents()
    }
    ,
    r.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this);
        this.proxyImage.removeEventListener("error", this);
        this.img.removeEventListener("load", this);
        this.img.removeEventListener("error", this)
    }
    ,
    u.prototype = Object.create(r.prototype),
    u.prototype.check = function() {
        this.img.addEventListener("load", this);
        this.img.addEventListener("error", this);
        this.img.src = this.url;
        var n = this.getIsImageComplete();
        n && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
        this.unbindEvents())
    }
    ,
    u.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this);
        this.img.removeEventListener("error", this)
    }
    ,
    u.prototype.confirm = function(n, t) {
        this.isLoaded = n;
        this.emitEvent("progress", [this, this.element, t])
    }
    ,
    i.makeJQueryPlugin = function(t) {
        t = t || n.jQuery;
        t && (f = t,
        f.fn.imagesLoaded = function(n, t) {
            var r = new i(this,n,t);
            return r.jqDeferred.promise(f(this))
        }
        )
    }
    ,
    i.makeJQueryPlugin(),
    i
});
!function() {
    "use strict";
    var n, t = function(i, r) {
        function w(n) {
            return Math.floor(n)
        }
        function rt() {
            var n = u.params.autoplay
              , t = u.slides.eq(u.activeIndex);
            t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || u.params.autoplay);
            u.autoplayTimeoutId = setTimeout(function() {
                u.params.loop ? (u.fixLoop(),
                u._slideNext(),
                u.emit("onAutoplay", u)) : u.isEnd ? r.autoplayStopOnLast ? u.stopAutoplay() : (u._slideTo(0),
                u.emit("onAutoplay", u)) : (u._slideNext(),
                u.emit("onAutoplay", u))
            }, n)
        }
        function ut(t, i) {
            var r = n(t.target), u;
            if (!r.is(i))
                if ("string" == typeof i)
                    r = r.parents(i);
                else if (i.nodeType)
                    return r.parents().each(function(n, t) {
                        t === i && (u = i)
                    }),
                    u ? i : void 0;
            if (0 !== r.length)
                return r[0]
        }
        function ft(n, t) {
            t = t || {};
            var r = window.MutationObserver || window.WebkitMutationObserver
              , i = new r(function(n) {
                n.forEach(function(n) {
                    u.onResize(!0);
                    u.emit("onObserverUpdate", u, n)
                })
            }
            );
            i.observe(n, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            });
            u.observers.push(i)
        }
        function vt(n) {
            var t, o, s, e, r;
            if ((n.originalEvent && (n = n.originalEvent),
            t = n.keyCode || n.charCode,
            !u.params.allowSwipeToNext && (u.isHorizontal() && 39 === t || !u.isHorizontal() && 40 === t)) || !u.params.allowSwipeToPrev && (u.isHorizontal() && 37 === t || !u.isHorizontal() && 38 === t))
                return !1;
            if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === t || 39 === t || 38 === t || 40 === t) {
                    if (o = !1,
                    u.container.parents("." + u.params.slideClass).length > 0 && 0 === u.container.parents("." + u.params.slideActiveClass).length)
                        return;
                    var f = {
                        left: window.pageXOffset,
                        top: window.pageYOffset
                    }
                      , h = window.innerWidth
                      , c = window.innerHeight
                      , i = u.container.offset();
                    for (u.rtl && (i.left = i.left - u.container[0].scrollLeft),
                    s = [[i.left, i.top], [i.left + u.width, i.top], [i.left, i.top + u.height], [i.left + u.width, i.top + u.height]],
                    e = 0; e < s.length; e++)
                        r = s[e],
                        r[0] >= f.left && r[0] <= f.left + h && r[1] >= f.top && r[1] <= f.top + c && (o = !0);
                    if (!o)
                        return
                }
                u.isHorizontal() ? (37 !== t && 39 !== t || (n.preventDefault ? n.preventDefault() : n.returnValue = !1),
                (39 === t && !u.rtl || 37 === t && u.rtl) && u.slideNext(),
                (37 === t && !u.rtl || 39 === t && u.rtl) && u.slidePrev()) : (38 !== t && 40 !== t || (n.preventDefault ? n.preventDefault() : n.returnValue = !1),
                40 === t && u.slideNext(),
                38 === t && u.slidePrev());
                u.emit("onKeyPress", u, t)
            }
        }
        function bt(n) {
            var u = 0
              , t = 0
              , i = 0
              , r = 0;
            return "detail"in n && (t = n.detail),
            "wheelDelta"in n && (t = -n.wheelDelta / 120),
            "wheelDeltaY"in n && (t = -n.wheelDeltaY / 120),
            "wheelDeltaX"in n && (u = -n.wheelDeltaX / 120),
            "axis"in n && n.axis === n.HORIZONTAL_AXIS && (u = t,
            t = 0),
            i = 10 * u,
            r = 10 * t,
            "deltaY"in n && (r = n.deltaY),
            "deltaX"in n && (i = n.deltaX),
            (i || r) && n.deltaMode && (1 === n.deltaMode ? (i *= 40,
            r *= 40) : (i *= 800,
            r *= 800)),
            i && !u && (u = i < 1 ? -1 : 1),
            r && !t && (t = r < 1 ? -1 : 1),
            {
                spinX: u,
                spinY: t,
                pixelX: i,
                pixelY: r
            }
        }
        function yt(n) {
            n.originalEvent && (n = n.originalEvent);
            var i = 0
              , f = u.rtl ? -1 : 1
              , t = bt(n);
            if (u.params.mousewheelForceToAxis)
                if (u.isHorizontal()) {
                    if (!(Math.abs(t.pixelX) > Math.abs(t.pixelY)))
                        return;
                    i = t.pixelX * f
                } else {
                    if (!(Math.abs(t.pixelY) > Math.abs(t.pixelX)))
                        return;
                    i = t.pixelY
                }
            else
                i = Math.abs(t.pixelX) > Math.abs(t.pixelY) ? -t.pixelX * f : -t.pixelY;
            if (0 !== i) {
                if (u.params.mousewheelInvert && (i = -i),
                u.params.freeMode) {
                    var r = u.getWrapperTranslate() + i * u.params.mousewheelSensitivity
                      , e = u.isBeginning
                      , o = u.isEnd;
                    if (r >= u.minTranslate() && (r = u.minTranslate()),
                    r <= u.maxTranslate() && (r = u.maxTranslate()),
                    u.setWrapperTransition(0),
                    u.setWrapperTranslate(r),
                    u.updateProgress(),
                    u.updateActiveIndex(),
                    (!e && u.isBeginning || !o && u.isEnd) && u.updateClasses(),
                    u.params.freeModeSticky ? (clearTimeout(u.mousewheel.timeout),
                    u.mousewheel.timeout = setTimeout(function() {
                        u.slideReset()
                    }, 300)) : u.params.lazyLoading && u.lazy && u.lazy.load(),
                    u.emit("onScroll", u, n),
                    u.params.autoplay && u.params.autoplayDisableOnInteraction && u.stopAutoplay(),
                    0 === r || r === u.maxTranslate())
                        return
                } else {
                    if ((new window.Date).getTime() - u.mousewheel.lastScrollTime > 60)
                        if (i < 0)
                            if (u.isEnd && !u.params.loop || u.animating) {
                                if (u.params.mousewheelReleaseOnEdges)
                                    return !0
                            } else
                                u.slideNext(),
                                u.emit("onScroll", u, n);
                        else if (u.isBeginning && !u.params.loop || u.animating) {
                            if (u.params.mousewheelReleaseOnEdges)
                                return !0
                        } else
                            u.slidePrev(),
                            u.emit("onScroll", u, n);
                    u.mousewheel.lastScrollTime = (new window.Date).getTime()
                }
                return n.preventDefault ? n.preventDefault() : n.returnValue = !1,
                !1
            }
        }
        function pt(t, i) {
            t = n(t);
            var e, r, f, o = u.rtl ? -1 : 1;
            e = t.attr("data-swiper-parallax") || "0";
            r = t.attr("data-swiper-parallax-x");
            f = t.attr("data-swiper-parallax-y");
            r || f ? (r = r || "0",
            f = f || "0") : u.isHorizontal() ? (r = e,
            f = "0") : (f = e,
            r = "0");
            r = r.indexOf("%") >= 0 ? parseInt(r, 10) * i * o + "%" : r * i * o + "px";
            f = f.indexOf("%") >= 0 ? parseInt(f, 10) * i + "%" : f * i + "px";
            t.transform("translate3d(" + r + ", " + f + ",0px)")
        }
        function et(n) {
            return 0 !== n.indexOf("on") && (n = n[0] !== n[0].toUpperCase() ? "on" + n[0].toUpperCase() + n.substring(1) : "on" + n),
            n
        }
        var v, wt, y, e, ot, s, b, u, st, tt, it, lt, at;
        if (!(this instanceof t))
            return new t(i,r);
        v = {
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            autoplayStopOnLast: !1,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            },
            flip: {
                slideShadows: !0,
                limitRotation: !0
            },
            cube: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            },
            fade: {
                crossFade: !1
            },
            parallax: !1,
            zoom: !1,
            zoomMax: 3,
            zoomMin: 1,
            zoomToggle: !0,
            scrollbar: null,
            scrollbarHide: !0,
            scrollbarDraggable: !1,
            scrollbarSnapOnRelease: !1,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelReleaseOnEdges: !1,
            mousewheelInvert: !1,
            mousewheelForceToAxis: !1,
            mousewheelSensitivity: 1,
            mousewheelEventsTarged: "container",
            hashnav: !1,
            hashnavWatchState: !1,
            history: !1,
            replaceState: !1,
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            onlyExternal: !1,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            pagination: null,
            paginationElement: "span",
            paginationClickable: !1,
            paginationHide: !1,
            paginationBulletRender: null,
            paginationProgressRender: null,
            paginationFractionRender: null,
            paginationCustomRender: null,
            paginationType: "bullets",
            resistance: !0,
            resistanceRatio: .85,
            nextButton: null,
            prevButton: null,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            lazyLoading: !1,
            lazyLoadingInPrevNext: !1,
            lazyLoadingInPrevNextAmount: 1,
            lazyLoadingOnTransitionStart: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            control: void 0,
            controlInverse: !1,
            controlBy: "slide",
            normalizeSlideIndex: !0,
            allowSwipeToPrev: !0,
            allowSwipeToNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            buttonDisabledClass: "swiper-button-disabled",
            paginationCurrentClass: "swiper-pagination-current",
            paginationTotalClass: "swiper-pagination-total",
            paginationHiddenClass: "swiper-pagination-hidden",
            paginationProgressbarClass: "swiper-pagination-progressbar",
            paginationClickableClass: "swiper-pagination-clickable",
            paginationModifierClass: "swiper-pagination-",
            lazyLoadingClass: "swiper-lazy",
            lazyStatusLoadingClass: "swiper-lazy-loading",
            lazyStatusLoadedClass: "swiper-lazy-loaded",
            lazyPreloaderClass: "swiper-lazy-preloader",
            notificationClass: "swiper-notification",
            preloaderClass: "preloader",
            zoomContainerClass: "swiper-zoom-container",
            observer: !1,
            observeParents: !1,
            a11y: !1,
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            runCallbacksOnInit: !0
        };
        wt = r && r.virtualTranslate;
        r = r || {};
        y = {};
        for (e in r)
            if ("object" != typeof r[e] || null === r[e] || r[e].nodeType || r[e] === window || r[e] === document || "undefined" != typeof Dom7 && r[e]instanceof Dom7 || "undefined" != typeof jQuery && r[e]instanceof jQuery)
                y[e] = r[e];
            else {
                y[e] = {};
                for (ot in r[e])
                    y[e][ot] = r[e][ot]
            }
        for (s in v)
            if (void 0 === r[s])
                r[s] = v[s];
            else if ("object" == typeof r[s])
                for (b in v[s])
                    void 0 === r[s][b] && (r[s][b] = v[s][b]);
        if (u = this,
        u.params = r,
        u.originalParams = y,
        u.classNames = [],
        void 0 !== n && "undefined" != typeof Dom7 && (n = Dom7),
        (void 0 !== n || (n = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7)) && (u.$ = n,
        u.currentBreakpoint = void 0,
        u.getActiveBreakpoint = function() {
            var n, i, t, r;
            if (!u.params.breakpoints)
                return !1;
            i = !1;
            t = [];
            for (n in u.params.breakpoints)
                u.params.breakpoints.hasOwnProperty(n) && t.push(n);
            for (t.sort(function(n, t) {
                return parseInt(n, 10) > parseInt(t, 10)
            }),
            r = 0; r < t.length; r++)
                (n = t[r]) >= window.innerWidth && !i && (i = n);
            return i || "max"
        }
        ,
        u.setBreakpoint = function() {
            var n = u.getActiveBreakpoint(), t, r, i;
            if (n && u.currentBreakpoint !== n) {
                t = n in u.params.breakpoints ? u.params.breakpoints[n] : u.originalParams;
                r = u.params.loop && t.slidesPerView !== u.params.slidesPerView;
                for (i in t)
                    u.params[i] = t[i];
                u.currentBreakpoint = n;
                r && u.destroyLoop && u.reLoop(!0)
            }
        }
        ,
        u.params.breakpoints && u.setBreakpoint(),
        u.container = n(i),
        0 !== u.container.length)) {
            if (u.container.length > 1)
                return st = [],
                u.container.each(function() {
                    st.push(new t(this,r))
                }),
                st;
            u.container[0].swiper = u;
            u.container.data("swiper", u);
            u.classNames.push(u.params.containerModifierClass + u.params.direction);
            u.params.freeMode && u.classNames.push(u.params.containerModifierClass + "free-mode");
            u.support.flexbox || (u.classNames.push(u.params.containerModifierClass + "no-flexbox"),
            u.params.slidesPerColumn = 1);
            u.params.autoHeight && u.classNames.push(u.params.containerModifierClass + "autoheight");
            (u.params.parallax || u.params.watchSlidesVisibility) && (u.params.watchSlidesProgress = !0);
            u.params.touchReleaseOnEdges && (u.params.resistanceRatio = 0);
            ["cube", "coverflow", "flip"].indexOf(u.params.effect) >= 0 && (u.support.transforms3d ? (u.params.watchSlidesProgress = !0,
            u.classNames.push(u.params.containerModifierClass + "3d")) : u.params.effect = "slide");
            "slide" !== u.params.effect && u.classNames.push(u.params.containerModifierClass + u.params.effect);
            "cube" === u.params.effect && (u.params.resistanceRatio = 0,
            u.params.slidesPerView = 1,
            u.params.slidesPerColumn = 1,
            u.params.slidesPerGroup = 1,
            u.params.centeredSlides = !1,
            u.params.spaceBetween = 0,
            u.params.virtualTranslate = !0);
            "fade" !== u.params.effect && "flip" !== u.params.effect || (u.params.slidesPerView = 1,
            u.params.slidesPerColumn = 1,
            u.params.slidesPerGroup = 1,
            u.params.watchSlidesProgress = !0,
            u.params.spaceBetween = 0,
            void 0 === wt && (u.params.virtualTranslate = !0));
            u.params.grabCursor && u.support.touch && (u.params.grabCursor = !1);
            u.wrapper = u.container.children("." + u.params.wrapperClass);
            u.params.pagination && (u.paginationContainer = n(u.params.pagination),
            u.params.uniqueNavElements && "string" == typeof u.params.pagination && u.paginationContainer.length > 1 && 1 === u.container.find(u.params.pagination).length && (u.paginationContainer = u.container.find(u.params.pagination)),
            "bullets" === u.params.paginationType && u.params.paginationClickable ? u.paginationContainer.addClass(u.params.paginationModifierClass + "clickable") : u.params.paginationClickable = !1,
            u.paginationContainer.addClass(u.params.paginationModifierClass + u.params.paginationType));
            (u.params.nextButton || u.params.prevButton) && (u.params.nextButton && (u.nextButton = n(u.params.nextButton),
            u.params.uniqueNavElements && "string" == typeof u.params.nextButton && u.nextButton.length > 1 && 1 === u.container.find(u.params.nextButton).length && (u.nextButton = u.container.find(u.params.nextButton))),
            u.params.prevButton && (u.prevButton = n(u.params.prevButton),
            u.params.uniqueNavElements && "string" == typeof u.params.prevButton && u.prevButton.length > 1 && 1 === u.container.find(u.params.prevButton).length && (u.prevButton = u.container.find(u.params.prevButton))));
            u.isHorizontal = function() {
                return "horizontal" === u.params.direction
            }
            ;
            u.rtl = u.isHorizontal() && ("rtl" === u.container[0].dir.toLowerCase() || "rtl" === u.container.css("direction"));
            u.rtl && u.classNames.push(u.params.containerModifierClass + "rtl");
            u.rtl && (u.wrongRTL = "-webkit-box" === u.wrapper.css("display"));
            u.params.slidesPerColumn > 1 && u.classNames.push(u.params.containerModifierClass + "multirow");
            u.device.android && u.classNames.push(u.params.containerModifierClass + "android");
            u.container.addClass(u.classNames.join(" "));
            u.translate = 0;
            u.progress = 0;
            u.velocity = 0;
            u.lockSwipeToNext = function() {
                u.params.allowSwipeToNext = !1;
                u.params.allowSwipeToPrev === !1 && u.params.grabCursor && u.unsetGrabCursor()
            }
            ;
            u.lockSwipeToPrev = function() {
                u.params.allowSwipeToPrev = !1;
                u.params.allowSwipeToNext === !1 && u.params.grabCursor && u.unsetGrabCursor()
            }
            ;
            u.lockSwipes = function() {
                u.params.allowSwipeToNext = u.params.allowSwipeToPrev = !1;
                u.params.grabCursor && u.unsetGrabCursor()
            }
            ;
            u.unlockSwipeToNext = function() {
                u.params.allowSwipeToNext = !0;
                u.params.allowSwipeToPrev === !0 && u.params.grabCursor && u.setGrabCursor()
            }
            ;
            u.unlockSwipeToPrev = function() {
                u.params.allowSwipeToPrev = !0;
                u.params.allowSwipeToNext === !0 && u.params.grabCursor && u.setGrabCursor()
            }
            ;
            u.unlockSwipes = function() {
                u.params.allowSwipeToNext = u.params.allowSwipeToPrev = !0;
                u.params.grabCursor && u.setGrabCursor()
            }
            ;
            u.setGrabCursor = function(n) {
                u.container[0].style.cursor = "move";
                u.container[0].style.cursor = n ? "-webkit-grabbing" : "-webkit-grab";
                u.container[0].style.cursor = n ? "-moz-grabbin" : "-moz-grab";
                u.container[0].style.cursor = n ? "grabbing" : "grab"
            }
            ;
            u.unsetGrabCursor = function() {
                u.container[0].style.cursor = ""
            }
            ;
            u.params.grabCursor && u.setGrabCursor();
            u.imagesToLoad = [];
            u.imagesLoaded = 0;
            u.loadImage = function(n, t, i, r, u, f) {
                function o() {
                    f && f()
                }
                var e;
                n.complete && u ? o() : t ? (e = new window.Image,
                e.onload = o,
                e.onerror = o,
                r && (e.sizes = r),
                i && (e.srcset = i),
                t && (e.src = t)) : o()
            }
            ;
            u.preloadImages = function() {
                function t() {
                    void 0 !== u && null !== u && u && (void 0 !== u.imagesLoaded && u.imagesLoaded++,
                    u.imagesLoaded === u.imagesToLoad.length && (u.params.updateOnImagesReady && u.update(),
                    u.emit("onImagesReady", u)))
                }
                u.imagesToLoad = u.container.find("img");
                for (var n = 0; n < u.imagesToLoad.length; n++)
                    u.loadImage(u.imagesToLoad[n], u.imagesToLoad[n].currentSrc || u.imagesToLoad[n].getAttribute("src"), u.imagesToLoad[n].srcset || u.imagesToLoad[n].getAttribute("srcset"), u.imagesToLoad[n].sizes || u.imagesToLoad[n].getAttribute("sizes"), !0, t)
            }
            ;
            u.autoplayTimeoutId = void 0;
            u.autoplaying = !1;
            u.autoplayPaused = !1;
            u.startAutoplay = function() {
                return void 0 === u.autoplayTimeoutId && !!u.params.autoplay && !u.autoplaying && (u.autoplaying = !0,
                u.emit("onAutoplayStart", u),
                void rt())
            }
            ;
            u.stopAutoplay = function() {
                u.autoplayTimeoutId && (u.autoplayTimeoutId && clearTimeout(u.autoplayTimeoutId),
                u.autoplaying = !1,
                u.autoplayTimeoutId = void 0,
                u.emit("onAutoplayStop", u))
            }
            ;
            u.pauseAutoplay = function(n) {
                u.autoplayPaused || (u.autoplayTimeoutId && clearTimeout(u.autoplayTimeoutId),
                u.autoplayPaused = !0,
                0 === n ? (u.autoplayPaused = !1,
                rt()) : u.wrapper.transitionEnd(function() {
                    u && (u.autoplayPaused = !1,
                    u.autoplaying ? rt() : u.stopAutoplay())
                }))
            }
            ;
            u.minTranslate = function() {
                return -u.snapGrid[0]
            }
            ;
            u.maxTranslate = function() {
                return -u.snapGrid[u.snapGrid.length - 1]
            }
            ;
            u.updateAutoHeight = function() {
                var n, t = [], i = 0, r, f;
                if ("auto" !== u.params.slidesPerView && u.params.slidesPerView > 1)
                    for (n = 0; n < Math.ceil(u.params.slidesPerView); n++) {
                        if (r = u.activeIndex + n,
                        r > u.slides.length)
                            break;
                        t.push(u.slides.eq(r)[0])
                    }
                else
                    t.push(u.slides.eq(u.activeIndex)[0]);
                for (n = 0; n < t.length; n++)
                    void 0 !== t[n] && (f = t[n].offsetHeight,
                    i = f > i ? f : i);
                i && u.wrapper.css("height", i + "px")
            }
            ;
            u.updateContainerSize = function() {
                var n, t;
                n = void 0 !== u.params.width ? u.params.width : u.container[0].clientWidth;
                t = void 0 !== u.params.height ? u.params.height : u.container[0].clientHeight;
                0 === n && u.isHorizontal() || 0 === t && !u.isHorizontal() || (n = n - parseInt(u.container.css("padding-left"), 10) - parseInt(u.container.css("padding-right"), 10),
                t = t - parseInt(u.container.css("padding-top"), 10) - parseInt(u.container.css("padding-bottom"), 10),
                u.width = n,
                u.height = t,
                u.size = u.isHorizontal() ? u.width : u.height)
            }
            ;
            u.updateSlidesSize = function() {
                var o, h, c, e, f, l;
                u.slides = u.wrapper.children("." + u.params.slideClass);
                u.snapGrid = [];
                u.slidesGrid = [];
                u.slidesSizesGrid = [];
                var n, i = u.params.spaceBetween, r = -u.params.slidesOffsetBefore, v = 0, y = 0;
                if (void 0 !== u.size) {
                    "string" == typeof i && i.indexOf("%") >= 0 && (i = parseFloat(i.replace("%", "")) / 100 * u.size);
                    u.virtualSize = -i;
                    u.rtl ? u.slides.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : u.slides.css({
                        marginRight: "",
                        marginBottom: ""
                    });
                    u.params.slidesPerColumn > 1 && (o = Math.floor(u.slides.length / u.params.slidesPerColumn) === u.slides.length / u.params.slidesPerColumn ? u.slides.length : Math.ceil(u.slides.length / u.params.slidesPerColumn) * u.params.slidesPerColumn,
                    "auto" !== u.params.slidesPerView && "row" === u.params.slidesPerColumnFill && (o = Math.max(o, u.params.slidesPerView * u.params.slidesPerColumn)));
                    var t, s = u.params.slidesPerColumn, a = o / s, p = a - (u.params.slidesPerColumn * a - u.slides.length);
                    for (n = 0; n < u.slides.length; n++)
                        t = 0,
                        h = u.slides.eq(n),
                        u.params.slidesPerColumn > 1 && ("column" === u.params.slidesPerColumnFill ? (e = Math.floor(n / s),
                        f = n - e * s,
                        (e > p || e === p && f === s - 1) && ++f >= s && (f = 0,
                        e++),
                        c = e + f * o / s,
                        h.css({
                            "-webkit-box-ordinal-group": c,
                            "-moz-box-ordinal-group": c,
                            "-ms-flex-order": c,
                            "-webkit-order": c,
                            order: c
                        })) : (f = Math.floor(n / a),
                        e = n - f * a),
                        h.css("margin-" + (u.isHorizontal() ? "top" : "left"), 0 !== f && u.params.spaceBetween && u.params.spaceBetween + "px").attr("data-swiper-column", e).attr("data-swiper-row", f)),
                        "none" !== h.css("display") && ("auto" === u.params.slidesPerView ? (t = u.isHorizontal() ? h.outerWidth(!0) : h.outerHeight(!0),
                        u.params.roundLengths && (t = w(t))) : (t = (u.size - (u.params.slidesPerView - 1) * i) / u.params.slidesPerView,
                        u.params.roundLengths && (t = w(t)),
                        u.isHorizontal() ? u.slides[n].style.width = t + "px" : u.slides[n].style.height = t + "px"),
                        u.slides[n].swiperSlideSize = t,
                        u.slidesSizesGrid.push(t),
                        u.params.centeredSlides ? (r = r + t / 2 + v / 2 + i,
                        0 === v && 0 !== n && (r = r - u.size / 2 - i),
                        0 === n && (r = r - u.size / 2 - i),
                        Math.abs(r) < .001 && (r = 0),
                        y % u.params.slidesPerGroup == 0 && u.snapGrid.push(r),
                        u.slidesGrid.push(r)) : (y % u.params.slidesPerGroup == 0 && u.snapGrid.push(r),
                        u.slidesGrid.push(r),
                        r = r + t + i),
                        u.virtualSize += t + i,
                        v = t,
                        y++);
                    if (u.virtualSize = Math.max(u.virtualSize, u.size) + u.params.slidesOffsetAfter,
                    u.rtl && u.wrongRTL && ("slide" === u.params.effect || "coverflow" === u.params.effect) && u.wrapper.css({
                        width: u.virtualSize + u.params.spaceBetween + "px"
                    }),
                    u.support.flexbox && !u.params.setWrapperSize || (u.isHorizontal() ? u.wrapper.css({
                        width: u.virtualSize + u.params.spaceBetween + "px"
                    }) : u.wrapper.css({
                        height: u.virtualSize + u.params.spaceBetween + "px"
                    })),
                    u.params.slidesPerColumn > 1 && (u.virtualSize = (t + u.params.spaceBetween) * o,
                    u.virtualSize = Math.ceil(u.virtualSize / u.params.slidesPerColumn) - u.params.spaceBetween,
                    u.isHorizontal() ? u.wrapper.css({
                        width: u.virtualSize + u.params.spaceBetween + "px"
                    }) : u.wrapper.css({
                        height: u.virtualSize + u.params.spaceBetween + "px"
                    }),
                    u.params.centeredSlides)) {
                        for (l = [],
                        n = 0; n < u.snapGrid.length; n++)
                            u.snapGrid[n] < u.virtualSize + u.snapGrid[0] && l.push(u.snapGrid[n]);
                        u.snapGrid = l
                    }
                    if (!u.params.centeredSlides) {
                        for (l = [],
                        n = 0; n < u.snapGrid.length; n++)
                            u.snapGrid[n] <= u.virtualSize - u.size && l.push(u.snapGrid[n]);
                        u.snapGrid = l;
                        Math.floor(u.virtualSize - u.size) - Math.floor(u.snapGrid[u.snapGrid.length - 1]) > 1 && u.snapGrid.push(u.virtualSize - u.size)
                    }
                    0 === u.snapGrid.length && (u.snapGrid = [0]);
                    0 !== u.params.spaceBetween && (u.isHorizontal() ? u.rtl ? u.slides.css({
                        marginLeft: i + "px"
                    }) : u.slides.css({
                        marginRight: i + "px"
                    }) : u.slides.css({
                        marginBottom: i + "px"
                    }));
                    u.params.watchSlidesProgress && u.updateSlidesOffset()
                }
            }
            ;
            u.updateSlidesOffset = function() {
                for (var n = 0; n < u.slides.length; n++)
                    u.slides[n].swiperSlideOffset = u.isHorizontal() ? u.slides[n].offsetLeft : u.slides[n].offsetTop
            }
            ;
            u.currentSlidesPerView = function() {
                var n, t, r = 1, f, i;
                if (u.params.centeredSlides) {
                    for (i = u.slides[u.activeIndex].swiperSlideSize,
                    n = u.activeIndex + 1; n < u.slides.length; n++)
                        u.slides[n] && !f && (i += u.slides[n].swiperSlideSize,
                        r++,
                        i > u.size && (f = !0));
                    for (t = u.activeIndex - 1; t >= 0; t--)
                        u.slides[t] && !f && (i += u.slides[t].swiperSlideSize,
                        r++,
                        i > u.size && (f = !0))
                } else
                    for (n = u.activeIndex + 1; n < u.slides.length; n++)
                        u.slidesGrid[n] - u.slidesGrid[u.activeIndex] < u.size && r++;
                return r
            }
            ;
            u.updateSlidesProgress = function(n) {
                var f, t, i, o, r, e;
                if (void 0 === n && (n = u.translate || 0),
                0 !== u.slides.length)
                    for (void 0 === u.slides[0].swiperSlideOffset && u.updateSlidesOffset(),
                    f = -n,
                    u.rtl && (f = n),
                    u.slides.removeClass(u.params.slideVisibleClass),
                    t = 0; t < u.slides.length; t++)
                        i = u.slides[t],
                        o = (f + (u.params.centeredSlides ? u.minTranslate() : 0) - i.swiperSlideOffset) / (i.swiperSlideSize + u.params.spaceBetween),
                        u.params.watchSlidesVisibility && (r = -(f - i.swiperSlideOffset),
                        e = r + u.slidesSizesGrid[t],
                        (r >= 0 && r < u.size || e > 0 && e <= u.size || r <= 0 && e >= u.size) && u.slides.eq(t).addClass(u.params.slideVisibleClass)),
                        i.progress = u.rtl ? -o : o
            }
            ;
            u.updateProgress = function(n) {
                void 0 === n && (n = u.translate || 0);
                var t = u.maxTranslate() - u.minTranslate()
                  , i = u.isBeginning
                  , r = u.isEnd;
                0 === t ? (u.progress = 0,
                u.isBeginning = u.isEnd = !0) : (u.progress = (n - u.minTranslate()) / t,
                u.isBeginning = u.progress <= 0,
                u.isEnd = u.progress >= 1);
                u.isBeginning && !i && u.emit("onReachBeginning", u);
                u.isEnd && !r && u.emit("onReachEnd", u);
                u.params.watchSlidesProgress && u.updateSlidesProgress(n);
                u.emit("onProgress", u, u.progress)
            }
            ;
            u.updateActiveIndex = function() {
                for (var t, r, i = u.rtl ? u.translate : -u.translate, n = 0; n < u.slidesGrid.length; n++)
                    void 0 !== u.slidesGrid[n + 1] ? i >= u.slidesGrid[n] && i < u.slidesGrid[n + 1] - (u.slidesGrid[n + 1] - u.slidesGrid[n]) / 2 ? t = n : i >= u.slidesGrid[n] && i < u.slidesGrid[n + 1] && (t = n + 1) : i >= u.slidesGrid[n] && (t = n);
                u.params.normalizeSlideIndex && (t < 0 || void 0 === t) && (t = 0);
                r = Math.floor(t / u.params.slidesPerGroup);
                r >= u.snapGrid.length && (r = u.snapGrid.length - 1);
                t !== u.activeIndex && (u.snapIndex = r,
                u.previousIndex = u.activeIndex,
                u.activeIndex = t,
                u.updateClasses(),
                u.updateRealIndex())
            }
            ;
            u.updateRealIndex = function() {
                u.realIndex = parseInt(u.slides.eq(u.activeIndex).attr("data-swiper-slide-index") || u.activeIndex, 10)
            }
            ;
            u.updateClasses = function() {
                var o, i, f, t, e;
                if (u.slides.removeClass(u.params.slideActiveClass + " " + u.params.slideNextClass + " " + u.params.slidePrevClass + " " + u.params.slideDuplicateActiveClass + " " + u.params.slideDuplicateNextClass + " " + u.params.slideDuplicatePrevClass),
                o = u.slides.eq(u.activeIndex),
                o.addClass(u.params.slideActiveClass),
                r.loop && (o.hasClass(u.params.slideDuplicateClass) ? u.wrapper.children("." + u.params.slideClass + ":not(." + u.params.slideDuplicateClass + ')[data-swiper-slide-index="' + u.realIndex + '"]').addClass(u.params.slideDuplicateActiveClass) : u.wrapper.children("." + u.params.slideClass + "." + u.params.slideDuplicateClass + '[data-swiper-slide-index="' + u.realIndex + '"]').addClass(u.params.slideDuplicateActiveClass)),
                i = o.next("." + u.params.slideClass).addClass(u.params.slideNextClass),
                u.params.loop && 0 === i.length && (i = u.slides.eq(0),
                i.addClass(u.params.slideNextClass)),
                f = o.prev("." + u.params.slideClass).addClass(u.params.slidePrevClass),
                u.params.loop && 0 === f.length && (f = u.slides.eq(-1),
                f.addClass(u.params.slidePrevClass)),
                r.loop && (i.hasClass(u.params.slideDuplicateClass) ? u.wrapper.children("." + u.params.slideClass + ":not(." + u.params.slideDuplicateClass + ')[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(u.params.slideDuplicateNextClass) : u.wrapper.children("." + u.params.slideClass + "." + u.params.slideDuplicateClass + '[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(u.params.slideDuplicateNextClass),
                f.hasClass(u.params.slideDuplicateClass) ? u.wrapper.children("." + u.params.slideClass + ":not(." + u.params.slideDuplicateClass + ')[data-swiper-slide-index="' + f.attr("data-swiper-slide-index") + '"]').addClass(u.params.slideDuplicatePrevClass) : u.wrapper.children("." + u.params.slideClass + "." + u.params.slideDuplicateClass + '[data-swiper-slide-index="' + f.attr("data-swiper-slide-index") + '"]').addClass(u.params.slideDuplicatePrevClass)),
                u.paginationContainer && u.paginationContainer.length > 0) {
                    if (e = u.params.loop ? Math.ceil((u.slides.length - 2 * u.loopedSlides) / u.params.slidesPerGroup) : u.snapGrid.length,
                    u.params.loop ? (t = Math.ceil((u.activeIndex - u.loopedSlides) / u.params.slidesPerGroup),
                    t > u.slides.length - 1 - 2 * u.loopedSlides && (t -= u.slides.length - 2 * u.loopedSlides),
                    t > e - 1 && (t -= e),
                    t < 0 && "bullets" !== u.params.paginationType && (t = e + t)) : t = void 0 !== u.snapIndex ? u.snapIndex : u.activeIndex || 0,
                    "bullets" === u.params.paginationType && u.bullets && u.bullets.length > 0 && (u.bullets.removeClass(u.params.bulletActiveClass),
                    u.paginationContainer.length > 1 ? u.bullets.each(function() {
                        n(this).index() === t && n(this).addClass(u.params.bulletActiveClass)
                    }) : u.bullets.eq(t).addClass(u.params.bulletActiveClass)),
                    "fraction" === u.params.paginationType && (u.paginationContainer.find("." + u.params.paginationCurrentClass).text(t + 1),
                    u.paginationContainer.find("." + u.params.paginationTotalClass).text(e)),
                    "progress" === u.params.paginationType) {
                        var s = (t + 1) / e
                          , h = s
                          , c = 1;
                        u.isHorizontal() || (c = s,
                        h = 1);
                        u.paginationContainer.find("." + u.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + h + ") scaleY(" + c + ")").transition(u.params.speed)
                    }
                    "custom" === u.params.paginationType && u.params.paginationCustomRender && (u.paginationContainer.html(u.params.paginationCustomRender(u, t + 1, e)),
                    u.emit("onPaginationRendered", u, u.paginationContainer[0]))
                }
                u.params.loop || (u.params.prevButton && u.prevButton && u.prevButton.length > 0 && (u.isBeginning ? (u.prevButton.addClass(u.params.buttonDisabledClass),
                u.params.a11y && u.a11y && u.a11y.disable(u.prevButton)) : (u.prevButton.removeClass(u.params.buttonDisabledClass),
                u.params.a11y && u.a11y && u.a11y.enable(u.prevButton))),
                u.params.nextButton && u.nextButton && u.nextButton.length > 0 && (u.isEnd ? (u.nextButton.addClass(u.params.buttonDisabledClass),
                u.params.a11y && u.a11y && u.a11y.disable(u.nextButton)) : (u.nextButton.removeClass(u.params.buttonDisabledClass),
                u.params.a11y && u.a11y && u.a11y.enable(u.nextButton))))
            }
            ;
            u.updatePagination = function() {
                var n, i, t;
                if (u.params.pagination && u.paginationContainer && u.paginationContainer.length > 0) {
                    if (n = "",
                    "bullets" === u.params.paginationType) {
                        for (i = u.params.loop ? Math.ceil((u.slides.length - 2 * u.loopedSlides) / u.params.slidesPerGroup) : u.snapGrid.length,
                        t = 0; t < i; t++)
                            n += u.params.paginationBulletRender ? u.params.paginationBulletRender(u, t, u.params.bulletClass) : "<" + u.params.paginationElement + ' class="' + u.params.bulletClass + '"><\/' + u.params.paginationElement + ">";
                        u.paginationContainer.html(n);
                        u.bullets = u.paginationContainer.find("." + u.params.bulletClass);
                        u.params.paginationClickable && u.params.a11y && u.a11y && u.a11y.initPagination()
                    }
                    "fraction" === u.params.paginationType && (n = u.params.paginationFractionRender ? u.params.paginationFractionRender(u, u.params.paginationCurrentClass, u.params.paginationTotalClass) : '<span class="' + u.params.paginationCurrentClass + '"><\/span> / <span class="' + u.params.paginationTotalClass + '"><\/span>',
                    u.paginationContainer.html(n));
                    "progress" === u.params.paginationType && (n = u.params.paginationProgressRender ? u.params.paginationProgressRender(u, u.params.paginationProgressbarClass) : '<span class="' + u.params.paginationProgressbarClass + '"><\/span>',
                    u.paginationContainer.html(n));
                    "custom" !== u.params.paginationType && u.emit("onPaginationRendered", u, u.paginationContainer[0])
                }
            }
            ;
            u.update = function(n) {
                function t() {
                    u.rtl;
                    u.translate;
                    i = Math.min(Math.max(u.translate, u.maxTranslate()), u.minTranslate());
                    u.setWrapperTranslate(i);
                    u.updateActiveIndex();
                    u.updateClasses()
                }
                if (u) {
                    u.updateContainerSize();
                    u.updateSlidesSize();
                    u.updateProgress();
                    u.updatePagination();
                    u.updateClasses();
                    u.params.scrollbar && u.scrollbar && u.scrollbar.set();
                    var i;
                    n ? (u.controller && u.controller.spline && (u.controller.spline = void 0),
                    u.params.freeMode ? (t(),
                    u.params.autoHeight && u.updateAutoHeight()) : (("auto" === u.params.slidesPerView || u.params.slidesPerView > 1) && u.isEnd && !u.params.centeredSlides ? u.slideTo(u.slides.length - 1, 0, !1, !0) : u.slideTo(u.activeIndex, 0, !1, !0)) || t()) : u.params.autoHeight && u.updateAutoHeight()
                }
            }
            ;
            u.onResize = function(n) {
                var i, r, t, f;
                u.params.onBeforeResize && u.params.onBeforeResize(u);
                u.params.breakpoints && u.setBreakpoint();
                i = u.params.allowSwipeToPrev;
                r = u.params.allowSwipeToNext;
                u.params.allowSwipeToPrev = u.params.allowSwipeToNext = !0;
                u.updateContainerSize();
                u.updateSlidesSize();
                ("auto" === u.params.slidesPerView || u.params.freeMode || n) && u.updatePagination();
                u.params.scrollbar && u.scrollbar && u.scrollbar.set();
                u.controller && u.controller.spline && (u.controller.spline = void 0);
                t = !1;
                u.params.freeMode ? (f = Math.min(Math.max(u.translate, u.maxTranslate()), u.minTranslate()),
                u.setWrapperTranslate(f),
                u.updateActiveIndex(),
                u.updateClasses(),
                u.params.autoHeight && u.updateAutoHeight()) : (u.updateClasses(),
                t = ("auto" === u.params.slidesPerView || u.params.slidesPerView > 1) && u.isEnd && !u.params.centeredSlides ? u.slideTo(u.slides.length - 1, 0, !1, !0) : u.slideTo(u.activeIndex, 0, !1, !0));
                u.params.lazyLoading && !t && u.lazy && u.lazy.load();
                u.params.allowSwipeToPrev = i;
                u.params.allowSwipeToNext = r;
                u.params.onAfterResize && u.params.onAfterResize(u)
            }
            ;
            u.touchEventsDesktop = {
                start: "mousedown",
                move: "mousemove",
                end: "mouseup"
            };
            window.navigator.pointerEnabled ? u.touchEventsDesktop = {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled && (u.touchEventsDesktop = {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            });
            u.touchEvents = {
                start: u.support.touch || !u.params.simulateTouch ? "touchstart" : u.touchEventsDesktop.start,
                move: u.support.touch || !u.params.simulateTouch ? "touchmove" : u.touchEventsDesktop.move,
                end: u.support.touch || !u.params.simulateTouch ? "touchend" : u.touchEventsDesktop.end
            };
            (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === u.params.touchEventsTarget ? u.container : u.wrapper).addClass("swiper-wp8-" + u.params.direction);
            u.initEvents = function(n) {
                var f = n ? "off" : "on", t = n ? "removeEventListener" : "addEventListener", i = "container" === u.params.touchEventsTarget ? u.container[0] : u.wrapper[0], s = u.support.touch ? i : document, e = !!u.params.nested, o;
                u.browser.ie ? (i[t](u.touchEvents.start, u.onTouchStart, !1),
                s[t](u.touchEvents.move, u.onTouchMove, e),
                s[t](u.touchEvents.end, u.onTouchEnd, !1)) : (u.support.touch && (o = !("touchstart" !== u.touchEvents.start || !u.support.passiveListener || !u.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                },
                i[t](u.touchEvents.start, u.onTouchStart, o),
                i[t](u.touchEvents.move, u.onTouchMove, e),
                i[t](u.touchEvents.end, u.onTouchEnd, o)),
                (r.simulateTouch && !u.device.ios && !u.device.android || r.simulateTouch && !u.support.touch && u.device.ios) && (i[t]("mousedown", u.onTouchStart, !1),
                document[t]("mousemove", u.onTouchMove, e),
                document[t]("mouseup", u.onTouchEnd, !1)));
                window[t]("resize", u.onResize);
                u.params.nextButton && u.nextButton && u.nextButton.length > 0 && (u.nextButton[f]("click", u.onClickNext),
                u.params.a11y && u.a11y && u.nextButton[f]("keydown", u.a11y.onEnterKey));
                u.params.prevButton && u.prevButton && u.prevButton.length > 0 && (u.prevButton[f]("click", u.onClickPrev),
                u.params.a11y && u.a11y && u.prevButton[f]("keydown", u.a11y.onEnterKey));
                u.params.pagination && u.params.paginationClickable && (u.paginationContainer[f]("click", "." + u.params.bulletClass, u.onClickIndex),
                u.params.a11y && u.a11y && u.paginationContainer[f]("keydown", "." + u.params.bulletClass, u.a11y.onEnterKey));
                (u.params.preventClicks || u.params.preventClicksPropagation) && i[t]("click", u.preventClicks, !0)
            }
            ;
            u.attachEvents = function() {
                u.initEvents()
            }
            ;
            u.detachEvents = function() {
                u.initEvents(!0)
            }
            ;
            u.allowClick = !0;
            u.preventClicks = function(n) {
                u.allowClick || (u.params.preventClicks && n.preventDefault(),
                u.params.preventClicksPropagation && u.animating && (n.stopPropagation(),
                n.stopImmediatePropagation()))
            }
            ;
            u.onClickNext = function(n) {
                n.preventDefault();
                u.isEnd && !u.params.loop || u.slideNext()
            }
            ;
            u.onClickPrev = function(n) {
                n.preventDefault();
                u.isBeginning && !u.params.loop || u.slidePrev()
            }
            ;
            u.onClickIndex = function(t) {
                t.preventDefault();
                var i = n(this).index() * u.params.slidesPerGroup;
                u.params.loop && (i += u.loopedSlides);
                u.slideTo(i)
            }
            ;
            u.updateClickedSlide = function(t) {
                var r = ut(t, "." + u.params.slideClass), s = !1, f, o, i, e;
                if (r)
                    for (f = 0; f < u.slides.length; f++)
                        u.slides[f] === r && (s = !0);
                if (!r || !s)
                    return u.clickedSlide = void 0,
                    void (u.clickedIndex = void 0);
                if (u.clickedSlide = r,
                u.clickedIndex = n(r).index(),
                u.params.slideToClickedSlide && void 0 !== u.clickedIndex && u.clickedIndex !== u.activeIndex)
                    if (i = u.clickedIndex,
                    e = "auto" === u.params.slidesPerView ? u.currentSlidesPerView() : u.params.slidesPerView,
                    u.params.loop) {
                        if (u.animating)
                            return;
                        o = parseInt(n(u.clickedSlide).attr("data-swiper-slide-index"), 10);
                        u.params.centeredSlides ? i < u.loopedSlides - e / 2 || i > u.slides.length - u.loopedSlides + e / 2 ? (u.fixLoop(),
                        i = u.wrapper.children("." + u.params.slideClass + '[data-swiper-slide-index="' + o + '"]:not(.' + u.params.slideDuplicateClass + ")").eq(0).index(),
                        setTimeout(function() {
                            u.slideTo(i)
                        }, 0)) : u.slideTo(i) : i > u.slides.length - e ? (u.fixLoop(),
                        i = u.wrapper.children("." + u.params.slideClass + '[data-swiper-slide-index="' + o + '"]:not(.' + u.params.slideDuplicateClass + ")").eq(0).index(),
                        setTimeout(function() {
                            u.slideTo(i)
                        }, 0)) : u.slideTo(i)
                    } else
                        u.slideTo(i)
            }
            ;
            var h, c, k, d, a, f, o, g, p, nt, ht = "input, select, textarea, button, video", ct = Date.now(), l = [];
            u.animating = !1;
            u.touches = {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            };
            u.onTouchStart = function(t) {
                var i, f, r;
                if (t.originalEvent && (t = t.originalEvent),
                (tt = "touchstart" === t.type) || !("which"in t) || 3 !== t.which) {
                    if (u.params.noSwiping && ut(t, "." + u.params.noSwipingClass))
                        return void (u.allowClick = !0);
                    (!u.params.swipeHandler || ut(t, u.params.swipeHandler)) && (i = u.touches.currentX = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX,
                    f = u.touches.currentY = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY,
                    u.device.ios && u.params.iOSEdgeSwipeDetection && i <= u.params.iOSEdgeSwipeThreshold || ((h = !0,
                    c = !1,
                    k = !0,
                    a = void 0,
                    it = void 0,
                    u.touches.startX = i,
                    u.touches.startY = f,
                    d = Date.now(),
                    u.allowClick = !0,
                    u.updateContainerSize(),
                    u.swipeDirection = void 0,
                    u.params.threshold > 0 && (g = !1),
                    "touchstart" !== t.type) && (r = !0,
                    n(t.target).is(ht) && (r = !1),
                    document.activeElement && n(document.activeElement).is(ht) && document.activeElement.blur(),
                    r && t.preventDefault()),
                    u.emit("onTouchStart", u, t)))
                }
            }
            ;
            u.onTouchMove = function(t) {
                var s, i, e;
                if (t.originalEvent && (t = t.originalEvent),
                !tt || "mousemove" !== t.type) {
                    if (t.preventedByNestedSwiper)
                        return u.touches.startX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX,
                        void (u.touches.startY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY);
                    if (u.params.onlyExternal)
                        return u.allowClick = !1,
                        void (h && (u.touches.startX = u.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX,
                        u.touches.startY = u.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY,
                        d = Date.now()));
                    if (tt && u.params.touchReleaseOnEdges && !u.params.loop)
                        if (u.isHorizontal()) {
                            if (u.touches.currentX < u.touches.startX && u.translate <= u.maxTranslate() || u.touches.currentX > u.touches.startX && u.translate >= u.minTranslate())
                                return
                        } else if (u.touches.currentY < u.touches.startY && u.translate <= u.maxTranslate() || u.touches.currentY > u.touches.startY && u.translate >= u.minTranslate())
                            return;
                    if (tt && document.activeElement && t.target === document.activeElement && n(t.target).is(ht))
                        return c = !0,
                        void (u.allowClick = !1);
                    if ((k && u.emit("onTouchMove", u, t),
                    !(t.targetTouches && t.targetTouches.length > 1)) && ((u.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX,
                    u.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY,
                    void 0 === a) && (u.isHorizontal() && u.touches.currentY === u.touches.startY || !u.isHorizontal() && u.touches.currentX === u.touches.startX ? a = !1 : (s = 180 * Math.atan2(Math.abs(u.touches.currentY - u.touches.startY), Math.abs(u.touches.currentX - u.touches.startX)) / Math.PI,
                    a = u.isHorizontal() ? s > u.params.touchAngle : 90 - s > u.params.touchAngle)),
                    a && u.emit("onTouchMoveOpposite", u, t),
                    void 0 === it && (u.touches.currentX === u.touches.startX && u.touches.currentY === u.touches.startY || (it = !0)),
                    h)) {
                        if (a)
                            return void (h = !1);
                        if (it) {
                            if (u.allowClick = !1,
                            u.emit("onSliderMove", u, t),
                            t.preventDefault(),
                            u.params.touchMoveStopPropagation && !u.params.nested && t.stopPropagation(),
                            c || (r.loop && u.fixLoop(),
                            o = u.getWrapperTranslate(),
                            u.setWrapperTransition(0),
                            u.animating && u.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),
                            u.params.autoplay && u.autoplaying && (u.params.autoplayDisableOnInteraction ? u.stopAutoplay() : u.pauseAutoplay()),
                            nt = !1,
                            !u.params.grabCursor || u.params.allowSwipeToNext !== !0 && u.params.allowSwipeToPrev !== !0 || u.setGrabCursor(!0)),
                            c = !0,
                            i = u.touches.diff = u.isHorizontal() ? u.touches.currentX - u.touches.startX : u.touches.currentY - u.touches.startY,
                            i *= u.params.touchRatio,
                            u.rtl && (i = -i),
                            u.swipeDirection = i > 0 ? "prev" : "next",
                            f = i + o,
                            e = !0,
                            i > 0 && f > u.minTranslate() ? (e = !1,
                            u.params.resistance && (f = u.minTranslate() - 1 + Math.pow(-u.minTranslate() + o + i, u.params.resistanceRatio))) : i < 0 && f < u.maxTranslate() && (e = !1,
                            u.params.resistance && (f = u.maxTranslate() + 1 - Math.pow(u.maxTranslate() - o - i, u.params.resistanceRatio))),
                            e && (t.preventedByNestedSwiper = !0),
                            !u.params.allowSwipeToNext && "next" === u.swipeDirection && f < o && (f = o),
                            !u.params.allowSwipeToPrev && "prev" === u.swipeDirection && f > o && (f = o),
                            u.params.threshold > 0) {
                                if (!(Math.abs(i) > u.params.threshold || g))
                                    return void (f = o);
                                if (!g)
                                    return g = !0,
                                    u.touches.startX = u.touches.currentX,
                                    u.touches.startY = u.touches.currentY,
                                    f = o,
                                    void (u.touches.diff = u.isHorizontal() ? u.touches.currentX - u.touches.startX : u.touches.currentY - u.touches.startY)
                            }
                            u.params.followFinger && ((u.params.freeMode || u.params.watchSlidesProgress) && u.updateActiveIndex(),
                            u.params.freeMode && (0 === l.length && l.push({
                                position: u.touches[u.isHorizontal() ? "startX" : "startY"],
                                time: d
                            }),
                            l.push({
                                position: u.touches[u.isHorizontal() ? "currentX" : "currentY"],
                                time: (new window.Date).getTime()
                            })),
                            u.updateProgress(f),
                            u.setWrapperTranslate(f))
                        }
                    }
                }
            }
            ;
            u.onTouchEnd = function(t) {
                var b, v, s, tt, it, y, w, a, r, e, rt, ft;
                if (t.originalEvent && (t = t.originalEvent),
                k && u.emit("onTouchEnd", u, t),
                k = !1,
                h) {
                    if (u.params.grabCursor && c && h && (u.params.allowSwipeToNext === !0 || u.params.allowSwipeToPrev === !0) && u.setGrabCursor(!1),
                    b = Date.now(),
                    v = b - d,
                    u.allowClick && (u.updateClickedSlide(t),
                    u.emit("onTap", u, t),
                    v < 300 && b - ct > 300 && (p && clearTimeout(p),
                    p = setTimeout(function() {
                        u && (u.params.paginationHide && u.paginationContainer.length > 0 && !n(t.target).hasClass(u.params.bulletClass) && u.paginationContainer.toggleClass(u.params.paginationHiddenClass),
                        u.emit("onClick", u, t))
                    }, 300)),
                    v < 300 && b - ct < 300 && (p && clearTimeout(p),
                    u.emit("onDoubleTap", u, t))),
                    ct = Date.now(),
                    setTimeout(function() {
                        u && (u.allowClick = !0)
                    }, 0),
                    !h || !c || !u.swipeDirection || 0 === u.touches.diff || f === o)
                        return void (h = c = !1);
                    if (h = c = !1,
                    s = u.params.followFinger ? u.rtl ? u.translate : -u.translate : -f,
                    u.params.freeMode) {
                        if (s < -u.minTranslate())
                            return void u.slideTo(u.activeIndex);
                        if (s > -u.maxTranslate())
                            return void (u.slides.length < u.snapGrid.length ? u.slideTo(u.snapGrid.length - 1) : u.slideTo(u.slides.length - 1));
                        if (u.params.freeModeMomentum) {
                            if (l.length > 1) {
                                var ut = l.pop()
                                  , et = l.pop()
                                  , st = ut.position - et.position
                                  , ot = ut.time - et.time;
                                u.velocity = st / ot;
                                u.velocity = u.velocity / 2;
                                Math.abs(u.velocity) < u.params.freeModeMinimumVelocity && (u.velocity = 0);
                                (ot > 150 || (new window.Date).getTime() - ut.time > 300) && (u.velocity = 0)
                            } else
                                u.velocity = 0;
                            u.velocity = u.velocity * u.params.freeModeMomentumVelocityRatio;
                            l.length = 0;
                            var g = 1e3 * u.params.freeModeMomentumRatio
                              , ht = u.velocity * g
                              , i = u.translate + ht;
                            if (u.rtl && (i = -i),
                            it = !1,
                            y = 20 * Math.abs(u.velocity) * u.params.freeModeMomentumBounceRatio,
                            i < u.maxTranslate())
                                u.params.freeModeMomentumBounce ? (i + u.maxTranslate() < -y && (i = u.maxTranslate() - y),
                                tt = u.maxTranslate(),
                                it = !0,
                                nt = !0) : i = u.maxTranslate();
                            else if (i > u.minTranslate())
                                u.params.freeModeMomentumBounce ? (i - u.minTranslate() > y && (i = u.minTranslate() + y),
                                tt = u.minTranslate(),
                                it = !0,
                                nt = !0) : i = u.minTranslate();
                            else if (u.params.freeModeSticky) {
                                for (a = 0,
                                a = 0; a < u.snapGrid.length; a += 1)
                                    if (u.snapGrid[a] > -i) {
                                        w = a;
                                        break
                                    }
                                i = Math.abs(u.snapGrid[w] - i) < Math.abs(u.snapGrid[w - 1] - i) || "next" === u.swipeDirection ? u.snapGrid[w] : u.snapGrid[w - 1];
                                u.rtl || (i = -i)
                            }
                            if (0 !== u.velocity)
                                g = u.rtl ? Math.abs((-i - u.translate) / u.velocity) : Math.abs((i - u.translate) / u.velocity);
                            else if (u.params.freeModeSticky)
                                return void u.slideReset();
                            u.params.freeModeMomentumBounce && it ? (u.updateProgress(tt),
                            u.setWrapperTransition(g),
                            u.setWrapperTranslate(i),
                            u.onTransitionStart(),
                            u.animating = !0,
                            u.wrapper.transitionEnd(function() {
                                u && nt && (u.emit("onMomentumBounce", u),
                                u.setWrapperTransition(u.params.speed),
                                u.setWrapperTranslate(tt),
                                u.wrapper.transitionEnd(function() {
                                    u && u.onTransitionEnd()
                                }))
                            })) : u.velocity ? (u.updateProgress(i),
                            u.setWrapperTransition(g),
                            u.setWrapperTranslate(i),
                            u.onTransitionStart(),
                            u.animating || (u.animating = !0,
                            u.wrapper.transitionEnd(function() {
                                u && u.onTransitionEnd()
                            }))) : u.updateProgress(i);
                            u.updateActiveIndex()
                        }
                        return void ((!u.params.freeModeMomentum || v >= u.params.longSwipesMs) && (u.updateProgress(),
                        u.updateActiveIndex()))
                    }
                    for (e = 0,
                    rt = u.slidesSizesGrid[0],
                    r = 0; r < u.slidesGrid.length; r += u.params.slidesPerGroup)
                        void 0 !== u.slidesGrid[r + u.params.slidesPerGroup] ? s >= u.slidesGrid[r] && s < u.slidesGrid[r + u.params.slidesPerGroup] && (e = r,
                        rt = u.slidesGrid[r + u.params.slidesPerGroup] - u.slidesGrid[r]) : s >= u.slidesGrid[r] && (e = r,
                        rt = u.slidesGrid[u.slidesGrid.length - 1] - u.slidesGrid[u.slidesGrid.length - 2]);
                    if (ft = (s - u.slidesGrid[e]) / rt,
                    v > u.params.longSwipesMs) {
                        if (!u.params.longSwipes)
                            return void u.slideTo(u.activeIndex);
                        "next" === u.swipeDirection && (ft >= u.params.longSwipesRatio ? u.slideTo(e + u.params.slidesPerGroup) : u.slideTo(e));
                        "prev" === u.swipeDirection && (ft > 1 - u.params.longSwipesRatio ? u.slideTo(e + u.params.slidesPerGroup) : u.slideTo(e))
                    } else {
                        if (!u.params.shortSwipes)
                            return void u.slideTo(u.activeIndex);
                        "next" === u.swipeDirection && u.slideTo(e + u.params.slidesPerGroup);
                        "prev" === u.swipeDirection && u.slideTo(e)
                    }
                }
            }
            ;
            u._slideTo = function(n, t) {
                return u.slideTo(n, t, !0, !0)
            }
            ;
            u.slideTo = function(n, t, i, r) {
                var f, e;
                if (void 0 === i && (i = !0),
                void 0 === n && (n = 0),
                n < 0 && (n = 0),
                u.snapIndex = Math.floor(n / u.params.slidesPerGroup),
                u.snapIndex >= u.snapGrid.length && (u.snapIndex = u.snapGrid.length - 1),
                f = -u.snapGrid[u.snapIndex],
                u.params.autoplay && u.autoplaying && (r || !u.params.autoplayDisableOnInteraction ? u.pauseAutoplay(t) : u.stopAutoplay()),
                u.updateProgress(f),
                u.params.normalizeSlideIndex)
                    for (e = 0; e < u.slidesGrid.length; e++)
                        -Math.floor(100 * f) >= Math.floor(100 * u.slidesGrid[e]) && (n = e);
                return !(!u.params.allowSwipeToNext && f < u.translate && f < u.minTranslate()) && !(!u.params.allowSwipeToPrev && f > u.translate && f > u.maxTranslate() && (u.activeIndex || 0) !== n) && (void 0 === t && (t = u.params.speed),
                u.previousIndex = u.activeIndex || 0,
                u.activeIndex = n,
                u.updateRealIndex(),
                u.rtl && -f === u.translate || !u.rtl && f === u.translate ? (u.params.autoHeight && u.updateAutoHeight(),
                u.updateClasses(),
                "slide" !== u.params.effect && u.setWrapperTranslate(f),
                !1) : (u.updateClasses(),
                u.onTransitionStart(i),
                0 === t || u.browser.lteIE9 ? (u.setWrapperTranslate(f),
                u.setWrapperTransition(0),
                u.onTransitionEnd(i)) : (u.setWrapperTranslate(f),
                u.setWrapperTransition(t),
                u.animating || (u.animating = !0,
                u.wrapper.transitionEnd(function() {
                    u && u.onTransitionEnd(i)
                }))),
                !0))
            }
            ;
            u.onTransitionStart = function(n) {
                void 0 === n && (n = !0);
                u.params.autoHeight && u.updateAutoHeight();
                u.lazy && u.lazy.onTransitionStart();
                n && (u.emit("onTransitionStart", u),
                u.activeIndex !== u.previousIndex && (u.emit("onSlideChangeStart", u),
                u.activeIndex > u.previousIndex ? u.emit("onSlideNextStart", u) : u.emit("onSlidePrevStart", u)))
            }
            ;
            u.onTransitionEnd = function(n) {
                u.animating = !1;
                u.setWrapperTransition(0);
                void 0 === n && (n = !0);
                u.lazy && u.lazy.onTransitionEnd();
                n && (u.emit("onTransitionEnd", u),
                u.activeIndex !== u.previousIndex && (u.emit("onSlideChangeEnd", u),
                u.activeIndex > u.previousIndex ? u.emit("onSlideNextEnd", u) : u.emit("onSlidePrevEnd", u)));
                u.params.history && u.history && u.history.setHistory(u.params.history, u.activeIndex);
                u.params.hashnav && u.hashnav && u.hashnav.setHash()
            }
            ;
            u.slideNext = function(n, t, i) {
                return u.params.loop ? u.animating ? !1 : (u.fixLoop(),
                u.container[0].clientLeft,
                u.slideTo(u.activeIndex + u.params.slidesPerGroup, t, n, i)) : u.slideTo(u.activeIndex + u.params.slidesPerGroup, t, n, i)
            }
            ;
            u._slideNext = function(n) {
                return u.slideNext(!0, n, !0)
            }
            ;
            u.slidePrev = function(n, t, i) {
                return u.params.loop ? u.animating ? !1 : (u.fixLoop(),
                u.container[0].clientLeft,
                u.slideTo(u.activeIndex - 1, t, n, i)) : u.slideTo(u.activeIndex - 1, t, n, i)
            }
            ;
            u._slidePrev = function(n) {
                return u.slidePrev(!0, n, !0)
            }
            ;
            u.slideReset = function(n, t) {
                return u.slideTo(u.activeIndex, t, n)
            }
            ;
            u.disableTouchControl = function() {
                return u.params.onlyExternal = !0,
                !0
            }
            ;
            u.enableTouchControl = function() {
                return u.params.onlyExternal = !1,
                !0
            }
            ;
            u.setWrapperTransition = function(n, t) {
                u.wrapper.transition(n);
                "slide" !== u.params.effect && u.effects[u.params.effect] && u.effects[u.params.effect].setTransition(n);
                u.params.parallax && u.parallax && u.parallax.setTransition(n);
                u.params.scrollbar && u.scrollbar && u.scrollbar.setTransition(n);
                u.params.control && u.controller && u.controller.setTransition(n, t);
                u.emit("onSetTransition", u, n)
            }
            ;
            u.setWrapperTranslate = function(n, t, i) {
                var r = 0, f = 0, o, e;
                u.isHorizontal() ? r = u.rtl ? -n : n : f = n;
                u.params.roundLengths && (r = w(r),
                f = w(f));
                u.params.virtualTranslate || (u.support.transforms3d ? u.wrapper.transform("translate3d(" + r + "px, " + f + "px, 0px)") : u.wrapper.transform("translate(" + r + "px, " + f + "px)"));
                u.translate = u.isHorizontal() ? r : f;
                e = u.maxTranslate() - u.minTranslate();
                o = 0 === e ? 0 : (n - u.minTranslate()) / e;
                o !== u.progress && u.updateProgress(n);
                t && u.updateActiveIndex();
                "slide" !== u.params.effect && u.effects[u.params.effect] && u.effects[u.params.effect].setTranslate(u.translate);
                u.params.parallax && u.parallax && u.parallax.setTranslate(u.translate);
                u.params.scrollbar && u.scrollbar && u.scrollbar.setTranslate(u.translate);
                u.params.control && u.controller && u.controller.setTranslate(u.translate, i);
                u.emit("onSetTranslate", u, u.translate)
            }
            ;
            u.getTranslate = function(n, t) {
                var f, i, r, e;
                return void 0 === t && (t = "x"),
                u.params.virtualTranslate ? u.rtl ? -u.translate : u.translate : (r = window.getComputedStyle(n, null),
                window.WebKitCSSMatrix ? (i = r.transform || r.webkitTransform,
                i.split(",").length > 6 && (i = i.split(", ").map(function(n) {
                    return n.replace(",", ".")
                }).join(", ")),
                e = new window.WebKitCSSMatrix("none" === i ? "" : i)) : (e = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
                f = e.toString().split(",")),
                "x" === t && (i = window.WebKitCSSMatrix ? e.m41 : 16 === f.length ? parseFloat(f[12]) : parseFloat(f[4])),
                "y" === t && (i = window.WebKitCSSMatrix ? e.m42 : 16 === f.length ? parseFloat(f[13]) : parseFloat(f[5])),
                u.rtl && i && (i = -i),
                i || 0)
            }
            ;
            u.getWrapperTranslate = function(n) {
                return void 0 === n && (n = u.isHorizontal() ? "x" : "y"),
                u.getTranslate(u.wrapper[0], n)
            }
            ;
            u.observers = [];
            u.initObservers = function() {
                if (u.params.observeParents)
                    for (var t = u.container.parents(), n = 0; n < t.length; n++)
                        ft(t[n]);
                ft(u.container[0], {
                    childList: !1
                });
                ft(u.wrapper[0], {
                    attributes: !1
                })
            }
            ;
            u.disconnectObservers = function() {
                for (var n = 0; n < u.observers.length; n++)
                    u.observers[n].disconnect();
                u.observers = []
            }
            ;
            u.createLoop = function() {
                var i, t, r, f;
                for (u.wrapper.children("." + u.params.slideClass + "." + u.params.slideDuplicateClass).remove(),
                i = u.wrapper.children("." + u.params.slideClass),
                "auto" !== u.params.slidesPerView || u.params.loopedSlides || (u.params.loopedSlides = i.length),
                u.loopedSlides = parseInt(u.params.loopedSlides || u.params.slidesPerView, 10),
                u.loopedSlides = u.loopedSlides + u.params.loopAdditionalSlides,
                u.loopedSlides > i.length && (u.loopedSlides = i.length),
                r = [],
                f = [],
                i.each(function(t, e) {
                    var o = n(this);
                    t < u.loopedSlides && f.push(e);
                    t < i.length && t >= i.length - u.loopedSlides && r.push(e);
                    o.attr("data-swiper-slide-index", t)
                }),
                t = 0; t < f.length; t++)
                    u.wrapper.append(n(f[t].cloneNode(!0)).addClass(u.params.slideDuplicateClass));
                for (t = r.length - 1; t >= 0; t--)
                    u.wrapper.prepend(n(r[t].cloneNode(!0)).addClass(u.params.slideDuplicateClass))
            }
            ;
            u.destroyLoop = function() {
                u.wrapper.children("." + u.params.slideClass + "." + u.params.slideDuplicateClass).remove();
                u.slides.removeAttr("data-swiper-slide-index")
            }
            ;
            u.reLoop = function(n) {
                var t = u.activeIndex - u.loopedSlides;
                u.destroyLoop();
                u.createLoop();
                u.updateSlidesSize();
                n && u.slideTo(t + u.loopedSlides, 0, !1)
            }
            ;
            u.fixLoop = function() {
                var n;
                u.activeIndex < u.loopedSlides ? (n = u.slides.length - 3 * u.loopedSlides + u.activeIndex,
                n += u.loopedSlides,
                u.slideTo(n, 0, !1, !0)) : ("auto" === u.params.slidesPerView && u.activeIndex >= 2 * u.loopedSlides || u.activeIndex > u.slides.length - 2 * u.params.slidesPerView) && (n = -u.slides.length + u.activeIndex + u.loopedSlides,
                n += u.loopedSlides,
                u.slideTo(n, 0, !1, !0))
            }
            ;
            u.appendSlide = function(n) {
                if (u.params.loop && u.destroyLoop(),
                "object" == typeof n && n.length)
                    for (var t = 0; t < n.length; t++)
                        n[t] && u.wrapper.append(n[t]);
                else
                    u.wrapper.append(n);
                u.params.loop && u.createLoop();
                u.params.observer && u.support.observer || u.update(!0)
            }
            ;
            u.prependSlide = function(n) {
                var i, t;
                if (u.params.loop && u.destroyLoop(),
                i = u.activeIndex + 1,
                "object" == typeof n && n.length) {
                    for (t = 0; t < n.length; t++)
                        n[t] && u.wrapper.prepend(n[t]);
                    i = u.activeIndex + n.length
                } else
                    u.wrapper.prepend(n);
                u.params.loop && u.createLoop();
                u.params.observer && u.support.observer || u.update(!0);
                u.slideTo(i, 0, !1)
            }
            ;
            u.removeSlide = function(n) {
                var i, t, r;
                if (u.params.loop && (u.destroyLoop(),
                u.slides = u.wrapper.children("." + u.params.slideClass)),
                t = u.activeIndex,
                "object" == typeof n && n.length) {
                    for (r = 0; r < n.length; r++)
                        i = n[r],
                        u.slides[i] && u.slides.eq(i).remove(),
                        i < t && t--;
                    t = Math.max(t, 0)
                } else
                    i = n,
                    u.slides[i] && u.slides.eq(i).remove(),
                    i < t && t--,
                    t = Math.max(t, 0);
                u.params.loop && u.createLoop();
                u.params.observer && u.support.observer || u.update(!0);
                u.params.loop ? u.slideTo(t + u.loopedSlides, 0, !1) : u.slideTo(t, 0, !1)
            }
            ;
            u.removeAllSlides = function() {
                for (var t = [], n = 0; n < u.slides.length; n++)
                    t.push(n);
                u.removeSlide(t)
            }
            ;
            u.effects = {
                fade: {
                    setTranslate: function() {
                        for (var r, f, n = 0; n < u.slides.length; n++) {
                            var t = u.slides.eq(n)
                              , e = t[0].swiperSlideOffset
                              , i = -e;
                            u.params.virtualTranslate || (i -= u.translate);
                            r = 0;
                            u.isHorizontal() || (r = i,
                            i = 0);
                            f = u.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                            t.css({
                                opacity: f
                            }).transform("translate3d(" + i + "px, " + r + "px, 0px)")
                        }
                    },
                    setTransition: function(n) {
                        if (u.slides.transition(n),
                        u.params.virtualTranslate && 0 !== n) {
                            var t = !1;
                            u.slides.transitionEnd(function() {
                                if (!t && u) {
                                    t = !0;
                                    u.animating = !1;
                                    for (var i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = 0; n < i.length; n++)
                                        u.wrapper.trigger(i[n])
                                }
                            })
                        }
                    }
                },
                flip: {
                    setTranslate: function() {
                        for (var t, i, r, f, o = 0; o < u.slides.length; o++) {
                            t = u.slides.eq(o);
                            i = t[0].progress;
                            u.params.flip.limitRotation && (i = Math.max(Math.min(t[0].progress, 1), -1));
                            var l = t[0].swiperSlideOffset
                              , a = -180 * i
                              , e = a
                              , h = 0
                              , s = -l
                              , c = 0;
                            (u.isHorizontal() ? u.rtl && (e = -e) : (c = s,
                            s = 0,
                            h = -e,
                            e = 0),
                            t[0].style.zIndex = -Math.abs(Math.round(i)) + u.slides.length,
                            u.params.flip.slideShadows) && (r = u.isHorizontal() ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                            f = u.isHorizontal() ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom"),
                            0 === r.length && (r = n('<div class="swiper-slide-shadow-' + (u.isHorizontal() ? "left" : "top") + '"><\/div>'),
                            t.append(r)),
                            0 === f.length && (f = n('<div class="swiper-slide-shadow-' + (u.isHorizontal() ? "right" : "bottom") + '"><\/div>'),
                            t.append(f)),
                            r.length && (r[0].style.opacity = Math.max(-i, 0)),
                            f.length && (f[0].style.opacity = Math.max(i, 0)));
                            t.transform("translate3d(" + s + "px, " + c + "px, 0px) rotateX(" + h + "deg) rotateY(" + e + "deg)")
                        }
                    },
                    setTransition: function(t) {
                        if (u.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),
                        u.params.virtualTranslate && 0 !== t) {
                            var i = !1;
                            u.slides.eq(u.activeIndex).transitionEnd(function() {
                                if (!i && u && n(this).hasClass(u.params.slideActiveClass)) {
                                    i = !0;
                                    u.animating = !1;
                                    for (var r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < r.length; t++)
                                        u.wrapper.trigger(r[t])
                                }
                            })
                        }
                    }
                },
                cube: {
                    setTranslate: function() {
                        var t, e = 0, i, y, h, c, b;
                        for (u.params.cube.shadow && (u.isHorizontal() ? (t = u.wrapper.find(".swiper-cube-shadow"),
                        0 === t.length && (t = n('<div class="swiper-cube-shadow"><\/div>'),
                        u.wrapper.append(t)),
                        t.css({
                            height: u.width + "px"
                        })) : (t = u.container.find(".swiper-cube-shadow"),
                        0 === t.length && (t = n('<div class="swiper-cube-shadow"><\/div>'),
                        u.container.append(t)))),
                        i = 0; i < u.slides.length; i++) {
                            var f = u.slides.eq(i)
                              , o = 90 * i
                              , l = Math.floor(o / 360);
                            u.rtl && (o = -o,
                            l = Math.floor(-o / 360));
                            var s = Math.max(Math.min(f[0].progress, 1), -1)
                              , r = 0
                              , v = 0
                              , a = 0;
                            i % 4 == 0 ? (r = 4 * -l * u.size,
                            a = 0) : (i - 1) % 4 == 0 ? (r = 0,
                            a = 4 * -l * u.size) : (i - 2) % 4 == 0 ? (r = u.size + 4 * l * u.size,
                            a = u.size) : (i - 3) % 4 == 0 && (r = -u.size,
                            a = 3 * u.size + 4 * u.size * l);
                            u.rtl && (r = -r);
                            u.isHorizontal() || (v = r,
                            r = 0);
                            y = "rotateX(" + (u.isHorizontal() ? 0 : -o) + "deg) rotateY(" + (u.isHorizontal() ? o : 0) + "deg) translate3d(" + r + "px, " + v + "px, " + a + "px)";
                            (s <= 1 && s > -1 && (e = 90 * i + 90 * s,
                            u.rtl && (e = 90 * -i - 90 * s)),
                            f.transform(y),
                            u.params.cube.slideShadows) && (h = u.isHorizontal() ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                            c = u.isHorizontal() ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom"),
                            0 === h.length && (h = n('<div class="swiper-slide-shadow-' + (u.isHorizontal() ? "left" : "top") + '"><\/div>'),
                            f.append(h)),
                            0 === c.length && (c = n('<div class="swiper-slide-shadow-' + (u.isHorizontal() ? "right" : "bottom") + '"><\/div>'),
                            f.append(c)),
                            h.length && (h[0].style.opacity = Math.max(-s, 0)),
                            c.length && (c[0].style.opacity = Math.max(s, 0)))
                        }
                        if (u.wrapper.css({
                            "-webkit-transform-origin": "50% 50% -" + u.size / 2 + "px",
                            "-moz-transform-origin": "50% 50% -" + u.size / 2 + "px",
                            "-ms-transform-origin": "50% 50% -" + u.size / 2 + "px",
                            "transform-origin": "50% 50% -" + u.size / 2 + "px"
                        }),
                        u.params.cube.shadow)
                            if (u.isHorizontal())
                                t.transform("translate3d(0px, " + (u.width / 2 + u.params.cube.shadowOffset) + "px, " + -u.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + u.params.cube.shadowScale + ")");
                            else {
                                var p = Math.abs(e) - 90 * Math.floor(Math.abs(e) / 90)
                                  , k = 1.5 - (Math.sin(2 * p * Math.PI / 360) / 2 + Math.cos(2 * p * Math.PI / 360) / 2)
                                  , d = u.params.cube.shadowScale
                                  , w = u.params.cube.shadowScale / k
                                  , g = u.params.cube.shadowOffset;
                                t.transform("scale3d(" + d + ", 1, " + w + ") translate3d(0px, " + (u.height / 2 + g) + "px, " + -u.height / 2 / w + "px) rotateX(-90deg)")
                            }
                        b = u.isSafari || u.isUiWebView ? -u.size / 2 : 0;
                        u.wrapper.transform("translate3d(0px,0," + b + "px) rotateX(" + (u.isHorizontal() ? 0 : e) + "deg) rotateY(" + (u.isHorizontal() ? -e : 0) + "deg)")
                    },
                    setTransition: function(n) {
                        u.slides.transition(n).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(n);
                        u.params.cube.shadow && !u.isHorizontal() && u.container.find(".swiper-cube-shadow").transition(n)
                    }
                },
                coverflow: {
                    setTranslate: function() {
                        for (var w, r, f, a = u.translate, v = u.isHorizontal() ? -a + u.width / 2 : -a + u.height / 2, y = u.isHorizontal() ? u.params.coverflow.rotate : -u.params.coverflow.rotate, b = u.params.coverflow.depth, e = 0, k = u.slides.length; e < k; e++) {
                            var i = u.slides.eq(e)
                              , p = u.slidesSizesGrid[e]
                              , d = i[0].swiperSlideOffset
                              , t = (v - d - p / 2) / p * u.params.coverflow.modifier
                              , o = u.isHorizontal() ? y * t : 0
                              , s = u.isHorizontal() ? 0 : y * t
                              , h = -b * Math.abs(t)
                              , c = u.isHorizontal() ? 0 : u.params.coverflow.stretch * t
                              , l = u.isHorizontal() ? u.params.coverflow.stretch * t : 0;
                            Math.abs(l) < .001 && (l = 0);
                            Math.abs(c) < .001 && (c = 0);
                            Math.abs(h) < .001 && (h = 0);
                            Math.abs(o) < .001 && (o = 0);
                            Math.abs(s) < .001 && (s = 0);
                            w = "translate3d(" + l + "px," + c + "px," + h + "px)  rotateX(" + s + "deg) rotateY(" + o + "deg)";
                            (i.transform(w),
                            i[0].style.zIndex = 1 - Math.abs(Math.round(t)),
                            u.params.coverflow.slideShadows) && (r = u.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                            f = u.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom"),
                            0 === r.length && (r = n('<div class="swiper-slide-shadow-' + (u.isHorizontal() ? "left" : "top") + '"><\/div>'),
                            i.append(r)),
                            0 === f.length && (f = n('<div class="swiper-slide-shadow-' + (u.isHorizontal() ? "right" : "bottom") + '"><\/div>'),
                            i.append(f)),
                            r.length && (r[0].style.opacity = t > 0 ? t : 0),
                            f.length && (f[0].style.opacity = -t > 0 ? -t : 0))
                        }
                        u.browser.ie && (u.wrapper[0].style.perspectiveOrigin = v + "px 50%")
                    },
                    setTransition: function(n) {
                        u.slides.transition(n).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(n)
                    }
                }
            };
            u.lazy = {
                initialImageLoaded: !1,
                loadImageInSlide: function(t, i) {
                    if (void 0 !== t && (void 0 === i && (i = !0),
                    0 !== u.slides.length)) {
                        var r = u.slides.eq(t)
                          , f = r.find("." + u.params.lazyLoadingClass + ":not(." + u.params.lazyStatusLoadedClass + "):not(." + u.params.lazyStatusLoadingClass + ")");
                        !r.hasClass(u.params.lazyLoadingClass) || r.hasClass(u.params.lazyStatusLoadedClass) || r.hasClass(u.params.lazyStatusLoadingClass) || (f = f.add(r[0]));
                        0 !== f.length && f.each(function() {
                            var t = n(this);
                            t.addClass(u.params.lazyStatusLoadingClass);
                            var f = t.attr("data-background")
                              , e = t.attr("data-src")
                              , o = t.attr("data-srcset")
                              , s = t.attr("data-sizes");
                            u.loadImage(t[0], e || f, o, s, !1, function() {
                                var n, h, c;
                                void 0 !== u && null !== u && u && ((f ? (t.css("background-image", 'url("' + f + '")'),
                                t.removeAttr("data-background")) : (o && (t.attr("srcset", o),
                                t.removeAttr("data-srcset")),
                                s && (t.attr("sizes", s),
                                t.removeAttr("data-sizes")),
                                e && (t.attr("src", e),
                                t.removeAttr("data-src"))),
                                t.addClass(u.params.lazyStatusLoadedClass).removeClass(u.params.lazyStatusLoadingClass),
                                r.find("." + u.params.lazyPreloaderClass + ", ." + u.params.preloaderClass).remove(),
                                u.params.loop && i) && (n = r.attr("data-swiper-slide-index"),
                                r.hasClass(u.params.slideDuplicateClass) ? (h = u.wrapper.children('[data-swiper-slide-index="' + n + '"]:not(.' + u.params.slideDuplicateClass + ")"),
                                u.lazy.loadImageInSlide(h.index(), !1)) : (c = u.wrapper.children("." + u.params.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]'),
                                u.lazy.loadImageInSlide(c.index(), !1))),
                                u.emit("onLazyImageReady", u, r[0], t[0]))
                            });
                            u.emit("onLazyImageLoad", u, r[0], t[0])
                        })
                    }
                },
                load: function() {
                    var t, i = u.params.slidesPerView, f, e;
                    if ("auto" === i && (i = 0),
                    u.lazy.initialImageLoaded || (u.lazy.initialImageLoaded = !0),
                    u.params.watchSlidesVisibility)
                        u.wrapper.children("." + u.params.slideVisibleClass).each(function() {
                            u.lazy.loadImageInSlide(n(this).index())
                        });
                    else if (i > 1)
                        for (t = u.activeIndex; t < u.activeIndex + i; t++)
                            u.slides[t] && u.lazy.loadImageInSlide(t);
                    else
                        u.lazy.loadImageInSlide(u.activeIndex);
                    if (u.params.lazyLoadingInPrevNext)
                        if (i > 1 || u.params.lazyLoadingInPrevNextAmount && u.params.lazyLoadingInPrevNextAmount > 1) {
                            var o = u.params.lazyLoadingInPrevNextAmount
                              , r = i
                              , s = Math.min(u.activeIndex + r + Math.max(o, r), u.slides.length)
                              , h = Math.max(u.activeIndex - Math.max(r, o), 0);
                            for (t = u.activeIndex + i; t < s; t++)
                                u.slides[t] && u.lazy.loadImageInSlide(t);
                            for (t = h; t < u.activeIndex; t++)
                                u.slides[t] && u.lazy.loadImageInSlide(t)
                        } else
                            f = u.wrapper.children("." + u.params.slideNextClass),
                            f.length > 0 && u.lazy.loadImageInSlide(f.index()),
                            e = u.wrapper.children("." + u.params.slidePrevClass),
                            e.length > 0 && u.lazy.loadImageInSlide(e.index())
                },
                onTransitionStart: function() {
                    u.params.lazyLoading && (u.params.lazyLoadingOnTransitionStart || !u.params.lazyLoadingOnTransitionStart && !u.lazy.initialImageLoaded) && u.lazy.load()
                },
                onTransitionEnd: function() {
                    u.params.lazyLoading && !u.params.lazyLoadingOnTransitionStart && u.lazy.load()
                }
            };
            u.scrollbar = {
                isTouched: !1,
                setDragPosition: function(n) {
                    var i = u.scrollbar
                      , e = u.isHorizontal() ? "touchstart" === n.type || "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX || n.clientX : "touchstart" === n.type || "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY || n.clientY
                      , t = e - i.track.offset()[u.isHorizontal() ? "left" : "top"] - i.dragSize / 2
                      , r = -u.minTranslate() * i.moveDivider
                      , f = -u.maxTranslate() * i.moveDivider;
                    t < r ? t = r : t > f && (t = f);
                    t = -t / i.moveDivider;
                    u.updateProgress(t);
                    u.setWrapperTranslate(t, !0)
                },
                dragStart: function(n) {
                    var t = u.scrollbar;
                    t.isTouched = !0;
                    n.preventDefault();
                    n.stopPropagation();
                    t.setDragPosition(n);
                    clearTimeout(t.dragTimeout);
                    t.track.transition(0);
                    u.params.scrollbarHide && t.track.css("opacity", 1);
                    u.wrapper.transition(100);
                    t.drag.transition(100);
                    u.emit("onScrollbarDragStart", u)
                },
                dragMove: function(n) {
                    var t = u.scrollbar;
                    t.isTouched && (n.preventDefault ? n.preventDefault() : n.returnValue = !1,
                    t.setDragPosition(n),
                    u.wrapper.transition(0),
                    t.track.transition(0),
                    t.drag.transition(0),
                    u.emit("onScrollbarDragMove", u))
                },
                dragEnd: function() {
                    var n = u.scrollbar;
                    n.isTouched && (n.isTouched = !1,
                    u.params.scrollbarHide && (clearTimeout(n.dragTimeout),
                    n.dragTimeout = setTimeout(function() {
                        n.track.css("opacity", 0);
                        n.track.transition(400)
                    }, 1e3)),
                    u.emit("onScrollbarDragEnd", u),
                    u.params.scrollbarSnapOnRelease && u.slideReset())
                },
                draggableEvents: function() {
                    return u.params.simulateTouch !== !1 || u.support.touch ? u.touchEvents : u.touchEventsDesktop
                }(),
                enableDraggable: function() {
                    var t = u.scrollbar
                      , i = u.support.touch ? t.track : document;
                    n(t.track).on(t.draggableEvents.start, t.dragStart);
                    n(i).on(t.draggableEvents.move, t.dragMove);
                    n(i).on(t.draggableEvents.end, t.dragEnd)
                },
                disableDraggable: function() {
                    var t = u.scrollbar
                      , i = u.support.touch ? t.track : document;
                    n(t.track).off(t.draggableEvents.start, t.dragStart);
                    n(i).off(t.draggableEvents.move, t.dragMove);
                    n(i).off(t.draggableEvents.end, t.dragEnd)
                },
                set: function() {
                    if (u.params.scrollbar) {
                        var t = u.scrollbar;
                        t.track = n(u.params.scrollbar);
                        u.params.uniqueNavElements && "string" == typeof u.params.scrollbar && t.track.length > 1 && 1 === u.container.find(u.params.scrollbar).length && (t.track = u.container.find(u.params.scrollbar));
                        t.drag = t.track.find(".swiper-scrollbar-drag");
                        0 === t.drag.length && (t.drag = n('<div class="swiper-scrollbar-drag"><\/div>'),
                        t.track.append(t.drag));
                        t.drag[0].style.width = "";
                        t.drag[0].style.height = "";
                        t.trackSize = u.isHorizontal() ? t.track[0].offsetWidth : t.track[0].offsetHeight;
                        t.divider = u.size / u.virtualSize;
                        t.moveDivider = t.divider * (t.trackSize / u.size);
                        t.dragSize = t.trackSize * t.divider;
                        u.isHorizontal() ? t.drag[0].style.width = t.dragSize + "px" : t.drag[0].style.height = t.dragSize + "px";
                        t.track[0].style.display = t.divider >= 1 ? "none" : "";
                        u.params.scrollbarHide && (t.track[0].style.opacity = 0)
                    }
                },
                setTranslate: function() {
                    if (u.params.scrollbar) {
                        var t, n = u.scrollbar, i = (u.translate,
                        n.dragSize);
                        t = (n.trackSize - n.dragSize) * u.progress;
                        u.rtl && u.isHorizontal() ? (t = -t,
                        t > 0 ? (i = n.dragSize - t,
                        t = 0) : -t + n.dragSize > n.trackSize && (i = n.trackSize + t)) : t < 0 ? (i = n.dragSize + t,
                        t = 0) : t + n.dragSize > n.trackSize && (i = n.trackSize - t);
                        u.isHorizontal() ? (u.support.transforms3d ? n.drag.transform("translate3d(" + t + "px, 0, 0)") : n.drag.transform("translateX(" + t + "px)"),
                        n.drag[0].style.width = i + "px") : (u.support.transforms3d ? n.drag.transform("translate3d(0px, " + t + "px, 0)") : n.drag.transform("translateY(" + t + "px)"),
                        n.drag[0].style.height = i + "px");
                        u.params.scrollbarHide && (clearTimeout(n.timeout),
                        n.track[0].style.opacity = 1,
                        n.timeout = setTimeout(function() {
                            n.track[0].style.opacity = 0;
                            n.track.transition(400)
                        }, 1e3))
                    }
                },
                setTransition: function(n) {
                    u.params.scrollbar && u.scrollbar.drag.transition(n)
                }
            };
            u.controller = {
                LinearSpline: function(n, t) {
                    var u = function() {
                        var n, t, i;
                        return function(r, u) {
                            for (t = -1,
                            n = r.length; n - t > 1; )
                                r[i = n + t >> 1] <= u ? t = i : n = i;
                            return n
                        }
                    }(), i, r;
                    this.x = n;
                    this.y = t;
                    this.lastIndex = n.length - 1;
                    this.x.length;
                    this.interpolate = function(n) {
                        return n ? (r = u(this.x, n),
                        i = r - 1,
                        (n - this.x[i]) * (this.y[r] - this.y[i]) / (this.x[r] - this.x[i]) + this.y[i]) : 0
                    }
                },
                getInterpolateFunction: function(n) {
                    u.controller.spline || (u.controller.spline = u.params.loop ? new u.controller.LinearSpline(u.slidesGrid,n.slidesGrid) : new u.controller.LinearSpline(u.snapGrid,n.snapGrid))
                },
                setTranslate: function(n, i) {
                    function o(t) {
                        n = t.rtl && "horizontal" === t.params.direction ? -u.translate : u.translate;
                        "slide" === u.params.controlBy && (u.controller.getInterpolateFunction(t),
                        f = -u.controller.spline.interpolate(-n));
                        f && "container" !== u.params.controlBy || (s = (t.maxTranslate() - t.minTranslate()) / (u.maxTranslate() - u.minTranslate()),
                        f = (n - u.minTranslate()) * s + t.minTranslate());
                        u.params.controlInverse && (f = t.maxTranslate() - f);
                        t.updateProgress(f);
                        t.setWrapperTranslate(f, !1, u);
                        t.updateActiveIndex()
                    }
                    var s, f, r = u.params.control, e;
                    if (Array.isArray(r))
                        for (e = 0; e < r.length; e++)
                            r[e] !== i && r[e]instanceof t && o(r[e]);
                    else
                        r instanceof t && i !== r && o(r)
                },
                setTransition: function(n, i) {
                    function e(t) {
                        t.setWrapperTransition(n, u);
                        0 !== n && (t.onTransitionStart(),
                        t.wrapper.transitionEnd(function() {
                            r && (t.params.loop && "slide" === u.params.controlBy && t.fixLoop(),
                            t.onTransitionEnd())
                        }))
                    }
                    var f, r = u.params.control;
                    if (Array.isArray(r))
                        for (f = 0; f < r.length; f++)
                            r[f] !== i && r[f]instanceof t && e(r[f]);
                    else
                        r instanceof t && i !== r && e(r)
                }
            };
            u.hashnav = {
                onHashCange: function() {
                    var n = document.location.hash.replace("#", "");
                    n !== u.slides.eq(u.activeIndex).attr("data-hash") && u.slideTo(u.wrapper.children("." + u.params.slideClass + '[data-hash="' + n + '"]').index())
                },
                attachEvents: function(t) {
                    var i = t ? "off" : "on";
                    n(window)[i]("hashchange", u.hashnav.onHashCange)
                },
                setHash: function() {
                    if (u.hashnav.initialized && u.params.hashnav)
                        if (u.params.replaceState && window.history && window.history.replaceState)
                            window.history.replaceState(null, null, "#" + u.slides.eq(u.activeIndex).attr("data-hash") || "");
                        else {
                            var n = u.slides.eq(u.activeIndex)
                              , t = n.attr("data-hash") || n.attr("data-history");
                            document.location.hash = t || ""
                        }
                },
                init: function() {
                    var i, t, r, n, f, e;
                    if (u.params.hashnav && !u.params.history) {
                        if (u.hashnav.initialized = !0,
                        i = document.location.hash.replace("#", ""),
                        i)
                            for (t = 0,
                            r = u.slides.length; t < r; t++)
                                n = u.slides.eq(t),
                                f = n.attr("data-hash") || n.attr("data-history"),
                                f !== i || n.hasClass(u.params.slideDuplicateClass) || (e = n.index(),
                                u.slideTo(e, 0, u.params.runCallbacksOnInit, !0));
                        u.params.hashnavWatchState && u.hashnav.attachEvents()
                    }
                },
                destroy: function() {
                    u.params.hashnavWatchState && u.hashnav.attachEvents(!0)
                }
            };
            u.history = {
                init: function() {
                    if (u.params.history) {
                        if (!window.history || !window.history.pushState)
                            return u.params.history = !1,
                            void (u.params.hashnav = !0);
                        u.history.initialized = !0;
                        this.paths = this.getPathValues();
                        (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, u.params.runCallbacksOnInit),
                        u.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                    }
                },
                setHistoryPopState: function() {
                    u.history.paths = u.history.getPathValues();
                    u.history.scrollToSlide(u.params.speed, u.history.paths.value, !1)
                },
                getPathValues: function() {
                    var n = window.location.pathname.slice(1).split("/")
                      , t = n.length;
                    return {
                        key: n[t - 2],
                        value: n[t - 1]
                    }
                },
                setHistory: function(n, t) {
                    if (u.history.initialized && u.params.history) {
                        var r = u.slides.eq(t)
                          , i = this.slugify(r.attr("data-history"));
                        window.location.pathname.includes(n) || (i = n + "/" + i);
                        u.params.replaceState ? window.history.replaceState(null, null, i) : window.history.pushState(null, null, i)
                    }
                },
                slugify: function(n) {
                    return n.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                },
                scrollToSlide: function(n, t, i) {
                    var r, e, f, o, s;
                    if (t)
                        for (r = 0,
                        e = u.slides.length; r < e; r++)
                            f = u.slides.eq(r),
                            o = this.slugify(f.attr("data-history")),
                            o !== t || f.hasClass(u.params.slideDuplicateClass) || (s = f.index(),
                            u.slideTo(s, n, i));
                    else
                        u.slideTo(0, n, i)
                }
            };
            u.disableKeyboardControl = function() {
                u.params.keyboardControl = !1;
                n(document).off("keydown", vt)
            }
            ;
            u.enableKeyboardControl = function() {
                u.params.keyboardControl = !0;
                n(document).on("keydown", vt)
            }
            ;
            u.mousewheel = {
                event: !1,
                lastScrollTime: (new window.Date).getTime()
            };
            u.params.mousewheelControl && (u.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                var n = "onwheel"in document, t;
                return n || (t = document.createElement("div"),
                t.setAttribute("onwheel", "return;"),
                n = "function" == typeof t.onwheel),
                !n && document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0 && (n = document.implementation.hasFeature("Events.wheel", "3.0")),
                n
            }() ? "wheel" : "mousewheel");
            u.disableMousewheelControl = function() {
                if (!u.mousewheel.event)
                    return !1;
                var t = u.container;
                return "container" !== u.params.mousewheelEventsTarged && (t = n(u.params.mousewheelEventsTarged)),
                t.off(u.mousewheel.event, yt),
                u.params.mousewheelControl = !1,
                !0
            }
            ;
            u.enableMousewheelControl = function() {
                if (!u.mousewheel.event)
                    return !1;
                var t = u.container;
                return "container" !== u.params.mousewheelEventsTarged && (t = n(u.params.mousewheelEventsTarged)),
                t.on(u.mousewheel.event, yt),
                u.params.mousewheelControl = !0,
                !0
            }
            ;
            u.parallax = {
                setTranslate: function() {
                    u.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        pt(this, u.progress)
                    });
                    u.slides.each(function() {
                        var t = n(this);
                        t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            pt(this, Math.min(Math.max(t[0].progress, -1), 1))
                        })
                    })
                },
                setTransition: function(t) {
                    void 0 === t && (t = u.params.speed);
                    u.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        var i = n(this)
                          , r = parseInt(i.attr("data-swiper-parallax-duration"), 10) || t;
                        0 === t && (r = 0);
                        i.transition(r)
                    })
                }
            };
            u.zoom = {
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    slide: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    image: void 0,
                    imageWrap: void 0,
                    zoomMax: u.params.zoomMax
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                },
                getDistanceBetweenTouches: function(n) {
                    if (n.targetTouches.length < 2)
                        return 1;
                    var t = n.targetTouches[0].pageX
                      , i = n.targetTouches[0].pageY
                      , r = n.targetTouches[1].pageX
                      , u = n.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(r - t, 2) + Math.pow(u - i, 2))
                },
                onGestureStart: function(t) {
                    var i = u.zoom;
                    if (!u.support.gestures) {
                        if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2)
                            return;
                        i.gesture.scaleStart = i.getDistanceBetweenTouches(t)
                    }
                    if (!(i.gesture.slide && i.gesture.slide.length || (i.gesture.slide = n(this),
                    0 === i.gesture.slide.length && (i.gesture.slide = u.slides.eq(u.activeIndex)),
                    i.gesture.image = i.gesture.slide.find("img, svg, canvas"),
                    i.gesture.imageWrap = i.gesture.image.parent("." + u.params.zoomContainerClass),
                    i.gesture.zoomMax = i.gesture.imageWrap.attr("data-swiper-zoom") || u.params.zoomMax,
                    0 !== i.gesture.imageWrap.length)))
                        return void (i.gesture.image = void 0);
                    i.gesture.image.transition(0);
                    i.isScaling = !0
                },
                onGestureChange: function(n) {
                    var t = u.zoom;
                    if (!u.support.gestures) {
                        if ("touchmove" !== n.type || "touchmove" === n.type && n.targetTouches.length < 2)
                            return;
                        t.gesture.scaleMove = t.getDistanceBetweenTouches(n)
                    }
                    t.gesture.image && 0 !== t.gesture.image.length && (t.scale = u.support.gestures ? n.scale * t.currentScale : t.gesture.scaleMove / t.gesture.scaleStart * t.currentScale,
                    t.scale > t.gesture.zoomMax && (t.scale = t.gesture.zoomMax - 1 + Math.pow(t.scale - t.gesture.zoomMax + 1, .5)),
                    t.scale < u.params.zoomMin && (t.scale = u.params.zoomMin + 1 - Math.pow(u.params.zoomMin - t.scale + 1, .5)),
                    t.gesture.image.transform("translate3d(0,0,0) scale(" + t.scale + ")"))
                },
                onGestureEnd: function(n) {
                    var t = u.zoom;
                    !u.support.gestures && ("touchend" !== n.type || "touchend" === n.type && n.changedTouches.length < 2) || t.gesture.image && 0 !== t.gesture.image.length && (t.scale = Math.max(Math.min(t.scale, t.gesture.zoomMax), u.params.zoomMin),
                    t.gesture.image.transition(u.params.speed).transform("translate3d(0,0,0) scale(" + t.scale + ")"),
                    t.currentScale = t.scale,
                    t.isScaling = !1,
                    1 === t.scale && (t.gesture.slide = void 0))
                },
                onTouchStart: function(n, t) {
                    var i = n.zoom;
                    i.gesture.image && 0 !== i.gesture.image.length && (i.image.isTouched || ("android" === n.device.os && t.preventDefault(),
                    i.image.isTouched = !0,
                    i.image.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX,
                    i.image.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
                },
                onTouchMove: function(n) {
                    var t = u.zoom, i, r;
                    if (t.gesture.image && 0 !== t.gesture.image.length && (u.allowClick = !1,
                    t.image.isTouched && t.gesture.slide) && (t.image.isMoved || (t.image.width = t.gesture.image[0].offsetWidth,
                    t.image.height = t.gesture.image[0].offsetHeight,
                    t.image.startX = u.getTranslate(t.gesture.imageWrap[0], "x") || 0,
                    t.image.startY = u.getTranslate(t.gesture.imageWrap[0], "y") || 0,
                    t.gesture.slideWidth = t.gesture.slide[0].offsetWidth,
                    t.gesture.slideHeight = t.gesture.slide[0].offsetHeight,
                    t.gesture.imageWrap.transition(0),
                    u.rtl && (t.image.startX = -t.image.startX),
                    u.rtl && (t.image.startY = -t.image.startY)),
                    i = t.image.width * t.scale,
                    r = t.image.height * t.scale,
                    !(i < t.gesture.slideWidth && r < t.gesture.slideHeight))) {
                        if ((t.image.minX = Math.min(t.gesture.slideWidth / 2 - i / 2, 0),
                        t.image.maxX = -t.image.minX,
                        t.image.minY = Math.min(t.gesture.slideHeight / 2 - r / 2, 0),
                        t.image.maxY = -t.image.minY,
                        t.image.touchesCurrent.x = "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX,
                        t.image.touchesCurrent.y = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY,
                        !t.image.isMoved && !t.isScaling) && (u.isHorizontal() && Math.floor(t.image.minX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x < t.image.touchesStart.x || Math.floor(t.image.maxX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x > t.image.touchesStart.x || !u.isHorizontal() && Math.floor(t.image.minY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y < t.image.touchesStart.y || Math.floor(t.image.maxY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y > t.image.touchesStart.y))
                            return void (t.image.isTouched = !1);
                        n.preventDefault();
                        n.stopPropagation();
                        t.image.isMoved = !0;
                        t.image.currentX = t.image.touchesCurrent.x - t.image.touchesStart.x + t.image.startX;
                        t.image.currentY = t.image.touchesCurrent.y - t.image.touchesStart.y + t.image.startY;
                        t.image.currentX < t.image.minX && (t.image.currentX = t.image.minX + 1 - Math.pow(t.image.minX - t.image.currentX + 1, .8));
                        t.image.currentX > t.image.maxX && (t.image.currentX = t.image.maxX - 1 + Math.pow(t.image.currentX - t.image.maxX + 1, .8));
                        t.image.currentY < t.image.minY && (t.image.currentY = t.image.minY + 1 - Math.pow(t.image.minY - t.image.currentY + 1, .8));
                        t.image.currentY > t.image.maxY && (t.image.currentY = t.image.maxY - 1 + Math.pow(t.image.currentY - t.image.maxY + 1, .8));
                        t.velocity.prevPositionX || (t.velocity.prevPositionX = t.image.touchesCurrent.x);
                        t.velocity.prevPositionY || (t.velocity.prevPositionY = t.image.touchesCurrent.y);
                        t.velocity.prevTime || (t.velocity.prevTime = Date.now());
                        t.velocity.x = (t.image.touchesCurrent.x - t.velocity.prevPositionX) / (Date.now() - t.velocity.prevTime) / 2;
                        t.velocity.y = (t.image.touchesCurrent.y - t.velocity.prevPositionY) / (Date.now() - t.velocity.prevTime) / 2;
                        Math.abs(t.image.touchesCurrent.x - t.velocity.prevPositionX) < 2 && (t.velocity.x = 0);
                        Math.abs(t.image.touchesCurrent.y - t.velocity.prevPositionY) < 2 && (t.velocity.y = 0);
                        t.velocity.prevPositionX = t.image.touchesCurrent.x;
                        t.velocity.prevPositionY = t.image.touchesCurrent.y;
                        t.velocity.prevTime = Date.now();
                        t.gesture.imageWrap.transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)")
                    }
                },
                onTouchEnd: function(n) {
                    var t = n.zoom, e, o, s;
                    if (t.gesture.image && 0 !== t.gesture.image.length) {
                        if (!t.image.isTouched || !t.image.isMoved)
                            return t.image.isTouched = !1,
                            void (t.image.isMoved = !1);
                        t.image.isTouched = !1;
                        t.image.isMoved = !1;
                        var i = 300
                          , r = 300
                          , h = t.velocity.x * i
                          , u = t.image.currentX + h
                          , c = t.velocity.y * r
                          , f = t.image.currentY + c;
                        0 !== t.velocity.x && (i = Math.abs((u - t.image.currentX) / t.velocity.x));
                        0 !== t.velocity.y && (r = Math.abs((f - t.image.currentY) / t.velocity.y));
                        e = Math.max(i, r);
                        t.image.currentX = u;
                        t.image.currentY = f;
                        o = t.image.width * t.scale;
                        s = t.image.height * t.scale;
                        t.image.minX = Math.min(t.gesture.slideWidth / 2 - o / 2, 0);
                        t.image.maxX = -t.image.minX;
                        t.image.minY = Math.min(t.gesture.slideHeight / 2 - s / 2, 0);
                        t.image.maxY = -t.image.minY;
                        t.image.currentX = Math.max(Math.min(t.image.currentX, t.image.maxX), t.image.minX);
                        t.image.currentY = Math.max(Math.min(t.image.currentY, t.image.maxY), t.image.minY);
                        t.gesture.imageWrap.transition(e).transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)")
                    }
                },
                onTransitionEnd: function(n) {
                    var t = n.zoom;
                    t.gesture.slide && n.previousIndex !== n.activeIndex && (t.gesture.image.transform("translate3d(0,0,0) scale(1)"),
                    t.gesture.imageWrap.transform("translate3d(0,0,0)"),
                    t.gesture.slide = t.gesture.image = t.gesture.imageWrap = void 0,
                    t.scale = t.currentScale = 1)
                },
                toggleZoom: function(t, i) {
                    var r = t.zoom, s, h, y, p, w, b, u, f, k, d, g, nt, e, o, c, l, a, v;
                    (r.gesture.slide || (r.gesture.slide = t.clickedSlide ? n(t.clickedSlide) : t.slides.eq(t.activeIndex),
                    r.gesture.image = r.gesture.slide.find("img, svg, canvas"),
                    r.gesture.imageWrap = r.gesture.image.parent("." + t.params.zoomContainerClass)),
                    r.gesture.image && 0 !== r.gesture.image.length) && (void 0 === r.image.touchesStart.x && i ? (s = "touchend" === i.type ? i.changedTouches[0].pageX : i.pageX,
                    h = "touchend" === i.type ? i.changedTouches[0].pageY : i.pageY) : (s = r.image.touchesStart.x,
                    h = r.image.touchesStart.y),
                    r.scale && 1 !== r.scale ? (r.scale = r.currentScale = 1,
                    r.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),
                    r.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),
                    r.gesture.slide = void 0) : (r.scale = r.currentScale = r.gesture.imageWrap.attr("data-swiper-zoom") || t.params.zoomMax,
                    i ? (a = r.gesture.slide[0].offsetWidth,
                    v = r.gesture.slide[0].offsetHeight,
                    y = r.gesture.slide.offset().left,
                    p = r.gesture.slide.offset().top,
                    w = y + a / 2 - s,
                    b = p + v / 2 - h,
                    k = r.gesture.image[0].offsetWidth,
                    d = r.gesture.image[0].offsetHeight,
                    g = k * r.scale,
                    nt = d * r.scale,
                    e = Math.min(a / 2 - g / 2, 0),
                    o = Math.min(v / 2 - nt / 2, 0),
                    c = -e,
                    l = -o,
                    u = w * r.scale,
                    f = b * r.scale,
                    u < e && (u = e),
                    u > c && (u = c),
                    f < o && (f = o),
                    f > l && (f = l)) : (u = 0,
                    f = 0),
                    r.gesture.imageWrap.transition(300).transform("translate3d(" + u + "px, " + f + "px,0)"),
                    r.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + r.scale + ")")))
                },
                attachEvents: function(t) {
                    var i = t ? "off" : "on", r;
                    u.params.zoom && (r = (u.slides,
                    !("touchstart" !== u.touchEvents.start || !u.support.passiveListener || !u.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    }),
                    u.support.gestures ? (u.slides[i]("gesturestart", u.zoom.onGestureStart, r),
                    u.slides[i]("gesturechange", u.zoom.onGestureChange, r),
                    u.slides[i]("gestureend", u.zoom.onGestureEnd, r)) : "touchstart" === u.touchEvents.start && (u.slides[i](u.touchEvents.start, u.zoom.onGestureStart, r),
                    u.slides[i](u.touchEvents.move, u.zoom.onGestureChange, r),
                    u.slides[i](u.touchEvents.end, u.zoom.onGestureEnd, r)),
                    u[i]("touchStart", u.zoom.onTouchStart),
                    u.slides.each(function(t, r) {
                        n(r).find("." + u.params.zoomContainerClass).length > 0 && n(r)[i](u.touchEvents.move, u.zoom.onTouchMove)
                    }),
                    u[i]("touchEnd", u.zoom.onTouchEnd),
                    u[i]("transitionEnd", u.zoom.onTransitionEnd),
                    u.params.zoomToggle && u.on("doubleTap", u.zoom.toggleZoom))
                },
                init: function() {
                    u.zoom.attachEvents()
                },
                destroy: function() {
                    u.zoom.attachEvents(!0)
                }
            };
            u._plugins = [];
            for (lt in u.plugins)
                at = u.plugins[lt](u, u.params[lt]),
                at && u._plugins.push(at);
            return u.callPlugins = function(n) {
                for (var t = 0; t < u._plugins.length; t++)
                    n in u._plugins[t] && u._plugins[t][n](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }
            ,
            u.emitterEventListeners = {},
            u.emit = function(n) {
                u.params[n] && u.params[n](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                var t;
                if (u.emitterEventListeners[n])
                    for (t = 0; t < u.emitterEventListeners[n].length; t++)
                        u.emitterEventListeners[n][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                u.callPlugins && u.callPlugins(n, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }
            ,
            u.on = function(n, t) {
                return n = et(n),
                u.emitterEventListeners[n] || (u.emitterEventListeners[n] = []),
                u.emitterEventListeners[n].push(t),
                u
            }
            ,
            u.off = function(n, t) {
                var i;
                if (n = et(n),
                void 0 === t)
                    return u.emitterEventListeners[n] = [],
                    u;
                if (u.emitterEventListeners[n] && 0 !== u.emitterEventListeners[n].length) {
                    for (i = 0; i < u.emitterEventListeners[n].length; i++)
                        u.emitterEventListeners[n][i] === t && u.emitterEventListeners[n].splice(i, 1);
                    return u
                }
            }
            ,
            u.once = function(n, t) {
                n = et(n);
                var i = function() {
                    t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
                    u.off(n, i)
                };
                return u.on(n, i),
                u
            }
            ,
            u.a11y = {
                makeFocusable: function(n) {
                    return n.attr("tabIndex", "0"),
                    n
                },
                addRole: function(n, t) {
                    return n.attr("role", t),
                    n
                },
                addLabel: function(n, t) {
                    return n.attr("aria-label", t),
                    n
                },
                disable: function(n) {
                    return n.attr("aria-disabled", !0),
                    n
                },
                enable: function(n) {
                    return n.attr("aria-disabled", !1),
                    n
                },
                onEnterKey: function(t) {
                    13 === t.keyCode && (n(t.target).is(u.params.nextButton) ? (u.onClickNext(t),
                    u.isEnd ? u.a11y.notify(u.params.lastSlideMessage) : u.a11y.notify(u.params.nextSlideMessage)) : n(t.target).is(u.params.prevButton) && (u.onClickPrev(t),
                    u.isBeginning ? u.a11y.notify(u.params.firstSlideMessage) : u.a11y.notify(u.params.prevSlideMessage)),
                    n(t.target).is("." + u.params.bulletClass) && n(t.target)[0].click())
                },
                liveRegion: n('<span class="' + u.params.notificationClass + '" aria-live="assertive" aria-atomic="true"><\/span>'),
                notify: function(n) {
                    var t = u.a11y.liveRegion;
                    0 !== t.length && (t.html(""),
                    t.html(n))
                },
                init: function() {
                    u.params.nextButton && u.nextButton && u.nextButton.length > 0 && (u.a11y.makeFocusable(u.nextButton),
                    u.a11y.addRole(u.nextButton, "button"),
                    u.a11y.addLabel(u.nextButton, u.params.nextSlideMessage));
                    u.params.prevButton && u.prevButton && u.prevButton.length > 0 && (u.a11y.makeFocusable(u.prevButton),
                    u.a11y.addRole(u.prevButton, "button"),
                    u.a11y.addLabel(u.prevButton, u.params.prevSlideMessage));
                    n(u.container).append(u.a11y.liveRegion)
                },
                initPagination: function() {
                    u.params.pagination && u.params.paginationClickable && u.bullets && u.bullets.length && u.bullets.each(function() {
                        var t = n(this);
                        u.a11y.makeFocusable(t);
                        u.a11y.addRole(t, "button");
                        u.a11y.addLabel(t, u.params.paginationBulletMessage.replace(/{{index}}/, t.index() + 1))
                    })
                },
                destroy: function() {
                    u.a11y.liveRegion && u.a11y.liveRegion.length > 0 && u.a11y.liveRegion.remove()
                }
            },
            u.init = function() {
                u.params.loop && u.createLoop();
                u.updateContainerSize();
                u.updateSlidesSize();
                u.updatePagination();
                u.params.scrollbar && u.scrollbar && (u.scrollbar.set(),
                u.params.scrollbarDraggable && u.scrollbar.enableDraggable());
                "slide" !== u.params.effect && u.effects[u.params.effect] && (u.params.loop || u.updateProgress(),
                u.effects[u.params.effect].setTranslate());
                u.params.loop ? u.slideTo(u.params.initialSlide + u.loopedSlides, 0, u.params.runCallbacksOnInit) : (u.slideTo(u.params.initialSlide, 0, u.params.runCallbacksOnInit),
                0 === u.params.initialSlide && (u.parallax && u.params.parallax && u.parallax.setTranslate(),
                u.lazy && u.params.lazyLoading && (u.lazy.load(),
                u.lazy.initialImageLoaded = !0)));
                u.attachEvents();
                u.params.observer && u.support.observer && u.initObservers();
                u.params.preloadImages && !u.params.lazyLoading && u.preloadImages();
                u.params.zoom && u.zoom && u.zoom.init();
                u.params.autoplay && u.startAutoplay();
                u.params.keyboardControl && u.enableKeyboardControl && u.enableKeyboardControl();
                u.params.mousewheelControl && u.enableMousewheelControl && u.enableMousewheelControl();
                u.params.hashnavReplaceState && (u.params.replaceState = u.params.hashnavReplaceState);
                u.params.history && u.history && u.history.init();
                u.params.hashnav && u.hashnav && u.hashnav.init();
                u.params.a11y && u.a11y && u.a11y.init();
                u.emit("onInit", u)
            }
            ,
            u.cleanupStyles = function() {
                u.container.removeClass(u.classNames.join(" ")).removeAttr("style");
                u.wrapper.removeAttr("style");
                u.slides && u.slides.length && u.slides.removeClass([u.params.slideVisibleClass, u.params.slideActiveClass, u.params.slideNextClass, u.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row");
                u.paginationContainer && u.paginationContainer.length && u.paginationContainer.removeClass(u.params.paginationHiddenClass);
                u.bullets && u.bullets.length && u.bullets.removeClass(u.params.bulletActiveClass);
                u.params.prevButton && n(u.params.prevButton).removeClass(u.params.buttonDisabledClass);
                u.params.nextButton && n(u.params.nextButton).removeClass(u.params.buttonDisabledClass);
                u.params.scrollbar && u.scrollbar && (u.scrollbar.track && u.scrollbar.track.length && u.scrollbar.track.removeAttr("style"),
                u.scrollbar.drag && u.scrollbar.drag.length && u.scrollbar.drag.removeAttr("style"))
            }
            ,
            u.destroy = function(n, t) {
                u.detachEvents();
                u.stopAutoplay();
                u.params.scrollbar && u.scrollbar && u.params.scrollbarDraggable && u.scrollbar.disableDraggable();
                u.params.loop && u.destroyLoop();
                t && u.cleanupStyles();
                u.disconnectObservers();
                u.params.zoom && u.zoom && u.zoom.destroy();
                u.params.keyboardControl && u.disableKeyboardControl && u.disableKeyboardControl();
                u.params.mousewheelControl && u.disableMousewheelControl && u.disableMousewheelControl();
                u.params.a11y && u.a11y && u.a11y.destroy();
                u.params.history && !u.params.replaceState && window.removeEventListener("popstate", u.history.setHistoryPopState);
                u.params.hashnav && u.hashnav && u.hashnav.destroy();
                u.emit("onDestroy");
                n !== !1 && (u = null)
            }
            ,
            u.init(),
            u
        }
    }, u, r, i;
    for (t.prototype = {
        isSafari: function() {
            var n = window.navigator.userAgent.toLowerCase();
            return n.indexOf("safari") >= 0 && n.indexOf("chrome") < 0 && n.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
        isArray: function(n) {
            return "[object Array]" === Object.prototype.toString.apply(n)
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
            lteIE9: function() {
                var n = document.createElement("div");
                return n.innerHTML = "<!--[if lte IE 9]><i><\/i><![endif]-->",
                1 === n.getElementsByTagName("i").length
            }()
        },
        device: function() {
            var n = window.navigator.userAgent
              , i = n.match(/(Android);?[\s\/]+([\d.]+)?/)
              , t = n.match(/(iPad).*OS\s([\d_]+)/)
              , r = n.match(/(iPod)(.*OS\s([\d_]+))?/)
              , u = !t && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            return {
                ios: t || u || r,
                android: i
            }
        }(),
        support: {
            touch: window.Modernizr && Modernizr.touch === !0 || function() {
                return !!("ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch)
            }(),
            transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
                var n = document.createElement("div").style;
                return "webkitPerspective"in n || "MozPerspective"in n || "OPerspective"in n || "MsPerspective"in n || "perspective"in n
            }(),
            flexbox: function() {
                for (var i = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), n = 0; n < t.length; n++)
                    if (t[n]in i)
                        return !0
            }(),
            observer: function() {
                return "MutationObserver"in window || "WebkitMutationObserver"in window
            }(),
            passiveListener: function() {
                var n = !1, t;
                try {
                    t = Object.defineProperty({}, "passive", {
                        get: function() {
                            n = !0
                        }
                    });
                    window.addEventListener("testPassiveListener", null, t)
                } catch (n) {}
                return n
            }(),
            gestures: function() {
                return "ongesturestart"in window
            }()
        },
        plugins: {}
    },
    u = ["jQuery", "Zepto", "Dom7"],
    r = 0; r < u.length; r++)
        window[u[r]] && function(n) {
            n.fn.swiper = function(i) {
                var r;
                return n(this).each(function() {
                    var n = new t(this,i);
                    r || (r = n)
                }),
                r
            }
        }(window[u[r]]);
    i = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7;
    i && ("transitionEnd"in i.fn || (i.fn.transitionEnd = function(n) {
        function r(f) {
            if (f.target === this)
                for (n.call(this, f),
                t = 0; t < i.length; t++)
                    u.off(i[t], r)
        }
        var t, i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], u = this;
        if (n)
            for (t = 0; t < i.length; t++)
                u.on(i[t], r);
        return this
    }
    ),
    "transform"in i.fn || (i.fn.transform = function(n) {
        for (var t, i = 0; i < this.length; i++)
            t = this[i].style,
            t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = n;
        return this
    }
    ),
    "transition"in i.fn || (i.fn.transition = function(n) {
        var i, t;
        for ("string" != typeof n && (n += "ms"),
        i = 0; i < this.length; i++)
            t = this[i].style,
            t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = n;
        return this
    }
    ),
    "outerWidth"in i.fn || (i.fn.outerWidth = function(n) {
        return this.length > 0 ? n ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
    }
    ));
    window.Swiper = t
}();
"undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
    "use strict";
    return window.Swiper
}),
function(n) {
    n.fn.extend({
        myscroll: function(t) {
            var r = this
              , u = n.extend({
                prev: "",
                next: "",
                scrollbox: "",
                number: "1"
            }, t)
              , i = r.find("ul")
              , f = r.find("li")
              , h = r.find("li").outerWidth(!0)
              , e = u.next
              , o = u.prev
              , s = u.number;
            f.length > s && (n(e).click(function() {
                if (!i.is(":animated")) {
                    var n = r.find("li").outerWidth(!0)
                      , t = r.find("li");
                    i.animate({
                        left: -n
                    }, 600, function() {
                        i.css({
                            left: 0
                        });
                        t.eq(0).appendTo(i)
                    })
                }
            }),
            n(o).click(function() {
                if (!i.is(":animated")) {
                    var n = r.find("li").outerWidth(!0)
                      , t = r.find("li");
                    i.css({
                        left: -n
                    });
                    i.animate({
                        left: 0
                    }, 600);
                    t.last().prependTo(i)
                }
            }))
        }
    });
    n.fn.extend({
        rol: function(t) {
            var s = n(this)
              , r = n.extend({
                next: "",
                prev: "",
                fnboxrollcontent: "",
                fnboxrollcontent_child: "",
                num: 8
            }, t)
              , f = n(r.fnboxrollcontent)
              , u = n(r.fnboxrollcontent_child)
              , h = n(r.fnboxrollcontent_child).outerWidth(!0)
              , e = n(r.next)
              , o = n(r.prev)
              , i = 0;
            e.click(function() {
                var e, t, n;
                if (f.is(":animated"))
                    return !1;
                if (i++,
                i > u.length - r.num)
                    return i--,
                    !1;
                for (e = u.slice(3, 3 + i).length,
                t = 0,
                n = 3; n < 3 + e; n++)
                    t += u.eq(n).outerWidth(!0);
                f.animate({
                    left: -t + "px"
                })
            });
            o.click(function() {
                var r, t, n;
                if (i--,
                i < 0) {
                    i = 0;
                    return
                }
                if (f.is(":animated"))
                    return !1;
                for (r = u.slice(3, 3 + i).length,
                t = 0,
                n = 3; n < 3 + r; n++)
                    t += u.eq(n).outerWidth(!0);
                f.animate({
                    left: -t + "px"
                })
            })
        }
    });
    n.fn.extend({
        OptionSlider: function(t) {
            for (var e = this, i = n.extend({
                thisbox: "",
                thisli: "",
                thisdotbox: ""
            }, t), o = e.width(), s = n(i.thisbox), h = n(i.thisli), r = n(i.thisdotbox), c = n(h).length, f = "", u = 0; u < c; u++)
                f += "<a href='javascript:;'>" + u + "<\/a>";
            r.append(f);
            r.find("a").eq(0).addClass("cur");
            r.find("a").live("click", function() {
                var t = n(this).index();
                n(this).addClass("cur").siblings().removeClass("cur");
                s.stop(!0).animate({
                    left: -t * o
                }, 500)
            })
        }
    })
}(jQuery),
function(n) {
    n.fn.xuan = function(t) {
        var i = {
            current: "cur",
            xianshi: "",
            yingc: ""
        }
          , r = n.extend(i, t)
          , u = this;
        u.click(function() {
            n(this).toggleClass(i.current);
            n(this).parent().siblings().find(r.xianshi).removeClass(i.current);
            n(this).siblings(r.yingc).slideToggle();
            n(this).parent().siblings().find(r.yingc).slideUp()
        });
        u.eq(0).trigger("click")
    }
}(jQuery),
function(n) {
    var t = {
        init: function(n, i) {
            return function() {
                t.addhtml(n, i);
                t.bindEvent(n, i)
            }()
        },
        addhtml: function(n, t) {
            return function() {
                var i, r;
                for (n.empty(),
                t.current > 1 ? n.append('<a href="javascript:;" class="prebtn">上一页<\/a>') : (n.remove(".prevPage"),
                n.append('<span class="disabled">上一页<\/span>')),
                t.current > 4 && t.pageNum > 4 && (n.append('<a href="javascript:;" class="zxfPagenum">1<\/a>'),
                n.append('<a href="javascript:;" class="zxfPagenum">2<\/a>'),
                n.append("<span>...<\/span>")),
                t.current > 4 && t.current <= t.pageNum - 5 ? (i = t.current - 2,
                r = t.current + 2) : t.current > 4 && t.current > t.pageNum - 5 ? (i = t.pageNum - 4,
                r = t.pageNum) : (i = 1,
                r = 9); i <= r; i++)
                    i <= t.pageNum && i >= 1 && (i == t.current ? n.append('<span class="current">' + i + "<\/span>") : i == t.current + 1 ? n.append('<a href="javascript:;" class="zxfPagenum nextpage">' + i + "<\/a>") : n.append('<a href="javascript:;" class="zxfPagenum">' + i + "<\/a>"));
                r < t.pageNum && n.append("<span>...<\/span>");
                t.current >= t.pageNum ? (n.remove(".nextbtn"),
                n.append('<span class="disabled">下一页<\/span>')) : n.append('<a href="javascript:;" class="nextbtn">下一页<\/a>')
            }()
        },
        bindEvent: function(i, r) {
            return function() {
                i.on("click", "a.prebtn", function() {
                    var f = parseInt(i.children("span.current").text())
                      , u = n.extend(r, {
                        current: f - 1
                    });
                    t.addhtml(i, u);
                    typeof r.backfun == "function" && r.backfun(u)
                });
                i.on("click", "a.zxfPagenum", function() {
                    var f = parseInt(n(this).text())
                      , u = n.extend(r, {
                        current: f
                    });
                    t.addhtml(i, u);
                    typeof r.backfun == "function" && r.backfun(u)
                });
                i.on("click", "a.nextbtn", function() {
                    var f = parseInt(i.children("span.current").text())
                      , u = n.extend(r, {
                        current: f + 1
                    });
                    t.addhtml(i, u);
                    typeof r.backfun == "function" && r.backfun(u)
                });
                i.on("click", "span.zxfokbtn", function() {
                    var u = parseInt(n("input.zxfinput").val())
                      , f = n.extend(r, {
                        current: u
                    });
                    t.addhtml(i, {
                        current: u,
                        pageNum: r.pageNum
                    });
                    typeof r.backfun == "function" && r.backfun(f)
                })
            }()
        }
    };
    n.fn.createPage = function(i) {
        var r = n.extend({
            pageNum: 15,
            current: 1,
            backfun: function() {}
        }, i);
        t.init(this, r)
    }
}(jQuery);
$(function() {
    var t, i, n;
    $(".swiper-container").length > 0 && (t = new Swiper(".ucr-banner .swiper-container",{
        autoplay: 5e3,
        autoplayDisableOnInteraction: !1,
        pagination: ".swiper-pagination",
        paginationClickable: !0,
        paginationBulletRender: function(n, t, i) {
            return '<div class="' + i + '"><p><\/p><\/div>'
        },
        onSlideChangeStart: function(n) {
            $(".ucr-banner .swiper-pagination div p").eq(n.activeIndex).removeClass("distran");
            $(".ucr-banner .swiper-pagination div p").eq(n.activeIndex).addClass("on");
            $(".ucr-banner .swiper-pagination div p").eq(n.previousIndex).addClass("distran");
            $(".ucr-banner .swiper-pagination div p").eq(n.previousIndex).removeClass("on");
            previousIndex = n.realIndex
        },
        onAutoplayStart: function(n) {
            setTimeout(function() {
                $(".ucr-banner .swiper-pagination div p").eq(n.activeIndex).addClass("on")
            }, 1)
        }
    }));
    $(".menu_bt").length > 0 && $(".menu_bt").click(function() {
        $(this).toggleClass("open");
        $(".find_nav").toggleClass("black");
        $(".logo").toggleClass("gao")
    });
    i = new Swiper(".home-dynamic",{
        speed: 500,
        nextButton: ".company2",
        prevButton: ".company1",
        autoplayDisableOnInteraction: !1,
        centeredSlides: !0,
        slidesPerView: "auto"
    });
    $(window).width() > 768 ? ($(window).scrollTop() > 100 ? $(".headers").addClass("add") : $(".headers").removeClass("add"),
    $(window).scroll(function() {
        $(window).scrollTop() > 100 ? ($(".headers").addClass("out"),
        $(".headers").addClass("add")) : ($(".headers").removeClass("out"),
        $(".headers").removeClass("add"))
    })) : ($(window).scrollTop() > 100 ? $(".headers").addClass("add") : $(".headers").addClass("add"),
    $(window).scroll(function() {
        $(window).scrollTop() > 100 ? $(".headers").addClass("add") : $(".headers").addClass("add")
    }));
    $(window).on("resize", function() {
        $(window).width() > 768 ? ($(window).scrollTop() > 100 ? $(".headers").addClass("add") : $(".headers").removeClass("add"),
        $(window).scroll(function() {
            $(window).scrollTop() > 100 ? $(".headers").addClass("add") : $(".headers").removeClass("add")
        })) : ($(window).scrollTop() > 100 ? $(".headers").addClass("add") : $(".headers").addClass("add"),
        $(window).scroll(function() {
            $(window).scrollTop() > 100 ? $(".headers").addClass("add") : $(".headers").addClass("add")
        }))
    });
    if ($(window).width() > 768 ? ($(window).scrollTop() > 0 ? $(".headers").addClass("add") : $(".headers").removeClass("add"),
    $(window).scroll(function() {
        $(window).scrollTop() > 300 ? ($(".headers").removeClass("out"),
        $(".headers").addClass("add")) : $(".headers").removeClass("add")
    })) : ($(window).scrollTop() > 0 ? $(".headers").addClass("add") : $(".headers").addClass("add"),
    $(window).scroll(function() {
        $(window).scrollTop() > 0 ? $(".headers").addClass("add") : $(".headers").addClass("add")
    })),
    $(window).width() <= 768 && ($(".cooperative .slide:gt(9)").hide(),
    $(".btn-more").click(function() {
        $(".slide").slideToggle()
    })),
    $(window).width() < 768) {
        $(".drop").on("click", function() {
            $(this).find("ul").slideToggle()
        });
        $(".drop").click(function() {
            $(this).find(".down_drop").hasClass("rotate") ? ($(this).find(".down_drop").removeClass("rotate"),
            $(this).find(".down_drop").addClass("rotate1")) : ($(this).find(".down_drop").removeClass("rotate1"),
            $(this).find(".down_drop").addClass("rotate"))
        })
    }
    if ($(window).width() < 768) {
        $(".serNav-drop").on("click", function() {
            $(this).find(".ser-drop ").slideToggle()
        });
        $(".serNav-drop").click(function() {
            $(this).find(".user-arrow").hasClass("rotate") ? ($(this).find(".user-arrow").removeClass("rotate"),
            $(this).find(".user-arrow").addClass("rotate1")) : ($(this).find(".user-arrow").removeClass("rotate1"),
            $(this).find(".user-arrow").addClass("rotate"))
        })
    }
    $(window).width() > 1024 && $(".serNav-drop").hover(function() {
        $(this).find(".ser-drop").stop().slideToggle(300)
    });
    $(".process .process-bg").mousemove(function() {
        $(this).addClass("cess-active")
    });
    $(".process .process-bg").mouseout(function() {
        $(this).removeClass("cess-active")
    });
    $(".recruit_left .ul-o li").hover(function() {
        var n = $(this).index();
        $(".recruit_left .ul-t li").eq(n).stop().show().siblings().hide()
    });
    $(".recruit_left .ul-o li").click(function() {
        $(".recruit_left .ul-o li").removeClass("li-active");
        $(this).addClass("li-active")
    });
    $(".dynamic_btn a").click(function() {
        $(".dynamic_btn a").removeClass("btn_active");
        $(this).addClass("btn_active")
    });
    $(".news-nav li").click(function() {
        $(".news-nav li").removeClass("active");
        $(this).addClass("active")
    });
    $("#top").click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 1e3)
    });
    $(".choose_con").myscroll({
        prev: ".button-next ",
        next: ".button-prev",
        scrollbox: ".choose_list"
    });
    n = parseUrl();
    n == "company" && n != null && (document.getElementById("company").focus(),
    $.scrollTo($("#contacts").offset().top - 120, 800, {
        easing: "easeInOutExpo",
        axis: "y"
    }));
    $(".check").iCheck({
        checkboxClass: "icheckbox_flat-aero",
        radioClass: "iradio_flat-aero",
        increaseArea: "20%"
    })
});
$(document).ready(function() {
    $("#weixin").tooltipster({
        background: "#000",
        position: "left",
        interactive: !1,
        contentAsHTML: !0
    });
    $("#tel").tooltipster({
        background: "#000",
        position: "left",
        interactive: !0,
        contentAsHTML: !0
    });
    b();
    $("#top").click(function() {
        $(document).scrollTop(0)
    })
});
$(window).scroll(function() {
    b()
});
$(document).ready(function() {
    $("http://www.fasene.com//js/.contact_left .txt").each(function() {
        var n = jQuery(this).val();
        n != "" ? jQuery(this).siblings("span").hide() : jQuery(this).siblings("span").show();
        jQuery(this).focus(function() {
            jQuery(this).siblings("span").hide()
        }).blur(function() {
            var n = jQuery(this).val();
            n != "" ? jQuery(this).siblings("span").hide() : jQuery(this).siblings("span").show()
        })
    })
});
$(document).ready(function() {
    typing()
});
index = 0;
result = "";
getTop();
$(function() {
    var r, t, n, i;
    setTimeout(function() {
        $("#Tpiaochuan").fadeIn(4e3)
    }, 5e3);
    loadanimatebox();
    $(window).scroll(function() {
        $(document).scrollTop() > 50 ? $(".fix_totop").hasClass("on") || $(".fix_totop,.bom_totop").addClass("on") : $(".fix_totop").hasClass("on") && $(".fix_totop,.bom_totop").removeClass("on");
        loadanimatebox()
    });
      $('.carousel').carousel({
          interval: 2000
        });
    $(".service-nav").length > 0 && $(".service-nav .service-box li a.active").length > 0 && (r = $(".service-nav .service-box li a.active").offset().left - $(".service-nav .service-box li a.active").width() * 1.5,
    $(".service-nav .service-box").scrollLeft(r));
    setprojs();
    $(".serviceinfotype").length > 0 && (t = 0,
    $(".serviceinfotype  li a").click(function() {
        var n = $(".serviceinfotype li a").index($(this));
        n != t && (t = n,
        $("http://www.fasene.com//js/.serviceinfotype li a.on").removeClass("on"),
        $(this).addClass("on"),
        $("http://www.fasene.com//js/.serbox.on").hide(),
        $(".serbox:eq(" + n + ")").css({
            "margin-left": "-900px"
        }),
        $(".serbox:eq(" + n + ")").show(),
        $(".serbox:eq(" + n + ")").addClass("on"),
        $(".serbox:eq(" + n + ")").animate({
            "margin-left": "0px"
        }, 300))
    }));
    $("ul.newstype").length > 0 && $("http://www.fasene.com//js/ul.newstype li a.item").hover(function() {
        var n = $(this);
        $("ul.newstype li.on dl").stop().slideUp(50, function() {
            $("ul.newstype li").removeClass("on");
            n.next("dl").slideDown(200, function() {
                $(this).parent().addClass("on")
            })
        })
    }, function() {
        $("http://www.fasene.com//js/ul.newstype  li.show").hasClass("on") || $("ul.newstype  li.on dl").stop().slideUp(50, function() {
            $("ul.newstype  li").removeClass("on");
            $("ul.newstype li.show dl").slideDown(200, function() {
                $(this).parent().addClass("on")
            })
        })
    });
    n = 3;
    $("http://www.fasene.com//js/.homeadvert.on").hide();
    $(".homeadvert:eq(" + n + ")").css({
        "margin-left": "-900px"
    });
    $(".homeadvert:eq(" + n + ")").show();
    $(".homeadvert:eq(" + n + ")").addClass("on");
    $(".homeadvert:eq(" + n + ")").animate({
        "margin-left": "0px"
    }, 300);
    $("ul.casetype").length > 0 && $("http://www.fasene.com//js/ul.casetype li a.item").hover(function() {
        var n = $(this);
        $("ul.casetype li.on dl").stop().slideUp(50, function() {
            $("ul.casetype li").removeClass("on");
            n.next("dl").slideDown(200, function() {
                $(this).parent().addClass("on")
            })
        })
    }, function() {
        $("http://www.fasene.com//js/ul.casetype  li.show").hasClass("on") || $("ul.casetype  li.on dl").stop().slideUp(50, function() {
            $("ul.casetype  li").removeClass("on");
            $("ul.casetype li.show dl").slideDown(200, function() {
                $(this).parent().addClass("on")
            })
        })
    });
    $("#process").length > 0 && (i = "",
    $("#process li  ").hover(function() {
        var n = $("#process li").index($(this))
          , t = $("#process li:eq(" + n + ") .process-bg img").attr("data-serimg");
        $("#process li:eq(" + n + ") .process-bg img").attr("src", t)
    }, function() {
        var n = $("#process li").index($(this)), t;
        i = $("#process li:eq(" + n + ") .process-bg img").attr("data-serimgs");
        t = $("#process li:eq(" + n + ") .process-bg img").attr("data-serimgs");
        $("#process li:eq(" + n + ") .process-bg img").attr("src", i)
    }));
    $("ul.servicebox").length > 0 && $("ul.servicebox li a ").hover(function() {
        var n = $("ul.servicebox li a").index($(this))
          , t = $("ul.servicebox  li:eq(" + n + ") a .ser_img img").attr("data-img");
        $("ul.servicebox  li:eq(" + n + ") a .ser_img img").attr("src", t)
    }, function() {
        var n = $("ul.servicebox  li a").index($(this))
          , t = $("ul.servicebox  li:eq(" + n + ") a .ser_img img").attr("data-imgs");
        $("ul.servicebox  li:eq(" + n + ") a .ser_img img").attr("src", t)
    });
    $("ul.itemContainer").length > 0 && $("ul.itemContainer li ").hover(function() {
        var n = $("ul.itemContainer li ").index($(this))
          , t = $("ul.itemContainer li:eq(" + n + ") a.img  img").attr("data-serimg");
        $("ul.itemContainer  li:eq(" + n + ") a.img img").attr("src", t)
    }, function() {
        var n = $("ul.itemContainer  li ").index($(this))
          , t = $("ul.itemContainer  li:eq(" + n + ") a.img img").attr("data-serimgs");
        $("ul.itemContainer  li:eq(" + n + ") a.img img").attr("src", t)
    });
    $(".simage").length > 0 && $(".simage a").hover(function() {
        $(".simage a").removeClass("selected");
        $(this).addClass("selected")
    }, function() {
        $(this).hasClass("on") || $(this).removeClass("selected");
        $("http://www.fasene.com//js/.simage a.on").addClass("selected")
    });
    $("#my_advantage").length > 0 && $("#my_advantage .boxteam .box_list .list_info").hover(function() {
        var n = $(this).find("div.round");
        $(n).fadeIn(800);
        showaperture(n)
    }, function() {
        var n = $(this).find("div.round");
        $(n).fadeOut(800)
    });
    $(".main_content").length > 0 && $(".main_content ul li a").hover(function() {
        nowobj = $(this);
        tiaoing(nowobj);
        myinterval = setInterval(function() {
            tiaoing(nowobj)
        }, 800)
    }, function() {
        clearInterval(myinterval)
    });
    $(".onlineMenu").length > 0 && $(".onlineMenu li a").hover(function() {
        nowobj = $(this);
        tiaoingqq(nowobj);
        myinterval = setInterval(function() {
            tiaoingqq(nowobj)
        }, 800)
    }, function() {
        clearInterval(myinterval)
    })
});
pagenow = 1;
loadding = '<div class="loading"><table><tr><td align="center" valign="middle"><p><i class="fa fa-spinner fa-spin"><\/i><\/p><\/td><\/tr><\/table><\/div>'
