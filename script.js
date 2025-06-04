// Enhanced Sorry Card JavaScript

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeCard();
  addInteractiveEffects();
  setCurrentDate();
});

function initializeCard() {
  // Get page elements
  const page1 = document.getElementById("page1");
  const page23 = document.getElementById("page2-3");
  const page4 = document.getElementById("page4");
  const closedCard = document.querySelector(".closed-card");
  const photoUpload = document.getElementById("photo-upload");
  const uploadedPhoto = document.getElementById("uploaded-photo");

  // Add click event to open the card
  closedCard.addEventListener("click", function (e) {
    e.preventDefault();
    openCard();
  });

  // Handle photo upload with enhanced effects
  photoUpload.addEventListener("change", function (event) {
    handlePhotoUpload(event);
  });

  // Add smooth navigation
  const nextButton = document.querySelector(".next-button");
  if (nextButton) {
    nextButton.addEventListener("click", function (e) {
      e.preventDefault();
      goToPage4();
    });
  }
}

function openCard() {
  const page1 = document.getElementById("page1");
  const page23 = document.getElementById("page2-3");
  const closedCard = document.querySelector(".closed-card");
  const openCard = document.querySelector(".open-card");

  // Add loading indicator
  showLoadingEffect();

  // Disable interactions during animation
  closedCard.style.pointerEvents = "none";

  // Start the enhanced book page turning animation
  closedCard.classList.add("flipping");

  // Create page turn sound effect (visual feedback)
  createPageTurnEffect();

  // Show the new page with enhanced timing
  setTimeout(() => {
    page1.style.display = "none";
    page23.style.display = "block";
    openCard.classList.add("showing");

    // Add entrance animations for widgets
    animateWidgetsEntrance();
  }, 900);

  // Re-enable interactions after animation
  setTimeout(() => {
    closedCard.style.pointerEvents = "auto";
    hideLoadingEffect();
  }, 1800);
}

function goToPage4() {
  const page23 = document.getElementById("page2-3");
  const page4 = document.getElementById("page4");
  const openCard = document.querySelector(".open-card");
  const finalCard = document.querySelector(".final-card");

  // Add transition effect
  showLoadingEffect();

  // Start the page turning animation
  openCard.classList.add("flipping");

  // Create magical transition effect
  createMagicalTransition();

  // Show the final page
  setTimeout(() => {
    page23.style.display = "none";
    page4.style.display = "block";
    finalCard.classList.add("showing");

    // Start final page effects
    startFinalPageEffects();
  }, 900);

  setTimeout(() => {
    hideLoadingEffect();
  }, 1800);
}

function handlePhotoUpload(event) {
  const file = event.target.files[0];
  const uploadArea = document.getElementById("upload-area");
  const uploadedPhoto = document.getElementById("uploaded-photo");

  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();

    // Show loading state
    uploadArea.innerHTML = `
        <div class="camera-icon">⏳</div>
        <p class="upload-text">Loading your beautiful memory...</p>
      `;

    reader.onload = function (e) {
      uploadedPhoto.src = e.target.result;
      uploadedPhoto.style.display = "block";
      uploadArea.style.display = "none";

      // Add photo reveal animation
      uploadedPhoto.style.opacity = "0";
      uploadedPhoto.style.transform = "scale(0.8)";

      setTimeout(() => {
        uploadedPhoto.style.transition =
          "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        uploadedPhoto.style.opacity = "1";
        uploadedPhoto.style.transform = "scale(1)";

        // Add sparkle effect around photo
        createPhotoSparkles(uploadedPhoto);
      }, 100);
    };

    reader.readAsDataURL(file);
  } else {
    // Enhanced error message
    showNotification(
      "Please select a beautiful image to share our memory! 📸💕",
      "error"
    );
  }
}

