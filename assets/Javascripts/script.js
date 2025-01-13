// Smooth scrolling navigation with slower animation
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    // Increased duration for smoother scroll
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      duration: 2000 // Longer duration
    });

    // Extended visual feedback timing
    targetSection.classList.add('active-section');
    setTimeout(() => {
      targetSection.classList.remove('active-section'); 
    }, 2000); // Increased from 1000ms to 2000ms
  });
});  
  window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
          navbar.classList.add('shrink');
      } else {
          navbar.classList.remove('shrink');
      }
  });
      document.addEventListener('DOMContentLoaded', () => {
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");

        if (hamburger) {
          hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navLinks.classList.toggle("active");
            console.log('Hamburger clicked'); // Debug line
          });
        }

        document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
          hamburger.classList.remove("active");
          navLinks.classList.remove("active");
        }));
      });
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

const scrollBtn = document.querySelector(".scroll-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollBtn.classList.add("visible");
  } else {
    scrollBtn.classList.remove("visible");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
ss



function createBinaryParticle() {
  const particle = document.createElement('div');
  particle.className = 'binary-particles';
  particle.style.setProperty('--x', `${Math.random() * 100}%`);
  document.querySelector('.binary-cube-container').appendChild(particle);
  
  setTimeout(() => {
    particle.remove();
  }, 2000);
}

setInterval(createBinaryParticle, 100);



function createMatrixRain() {
  const matrixRain = document.querySelector('.matrix-rain');
  const characters = '01';
  
  for (let i = 0; i < 50; i++) {
    const drop = document.createElement('div');
    drop.className = 'rain-drop';
    drop.style.left = Math.random() * 100 + '%';
    drop.style.animationDuration = (Math.random() * 2 + 1) + 's';
    drop.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
    matrixRain.appendChild(drop);
  }
}

window.addEventListener('load', createMatrixRain);



document.addEventListener('DOMContentLoaded', () => {
  const progressBars = document.querySelectorAll('.progress-bar');
  progressBars.forEach(bar => {
    const percent = bar.getAttribute('data-percent');
    bar.style.setProperty('--percent', percent + '%');
  });
});





// Portfolio filtering functionality
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');
      
      const filterValue = btn.getAttribute('data-filter');
      
      portfolioItems.forEach(item => {
        if (filterValue === 'all' || item.classList.contains(filterValue)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});




// Enhanced Chatbot Response System
const chatbotResponses = {
  greetings: {
      patterns: ['hi', 'hello', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'],
      responses: [
          "Hello! I'm your cybersecurity assistant. How can I help secure your digital presence today?",
          "Welcome! Ready to discuss cybersecurity solutions?",
          "Greetings! How can I assist with your security needs?"
      ]
  },
  services: {
      patterns: ['services', 'offer', 'provide', 'help', 'support', 'what can you do'],
      responses: [
          "I specialize in these security services:<br>• Network Security & Monitoring<br>• Vulnerability Assessment<br>• Security Training<br>• Incident Response<br>Which area interests you?",
          "Our cybersecurity services include:<br>• Penetration Testing<br>• Security Audits<br>• SIEM Implementation<br>• Security Awareness Training<br>Would you like details about any specific service?"
      ]
  },
  portfolio: {
      patterns: ['portfolio', 'projects', 'work', 'experience', 'showcase'],
      responses: [
          "Let me show you some highlighted projects:<br>• Security Analytics Dashboard<br>• Network Monitoring System<br>• Vulnerability Assessment Tool<br>Would you like to know more about any of these?",
          "Check out these successful implementations:<br>• Enterprise Security Framework<br>• Threat Detection System<br>• Security Training Platform<br>Which interests you?"
      ]
  },
  contact: {
      patterns: ['contact', 'reach', 'email', 'phone', 'connect'],
      responses: [
          "You can reach Andile through:<br>📧 andilemasebe@gmail.com<br>📱 +27 73 980 0705<br>🌍 Johannesburg, South Africa",
          "Let's connect! Here's how:<br>• Email: andilemasebe@gmail.com<br>• Phone: +27 73 980 0705<br>• Location: Johannesburg"
      ]
  },
  skills: {
      patterns: ['skills', 'expertise', 'capabilities', 'qualifications'],
      responses: [
          "Key areas of expertise:<br>• Network Security<br>• Penetration Testing<br>• SIEM Tools<br>• Security Architecture<br>Want to learn more about any area?",
          "Technical proficiencies include:<br>• Vulnerability Assessment<br>• Security Monitoring<br>• Incident Response<br>• Security Training<br>Which skill interests you?"
      ]
  },
  default: [
      "I'm here to discuss cybersecurity solutions. Could you please specify your area of interest?",
      "Let me help you with cybersecurity. What specific information are you looking for?",
      "I can assist with various security aspects. What would you like to know more about?"
  ]
};

function getRandomResponse(responses) {
  return responses[Math.floor(Math.random() * responses.length)];
}

function findBestMatch(userInput) {
  const input = userInput.toLowerCase();
  
  for (const [category, data] of Object.entries(chatbotResponses)) {
      if (category === 'default') continue;
      
      if (data.patterns.some(pattern => input.includes(pattern))) {
          return getRandomResponse(data.responses);
      }
  }
  
  return getRandomResponse(chatbotResponses.default);
}

function handleUserInput() {
  const userInput = document.getElementById('userInput').value.trim();
  if (!userInput) return;

  // Add user message
  addMessage(userInput, false);
  document.getElementById('userInput').value = '';

  // Simulate typing indicator
  const typingIndicator = addTypingIndicator();

  // Delayed bot response
  setTimeout(() => {
      removeTypingIndicator(typingIndicator);
      const botResponse = findBestMatch(userInput);
      addMessage(botResponse, true);
  }, 1000);
}

function addTypingIndicator() {
  const typingDiv = document.createElement('div');
  typingDiv.className = 'message bot-message typing';
  typingDiv.innerHTML = '<div class="typing-indicator"><span></span><span></span><span></span></div>';
  document.getElementById('chatMessages').appendChild(typingDiv);
  return typingDiv;
}

function removeTypingIndicator(element) {
  element.remove();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  const sendButton = document.getElementById('sendMessage');
  const inputField = document.getElementById('userInput');
  
  sendButton.addEventListener('click', handleUserInput);
  inputField.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleUserInput();
  });
});








