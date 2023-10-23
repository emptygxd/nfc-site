function openTab(evt, tabContentName) {

  const tabContent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].className = tabContent[i].className.replace(" show", "");
  }

  const tabLinks = document.getElementsByClassName("tab-links");
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }
  let content = document.querySelector("." + tabContentName);
  evt.currentTarget.className += " active";
  content.className += " show";
}
