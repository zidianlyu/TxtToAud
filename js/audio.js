$('#input-submit').click(function(){
    responsiveVoice.cancel();
    let text = $('#input-text')[0].value;
    let type = $('#input-type').find(":selected")[0].value;
    let pitch = parseFloat($('#input-pitch').find(":selected")[0].value);
    let rate = parseFloat($('#input-rate').find(":selected")[0].value);
    // debugger
    console.log('new pitch is: ', pitch);
    console.log('new rate is: ', rate);
    responsiveVoice.speak(text, type, {pitch: pitch, rate: rate});
});



// responsiveVoice.speak("hello world come on babe", "UK English Female", {pitch: 1.4, rate: 0.8});