// Portfolio Projects Functionality
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  // Filter functionality
  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('active'));
          // Add active class to clicked button
          button.classList.add('active');
          
          const filterValue = button.getAttribute('data-filter');
          
          portfolioItems.forEach(item => {
              if (filterValue === 'all' || item.classList.contains(filterValue)) {
                  item.style.display = 'block';
                  item.style.animation = 'fadeIn 0.5s ease forwards';
              } else {
                  item.style.display = 'none';
              }
          });
      });
  });

  // Project view functionality
  const viewButtons = document.querySelectorAll('.view-project');
  viewButtons.forEach(button => {
      button.addEventListener('click', (e) => {
          e.preventDefault();
          const projectDetails = button.closest('.portfolio-item').querySelector('.portfolio-overlay');
          
          // Create and show modal
          const modal = document.createElement('div');
          modal.className = 'project-modal';
          modal.innerHTML = `
              <div class="modal-content">
                  <span class="close-modal">&times;</span>
                  <h2>${projectDetails.querySelector('h3').textContent}</h2>
                  <img src="${button.closest('.portfolio-item').querySelector('img').src}" alt="Project Image">
                  <p>${projectDetails.querySelector('p').textContent}</p>
                  <div class="project-links">
                      <a href="#" class="live-demo">Live Demo</a>
                      <a href="${projectDetails.querySelector('.github-link').href}" class="github-link" target="_blank">
                          <i class="fab fa-github"></i> View Code
                      </a>
                  </div>
              </div>
          `;
          
          document.body.appendChild(modal);
          
          // Close modal functionality
          const closeBtn = modal.querySelector('.close-modal');
          closeBtn.onclick = () => modal.remove();
          window.onclick = (event) => {
              if (event.target === modal) modal.remove();
          };
      });
  });
});





// Portfolio Filter Enhancement
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('active'));
          // Add active class to clicked button
          button.classList.add('active');
          
          const filterValue = button.getAttribute('data-filter');
          
          portfolioItems.forEach(item => {
              // Show all items when 'all' is clicked
              if (filterValue === 'all') {
                  item.style.display = 'block';
                  item.style.animation = 'fadeIn 0.5s ease forwards';
              }
              // Show only security analysis items when that filter is clicked
              else if (filterValue === 'security' && item.classList.contains('security')) {
                  item.style.display = 'block';
                  item.style.animation = 'fadeIn 0.5s ease forwards';
              }
              // Hide items that don't match the filter
              else {
                  item.style.display = 'none';
              }
          });
      });
  });
});


// window.addEventListener('load', () => {
//   const loaderWrapper = document.querySelector('.loader-wrapper');
//   setTimeout(() => {
//     loaderWrapper.classList.add('fade-out');
//     setTimeout(() => {
//       loaderWrapper.style.display = 'none';
//     }, 500);
//   }, 1500);
// });

