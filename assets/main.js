(function () {
  const myHeaders = new Headers();
  myHeaders.set('Access-Control-Allow-Origin', 'https://npws.online/');
  
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  const nextYear = yyyy + 1;
  const dayMonth = "05/1/";
  let birthday = dayMonth + yyyy;

  const todayDate = mm + "/" + dd + "/" + yyyy;
  if (todayDate > birthday) {
    birthday = dayMonth + nextYear;
  }

  const countDown = new Date(birthday).getTime();
  const x = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDown - now;

    document.getElementById("days").innerText = Math.floor(distance / day);
    document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
    document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
    document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

    if (distance < 0) {
      document.getElementById("headline").innerText = "website is open!";
      document.getElementById("countdown").style.display = "none";
      document.getElementById("content").style.display = "block";
      clearInterval(x);
    }
  }, 0);

}());
