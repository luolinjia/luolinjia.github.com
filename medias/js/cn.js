/**
 * Created by luolinj on 10/14/2014.
 */
var currentScroll = 0,
    allWords = [{
        'id': 1,
        'title': '',
        'content': '所遇见的美好，都在转身的一瞬间，殒灭！',
        'author': ''
    }, {
        'id': 2,
        'title': '',
        'content': '忧国忘家，捐躯济难，忠臣之志也。',
        'author': '曹植'
    }, {
        'id': 3,
        'title': '',
        'content': '君子之交淡如水，小人之交甘若醴。',
        'author': '《庄子》'
    }, {
        'id': 4,
        'title': '',
        'content': '读书本意在元元。',
        'author': '陆游'
    }, {
        'id': 5,
        'title': '',
        'content': '言之无文，行而不远。',
        'author': '《左传》'
    }, {
        'id': 6,
        'title': '',
        'content': '博观而约取，厚积而薄发。',
        'author': '苏轼'
    }, {
        'id': 7,
        'title': '',
        'content': '黑发不知勤学早，白首方悔读书迟。',
        'author': '《劝学》'
    }];

$(function(){
    $(window).scroll(function(){
        myScroll();
    });

    showBeautifulWords();
});

function myScroll() {
    var nextScroll = $(this).scrollTop(), $header = $('#header');
//            console.log('scrollPosition' + $(document).scrollTop() + 'currentScroll: => ' + currentScroll + '  nextScroll: => ' + nextScroll);
    if (nextScroll > currentScroll){
        $header.removeClass('in bgColor').addClass('out');
        if (nextScroll >= $(document).height()-$(window).height()){
            $header.removeClass('out').addClass('in bgColor');
        }
        if ($(document).scrollTop() <= 0) {
            $header.removeClass('out').addClass('in');
            $header.removeClass('bgColor');
        }
    } else {
        $header.removeClass('out').addClass('in bgColor');
        if ($(window).scrollTop() >= 0 && $(window).scrollTop() <= 100) {
            $header.removeClass('bgColor');
        }
    }

    if ($(window).width() >= 1000) {
        $header.removeClass('bgColor');
    }

    //Updates current scroll position
    currentScroll = nextScroll;
}

function showBeautifulWords() {

    var self = $('#logo');
    self.addClass('logo-in')
        .mouseover(function () {
        var ranWord = Math.floor(Math.random() * allWords.length), wordDom = '<div class="logo-word"><div class="logo-title">' + allWords[ranWord]['title'] + '</div><div class="logo-content"><span></span>' + allWords[ranWord]['content'] + '</div><div class="logo-author">' + allWords[ranWord]['author'] + '</div></div>';

        self.removeClass('logo-in').addClass('logo-out');
        if ($('.logo-word').length <= 0)
            setTimeout(function(){self.append(wordDom);}, 500);
    }).mouseleave(function () {
        self.removeClass('logo-out').addClass('logo-in');
        var logoWord = $('.logo-word');
        if (logoWord) {
            logoWord.fadeOut(50, function () {
                self.empty();
            })
        }
    });
}
