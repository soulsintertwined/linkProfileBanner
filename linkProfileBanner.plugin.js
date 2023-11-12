/**
 * @name Link-Profile-Banner
 * @description Lets you click users' banners on their profile page to view a bigger version in your browser.
 * @version 1.0.0
 * @author doggo
 * @authorLink https://github.com/soulsintertwined
 * @source https://github.com/soulsintertwined/linkProfileBanner
 */

module.exports = class linkProfileBanner {
  stop(){}
  start() {
    document.addEventListener("click", LinkProfileBanner, true);
    this.stop = document.removeEventListener.bind(document, "click", LinkProfileBanner, true);
    function LinkProfileBanner({ target }) {
      if (target.classList.contains("banner__6d414") && target.parentElement?.parentElement?.classList.contains("bannerSVGWrapper__3e7b0")) {
        window.open(target.querySelector("img").src.replace(/\?.*$/, "?quality=lossless&size=4096"), "_blank");
      }
    }
  }
};