function addInteractiveEffects() {
  // Enhanced text area effects
  const editableTexts = document.querySelectorAll(".editable-text");
  editableTexts.forEach((textarea) => {
    // Focus effects
    textarea.addEventListener("focus", function () {
      this.parentElement.style.transform = "scale(1.02)";
      this.parentElement.style.transition =
        "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      this.parentElement.style.boxShadow =
        "0 15px 35px rgba(255, 182, 193, 0.4)";

      // Add typing indicator
      addTypingIndicator(this);
    });

    textarea.addEventListener("blur", function () {
      this.parentElement.style.transform = "scale(1)";
      this.parentElement.style.boxShadow =
        "0 8px 25px rgba(255, 182, 193, 0.3)";

      // Remove typing indicator
      removeTypingIndicator(this);
    });

    // Real-time character count and encouragement
    textarea.addEventListener("input", function () {
      updateCharacterFeedback(this);
    });
  });

  // Add hover effects to widgets
  const widgets = document.querySelectorAll(".widget");
  widgets.forEach((widget) => {
    widget.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px) rotate(0.5deg)";
      createHoverSparkles(this);
    });

    widget.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) rotate(0deg)";
    });
  });

  // Enhanced signature input effects
  const signatureInput = document.querySelector(".signature-input");
  if (signatureInput) {
    signatureInput.addEventListener("focus", function () {
      this.style.textShadow = "0 0 15px rgba(255, 192, 203, 0.8)";
      createSignatureGlow(this);
    });

    signatureInput.addEventListener("blur", function () {
      this.style.textShadow = "none";
    });
  }
}

function startFinalPageEffects() {
  // Continuous sparkle effect
  setInterval(createRandomSparkle, 800);

  // Floating hearts effect
  setInterval(createFloatingHeart, 1200);

  // Star twinkling enhancement
  enhanceStarTwinkling();

  // Add breathing effect to main elements
  addBreathingEffect();
}

function createPageTurnEffect() {
  // Create visual page turn indicator
  const indicator = document.createElement("div");
  indicator.className = "page-turn-indicator";
  indicator.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 3em;
      z-index: 1000;
      pointer-events: none;
      animation: pageTurnIndicator 1.5s ease-out forwards;
    `;
  indicator.textContent = "📖✨";

  // Add animation keyframes
  const style = document.createElement("style");
  style.textContent = `
      @keyframes pageTurnIndicator {
        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
        50% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(1); }
      }
    `;
  document.head.appendChild(style);
  document.body.appendChild(indicator);

  setTimeout(() => {
    if (indicator.parentNode) {
      indicator.parentNode.removeChild(indicator);
    }
  }, 1500);
}

function createMagicalTransition() {
  // Create magical particles during transition
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      createMagicalParticle();
    }, i * 50);
  }
}

function createMagicalParticle() {
  const particle = document.createElement("div");
  particle.style.cssText = `
      position: fixed;
      width: 4px;
      height: 4px;
      background: radial-gradient(circle, #ffd700, #ff69b4);
      border-radius: 50%;
      pointer-events: none;
      z-index: 999;
      left: ${Math.random() * window.innerWidth}px;
      top: ${Math.random() * window.innerHeight}px;
      animation: magicalParticle 2s ease-out forwards;
    `;

  const style = document.createElement("style");
  style.textContent = `
      @keyframes magicalParticle {
        0% {
          opacity: 0;
          transform: scale(0) rotate(0deg);
        }
        50% {
          opacity: 1;
          transform: scale(1) rotate(180deg);
        }
        100% {
          opacity: 0;
          transform: scale(0) rotate(360deg);
        }
      }
    `;
  document.head.appendChild(style);
  document.body.appendChild(particle);

  setTimeout(() => {
    if (particle.parentNode) {
      particle.parentNode.removeChild(particle);
    }
  }, 2000);
}

function createRandomSparkle() {
  const sparkle = document.createElement("div");
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  const size = Math.random() * 6 + 2;

  sparkle.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      width: ${size}px;
      height: ${size}px;
      background: radial-gradient(circle, #ffffff, #ffd700);
      border-radius: 50%;
      pointer-events: none;
      z-index: 998;
      animation: sparkleLife 2s ease-out forwards;
    `;

  const style = document.createElement("style");
  style.textContent = `
      @keyframes sparkleLife {
        0% {
          opacity: 0;
          transform: scale(0) rotate(0deg);
        }
        50% {
          opacity: 1;
          transform: scale(1) rotate(180deg);
        }
        100% {
          opacity: 0;
          transform: scale(0.5) rotate(360deg);
        }
      }
    `;
  document.head.appendChild(style);
  document.body.appendChild(sparkle);

  setTimeout(() => {
    if (sparkle.parentNode) {
      sparkle.parentNode.removeChild(sparkle);
    }
  }, 2000);
}

