(() => {
    // Selection DOM Elements
    const timedisplay = document.getElementsByTagName('main')[0];
    // Function to run clock
    const updateTime = () => {
        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let AMPMoperator = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || hours;
        const formatTime = unit => unit.toString().padStart(2, '0');
        let timestring = `${formatTime(hours)} . ${formatTime(minutes)} . ${formatTime(seconds)} ${AMPMoperator}`;
        timedisplay.innerHTML = timestring;
    }
    // Updating clock
    updateTime();
    setInterval(updateTime, 1000);
})();