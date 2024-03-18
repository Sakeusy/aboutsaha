// Function to toggle the mobile menu
function toggleMobileMenu() {
    var menu = document.getElementById('header_menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  }
  
  // Function to hide the mobile menu when a menu item is clicked
  function hideMobileMenu() {
    var menu = document.getElementById('header_menu');
    menu.style.display = 'none';
  }
  
  // Add click event listener to the menu icon
  document.getElementById('menu_icon').addEventListener('click', toggleMobileMenu);
  
  // Add click event listeners to each menu item to hide the menu when clicked
  var menuItems = document.querySelectorAll('#header_menu a');
  menuItems.forEach(function (item) {
    item.addEventListener('click', hideMobileMenu);
  });
  
  // Close the mobile menu when the window is resized (for smoother user experience)
  window.addEventListener('resize', hideMobileMenu);

//