function createFloatingHeart() {
  const heart = document.createElement("div");
  const hearts = ["💕", "💖", "💝", "💗", "🌸"];
  const randomHeart = hearts[Math.floor(Math.random() * hearts.length)];

  heart.textContent = randomHeart;
  heart.style.cssText = `
      position: fixed;
      left: ${Math.random() * window.innerWidth}px;
      bottom: -50px;
      font-size: ${Math.random() * 20 + 15}px;
      pointer-events: none;
      z-index: 997;
      animation: floatingHeart 6s linear forwards;
    `;

  const style = document.createElement("style");
  style.textContent = `
      @keyframes floatingHeart {
        0% {
          transform: translateY(0) rotate(0deg);
          opacity: 0;
        }
        10% {
          opacity: 1;
        }
        90% {
          opacity: 1;
        }
        100% {
          transform: translateY(-${window.innerHeight + 100}px) rotate(360deg);
          opacity: 0;
        }
      }
    `;
  document.head.appendChild(style);
  document.body.appendChild(heart);

  setTimeout(() => {
    if (heart.parentNode) {
      heart.parentNode.removeChild(heart);
    }
  }, 6000);
}

function createPhotoSparkles(photo) {
  const rect = photo.getBoundingClientRect();
  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      const sparkle = document.createElement("div");
      sparkle.style.cssText = `
          position: fixed;
          left: ${rect.left + Math.random() * rect.width}px;
          top: ${rect.top + Math.random() * rect.height}px;
          width: 6px;
          height: 6px;
          background: radial-gradient(circle, #ffd700, #ff69b4);
          border-radius: 50%;
          pointer-events: none;
          z-index: 1000;
          animation: photoSparkle 1.5s ease-out forwards;
        `;

      document.body.appendChild(sparkle);

      setTimeout(() => {
        if (sparkle.parentNode) {
          sparkle.parentNode.removeChild(sparkle);
        }
      }, 1500);
    }, i * 100);
  }
}

function enhanceStarTwinkling() {
  const stars = document.querySelectorAll(".star");
  stars.forEach((star, index) => {
    setInterval(() => {
      star.style.textShadow = `0 0 ${
        Math.random() * 20 + 10
      }px rgba(255, 215, 0, 0.8)`;
      setTimeout(() => {
        star.style.textShadow = "none";
      }, 300);
    }, 1000 + index * 200);
  });
}

function addBreathingEffect() {
  const breathingElements = document.querySelectorAll(
    ".miss-you-title, .big-emoji"
  );
  breathingElements.forEach((element) => {
    element.style.animation += ", breathingGlow 4s ease-in-out infinite";
  });

  const style = document.createElement("style");
  style.textContent = `
      @keyframes breathingGlow {
        0%, 100% {
          filter: brightness(1);
        }
        50% {
          filter: brightness(1.1) drop-shadow(0 0 20px rgba(255, 192, 203, 0.5));
        }
      }
    `;
  document.head.appendChild(style);
}

function animateWidgetsEntrance() {
  const widgets = document.querySelectorAll(".widget");
  widgets.forEach((widget, index) => {
    widget.style.opacity = "0";
    widget.style.transform = "translateY(30px)";

    setTimeout(() => {
      widget.style.transition = "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      widget.style.opacity = "1";
      widget.style.transform = "translateY(0)";
    }, index * 150);
  });
}

function addTypingIndicator(textarea) {
  const indicator = document.createElement("div");
  indicator.className = "typing-indicator";
  indicator.style.cssText = `
      position: absolute;
      bottom: 10px;
      right: 15px;
      font-size: 0.8em;
      color: #ff69b4;
      animation: typingPulse 1.5s ease-in-out infinite;
    `;
  indicator.textContent = "✍️";

  textarea.parentElement.style.position = "relative";
  textarea.parentElement.appendChild(indicator);
}

function removeTypingIndicator(textarea) {
  const indicator = textarea.parentElement.querySelector(".typing-indicator");
  if (indicator) {
    indicator.remove();
  }
}

