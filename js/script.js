const navIcons = document.querySelectorAll('nav img');

navIcons.forEach((img) => {

  img.addEventListener('mouseover', () => {
    img.style.transform = 'scale(1.3) translateY(-3px)';
    img.style.transition = 'transform 0.3s ease-in-out';
  });

  img.addEventListener('mouseout', () => {
    img.style.transform = 'scale(1)';
    img.style.transition = 'transform 0.2s ease-in-out';
  });

  
});
