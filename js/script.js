document.addEventListener('click', function (event) {
    var menuCheckbox = document.getElementById('toggler');
    var menuIcon = document.querySelector('.fa-bars');
  
    // Check if the click is outside the menu and its icon
    if (
      event.target !== menuIcon &&
      !menuIcon.contains(event.target) &&
      !menuCheckbox.contains(event.target)
    ) {
      // If the checkbox is checked, uncheck it to close the menu
      if (menuCheckbox.checked) {
        menuCheckbox.checked = false;
      }
    }
  });
  
  