function updateCharacterFeedback(textarea) {
  const length = textarea.value.length;
  let feedback = "";

  if (length > 0 && length < 50) {
    feedback = "Keep pouring your heart out... 💕";
  } else if (length >= 50 && length < 100) {
    feedback = "Beautiful words! ✨";
  } else if (length >= 100) {
    feedback = "Your heart speaks volumes! 💖";
  }

  // Show feedback temporarily
  if (feedback) {
    showNotification(feedback, "success");
  }
}

function createHoverSparkles(element) {
  const rect = element.getBoundingClientRect();
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      const sparkle = document.createElement("div");
      sparkle.style.cssText = `
          position: fixed;
          left: ${rect.left + Math.random() * rect.width}px;
          top: ${rect.top + Math.random() * rect.height}px;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, #ff69b4, #ffd700);
          border-radius: 50%;
          pointer-events: none;
          z-index: 999;
          animation: hoverSparkle 1s ease-out forwards;
        `;

      document.body.appendChild(sparkle);

      setTimeout(() => {
        if (sparkle.parentNode) {
          sparkle.parentNode.removeChild(sparkle);
        }
      }, 1000);
    }, i * 100);
  }
}

function createSignatureGlow(input) {
  input.style.boxShadow = "0 -2px 20px rgba(255, 215, 0, 0.6)";
  setTimeout(() => {
    input.style.boxShadow = "none";
  }, 2000);
}

function showLoadingEffect() {
  const loader = document.createElement("div");
  loader.id = "magical-loader";
  loader.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 2em;
      z-index: 10000;
      pointer-events: none;
      animation: magicalSpin 1s linear infinite;
    `;
  loader.textContent = "✨";

  const style = document.createElement("style");
  style.textContent = `
      @keyframes magicalSpin {
        from { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
        to { transform: translate(-50%, -50%) rotate(360deg) scale(1.2); }
      }
    `;
  document.head.appendChild(style);
  document.body.appendChild(loader);
}

function hideLoadingEffect() {
  const loader = document.getElementById("magical-loader");
  if (loader) {
    loader.remove();
  }
}

function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${type === "error" ? "#fee" : "#f0fff0"};
      color: ${type === "error" ? "#c53030" : "#38a169"};
      padding: 15px 20px;
      border-radius: 10px;
      border-left: 4px solid ${type === "error" ? "#c53030" : "#38a169"};
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      z-index: 10001;
      font-size: 0.9em;
      max-width: 300px;
      animation: slideInRight 0.3s ease-out;
    `;
  notification.textContent = message;

  const style = document.createElement("style");
  style.textContent = `
      @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `;
  document.head.appendChild(style);
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = "slideInRight 0.3s ease-out reverse";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

function setCurrentDate() {
  const dateElement = document.getElementById("current-date");
  if (dateElement) {
    const now = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    dateElement.textContent = now.toLocaleDateString("en-US", options);
  }
}

// Keyboard navigation
document.addEventListener("keydown", function (event) {
  const page1 = document.getElementById("page1");
  const page23 = document.getElementById("page2-3");
  const page4 = document.getElementById("page4");

  // Space or Enter to open card on first page
  if (
    (event.code === "Space" || event.code === "Enter") &&
    page1.style.display !== "none" &&
    !event.target.matches("textarea, input")
  ) {
    event.preventDefault();
    openCard();
  }

  // Arrow keys to navigate
  if (event.code === "ArrowRight" && page23.style.display !== "none") {
    event.preventDefault();
    goToPage4();
  }

  // Escape to show help
  if (event.code === "Escape") {
    showNotification("💡 Use Space/Enter to open card, → to turn page", "info");
  }
});

// Touch gesture support for mobile
let touchStartX = 0;
let touchStartY = 0;

document.addEventListener("touchstart", function (e) {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
});

document.addEventListener("touchend", function (e) {
  if (!touchStartX || !touchStartY) return;

  const touchEndX = e.changedTouches[0].clientX;
  const touchEndY = e.changedTouches[0].clientY;

  const diffX = touchStartX - touchEndX;
  const diffY = touchStartY - touchEndY;

  // Swipe left to turn page
  if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
    const page23 = document.getElementById("page2-3");
    if (diffX > 0 && page23.style.display !== "none") {
      goToPage4();
    }
  }

  touchStartX = 0;
  touchStartY = 0;
});

// Global function to make it accessible from HTML
window.goToPage4 = goToPage4;
