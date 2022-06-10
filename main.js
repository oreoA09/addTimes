const allVideos = Array.from(document.querySelectorAll('[data-time]'));
// firstly put video values in an array
console.log(allVideos);

// map out the timestamp of all video and convert to seconds
  const seconds = allVideos
    .map(video => video.dataset.time)
    .map(timeCode => {
      const [mins, secs] = timeCode.split(':').map(parseFloat);
      
      return (mins * 60) + secs;
    })
    .reduce((total, vidSeconds) => total + vidSeconds);
    console.log(seconds);

    //Then convert the total to time format
    let secondsLeft = seconds;
    const hours = Math.floor(secondsLeft / 3600);
    secondsLeft = secondsLeft % 3600;

    const mins = Math.floor(secondsLeft / 60);
    secondsLeft = secondsLeft % 60;

    console.log(`${hours}:${mins}:${secondsLeft}`);
