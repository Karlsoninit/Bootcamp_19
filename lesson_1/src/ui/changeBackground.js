const backgroundImage =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fspectrum.ieee.org%2Fimage%2FMjkxMjcxNw.jpg&f=1&nofb=1";

const saleImage =
  "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.bmstores.co.uk%2Fimages%2FhpcSliderImage%2FimgSource%2F2017-12-28-generic-sale-cat2.gif&f=1&nofb=1";

export const changeImageBackground = (param) => {
  if (param) {
    return saleImage;
  }
  return backgroundImage;
};
