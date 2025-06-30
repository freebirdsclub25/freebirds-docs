document.addEventListener('DOMContentLoaded', () => {
  console.log('FreeBirds Club documentation loaded');
  
  // Mock data for demonstration (replace with real API when available)
  const mockData = {
    tvl: "12.5",
    apy: "8.9"
  };
  
  // Update elements if they exist
  const tvlElement = document.getElementById('tvl');
  const apyElement = document.getElementById('apy');
  
  if (tvlElement) {
    tvlElement.innerText = `$${mockData.tvl}M`;
  }
  
  if (apyElement) {
    apyElement.innerText = `${mockData.apy}%`;
    apyElement.classList.add('metric-number');
  }
  
  // Real API integration (commented out for now)
  /*
  fetch('https://api.freebirdsclub.org/stats')
    .then(response => response.json())
    .then(data => {
      if (tvlElement) tvlElement.innerText = `$${data.tvl}M`;
      if (apyElement) apyElement.innerText = `${data.apy}%`;
    })
    .catch(error => console.log('API not available yet:', error));
  */
});
