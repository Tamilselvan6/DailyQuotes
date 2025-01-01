const quotes = [
    "You got this! Keep pushing forward.",
    "A small step today is a big step tomorrow.",
    "Your vibe attracts your tribe. Stay positive!",
    "Every day is a chance to be a little better.",
    "Dream it, do it, and share the journey!",
    "Good things happen to those who hustle.",
    "Be yourself; the world will adjust.",
    "Focus on the good, and the good gets better."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
}

function openSharePopup() {
    document.getElementById('sharePopup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('sharePopup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function shareToWhatsApp() {
    const quote = document.getElementById('quote').textContent;
    const url = `https://wa.me/?text=${encodeURIComponent(quote)}`;
    window.open(url, '_blank');
}

function shareToLinkedIn() {
    const quote = document.getElementById('quote').textContent;
    const url = `https://www.linkedin.com/messaging/compose?body=${encodeURIComponent(quote)}`;
    window.open(url, '_blank');
}

function shareToTwitter() {
    const quote = document.getElementById('quote').textContent;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`;
    window.open(url, '_blank');
}