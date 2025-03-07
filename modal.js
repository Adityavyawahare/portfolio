document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    const modal = document.getElementById('pdf-modal');
    
    // Get the iframe
    const pdfIframe = document.getElementById('pdf-iframe');
    
    // Get the close button
    const closeButton = document.querySelector('.close-button');
    
    // Get the resume button
    const resumeBtn = document.querySelector('.resume-btn');
    
    // Function to open the modal with the PDF
    function openPdfModal(pdfUrl) {
      pdfIframe.src = pdfUrl;
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal
    }
    
    // Add click event to the resume button
    if (resumeBtn) {
      resumeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const pdfUrl = this.getAttribute('href');
        openPdfModal(pdfUrl);
      });
    }
    
    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', function() {
      modal.style.display = 'none';
      pdfIframe.src = '';
      document.body.style.overflow = ''; // Restore scrolling
    });
    
    // Close the modal when clicking outside of it
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
        pdfIframe.src = '';
        document.body.style.overflow = ''; // Restore scrolling
      }
    });
    
    // Close the modal when pressing Escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        pdfIframe.src = '';
        document.body.style.overflow = ''; // Restore scrolling
      }
    });
  });