document.addEventListener('DOMContentLoaded', () => {
  // Get loader element
  const loader = document.querySelector('.loader-wrapper');
  
  // Hide loader when page is fully loaded
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.style.display = 'none';
      document.body.classList.add('loaded');
    }, 1000); // 1// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
 
  });
});




function sendEmail(e) {
  e.preventDefault();

  const params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value
  };

  emailjs.send('service_eo2exgl', 'template_q6psvl2', params)
    .then(function(response) {
      alert('Message sent successfully!');
      document.getElementById('contactForm').reset();
    }, function(error) {
      alert('Failed to send message. Please try again.');
    });

  return false;
}


  // Matrix rain effect
  const canvas = document.getElementById('matrixCanvas');
  const ctx = canvas.getContext('2d');
  
  // Set canvas size
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  
  // Matrix characters
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
  const fontSize = 14;
  const columns = canvas.width/fontSize;
  const drops = [];
  
  // Initialize drops
  for(let i = 0; i < columns; i++) {
    drops[i] = 1;
  }
  
  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#0F0'; // Matrix green
    ctx.font = fontSize + 'px monospace';
  
    for(let i = 0; i < drops.length; i++) {
      const text = characters.charAt(Math.floor(Math.random() * characters.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      
      if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

setInterval(draw, 33);





  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });



  // Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



window.addEventListener('load', () => {
  const loaderWrapper = document.querySelector('.loader-wrapper');
  setTimeout(() => {
    loaderWrapper.classList.add('fade-out');
    setTimeout(() => {
      loaderWrapper.style.display = 'none';
    }, 700);
  }, 2500);
});



// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('darkModeToggle');
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    darkModeToggle.checked = true;
  }

  darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  });
});



document.querySelector('.view-docs-btn').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.docs-modal').classList.add('active');
});

document.querySelector('.close-docs').addEventListener('click', () => {
  document.querySelector('.docs-modal').classList.remove('active');
});



// Portfolio filtering functionality

const viewDocsBtn = document.querySelector('.view-docs-btn');
const docsModal = document.querySelector('.docs-modal');
const closeDocsBtn = document.querySelector('.close-docs');

viewDocsBtn.addEventListener('click', () => {
    docsModal.classList.add('active');
});

closeDocsBtn.addEventListener('click', () => {
    docsModal.classList.remove('active');
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === docsModal) {
        docsModal.classList.remove('active');
    }
});

// Prevent modal close when clicking inside modal content
docsModal.querySelector('.docs-content').addEventListener('click', (e) => {
    e.stopPropagation();
});


document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('active'));
          // Add active class to clicked button
          button.classList.add('active');
          
          const filterValue = button.getAttribute('data-filter');

          portfolioItems.forEach(item => {
              if (filterValue === 'all') {
                  item.style.display = 'block';
                  item.classList.add('show');
              } else if (item.getAttribute('data-category') === filterValue) {
                  item.style.display = 'block';
                  item.classList.add('show');
              } else {
                  item.style.display = 'none';
                  item.classList.remove('show');
              }
          });
      });
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  // Show all items initially
  portfolioItems.forEach(item => item.classList.add('show'));

  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          // Update active button
          filterButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
          
          const filterValue = button.getAttribute('data-filter');

          // Filter items
          portfolioItems.forEach(item => {
              const itemCategory = item.getAttribute('data-category');
              if (filterValue === 'all' || filterValue === itemCategory) {
                  item.classList.add('show');
              } else {
                  item.classList.remove('show');
              }
          });
      });
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  // Function to filter items
  const filterItems = (filterValue) => {
      portfolioItems.forEach(item => {
          const itemCategory = item.getAttribute('data-category');
          if (filterValue === 'all' || filterValue === itemCategory) {
              item.classList.add('show');
          } else {
              item.classList.remove('show');
          }
      });
  };

  // Initial filter - show first category
  const firstButton = filterButtons[0];
  firstButton.classList.add('active');
  filterItems(firstButton.getAttribute('data-filter'));

  // Click handlers for filter buttons
  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          filterButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
          filterItems(button.getAttribute('data-filter'));
      });
  });
});








document.addEventListener('DOMContentLoaded', () => {
  // Show chatbot popup after 3 seconds of page load
  setTimeout(() => {
      const chatContainer = document.querySelector('.chat-container');
      chatContainer.classList.add('active');
      
      // Add welcome message
      addBotMessage("👋 Hi there! Welcome to my portfolio. I'm here to help you navigate through my work and answer any questions you might have!");
      
      // Add suggestion chips
      addSuggestionChips([
          "View Projects",
          "About Me",
          "Contact Info",
          "Skills & Experience"
      ]);
  }, 3000);
});

