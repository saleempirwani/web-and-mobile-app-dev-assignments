var mins = 0, secs = 0, msec = 0
var timer = null
var isStart = true


function btnStart() {

    if (isStart) {
        document.getElementById("start").innerText = 'Pause'
        isStart = false

        timer = setInterval(function () {

            if (mins === 59 && secs === 59 && msec === 10) {
                msec = 0
                secs = 0
                mins = 0
            }

            if (secs === 59 && msec === 10) {
                msec = 0
                secs = 0
                mins += 1
            }

            if (msec === 10) {
                msec = 0
                secs += 1
            }

            var minsString = mins < 10 ? "0" + mins : mins.toString()
            var secsString = secs < 10 ? "0" + secs : secs.toString()
            var msecString = msec < 10 ? "0" + msec : msec.toString()

            document.getElementById("mins").innerHTML = minsString
            document.getElementById("secs").innerHTML = secsString
            document.getElementById("msec").innerHTML = msecString

            msec += 1

        }, 100)
    }

    // On Timer Stop 
    else {
        clearInterval(timer)
        isStart = true
        document.getElementById("start").innerText = 'Resume'
    }
}


function btnReset() {

    clearInterval(timer)

    mins = 0; secs = 0; msec = 0

    isStart = true

    document.getElementById("start").innerText = 'Start'
    document.getElementById("mins").innerHTML = "00"
    document.getElementById("secs").innerHTML = "00"
    document.getElementById("msec").innerHTML = "00"
}