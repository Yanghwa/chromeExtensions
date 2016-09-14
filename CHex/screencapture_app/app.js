document.getElementById('startRecording').addEventListener('click', recordClick, false);

function recordClick() {
    chrome.desktopCapture.chooseDesktopMedia(['screen','window'], accessToRecord);
}

function accessToRecord(id) {
    navigator.webkitGetUserMedia({
        audio: false,
        video: {
            mandatory: {
                chromeMediaSource: "desktop",
                chromeMediaSourceId: id
            }
        }
    }, startStream, failedStream);
}

function startStream(stream) { //video file 
    console.log("Receiving Data from user")
    var video = document.getElementById("screenMain");
    video.src = URL.createObjectURL(stream); //video file as binary to url           //blob - binary large object
    stream.onended = function() {
        console.log("Video Recording Session Ended");
    };
}

function failedStream() {
    console.log("error happened");
}