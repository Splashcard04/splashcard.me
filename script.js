function openInNewTab(url, newTab = true) {
  if (newTab == true) {
    window.open(url, "_blank").focus();
  } else {
    window.open(url, "_self").focus();
  }
}

const ismobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
if (ismobile) {
  document.querySelector.body = "blur(15px)"
}