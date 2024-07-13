

 chrome.runtime.onInstalled.addListener(()=>{
    console.log("Extension installed");
    chrome.storage.sync.set({TimeLimit:30},()=>{
        if(chrome.runtime.lastError){
            console.error(chrome.runtime.lastError);
        }
        else{
            console.log("Default time limit is set to 30 minutes.");
        }
    }); //time is in min
});

chrome.alarms.onAlarm.addListener((alarm)=>{
    console.log("Alarm triggered:", alarm);
    if (alarm.name === 'gameTimer') {
        chrome.tabs.query({active:true,currentWindow:true},(tabs)=>{
            chrome.tabs.sendMessage(tabs[0].id,{action:'stopGame'});
        });
    }
});

function startTimer(minutes) {
    console.log("Starting timer for", minutes, "minutes");
    chrome.alarms.create('gameTimer',{delayInMinutes:minutes});
};

chrome.runtime.onMessage.addListener((request, sender ,sendResponse)=>{
    console.log("Message received:", request);
    if(request.action ==='startTimer'){
        startTimer(request.TimeLimit);
        sendResponse({status:'Timer Started ! '});
    }
});
