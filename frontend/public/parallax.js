window.addEventListener("DOMContentLoaded", () => {
  let bgImg = document.getElementById("bgImg");

  window.addEventListener("scroll", () => {
    const scrollPos =
      window.scrollY /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight);

    bgImg.style.backgroundPositionY = `${scrollPos * 100}%`;
  });
});
