$(document).ready(function(){$(window).scroll(function(){600<=$(window).scrollTop()?($("nav").addClass("sticky"),$("#toggle").addClass("sticky-toggle")):($("nav").removeClass("sticky"),$("#toggle").removeClass("sticky-toggle"))}),$(".js--mobile-navlinks").click(function(){$("#resize").removeClass("active"),$("#toggle").removeClass("on")}),$(".js--scroll-to-plans").click(function(){$("html, body").animate({scrollTop:$(".js--plans").offset().top},1e3)}),$(".js--scroll-to-start").click(function(){$("html, body").animate({scrollTop:$(".js--section-features").offset().top},1e3)}),$(".js--logo").click(function(){$("html, body").animate({scrollTop:$("header").offset().top},1e3)}),$("#toggle").click(function(){$(this).toggleClass("on"),$("#resize").toggleClass("active")})});