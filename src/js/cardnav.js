{
  const $number = document.querySelector(".number");
  const $prev = document.querySelector(".nav-button__prev");
  const $next = document.querySelector(".nav-button__next");
  let list = document.querySelector(".stories__list");
  let item = document.querySelector(".list__story-card");
  let itemWidth = item.offsetWidth;

  $prev.addEventListener("click", function() {
    list.scrollBy({ left: -itemWidth, behavior: "smooth" });
    if ($number.textContent > 1){
      $number.textContent = parseInt($number.textContent) - 1;
    } else {
      $number.textContent = 1;
    }
  });

  $next.addEventListener("click", function() {
    list.scrollBy({ left: itemWidth, behavior: "smooth" });
    if($number.textContent < 6){
      $number.textContent = parseInt($number.textContent) + 1;
    } else {
      $number.textContent = 6;
    }
  });

}
