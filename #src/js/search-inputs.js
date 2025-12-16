document.addEventListener("DOMContentLoaded", function () {
  const allSiteCheckbox = document.getElementById("all-site");
  const otherCheckboxes = document
    .querySelector(".search-sections")
    .querySelectorAll(".form-check-input:not(#all-site)");

  function updateCheckboxesState() {
    const isChecked = allSiteCheckbox.checked;

    otherCheckboxes.forEach((checkbox) => {
      checkbox.disabled = isChecked;
      if (isChecked) {
        checkbox.checked = false;
      }
    });
  }
  updateCheckboxesState();

  allSiteCheckbox.addEventListener("change", updateCheckboxesState);

  otherCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        allSiteCheckbox.checked = false;
        updateCheckboxesState();
      }
    });
  });

  document
    .querySelector("#search-options")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const params = {};

      const sortValue = document.querySelector('input[name="sort"]:checked').id;

      params.sort = sortValue;

      const sections = [];
      const allSiteCheckbox = document.getElementById("all-site");
      const sectionCheckboxes = document.querySelectorAll(
        '.search-sections input[type="checkbox"]:not(#all-site)'
      );

      sectionCheckboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          sections.push(checkbox.id);
        }
      });

      if (sections.length > 0 && allSiteCheckbox.checked) {
        allSiteCheckbox.checked = false;
      }

      if (sections.length > 0) {
        params.sections = sections.join(",");
      }

      const periodValue = document.querySelector(
        'input[name="period"]:checked'
      ).id;
      params.period = periodValue;

      if (periodValue === "custom-period") {
        const dateFrom = document.getElementById("inputDateForm1").value;
        const dateTo = document.getElementById("inputDateForm2").value;

        if (dateFrom) params.date_from = dateFrom;
        if (dateTo) params.date_to = dateTo;
      }

      const baseUrl = window.location.pathname;
      const queryString = new URLSearchParams(params).toString();
      const newUrl = baseUrl + (queryString ? "?" + queryString : "");

      window.location.href = newUrl;
    });

  const dateFields = document.querySelector(".date-inputs");
  document.querySelectorAll('input[name="period"]').forEach((radio) => {
    radio.addEventListener("change", function () {
      if (this.id === "custom-period") {
        dateFields.style.display = "flex";
      } else {
        dateFields.style.display = "none";
      }
    });
  });

  const customPeriodSelected = document.getElementById("custom-period").checked;
  dateFields.style.display = customPeriodSelected ? "flex" : "none";
});
