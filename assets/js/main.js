/**
 * Muruganantham Technosoft Main Application Script
 */
document.addEventListener('DOMContentLoaded', function() {
  // 1. FAQ Accordion Handler
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function(item) {
    const questionBtn = item.querySelector('.faq-question-btn');
    const answerPanel = item.querySelector('.faq-answer-panel');
    const icon = item.querySelector('.faq-icon');

    if (questionBtn && answerPanel) {
      questionBtn.addEventListener('click', function() {
        const isExpanded = questionBtn.getAttribute('aria-expanded') === 'true';
        
        // Toggle current item
        if (isExpanded) {
          questionBtn.setAttribute('aria-expanded', 'false');
          answerPanel.classList.add('hidden');
          if (icon) icon.classList.remove('rotate-180');
        } else {
          questionBtn.setAttribute('aria-expanded', 'true');
          answerPanel.classList.remove('hidden');
          if (icon) icon.classList.add('rotate-180');
        }
      });
    }
  });

  // 2. Project Category Filtering on Work Page
  const filterButtons = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-grid-card');

  if (filterButtons.length > 0 && projectCards.length > 0) {
    const activeClasses = ['bg-brand-gradient', 'text-white', 'shadow-sm', 'border-transparent'];
    const inactiveClasses = ['bg-white', 'text-slate-700', 'border', 'border-slate-200', 'hover:bg-slate-100', 'hover:text-slate-900'];

    filterButtons.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const category = btn.getAttribute('data-filter');

        filterButtons.forEach(function(b) {
          b.classList.remove(...activeClasses);
          b.classList.add(...inactiveClasses);
        });

        btn.classList.remove(...inactiveClasses);
        btn.classList.add(...activeClasses);

        projectCards.forEach(function(card) {
          const cardCategories = card.getAttribute('data-category') || '';
          if (category === 'all' || cardCategories.toLowerCase().includes(category.toLowerCase())) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 3. Current year display
  const yearEls = document.querySelectorAll('.current-year');
  const curYear = new Date().getFullYear();
  yearEls.forEach(function(el) {
    el.textContent = curYear;
  });
});
