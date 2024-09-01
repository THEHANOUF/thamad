// Arabic to Thamudic and Nabatanean Mappings
const arabicToThamudicMap = {
    'ا': '𐩱', 'ب': '𐪈', 'ت': '𐪉', 'ث': '𐩻', 'ج': '𐪔', 'ح': '𐪂', 'خ': '𐪍',
    'د': '𐩵', 'ذ': '𐪙', 'ر': '𐪇', 'ز': '𐪘', 'س': '𐪊', 'ش': '𐪆', 'ص': '𐪎',
    'ض': '𐩳', 'ط': '𐪗', 'ظ': '𐪜', 'ع': '𐪒', 'غ': '𐪖', 'ف': '𐪐', 'ق': '𐩤',
    'ك': '𐪋', 'ل': '𐪁', 'م': '𐪃', 'ن': '𐪌', 'ه': '𐩠', 'و': '𐪅', 'ي': '𐪚',
    ' ': ''
};

const arabicToNabataneanMap = {
    'ا': '𐢀', 'ب': '𐢁', 'ت': '𐢂', 'ث': '𐢃', 'ج': '𐢄', 'ح': '𐢅', 'خ': '𐢆',
    'د': '𐢇', 'ذ': '𐢈', 'ر': '𐢉', 'ز': '𐢊', 'س': '𐢋', 'ش': '𐢌', 'ص': '𐢍',
    'ض': '𐢎', 'ط': '𐢏', 'ظ': '𐢐', 'ع': '𐢑', 'غ': '𐢒', 'ف': '𐢓', 'ق': '𐢔',
    'ك': '𐢕', 'ل': '𐢖', 'م': '𐢗', 'ن': '𐢘', 'ه': '𐢙', 'و': '𐢚', 'ي': '𐢛',
    ' ': ''
};

// Function to Convert Name to Selected Script
function convertName(script) {
    const inputId = script === 'thamudic' ? 'nameInputThamudic' : 'nameInputNabatanean';
    const resultId = script === 'thamudic' ? 'resultThamudic' : 'resultNabatanean';
    const input = document.getElementById(inputId).value;
    const result = document.getElementById(resultId);
    let convertedName = '';

    const map = script === 'thamudic' ? arabicToThamudicMap : arabicToNabataneanMap;

    for (let char of input) {
        convertedName += map[char] || char; // Convert or keep the original character if not found
    }

    result.textContent = convertedName;
}

// Function to Flip Card
function flipCard(cardId) {
    const card = document.getElementById(cardId);
    card.classList.toggle('flipped');
}

// JavaScript for Carousel Interaction
const slider = document.getElementById('slider');
slider.style.animationPlayState = 'running';

// JavaScript for Dynamic Star Generation
document.addEventListener("DOMContentLoaded", function() {
    const starCount = 250; // Number of stars
    const body = document.body;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.className = "star";
        
        const size = Math.random() * 3 + 1; // Random size between 1px to 4px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Random position across the viewport
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 2000}px`;

        // Decreased maximum animation duration for faster movement
        const minSpeed = 17;  // Minimum speed (in seconds)
        const maxSpeed = 25;  // Maximum speed (in seconds)
        star.style.animationDuration = `${Math.random() * (maxSpeed - minSpeed) + minSpeed}s`;

        body.appendChild(star);
    }
});
