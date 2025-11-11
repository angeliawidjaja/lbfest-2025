import dataLBFest2025 from '../json/lbfest-2025/tenants-lbfest-2025.json' with { type: 'json' };

const tenantSection = document.getElementById('tenant-section-js');
let htmlContent = '';
dataLBFest2025.forEach(tenant => {
    htmlContent += `<div class="col-lg-2">
            <div class="tenant-card">
              <img src="https://drive.google.com/thumbnail?id=${tenant.tenantLogoGdriveId}&sz=w1000" alt="${tenant.tenantName}" class="img-fluid">
              <div class="tenant-info">
                <div class="tenant-name">
                  <center>${tenant.tenantName}</center>
                </div>
              </div>
            </div>
          </div>`;

    htmlContent += `<br><br>`
});
tenantSection.innerHTML = htmlContent; // Display the data in the HTML

console.log(dataLBFest2025);