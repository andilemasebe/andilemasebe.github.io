// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
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
  
  const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navLinks.classList.remove("active");
}));

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