function addBotMessage(message) {
  const chatMessages = document.querySelector('.chat-messages');
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message bot-message';
  messageDiv.innerHTML = `
      <div class="message-content">
          <i class="fas fa-robot"></i>
          <span>${message}</span>
      </div>
      <span class="timestamp">${new Date().toLocaleTimeString()}</span>
  `;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addSuggestionChips(suggestions) {
  const suggestionsDiv = document.createElement('div');
  suggestionsDiv.className = 'suggestion-chips';
  suggestions.forEach(text => {
      const chip = document.createElement('button');
      chip.className = 'chip';
      chip.textContent = text;
      chip.onclick = () => handleSuggestionClick(text);
      suggestionsDiv.appendChild(chip);
  });
  document.querySelector('.chat-messages').appendChild(suggestionsDiv);
}

function handleSuggestionClick(suggestion) {
  // Handle user clicks on suggestion chips
  const responses = {
      "View Projects": "Let me show you my latest projects! You can find them in the Portfolio section.",
      "About Me": "I'm a passionate developer focused on creating innovative solutions. Check out my About section for more details!",
      "Contact Info": "You can reach me through the Contact form or connect with me on LinkedIn and GitHub.",
      "Skills & Experience": "I specialize in web development, mobile apps, and UI/UX design. View my complete skill set in the Skills section!"
  };
  
  addBotMessage(responses[suggestion]);
}





// Form submission handling with POST method
document.querySelector('.contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  try {
      const formData = new FormData(e.target);
      const response = await fetch('/submit-form', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(Object.fromEntries(formData))
      });
      
      if (response.ok) {
          showSuccessMessage('Message sent successfully!');
      }
  } catch (error) {
      showErrorMessage('Failed to send message');
  }
});

// GET method for fetching portfolio items
async function fetchPortfolioItems() {
  const response = await fetch('/api/portfolio-items', {
      method: 'GET',
      headers: {
          'Accept': 'application/json'
      }
  });
  return response.json();
}

// PUT method for updating profile info
async function updateProfile(profileData) {
  const response = await fetch('/api/profile', {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(profileData)
  });
  return response.json();
}

// DELETE method for removing portfolio items
async function deletePortfolioItem(itemId) {
  const response = await fetch(`/api/portfolio/${itemId}`, {
      method: 'DELETE'
  });
  return response.ok;
}






// Add this validation function
function validateForm() {
  const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
  let isValid = true;
  
  formInputs.forEach(input => {
      if (!input.value.trim()) {
          isValid = false;
          showValidationMessage();
      }
  });
  
  return isValid;
}

// Add the validation message popup
function showValidationMessage() {
  const validationPopup = document.createElement('div');
  validationPopup.className = 'validation-popup';
  validationPopup.innerHTML = `
      <i class="fas fa-exclamation-circle"></i>
      <span>Please fill in all fields</span>
  `;
  document.body.appendChild(validationPopup);
  
  setTimeout(() => {
      validationPopup.remove();
  }, 3000);
}




const modal = document.getElementById('cyberModal');
const closeBtn = document.querySelector('.close-modal');

function showModal() {
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

closeBtn.addEventListener('click', closeModal);

// Close when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Show modal on page load
document.addEventListener('DOMContentLoaded', showModal);




document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Form validation
  const inputs = this.querySelectorAll('input, textarea');
  let isValid = true;
  
  inputs.forEach(input => {
      if (!input.value.trim()) {
          isValid = false;
      }
  });
  
  if (!isValid) {
      alert('Please fill in all fields');
      return;
  }
  
  // Show success modal
  document.querySelector('.success-modal').style.display = 'flex';
  
  // Clear form
  this.reset();
});

// Close modal when clicking the button
document.querySelector('.success-btn').addEventListener('click', function() {
  document.querySelector('.success-modal').style.display = 'none';
});

// Close modal when clicking outside
document.querySelector('.success-modal').addEventListener('click', function(e) {
  if (e.target === this) {
      this.style.display = 'none';
  }
});


// Get form and modal elements
const contactForm = document.querySelector('.contact-form');
const successModal = document.querySelector('.success-modal');
const modalCloseBtn = document.querySelector('.success-btn');

// Form submission handler
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validate form
    const formData = new FormData(contactForm);
    let isValid = true;
    
    formData.forEach(value => {
        if (!value.trim()) isValid = false;
    });
    
    if (!isValid) {
        alert('Please fill all fields');
        return;
    }
    
    // Show success modal
    successModal.style.display = 'flex';
    
    // Reset form
    contactForm.reset();
});

