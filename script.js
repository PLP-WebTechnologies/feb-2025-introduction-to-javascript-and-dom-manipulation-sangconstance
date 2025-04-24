document.addEventListener('DOMContentLoaded', function() {
  // Text content change
  const textChangerBtn = document.getElementById('text-changer');
  const textElement = document.getElementById('change-text');
  
  textChangerBtn.addEventListener('click', function() {
      textElement.textContent = "Pets reduce loneliness and increase happiness!";
      this.textContent = "Learn More";
  });
  
  // Style modification
  const styleChangerBtn = document.getElementById('style-changer');
  const styleTarget = document.getElementById('style-target');
  
  styleChangerBtn.addEventListener('click', function() {
      styleTarget.classList.toggle('highlight');
      this.textContent = styleTarget.classList.contains('highlight') 
          ? "Remove Highlight" 
          : "Highlight Facts";
  });
  
  // Element toggle
  const toggleElementBtn = document.getElementById('toggle-element');
  const container = document.getElementById('dynamic-element-container');
  let elementExists = true;
  
  toggleElementBtn.addEventListener('click', function() {
      if (elementExists) {
          container.removeChild(document.getElementById('dynamic-element'));
          this.textContent = 'Show Fun Fact';
      } else {
          const newElement = document.createElement('div');
          newElement.id = 'dynamic-element';
          newElement.textContent = '🐱 Cats spend 70% of their lives sleeping!';
          container.appendChild(newElement);
          this.textContent = 'Hide Fun Fact';
      }
      elementExists = !elementExists;
  });
});