document.addEventListener('DOMContentLoaded', () => {
  fetch('https://api.freebirdsclub.org/stats')
    .then(response => response.json())
    .then(data => {
      document.getElementById('tvl').innerText = `$${data.tvl}M`;
      document.getElementById('apy').innerText = `${data.apy}%`;
    });
});
