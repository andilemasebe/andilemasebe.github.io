document.addEventListener('DOMContentLoaded', () => {
    const chatIcon = document.getElementById('chatIcon');
    const chatContainer = document.getElementById('chatContainer');
    const minimizeChat = document.getElementById('minimizeChat');
    const sendMessage = document.getElementById('sendMessage');
    const userInput = document.getElementById('userInput');
    const chatMessages = document.getElementById('chatMessages');

    // Toggle chat visibility
    chatIcon.addEventListener('click', () => {
        chatContainer.style.display = chatContainer.style.display === 'none' || chatContainer.style.display === '' ? 'flex' : 'none';
    });

    // Minimize chat
    minimizeChat.addEventListener('click', () => {
        chatContainer.style.display = 'none';
    });

    // Send message function
    function sendUserMessage() {
        const message = userInput.value.trim();
        if (message) {
            addMessage('user', message);
            userInput.value = '';
            setTimeout(() => {
                addMessage('bot', getBotResponse(message));
            }, 500);
        }
    }

    // Event listeners for sending messages
    sendMessage.addEventListener('click', sendUserMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendUserMessage();
        }
    });

    // Add message to chat
    function addMessage(type, text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        messageDiv.innerHTML = `
            <div class="message-content">
                ${type === 'bot' ? '<i class="fas fa-shield-alt"></i>' : ''}
                <p>${text}</p>
            </div>
            <span class="timestamp">${time}</span>
        `;
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Handle suggestion chips
    document.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', () => {
            userInput.value = chip.textContent;
            sendUserMessage();
        });
    });
});

// Portfolio-focused bot responses
function getBotResponse(message) {
    message = message.toLowerCase();
    
    const responses = {
        skills: "I specialize in Network Engineering and Cybersecurity with expertise in:<br>• Network Security & Monitoring<br>• Vulnerability Assessment<br>• SIEM Implementation<br>• Security Training<br>Would you like to know more about any specific skill?",
        
        experience: "My professional experience includes:<br>• Network Security at Major Organizations<br>• Cybersecurity Projects Implementation<br>• Security Assessment and Auditing<br>• Network Infrastructure Design",
        
        education: "My educational background includes:<br>• Diploma in IT Communication Networks from Walter Sisulu University<br>• Cybersecurity Bootcamp at Capaciti<br>• Various Professional Certifications in Progress",
        
        projects: "Here are some of my key projects:<br>• Security Analytics Dashboard<br>• Network Monitoring System<br>• Vulnerability Assessment Tool<br>Click on the Portfolio section to see detailed demonstrations!",
        
        contact: "Let's connect! You can reach me through:<br>• Email: andilemasebe@gmail.com<br>• Phone: +27 73 980 0705<br>• Location: Johannesburg, South Africa<br>• LinkedIn: Available in the footer",
        
        default: "Thanks for your interest! I can tell you about my:<br>• Skills & Expertise<br>• Project Portfolio<br>• Work Experience<br>• Education<br>• Contact Information<br>What would you like to know?"
    };

    if (message.includes('skill') || message.includes('expertise'))
        return responses.skills;
    if (message.includes('experience') || message.includes('work'))
        return responses.experience;
    if (message.includes('education') || message.includes('study'))
        return responses.education;
    if (message.includes('project') || message.includes('portfolio'))
        return responses.projects;
    if (message.includes('contact') || message.includes('reach') || message.includes('email'))
        return responses.contact;
    
    return responses.default;
}
