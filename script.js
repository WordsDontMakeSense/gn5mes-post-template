var media = document.querySelector(".media");
var url = document.querySelector("#media-input");

url.addEventListener("change", function () {
  media.getElementsByTagName("img")[0].src = url.value;
  console.log("afjalkfja");
});
