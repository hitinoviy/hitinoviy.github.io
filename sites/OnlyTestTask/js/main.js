const infoBtns = document.querySelector('.info-btns');
const mapBtns = document.querySelectorAll('.map-btn');

const showMapInfo = (btn) => {
  const btnText = btn.dataset.text;
  const mapBtnInfo = btn.querySelector('.map-btn-info');
  btn.classList.add('active');
  for (let i = 0; i <= btnText.length; i++) {
    setTimeout(() => {
      mapBtnInfo.textContent = btnText.slice(0, i);
    }, 10 * i);
  }
};
const closeMapInfo = (btn) => {
  btn.classList.remove('active');
  const mapBtnInfo = btn.querySelector('.map-btn-info');
  const btnEl = btn.querySelector('.map-btn-info');
  const btnText = btnEl.textContent;
  for (let i = btnText.length; i >= 0; i--) {
    setTimeout(() => {
      mapBtnInfo.textContent = btnText.slice(0, i);
    }, 10 * (btnText.length - i));
  }
};

const closeAllBtn = (btn = null) => {
  mapBtns.forEach((mapBtn) => {
    if (btn !== mapBtn) closeMapInfo(mapBtn);
  });
};

infoBtns.addEventListener('click', function (e) {
  const { target } = e;
  const btn = target.closest('.map-btn');
  if (target === infoBtns) closeAllBtn();
  if (btn) {
    closeAllBtn(btn);
    const isOpenBtn = btn.classList.contains('active');
    if (!isOpenBtn) {
      showMapInfo(btn);
    } else {
      closeMapInfo(btn);
    }
  }
});
