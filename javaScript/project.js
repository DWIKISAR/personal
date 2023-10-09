let myProject = [];

let days = "";
let months = "";

function waktu(starData, endData) {
  let dataStart = new Date(starData);
  let dataEnd = new Date(endData);
  let oneDay = 1000 * 3600 * 24;

  let selisih = dataEnd.getTime() - dataStart.getTime();
  let totaldays = selisih / oneDay;
  let totalmonths = Math.floor(totaldays / 30);
  totaldays = totaldays % 30;

  days = totaldays;
  months = totalmonths;
}

function addMyProject(event) {
  event.preventDefault();

  let projectName = document.getElementById("nama-project").value;
  let starData = document.getElementById("start-date").value;
  let endData = document.getElementById("end-date").value;
  let description = document.getElementById("desc-project").value;
  let NodeJs = document.getElementById("node-js").checked;
  let ReactJs = document.getElementById("react-js").checked;
  let Nextjs = document.getElementById("next-js").checked;
  let typeScript = document.getElementById("typescript").checked;
  let image = document.getElementById("input-blog-image").files;

  image = URL.createObjectURL(image[0]);

  waktu(starData, endData);

  let data = {
    projectName,
    starData,
    endData,
    description,
    days,
    months,
    NodeJs,
    ReactJs,
    Nextjs,
    typeScript,
    image,
  };

  myProject.push(data);
  console.log(myProject);

  renderMyProject();
}

function renderMyProject() {
  document.getElementById("contents").innerHTML = "";

  for (let i = 0; i < myProject.length; i++) {
    document.getElementById(
      "contents"
    ).innerHTML += `<div class="project-list-items">
        <img src="${myProject[i].image}" alt="code"/>
        <h1><a href="project-detail.html" target="_blank">${
          myProject[i].projectName
        }</a></h1>
        <p style="font-size: 15px; color: grey;">Durasi : ${
          myProject[i].months
        } Bulan</p>
        <p>
        ${myProject[i].description}
        </p>
        
        ${renderIcon(myProject[i])}
        <div class="btn-edit">
            <button>Edit</button>
            <button>Delete</button>
        </div>`;
  }
}

function renderIcon(icon) {
  let renderImage = "";

  if (icon.usingNode == true) {
    renderImage += `<i class="fa-brands fa-node-js"></i>`;
  }
  if (icon.usingNext == true) {
    renderImage += `<i class="fa-brands fa-react"></i>`;
  }
  if (icon.usingReact == true) {
    renderImage += `<i class="fa-brands fa-vuejs"></i>`;
  }
  if (icon.usingType == true) {
    renderImage += `<i class="fa-brands fa-js"></i>`;
  }

  return renderImage;
}

function getFullTime(time) {
  // let time = new Date();
  // console.log(time);

  let monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  // console.log(monthName[4]);

  let date = time.getDate();
  // console.log(date);

  let monthIndex = time.getMonth();
  // console.log(monthName[monthIndex]);

  let year = time.getFullYear();
  // console.log(year);

  let hours = time.getHours();
  let minutes = time.getMinutes();

  if (hours <= 9) {
    hours = "0" + hours;
  } else if (minutes <= 9) {
    minutes = "0" + minutes;
  }

  // 4 Oct 2023 09:30 WIB
  return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes} WIB`;
}

function getDistanceTime(time) {
  let timeNow = new Date();
  let timePost = time;

  let distance = timeNow - timePost;
  console.log(distance);

  let milisecond = 1000; // 1000 milisecond = 1 detik
  let secondInHours = 3600; // 3600 detik = 1 jam
  let hoursInDays = 24; // 24 jam = 1 hari

  let distanceDay = Math.floor(
    distance / (milisecond * secondInHours * hoursInDays)
  );
  let distanceHours = Math.floor(distance / (milisecond * 60 * 60));
  let distanceMinutes = Math.floor(distance / (milisecond * 60));
  let distanceSeconds = Math.floor(distance / milisecond);

  if (distanceDay > 0) {
    return `${distanceDay} day ago`;
  } else if (distanceHours > 0) {
    return `${distanceHours} hour ago`;
  } else if (distanceMinutes > 0) {
    return `${distanceMinutes} minute ago`;
  } else {
    return `${distanceSeconds} second ago`;
  }
}

setInterval(function () {
  renderMyProject();
}, 3000);
