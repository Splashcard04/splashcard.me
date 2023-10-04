function openInNewTab(url, newTab = true) {
    if (newTab == true) {
      window.open(url, "_blank").focus();
    } else {
      window.open(url, "_self").focus();
    }
}