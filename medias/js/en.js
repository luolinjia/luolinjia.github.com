/**
 * Created by luolinjia on 10/14/2014.
 * Updated by luolinjia on 08/23/2017. -- Close the left top logo effect regarding displaying the relevant well-known sayings.
 */
var currentScroll = 0,
    allWords = [{
        'id': 1,
        'title': '',
        'content': 'Do one thing at a time, and do well.',
        'author': ''
    }, {
        'id': 2,
        'title': '',
        'content': 'Learn and live',
        'author': ''
    }, {
        'id': 3,
        'title': '',
        'content': 'None is of freedom or of life deserving unless he daily conquers it anew.',
        'author': 'Erasmus'
    }, {
        'id': 4,
        'title': '',
        'content': 'There is no such thing as a great talent without great will - power',
        'author': 'Balzac'
    }, {
        'id': 5,
        'title': '',
        'content': 'No pain, no gain',
        'author': ''
    }, {
        'id': 6,
        'title': '',
        'content': 'Cease to struggle and you cease to live.',
        'author': 'Thomas Carlyle'
    }, {
        'id': 7,
        'title': '',
        'content': 'You have to believe in yourself. That\'s the secret of success. ',
        'author': 'Charles Chaplin'
    }],
    _ = {
        bindToggle: function () {
            $('.listing-seperator').click(function(){
                var year = $(this).attr('data-flag');
                $('.list_' + year).toggle(200);
            });
        },
        bindShowBeautifulWords: function() {
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
    };

$(function(){
    $(window).scroll(function(){
        myScroll();
    });

    // update on 2017.8.23
    //_.bindShowBeautifulWords();
    _.bindToggle();
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
