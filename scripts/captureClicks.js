function captureClicks(e) {
    var temp;
    if (!e) {
        var e = window.event;
    }
    if (e.target) {
        temp=e.target;
    } else if (e.srcElement) {
        temp=e.srcElement;
    }
    var tName;
    tName = temp.tagName;
    console.log("Element with tag: " + tName + " is clicked!");
}