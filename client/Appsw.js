if ('serviceWorker' in navigator){
    navigator.serviceWorker.register("/SW1.js")
    .then ((reg) => { console.log("service worker registered yaayyyyyyyy",reg)})
    .catch ((err) => {console.log("nahi hua register bhai",err)})
}