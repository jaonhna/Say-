
var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();

}

recognition.onresult = function run (event) {

    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);
    if (Content == "Cheese") {
        console.log("taking selfie")
        speak();
    }

    document.getElementById("textbox").innerHTML = Content;
    

    
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in " + document.getElementById("timedelay").value + "miliseconds." ;
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
   
    Webcam.attach(camera);

    setTimeout(function()  {
        take_snapshot();
        save();
    }, document.getElementById("timedelay").value );
   


Webcam.set({
    width: 360,
    height: 250,
    image_format : 'png',
    png_quality : 90
    
});

camera = document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id= "selfie" src = "'+ data_uri + '">';
    });
}
function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie").src ;
    link.href = image;
    link.click();
    } }
