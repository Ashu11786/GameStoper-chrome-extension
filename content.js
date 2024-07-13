chrome.runtime.onMessage.addListener((request,sender,sendResponse)=>{
    console.log("Message received in content script:", message);
    if(request.action === 'stopGame'){
        alert('Now the Time is Up Buddy ! Stop playing Game !!');
        location.reload();
        sendResponse({ status: 'Game stopped' });
    }
});