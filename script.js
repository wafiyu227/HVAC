 // Mobile Navigation Toggle
 const mobileToggle = document.querySelector('.mobile-toggle');
 const nav = document.querySelector('nav');
 
 mobileToggle.addEventListener('click', () => {
     nav.classList.toggle('active');
 });
 
 // Testimonial Slider
 const testimonialsContainer = document.querySelector('.testimonials-container');
 const dots = document.querySelectorAll('.dot');
 let currentIndex = 0;
 
 function moveToSlide(index) {
     testimonialsContainer.style.transform = `translateX(-${index * 100}%)`;
     
     // Update active dot
     dots.forEach(dot => dot.classList.remove('active'));
     dots[index].classList.add('active');
     
     currentIndex = index;
 }
 
 // Add click event to dots
 dots.forEach(dot => {
     dot.addEventListener('click', () => {
         const index = parseInt(dot.getAttribute('data-index'));
         moveToSlide(index);
     });
 });
 
 // Auto slide every 5 seconds
 setInterval(() => {
     currentIndex = (currentIndex + 1) % dots.length;
     moveToSlide(currentIndex);
 }, 5000);
 
 // Form Submission
 const contactForm = document.getElementById('contactForm');
 
 contactForm.addEventListener('submit', function(e) {
     e.preventDefault();
     
     // Simple form validation
     const name = document.getElementById('name').value;
     const email = document.getElementById('email').value;
     const phone = document.getElementById('phone').value;
     const message = document.getElementById('message').value;
     
     if (name && email && phone && message) {
         // In a real application, you would send this data to a server
         alert('Thank you for your message! We will contact you shortly.');
         contactForm.reset();
     } else {
         alert('Please fill in all required fields.');
     }
 });
 
 // Smooth scroll for navigation links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         
         const target = document.querySelector(this.getAttribute('href'));
         
         if (target) {
             // Close mobile menu if open
             nav.classList.remove('active');
             
             // Scroll to the target
             window.scrollTo({
                 top: target.offsetTop - 70, // Account for fixed header
                 behavior: 'smooth'
             });
         }
     });
 });