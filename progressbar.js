// JavaScript to update the circular progress bar
window.addEventListener('scroll', updateCircularProgress);

function updateCircularProgress() {
const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
const scrollPercentage = (scrollTop / scrollHeight) * 100;

const progressCircle = document.querySelector('.progress-circle');
const progressText = document.querySelector('.progress-text');

// Update circular progress
progressCircle.style.background = `conic-gradient(#b792e7 ${scrollPercentage}%, #ddd ${scrollPercentage}%)`;

// Update percentage text
progressText.textContent = `${Math.round(scrollPercentage)}%`;
}