import ModalFactory from "./factory.js";

(() => {
  const oModal = document.querySelector(".modal");
  const oBtnGroup = document.querySelector(".btn-group");
  const modalFactory = new ModalFactory(oModal);

  const init = () => {
    bindEvent();
  };

  function bindEvent() {
    oBtnGroup.addEventListener("click", handleBtnClick, false);
  }

  function handleBtnClick(e) {
    const target = e.target;
    const tagName = target.tagName.toLowerCase();

    if (tagName === "button") {
      const status = target.dataset.status;
      //  changeStatus(status);
      const modal = modalFactory.create("这是一个工程模式的应用场景", status);

      switch (status) {
        case "S":
          modal.outputInfo("这是一个成功的提示");
          modal.goHome("https://www.baidu.com");
          break;
        case "W":
          modal.outputInfo("这是一个告警的提示");
          break;
        case "E":
          modal.outputInfo("这是一个错误的提示");
        default:
          break; 
      }
    }
  }

  // function changeStatus (status) {
  //   switch (status) {
  //     case 'S':
  //       oModal.className = 'modal success';
  //       break;
  //     case 'W':
  //       oModal.className = 'modal warning';
  //       break;
  //     case 'E':
  //       oModal.className = 'modal error';
  //     default:
  //       break;
  //   }
  // }

  init();
})();
