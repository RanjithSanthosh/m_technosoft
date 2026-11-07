/**
 * Contact Form WhatsApp Submission Handler
 * Validates enquiry input, formats structured message, and launches WhatsApp
 */
(function() {
  const form = document.getElementById('project-enquiry-form');
  if (!form) return;

  const statusBox = document.getElementById('form-status-message');
  const submitBtn = document.getElementById('submit-enquiry-btn');
  const submitBtnText = document.getElementById('submit-btn-text');

  function showError(inputEl, message) {
    inputEl.setAttribute('aria-invalid', 'true');
    const errorEl = document.getElementById(inputEl.id + '-error');
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.remove('hidden');
    }
    inputEl.classList.add('border-red-500', 'focus:ring-red-500');
  }

  function clearError(inputEl) {
    inputEl.removeAttribute('aria-invalid');
    const errorEl = document.getElementById(inputEl.id + '-error');
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.classList.add('hidden');
    }
    inputEl.classList.remove('border-red-500', 'focus:ring-red-500');
  }

  form.addEventListener('input', function(e) {
    if (e.target.matches('input, textarea, select')) {
      clearError(e.target);
    }
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    let hasErrors = false;
    const nameInput = document.getElementById('client-name');
    const emailInput = document.getElementById('client-email');
    const serviceSelect = document.getElementById('client-service');
    const messageInput = document.getElementById('client-message');
    const phoneInput = document.getElementById('client-phone');
    const companyInput = document.getElementById('client-company');
    const budgetSelect = document.getElementById('client-budget');
    const timelineSelect = document.getElementById('client-timeline');
    const privacyCheckbox = document.getElementById('privacy-consent');

    // Name Validation
    if (!nameInput.value.trim()) {
      showError(nameInput, 'Please provide your full name.');
      hasErrors = true;
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, 'Please provide a valid business email address.');
      hasErrors = true;
    }

    // Service Selection
    if (!serviceSelect.value) {
      showError(serviceSelect, 'Please select the primary service needed.');
      hasErrors = true;
    }

    // Message Validation
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      showError(messageInput, 'Please share a brief summary of your project requirements (at least 10 characters).');
      hasErrors = true;
    }

    // Privacy Consent
    if (privacyCheckbox && !privacyCheckbox.checked) {
      showError(privacyCheckbox, 'Please confirm your consent to be contacted regarding this enquiry.');
      hasErrors = true;
    }

    if (hasErrors) {
      const firstInvalid = form.querySelector('[aria-invalid="true"]');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Format WhatsApp message with user details
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput ? phoneInput.value.trim() : '';
    const company = companyInput ? companyInput.value.trim() : '';
    const service = serviceSelect.value;
    const budget = budgetSelect ? budgetSelect.value : 'Flexible / Undisclosed';
    const timeline = timelineSelect ? timelineSelect.value : 'Flexible';
    const message = messageInput.value.trim();

    const formattedMessage =
`*NEW PROJECT ENQUIRY — MURUGANANTHAM TECHNOSOFT*

*Name:* ${name}
*Email:* ${email}
*Phone / WhatsApp:* ${phone || 'Not provided'}
*Company:* ${company || 'Direct'}
*Service Required:* ${service}
*Budget Tier:* ${budget}
*Target Timeline:* ${timeline}

*Project Requirements:*
${message}`;

    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/918778232067?text=${encodedMessage}`;

    // Show clean light-theme success status
    if (statusBox) {
      statusBox.classList.remove('hidden');
      statusBox.className = 'p-6 rounded-2xl border border-emerald-300 bg-emerald-50 text-slate-800 shadow-lg mb-8 transition-all';
      statusBox.innerHTML = `
        <div class="flex items-start gap-4">
          <div class="text-emerald-600 shrink-0 text-3xl mt-0.5">
            <i class='bx bxl-whatsapp'></i>
          </div>
          <div class="space-y-2">
            <h4 class="font-bold text-lg text-slate-900">Redirecting to WhatsApp...</h4>
            <p class="text-sm text-slate-700 leading-relaxed">
              Your project details have been formatted. WhatsApp is opening so you can send your enquiry directly to <strong>+91 87782 32067</strong>.
            </p>
            <div class="pt-2">
              <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-bold hover:bg-emerald-700 shadow-md transition-all">
                <i class='bx bxl-whatsapp text-xl'></i>
                <span>Click Here if WhatsApp Doesn't Open</span>
              </a>
            </div>
          </div>
        </div>
      `;
      statusBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Open WhatsApp directly
    const opened = window.open(whatsappUrl, '_blank');
    if (!opened) {
      window.location.href = whatsappUrl;
    }
  });
})();
