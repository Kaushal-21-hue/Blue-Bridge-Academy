
function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    chatbot.style.display = chatbot.style.display === 'flex' ? 'none' : 'flex';
}

function sendMessage() {
    const input = document.getElementById('user-input');
    const msg = input.value.trim();
    if (msg === '') return;

    const chatbox = document.getElementById('chatbot-messages');

    // Show user's message
    const userMsg = document.createElement('div');
    userMsg.className = 'user-message';
    userMsg.textContent = msg;
    chatbox.appendChild(userMsg);

    input.value = '';

    // Auto-reply (mock)
    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'bot-message';
        botMsg.textContent = getBotResponse(msg);
        chatbox.appendChild(botMsg);
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 600);

    chatbox.scrollTop = chatbox.scrollHeight;
}

function getBotResponse(message) {
    // Basic keyword logic
    const lower = message.toLowerCase();
    if (lower.includes("course")) return "We offer IMU-CET prep and Merchant Navy career guidance.";
    if (lower.includes("fees")) return "Our course fee details are available on the Courses page.";
    if (lower.includes("contact")) return "You can reach us at 9942259795.";
    return "Thanks for your message! We’ll get back to you soon.";
}

