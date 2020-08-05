/*!
 * @author : Shandeep (http://shandeepc.github.io)
 */
(function(e){"use strict";e.fn.textTyper=function(t){var n={typingClass:"typing",beforeAnimation:function(){},afterAnimation:function(){},speed:10,nextLineDelay:400,startsFrom:0,repeatAnimation:false,repeatDelay:4e3,repeatTimes:1,cursorHtml:'<span class="cursor">|</span>'},r=e.extend({},n,t);this.each(function(){var t=e(this),n=1,i="typingCursor";var s=t,o=s.length,u=[];while(o--){u[o]=e.trim(e(s[o]).html());e(s[o]).html("")}t.init=function(e){var n=r.beforeAnimation;if(n)n();t.animate(0)};t.animate=function(o){var a=s[o],f=r.typingClass,l=r.startsFrom;e(a).addClass(f);var c=setInterval(function(){var f=r.cursorHtml;f=e("<div>").append(e(f).addClass(i)).html();e(a).html(u[o].substr(0,l)+f);l++;if(u[o].length<l){clearInterval(c);o++;if(s[o]){setTimeout(function(){e(a).html(u[o-1]);t.animate(o)},r.nextLineDelay)}else{e(a).find("."+i).remove();if(r.repeatAnimation&&(r.repeatTimes==0||n<r.repeatTimes)){setTimeout(function(){t.animate(0);n++},r.repeatDelay)}else{var h=r.afterAnimation;if(h)h()}}}},r.speed)};t.init()});return this}})(jQuery)
$(document).ready(function() {
  $('.command').hide();
  $('input[type="text"]').focus();
  $('#home').addClass('open');
  $('#home').textTyper({
        speed:20,
        afterAnimation:function(){
          $('.command').fadeIn();
          $('input[type="text"]').focus();
          $('input[type="text"]').val('');
        }
      });
	var sectionArray = [];
	var res = "";
	var ran = false;
	var members = ["<p>Hacking <b>NSA</b> Database.... ","<p>Hacking <b>CIA</b> Database.... ","<p>Hacking <b>NASA</b> Database.... ","<p>Asking <b>Elon Musk</b> .... ","<p>Asking <b>Keanu Reeves</b> .... ","<p>Bringing Back <b>Steve Jobs</b> from Death ....</p><p>Asking <b>Steve Jobs</b> .... ","<p>Bringing Back <b>Steve Jobs</b> from Death ....</p><p><b>Steve Jobs</b> is busy fixing Satan's <b>iphone 9s Max Pro Ultra Cook Edition</b> ....</p>"];
	var numbers = {};
	numbers['73'] = "The best number is 73. Why? 73 is the 21st prime number. Its mirror, 37, is the 12th and its mirror, 21, is the product of multiplying 7 and 3.";
	var intruders = ["Trump", "kim jong un", "Putin", "Cardi B", "Logan paul", "Yo mama"];
	$('section').each( function(i,e) {
		sectionArray.push($(e).attr('id'));
	});	
	function OorE(val) {
		if(val%2==0) {
			return "Even";
		} else {
			return "Odd";
		}
	}
	$('input[type="text"]').keyup(function(e){
		if(e.which == 13){
			$('.command').hide();
			var destination = $('input[type="text"]').val();
			destination = destination.toLowerCase();
			if(destination === "download" && !ran) {
				$('#result').empty();
				$('#result').append('<p>Nothing to Download, <b>Execute Odd or Even and Try..</b></p>');
				$('#result').append('<p><span>Try typing a number + <kbd>Enter</kbd> -- to find Odd or Even.</span></p>');
				$('#result').addClass('open');
				$('#result').siblings().removeClass('open');
			} else if($.inArray(destination, sectionArray) != -1) {
				$('section[id="' + destination + '"]').addClass('open').siblings().removeClass('open');
			}
			if($.inArray(destination, sectionArray) == -1){
				if($.isNumeric(destination)) {
					$('#result').empty();
					ran = true;
					res = OorE(destination);
					for(var count = 0; count < 6 ; count++) {
						if(count != 5) {
							$('#result').append(members[count] + OorE(Math.floor((Math.random() * 100) + 1)) + '</p>');
						} else {
							var idk = Math.floor(Math.random() * (6 - 5 + 1)) + 5;
							if(idk == 5) {
								$('#result').append(members[idk] + OorE(Math.floor((Math.random() * 100) + 1)) + '</p>');
							} else {
								$('#result').append(members[idk] + '</p>');
							}
						}
					}
					$('#result').append('<p>Result Found<b>!</b></p>');
					$('#result').append('<p>Protecting result from <b>violent</b> threats ....</p>');
					$('#result').append('<p style="font-size: 20px">The Given Number <b>' + destination + '</b> is <b>'+ res +'</b></p>');
					$('#result').addClass('open');
					$('#result').siblings().removeClass('open');
					if(typeof(numbers[destination])  != "undefined") {
						$('#result').append('<p>'+ numbers[destination] + '</p>');
					} else {
						$('#result').append('<p><b>!</b> Warning <b>!</b> <b>'+ intruders[(Math.floor((Math.random() * intruders.length) + 1))] +'</b> found your results ....</p>');
						$('#result').append('<p><b>RUN!!</b>, run for your life .....</p>');
					}
				} else {
					$('#error').addClass('open');
					$('#error').siblings().removeClass('open');
				}
			}
			$('.open').textTyper({
				speed:20,
				afterAnimation:function(){
					$('.command').fadeIn();
					$('input[type="text"]').focus();
					$('input[type="text"]').val('');
				}
			});
		}
	});
});