const item_selector = `form[name='searchFrm5'] .type_list tr`;
const image_url_selector = `.image a > img`;
const title_selector = `.detail > .title > a > strong`;
const price_selector = `.price > .sell_price > strong`;
const rating_selector = `.info .review.klover > a`; // remove a > .label
const rating2_selector = `.info .rating > img[alt]`;

export { item_selector,image_url_selector, title_selector, price_selector, rating_selector, rating2_selector };