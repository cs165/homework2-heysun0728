// TODO(you): Add your own positive messages if you'd like!
const POSITIVE_MESSAGES = [
  'You are worthy.',
  'You are enough.',
  'Be kind and forgiving to yourself.',
  'You are amazing.',
  'It\'s okay not to be okay.',
  'It\'s enough to just breathe.',
  'You are loved.',
  'I believe in you.',
  'You can do it!',
  'You are not a failure.',
  'You matter.',
  'Your life matters.'
];

chrome.runtime.onConnect.addListener(function(port) {
  port.onMessage.addListener(onMessage);
});

const cursorurl = chrome.runtime.getURL('images/rose-cursor.gif');
const bkurl = chrome.runtime.getURL('images/sparkle.gif');
function mouseover(t){
  t.style.cursor = 'url(' + cursorurl + ') 4 12, auto';
  t.style.backgroundImage= 'url(' + bkurl + ')';
  t.style.opacity=0.8;
}
function mouseout(t){
  t.style.cursor = '';
  t.style.backgroundImage= '';
  t.style.opacity=1;
}

function onMessage(gardeningInProgress) {
  // TODO(you): Implement this function for extra credit! Add helper functions
  // as needed.

  // NOTE: This extension is EXTRA CREDIT and is not required for HW2.

  // If `gardeningInProgress` is true, that means "Start Gardening" was clicked.
  // If `gardeningInProgress` is false, that means "Stop Gardening" was clicked.
  
  tweet = document.querySelectorAll('.tweet')
  if(gardeningInProgress){
    console.log("on")
    tweet.forEach(function(t){
      t.addEventListener("mouseover", ()=>mouseover(t),false);
      t.addEventListener("mouseout", ()=>mouseout(t),false);
      t.addEventListener("click", function(){
        event.stopPropagation();
        r = Math.floor(Math.random()*POSITIVE_MESSAGES.length);
        nodename = ['content','js-tweet-text-container','TweetTextSize TweetTextSize--normal js-tweet-text tweet-text']
        node = this;
        for (i=0; i<3; i++){
          for (const child of node.childNodes) {
            //console.log(child.className)
            if(child.className == nodename[i]){
              node = child;
              continue;
            }
          }
        }
        node.textContent=POSITIVE_MESSAGES[r];
      });
    });
  }
}
