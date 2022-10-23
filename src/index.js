import ("./style.scss");
import { render } from "./render";
import items from "./items";

const galeryEl = document.querySelector('.galery-container');

const itemsEL = items.map(el => render(el));
galeryEl.append(...itemsEL);