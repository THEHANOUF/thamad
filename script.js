// Arabic to Thamudic and Nabatanean Mappings
const arabicToThamudicMap = {
    'ا': '𐪑', 'ب': '𐪈', 'ت': '𐪉', 'ث': '𐪛', 'ج': '𐪔', 'ح': '𐪂', 'خ': '𐪍',
    'د': '𐪕', 'ذ': '𐪙', 'ر': '𐪇', 'ز': '𐪘', 'س': '𐪊', 'ش': '𐪆', 'ص': '𐪎',
    'ض': '𐪓', 'ط': '𐪗', 'ظ': '𐪜', 'ع': '𐪒', 'غ': '𐪖', 'ف': '𐪐', 'ق': '𐪄',
    'ك': '𐪋', 'ل': '𐪁', 'م': '𐪃', 'ن': '𐪌', 'ه': '𐪀', 'و': '𐪅', 'ي': '𐪚',
    'ة': '𐪉', 'ء': '𐪑', 'ئ': '𐪑', 'ؤ': '𐪑', 'أ': '𐪑', 'ى': '𐪑', ' ': ''
};

const arabicToNabataneanMap = {
    'ا': '𐢁', 'ب': '𐢃', 'ت': '𐢞', 'ث': '𐢞', 'ج': '𐢄', 'ح': '𐢊', 'خ': '𐢊',
    'د': '𐢅', 'ذ': '𐢅', 'ر': '𐢛', 'ز': '𐢉', 'س': '𐢖', 'ش': '𐢝', 'ص': '𐢙',
    'ض': '𐢙', 'ط': '𐢋', 'ظ': '𐢐', 'ع': '𐢗', 'غ': '𐢗', 'ف': '𐢘', 'ق': '𐢚',
    'ك': '𐢏', 'ل': '𐢑', 'م': '𐢓', 'ن': '𐢕', 'ه': '𐢆', 'و': '𐢈', 'ي': '𐢍',
    'أ': '𐢁', 'ء': '𐢀', 'ئ': '𐢀', 'ؤ': '𐢀', 'ة': '𐢆', ' ': ''
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
