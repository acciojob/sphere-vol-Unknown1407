// script.js
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('MyForm');
  const radiusInput = document.getElementById('radius');
  const volumeInput = document.getElementById('volume');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting

    const radius = parseFloat(radiusInput.value);
    if (!isNaN(radius)) {
      const volume = calculateSphereVolume(radius);
      volumeInput.value = volume.toFixed(4);
    }
  });
});

function calculateSphereVolume(radius) {
  // The formula for the volume of a sphere: (4/3) * π * r^3
  return (4 / 3) * Math.PI * Math.pow(radius, 3);
}
