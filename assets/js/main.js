const hideShow = document.querySelectorAll(".hideShow");
const clickHideShow = (item) => {
  item.addEventListener("click", () => {
    let input = item.parentElement;

    const inputItem = input.querySelector("input");
    if (inputItem.type === "password") {
      inputItem.type = "text";
      input.classList.add("active");
    } else {
      inputItem.type = "password";
      input.classList.remove("active");
    }
  });
};

hideShow.forEach((e) => {
  clickHideShow(e);
});

var body = document.body;
const system = document.getElementById("system");
if (system) {
  const systemBtns = document.querySelectorAll(".systemItem");
  systemBtns.forEach((systemBtn) => {
    systemBtn.onclick = () => {
      let currentBtn = systemBtn;
      systemBtns.forEach((item) => {
        item.classList.remove("active");
      });
      if (!systemBtn.classList.contains("active")) {
        systemBtn.classList.add("active");
      } else {
        systemBtn.classList.remove("active");
      }
    };
  });
}

const selectFunc = () => {
  const selects = document.querySelectorAll(".select");

  selects.forEach((select) => {
    const selected = select.querySelector(".select__selected");
    const selectOptions = select.querySelector(".select__options");
    const listItems = selectOptions.querySelectorAll("li");
    const input = select.querySelector("input[type='hidden']");
    selected.onclick = () => {
      select.classList.toggle("active");
    };
    listItems.forEach((listItem) => {
      listItem.onclick = () => {
        selected.innerHTML = listItem.innerHTML;
        select.classList.remove("active");
        input.value = listItem.getAttribute("data-value");
      };
    });
  });
};

// modal start

const addTime = document.getElementById("addTime");
if (addTime) {
  const addTimeBtns = document.querySelectorAll(".addTimeBtn");
  const addTimeCloses = document.querySelectorAll(".addTimeClose");

  addTimeBtns.forEach((addTimeBtn) => {
    addTimeBtn.onclick = () => {
      addTime.classList.add("active");
      body.classList.add("active");
    };
  });
  addTimeCloses.forEach((addTimeClose) => {
    addTimeClose.onclick = () => {
      addTime.classList.remove("active");
      body.classList.remove("active");
    };
  });
  window.addEventListener("click", (event) => {
    if (event.target == addTime) {
      addTime.classList.remove("active");
      body.classList.remove("active");
    }
  });

  selectFunc();
}
// modal end

// menu start
var schedule = document.getElementById("schedule");
if (schedule) {
  var scheduleBtn = document.getElementById("scheduleBtn");
  var scheduleClose = document.getElementById("scheduleClose");
  var scheduleEdit = document.getElementById("scheduleEdit");
  var scheduleItems = document.querySelectorAll(".scheduleItem");

  scheduleBtn.onclick = function () {
    schedule.classList.toggle("active");
    body.classList.toggle("active");
  };
  scheduleClose.onclick = function () {
    schedule.classList.remove("active");
    body.classList.remove("active");
  };

  scheduleEdit.onclick = function () {
    scheduleEdit.classList.toggle("active");
    scheduleItems.forEach((scheduleItem) => {
      scheduleItem.classList.toggle("active");
    });
  };
}

// menu end
