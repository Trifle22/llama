let tab = function(){
  let tabButton = document.querySelectorAll('.tab-button'),
  tabContent = document.querySelectorAll('.tab-content'),
  tabName;
  tabButton.forEach(item => {
    item.addEventListener('click', selectTabbutton)
  })
  function selectTabbutton() {
    tabButton.forEach(item => {
      item.classList.remove('is-active');
    });
    this.classList.add('is-active');
    tabName = this.getAttribute('data-tab-name'); 
    selectTabContent(tabName);
  }
  function selectTabContent(tabName) {
    tabContent.forEach(item => {
      item.classList.contains(tabName)? item.classList.add('is-active'): item.classList.remove('is-active');
    });

  }

};

//start function
tab();