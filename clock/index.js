setInterval(() => {
    var d=new Date();

    var hr=d.getHours()
    var min=d.getMinutes()
    var sec=d.getSeconds()

    hrotation=(30*hr) + (min/2)
    mrotation=6*min + (sec/30)
    srotation=6*sec
    
    hour.style.transform=`rotate(${hrotation}deg)`
    minute.style.transform=`rotate(${mrotation}deg)`
    second.style.transform=`rotate(${srotation}deg)`
}, 1000);

// Calculation used for rotation >>
// 12h=360
// 1h=30
// effect of min needele
// 60m=30
// 1m=30/60
// 1m=1/2
// m=m/2
// h=30h+m/2

// 1h=60min=360
// 1m=360/60
// 1m=6
// effect of sec needele
// 60s=6
// 1s=6/60
// 1s=1/30
// 1m=6+1/30
// s=s/30
// m=6m +s/30