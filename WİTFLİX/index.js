document.addEventListener("click", function(event) {
    var searchContainer = document.querySelector('.search-container');
    var targetElement = event.target;  // Clicked element
  
    // Check if the clicked element is not within the search container
    if (!searchContainer.contains(targetElement)) {
      // Close the search section by unchecking the search-toggle checkbox
      var searchToggle = document.getElementById('search-toggle');
      if (searchToggle.checked) {
        searchToggle.checked = false;
      }
    }
  });
  