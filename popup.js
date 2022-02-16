// Initialize button with users's prefered color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

// The body of this function will be execuetd as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}
function factorialize(num){
  var result = num;
  if(num == 0|| num ==1){
    return 1; 
  }
  while (num > 1){
    num--; 
    result *= num; 
  }
  return (result); 
}

function oddsOfWinning(n,k){
  var nFactor = factorialize(n);
  var kFactor = factorialize(k); 
  var nMinusK = factorialize(n-k); 
  if (n >=k){
    var odds = nFactor/(kFactor * nMinusK); 
    odds = Math.floor(odds);
    odds = odds.toLocaleString(); 
  }
  console.log("Your odds of winning are 1 in " + odds); 
}