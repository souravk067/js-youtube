// document.getElementById("image").addEventListener(
//   "click",
//   function (e) {
//     console.log("click inside the ul");
//   },
//   false
// );
// document.getElementById("owl").addEventListener(
//   "click",
//   function (e) {
//     console.log("owl clicked");
//   },
//   false
// );

// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

document.getElementById('images').addEventListener('click', function(e){
    // console.log(e.target.parentNode);
    console.log(e.target.tagName);
    if(e.target.tagName === 'IMG'){
        
        let removeIt = e.target.parentNode;
        removeIt.remove()
    }
    // let removeIt = e.target.parentNode;
    // removeIt.remove();
    // removeIt.parentNode.removeChild(removeIt)
})