// Close modal on button click
modalCloseBtn.addEventListener('click', () => {
    successModal.style.display = 'none';
});

// Close modal on outside click
window.addEventListener('click', (e) => {
    if (e.target === successModal) {
        successModal.style.display = 'none';
    }
});







// API Configuration
const API_BASE_URL = 'https://api.andilemasebe.github.io/';

// Fetch Portfolio Projects
async function fetchProjects() {
    try {
        const response = await fetch(`${API_BASE_URL}/projects`);
        const data = await response.json();
        displayProjects(data);
    } catch (error) {
        console.log('Error fetching projects:', error);
    }
}

// Display Projects in Portfolio Grid
function displayProjects(projects) {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    
    projects.forEach(project => {
        const projectElement = `
            <div class="portfolio-item" data-category="${project.category}">
                <div class="portfolio-content">
                    <img src="${project.image}" alt="${project.title}">
                    <div class="portfolio-overlay">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="portfolio-links">
                            <a href="${project.liveDemo}" class="view-project">Live Demo</a>
                            <a href="${project.github}" class="github-link">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        portfolioGrid.innerHTML += projectElement;
    });
}

// Filter Projects by Category
async function filterProjects(category) {
    try {
        const response = await fetch(`${API_BASE_URL}/projects?category=${category}`);
        const data = await response.json();
        displayProjects(data);
    } catch (error) {
        console.log('Error filtering projects:', error);
    }
}

// Initialize Portfolio
document.addEventListener('DOMContentLoaded', fetchProjects);




const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          if (entry.target.querySelectorAll('.service-card').length) {
              entry.target.querySelectorAll('.service-card').forEach((card, index) => {
                  setTimeout(() => {
                      card.classList.add('animate');
                  }, index * 200);
              });
          }
          if (entry.target.querySelectorAll('.portfolio-item').length) {
              entry.target.querySelectorAll('.portfolio-item').forEach((item, index) => {
                  setTimeout(() => {
                      item.classList.add('animate');
                  }, index * 150);
              });
          }
      }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});


// Certificate view handling
const viewCertButtons = document.querySelectorAll('.view-cert-btn');
const certModal = document.querySelector('.cert-modal');

viewCertButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const certId = button.getAttribute('data-cert-id');
        const certUrl = button.getAttribute('data-cert-url');
        
        // Show certificate in modal or new window
        if (certUrl) {
            window.open(certUrl, '_blank');
        } else {
            certModal.classList.add('active');
            // Load certificate content based on certId
            loadCertificate(certId);
        }
    });
});

function loadCertificate(certId) {
    // Load and display specific certificate content
    const certContent = document.querySelector('.cert-content');
    // Add certificate display logic here
    // Example: certContent.innerHTML = 'Certificate Content Here';
    function loadCertificate(certId) {
      const certContent = document.querySelector('.cert-content');
      const certificates = {
          'sec001': {
              title: 'CompTIA Security+',
              issuer: 'CompTIA',
              date: '2024',
              credentialId: 'SEC+123456',
              skills: ['Network Security', 'Cryptography', 'Risk Management'],
              image: 'assets/images/certificates/comptia-security-plus.jpg'
          },
          'ccna001': {
              title: 'Cisco CCNA',
              issuer: 'Cisco',
              date: '2023',
              credentialId: 'CCNA789012',
              skills: ['Network Administration', 'Routing', 'Switching'],
              image: 'assets/images/certificates/cisco-ccna.jpg'
          },
          'rpa001': {
              title: 'UiPath RPA Developer',
              issuer: 'UiPath',
              date: '2023',
              credentialId: 'RPA345678',
              skills: ['Process Automation', 'Workflow Design', 'Bot Development'],
              image: 'assets/images/certificates/uipath-developer.jpg'
          }
      };
  
      const cert = certificates[certId];
      
      certContent.innerHTML = `
          <div class="cert-display">
              <div class="cert-header">
                  <h3>${cert.title}</h3>
                  <span class="cert-issuer">${cert.issuer}</span>
              </div>
              <div class="cert-image">
                  <img src="${cert.image}" alt="${cert.title} Certificate">
              </div>
              <div class="cert-details">
                  <div class="cert-info">
                      <p><strong>Issue Date:</strong> ${cert.date}</p>
                      <p><strong>Credential ID:</strong> ${cert.credentialId}</p>
                  </div>
                  <div class="cert-skills">
                      <h4>Skills Verified</h4>
                      <ul>
                          ${cert.skills.map(skill => `<li>${skill}</li>`).join('')}
                      </ul>
                  </div>
              </div>
          </div>
      `;
  }
  
}
