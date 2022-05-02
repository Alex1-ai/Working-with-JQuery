// alert("hello jquery");

// // $("h1").css('color','red');

// // $('h1').css("color",'Green');

// // single properties you are geting the value



// $("button");

// // adding double properties you are setting the value
// // $('h1').css("font-size", 70)

// // adding classes with jquery
// // $('h1').addClass("big-title");
// // $('h1').addClass("visibility");

// // changing the text in a tag
// $('h1').text('JQuery')

// // $('button').text('Click me')

// $('h1').html('<b>Hello JQuery</b>')


// // manupulating attributes
// console.log($("img").attr("src"))
// $("a").attr("href","https://www.yahoo.com")


// // adding event listner

// $("h1").click(function(){
//     $("h1").css("color","purple");
// })


// // javascript to handle all the button
// // for(let i = 0; i<5; i++){
// //     document.querySelectorAll('button')[i].addEventListener("click",function(){
// //         document.querySelector('h1').style.color='indigo';
// //     })
// // }



// //using jquery
// $("button").click(function(){
//     $("h1").css('color',"pink");
// })

// $("input").keypress(function(event){
//     $("h2").text(event.key)
// })


// this takes the event and the action to be performed
// $("h1").on("mouseover", function(){
//     $("h1").css("color","blue");

// })

// // creating a button with jquery
// $("h1").after('<button>Old</button>')



// ADDING ANIMATIONS
$("button").on("click", function(){
    // $("h1").toggle();
    // $("h1").fadeOut();
    // $("h1").fadeToggle();
    // $("h1").slideToggle();
    // adding your custom animation
    $("h1").slideUp().slideDown().fadeOut().fadeIn().animate({margin: "20%"})

})