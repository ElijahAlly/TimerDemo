
var timer = document.getElementById('timer');
var toggleBtn = document.getElementById('toggle');
var reset = document.getElementById('reset');
var split = document.getElementById('split');
var splitResetBtn = document.getElementById('splitLogReset');
var splitCount = 0;
var watch = new Stopwatch(timer);

toggleBtn.addEventListener('click', function() {
    if (watch.isOn) {
        watch.stop();
        toggleBtn.innerHTML = 'Resume';
    } else {
        watch.start();
        toggleBtn.innerHTML = 'Stop';
    }
});

reset.addEventListener('click', function() {
    watch.reset();
    watch.stop();
    toggleBtn.innerHTML = 'Start';
    timer.innerHTML = '00 : 00 : 00 : 000'
});

splitResetBtn.addEventListener('click', function() {
    watch.splitLogReset();
    splitCount = 0;
});

split.addEventListener('click', function() {
    splitCount++;
    watch.split(splitCount);
});
