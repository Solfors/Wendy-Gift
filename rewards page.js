console.log("Hello Word")
var closeBtn = document.querySelector(".close-class span");

var popBox = document.querySelector(".rewards-box-wrapper");

var card = document.querySelectorAll(".card");

var amount = document.getElementById("real-amount");

var icon = document.querySelector("#icons");

var prompts = document.getElementById("prompts");

var TimeLeft = document.getElementById("time-left");

var BtnNext = document.querySelector(".btn-next-class button");

var pointCount = document.querySelector(".point-count");


function TransferReward() {
  // Tab to edit
  var timed = setInterval(() => {
    let duration = 600; // 2 min = 120 sec
    let endTime = localStorage.getItem("endTime");

    if (!endTime || Date.now() > endTime) {
      endTime = Date.now() + duration * 1000;
      localStorage.setItem("endTime", endTime);
    }

    function updateTimer() {
      let remainingTime = Math.floor((endTime - Date.now()) / 1000);

      if (remainingTime <= 0) {
        TimeLeft.innerText = "0 sec";
        pointCount = "100%";
        localStorage.removeItem("timeStp");
        localStorage.removeItem("endTime");
        clearInterval(timed);
        return;
      } else if (remainingTime <= 550) {
        pointCount.innerText = "10%";
        if (remainingTime <= 500) {
          pointCount.innerText = "20%";
          if (remainingTime <= 450) {
            pointCount.innerText = "30%";
            if (remainingTime <= 400) {
              pointCount.innerText = "35%";
              if (remainingTime <= 350) {
                pointCount.innerText = "40%";
                if (remainingTime <= 300) {
                  pointCount.innerText = "48%";
                  if (remainingTime <= 250) {
                    pointCount = "57%";
                    if (pointCount <= 200) {
                      pointCount = "63%";
                      if (pointCount <= 150) {
                        pointCount = "76%";
                        if (remainingTime <= 100) {
                          pointCount = "88%";
                          if (remainingTime <= 50) {
                            pointCount = "99%";
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      TimeLeft.innerText = `${remainingTime} sec`
    }

    setInterval(updateTimer, 1000);
  })
}






closeBtn.addEventListener('click', () => {
  popBox.style.display = 'none';
});


card.forEach((cards) => {
  var letter1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var letter2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var letter3 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var letter4 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var ranWord = letter2[Math.floor(Math.random() * letter2.length)];

  var ranWord = ranWord + letter2[Math.floor(Math.random() * letter2.length)];

  var ranWord = ranWord + letter3[Math.floor(Math.random() * letter3.length)];

  var ranWord = ranWord + letter4[Math.floor(Math.random() * letter4.length)];


  cards.id = ranWord + Math.floor(Math.random() * 100);
  var btns = document.querySelectorAll(`#${cards.id} .btn-wrapper button`);

  btns.forEach((btn) => {
    btn.addEventListener('click', () => {

      var load = setTimeout(() => {
        var amt = document.querySelector(`#${cards.id} .card-amount span`);
        var ic = document.querySelector(`#${cards.id} .card-icon span`);
        var nme = document.querySelector(`#${cards.id} .card-title span`);
        amount.innerText = amt.innerText;
        icon.innerText = ic.innerText;
        prompts.innerText = nme.innerText;
        popBox.style.display = 'flex';
        clearTimeout(load);
      }, 1000);
    });
  })

});




BtnNext.addEventListener('click', () => {
  localStorage.setItem("timeStp", true);
  TransferReward();
  RI.style.display = "none";
  PB.style.display = "flex"
});



var point = document.querySelector(".point");




setInterval(() => {
  var widthPoint = window.getComputedStyle(point).width;
  if (widthPoint == "193.934px") {
    point.style.borderRadius = "0.5vh";
  }
});


setInterval(() => {
  point.style.width = pointCount.innerText;
});

var RI = document.querySelector(".reward-items");
var PB = document.querySelector(".progress-box");

setInterval(() => {
  var chkP = localStorage.getItem("timeStp");
  if (chkP !== null) {
    if (chkP) {
      RI.style.display = "none";
      PB.style.display = "flex";
      BtnNext.click();
    }
  } else {
    var RI = document.querySelector(".reward-items");
    var PB = document.querySelector(".progress-box");
  }
});


closeBtn.click();
