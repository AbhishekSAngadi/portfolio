// const texts = ['Software Engineer', 'Front-End Developer'];
//     const typingElement = document.getElementById('typing');
//     const typingSpeed = 100; // Speed of typing effect in milliseconds
//     const erasingSpeed = 50; // Speed of erasing effect in milliseconds
//     const pauseDuration = 1000; // Pause between phrases in milliseconds
    
//     let textIndex = 0;
//     let letterIndex = 0;
//     let currentText = '';
//     let isTyping = true;
    
//     function type() {
//         if (isTyping) {
//             currentText += texts[textIndex][letterIndex];
//             typingElement.textContent = currentText;
//             letterIndex++;
//             if (letterIndex === texts[textIndex].length) {
//                 isTyping = false;
//                 setTimeout(type, pauseDuration); // Pause before erasing
//             } else {
//                 setTimeout(type, typingSpeed);
//             }
//         } else {
//             currentText = currentText.slice(0, -1);
//             typingElement.textContent = currentText;
//             if (currentText.length === 0) {
//                 isTyping = true;
//                 textIndex = (textIndex + 1) % texts.length;
//                 letterIndex = 0;
//                 setTimeout(type, pauseDuration); // Pause before typing new text
//             } else {
//                 setTimeout(type, erasingSpeed);
//             }
//         }
//     }
    
//     type();