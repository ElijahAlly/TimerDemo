
function Stopwatch(ele) {
    
    var time = 0;
    var interval;
    var offset;

    function update() {
        time += delta();
        var formattedTime = timeFormat(time);
        ele.innerHTML = formattedTime;
    }

    function delta() {
        var now = Date.now();
        var timePassed = now - offset;
        offset = now;
        return timePassed;
    }

    function timeFormat(timeInMilliseconds) {
        var time = new Date(timeInMilliseconds);
        var ms = time.getMilliseconds();
        var sec = time.getSeconds();
        var mins = time.getMinutes();
        var hrsCount = 0;
        var hrs = hrsCount;

        if (mins === 60) {
            hrsCount++;
            var hrs = hrsCount;
        } 

        if (ms < 100) {
            ms = '0' + ms;
        }
        if (sec < 10) {
            sec = '0' + sec;
        }
        if (mins < 10) {
            mins = '0' + mins;
        }
        if (hrs < 10) {
            hrs = '0' + hrs;
        }

        return hrs + ' : ' + mins + ' : ' + sec + ' : ' + ms
    }
 
    this.isOn = false;

    this.start = function() {
        if (!this.isOn) {
            interval = setInterval(update, 10);
            offset = Date.now();
            this.isOn = true;
        }
    };

    this.stop = function() {
        if (this.isOn) {
            clearInterval(interval);
            interval = null;
            this.isOn = false;
        }
    };

    this.reset = function () {
        time = 0;
    };

    this.split = function(splitCount) {
        var logCount = document.getElementById('splitTimeCount'+ splitCount);
        var splitTime = document.getElementById('splitTime'+ splitCount);
        var formattedTime = timeFormat(time);

        logCount.innerHTML = splitCount;
        splitTime.innerHTML= formattedTime;
    }

    this.splitLogReset = function() {
        var logCount = document.getElementById('splitTimeCount1');
        var splitTime = document.getElementById('splitTime1');
    
        logCount.innerHTML = '0';
        splitTime.innerHTML= '00 : 00 : 00 : 000';
    
        for (let i = 2 ; i < 6; i++) {
            var logCount = document.getElementById('splitTimeCount' + i);
            var splitTime = document.getElementById('splitTime' + i);

            logCount.innerHTML = '';
            splitTime.innerHTML= '';
        }
    }
}






