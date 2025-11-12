import dataLBFest2023 from '../json/tenants-lbfest-2023.json' with { type: 'json' };

// Start Tenant Category
const tenantCategorySection = document.getElementById('list-tenant-category-lbfest');

let tenantCategoryHtmlContent = '<li data-filter="*" class="filter-active">All</li>';
dataLBFest2023.forEach(tenant => {
    tenantCategoryHtmlContent += `<li data-filter=".filter-${tenant.tenantCategory}">${tenant.tenantCategoryDesc}</li>`;
});
tenantCategorySection.innerHTML = tenantCategoryHtmlContent; // Display the data in the HTML
// End Tenant Category

// Start List Tenant
const tenantItemsSection = document.getElementById('list-tenant-item-lbfest');

let tenantItemsHtmlContent = '';
dataLBFest2023.forEach(tenantCategoryObj => {
  tenantCategoryObj.listTenants.forEach(tenantItem => {

    tenantItemsHtmlContent += `<div class="col-lg-2 col-md-6 tenant-item isotope-item filter-${tenantCategoryObj.tenantCategory}">
              <div class="tenant-card">
                <img src="https://drive.google.com/thumbnail?id=${tenantItem.brandLogoGdriveId}&sz=w1000" class="img-fluid" alt="${tenantItem.brandName}">
                <div class="tenant-info">
                  <h6 title="${tenantItem.brandName}">${tenantItem.brandName}</h6>
                  <p>${tenantItem.brandCategory}</p>
                </div>
              </div>
            </div>`;
  })
})
tenantItemsSection.innerHTML = tenantItemsHtmlContent;
// End List Tenant

function initIsotopeLayout() {
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      let initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });

      const filtersContainer = isotopeItem.querySelector('.isotope-filters');
      filtersContainer.addEventListener('click', function(e) {
        const filterBtn = e.target.closest('li[data-filter]');
        if (!filterBtn) return;

        const active = filtersContainer.querySelector('.filter-active');
        if (active) active.classList.remove('filter-active');
        filterBtn.classList.add('filter-active');

        initIsotope.arrange({
          filter: filterBtn.getAttribute('data-filter')
        });

        if (typeof aosInit === 'function') aosInit();
      });
    });
  });
}

initIsotopeLayout();