var hrs = 0, mins = 0, secs = 0
var timer = null
var isStart = true


function btnStart() {

    if (isStart) {
        document.getElementById("start").innerText = 'Pause'
        isStart = false

        timer = setInterval(function () {

            if (hrs === 23 && mins === 59 && secs === 60) {
                secs = 0
                mins = 0
                hrs = 0
            }

            if (mins === 59 && secs === 60) {
                secs = 0
                mins = 0
                hrs += 1
            }

            if (secs === 60) {
                secs = 0
                mins += 1
            }

            var hrsString = hrs < 10 ? "0" + hrs : hrs.toString()
            var minsString = mins < 10 ? "0" + mins : mins.toString()
            var secsString = secs < 10 ? "0" + secs : secs.toString()

            document.getElementById("hrs").innerHTML = hrsString
            document.getElementById("mins").innerHTML = minsString
            document.getElementById("secs").innerHTML = secsString

            secs += 1

        }, 1000)
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

    hrs = 0; mins = 0; secs = 0

    isStart = true

    document.getElementById("start").innerText = 'Start'
    document.getElementById("hrs").innerHTML = "00"
    document.getElementById("mins").innerHTML = "00"
    document.getElementById("secs").innerHTML = "00"
}