document.querySelector("#message").addEventListener("input", (event) => {
  let string = event.target.value;
  const characterCounter = document.querySelector("#characters");
  const wordCounter = document.querySelector("#words");
  characterCounter.innerHTML = string.length;

  function wordCount(string) {
    string = string.replace(/(^\s*)|(\s*$)/gi, "");
    string = string.replace(/[ ]{2,}/gi, " ");
    string = string.replace(/^\s+|\s+$/g, "");
    wordCounter.innerHTML = string.split(" ").length;
  }

  wordCount(string);
});
