/**
 * Navigation and Mobile Drawer functionality
 * Vanilla JS, lightweight, accessible (WCAG 2.2 AA)
 */
(function() {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');

  function openDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('translate-x-full');
    mobileDrawer.classList.add('translate-x-0');
    if (drawerBackdrop) {
      drawerBackdrop.classList.remove('opacity-0', 'pointer-events-none');
      drawerBackdrop.classList.add('opacity-100', 'pointer-events-auto');
    }
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    
    // Set focus to close button
    if (closeDrawerBtn) closeDrawerBtn.focus();
  }

  function closeDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('translate-x-0');
    mobileDrawer.classList.add('translate-x-full');
    if (drawerBackdrop) {
      drawerBackdrop.classList.remove('opacity-100', 'pointer-events-auto');
      drawerBackdrop.classList.add('opacity-0', 'pointer-events-none');
    }
    if (menuToggle) {
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.focus();
    }
    document.body.style.overflow = '';
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      if (isExpanded) closeDrawer();
      else openDrawer();
    });
  }

  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && menuToggle && menuToggle.getAttribute('aria-expanded') === 'true') {
      closeDrawer();
    }
  });

  // Services dropdown for desktop
  const servicesDropdownBtn = document.getElementById('services-menu-button');
  const servicesDropdown = document.getElementById('services-menu-dropdown');

  if (servicesDropdownBtn && servicesDropdown) {
    let timeout;
    const parentContainer = servicesDropdownBtn.closest('.services-dropdown-container');

    function showDropdown() {
      clearTimeout(timeout);
      servicesDropdown.classList.add('is-open');
      servicesDropdown.classList.remove('opacity-0', 'invisible', 'translate-y-2');
      servicesDropdown.classList.add('opacity-100', 'visible', 'translate-y-0');
      servicesDropdownBtn.setAttribute('aria-expanded', 'true');
    }

    function hideDropdown() {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
        servicesDropdown.classList.remove('is-open', 'opacity-100', 'visible', 'translate-y-0');
        servicesDropdown.classList.add('opacity-0', 'invisible', 'translate-y-2');
        servicesDropdownBtn.setAttribute('aria-expanded', 'false');
      }, 80);
    }

    if (parentContainer) {
      parentContainer.addEventListener('mouseenter', showDropdown);
      parentContainer.addEventListener('mouseleave', hideDropdown);
      servicesDropdownBtn.addEventListener('focus', showDropdown);
      parentContainer.addEventListener('focusout', function(e) {
        if (!parentContainer.contains(e.relatedTarget)) hideDropdown();
      });
    }

    // Touch / click toggle support
    servicesDropdownBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      const isExpanded = servicesDropdownBtn.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        hideDropdown();
      } else {
        showDropdown();
      }
    });

    // Close on click outside
    document.addEventListener('click', function(e) {
      if (parentContainer && !parentContainer.contains(e.target)) {
        clearTimeout(timeout);
        servicesDropdown.classList.remove('is-open', 'opacity-100', 'visible', 'translate-y-0');
        servicesDropdown.classList.add('opacity-0', 'invisible', 'translate-y-2');
        servicesDropdownBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && servicesDropdownBtn.getAttribute('aria-expanded') === 'true') {
        clearTimeout(timeout);
        servicesDropdown.classList.remove('is-open', 'opacity-100', 'visible', 'translate-y-0');
        servicesDropdown.classList.add('opacity-0', 'invisible', 'translate-y-2');
        servicesDropdownBtn.setAttribute('aria-expanded', 'false');
        servicesDropdownBtn.focus();
      }
    });
  }
})();
