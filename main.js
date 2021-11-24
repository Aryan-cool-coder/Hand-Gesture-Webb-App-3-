prediction1 = "";
speakOut = ""; 

Webcam.set ({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach("#camera");
function takeSnapshot() {
    Webcam.snap( function (data_uri) {
        document.getElementById("result").innerHTML = "<img id = 'captured_image' src =" + data_uri + ">";

    });
}

console.log("ml5 version: ", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/sbcwAOziE/model.json", modelLoaded);


//end of project 2 

function check() {
    image = document.getElementById("captured_image");
    classifier.classify(image, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
        gesture = results[0].label;

        if ( gesture == "O") {
            document.getElementById("update_hand1").innerHTML = "&#11093;";
            speakOut = " This is zero";
        }

        if ( gesture == "ok") {
            document.getElementById("update_hand1").innerHTML = "&#128076;";
            speakOut = " This is Ok";
        }

        if ( gesture == "nice") {
            document.getElementById("update_hand1").innerHTML = "&#129304;";
            speakOut = " This is Nice";
        }

        if ( gesture == "yes") {
            document.getElementById("update_hand1").innerHTML = "&#128077;";
            speakOut = " This is Yes";
        }

        if ( gesture == "no") {
            document.getElementById("update_hand1").innerHTML = "&#11093;";
            speakOut = " This is No";
        }
        
        prediciton1 = speakOut;
        speak(); 
        


    }
}

function speak() {
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(speakOut);
    synth.speak(utterThis);

}

function modelLoaded() {
    console.log("model is loaded");
}


