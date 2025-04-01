import { menuInit } from './menu.js';
import { accordionInit } from './accordion.js';
import { tabsInit } from './tabs.js';
import { swiperInit } from './swiperInit.js';
import { modalInit } from './modal.js';

window.addEventListener("load", function () {
  menuInit();
  accordionInit();
  tabsInit();
  swiperInit();
  modalInit();
});
