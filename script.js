document.addEventListener("DOMContentLoaded", () => {
  const itemsList = document.getElementById("items-list");
  const form = document.getElementById("item-form");

  if (itemsList) {
    fetch('/api/items')
      .then(res => res.json())
      .then(data => {
        data.forEach(item => {
          const div = document.createElement("div");
          div.className = "item-card";
          div.innerHTML = `<h4>${item.title}</h4><p>${item.description}</p>`;
          itemsList.appendChild(div);
        });
      });
  }

  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const title = document.getElementById("title").value;
      const description = document.getElementById("description").value;

      fetch('/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description })
      }).then(() => {
        alert("Item submitted!");
        form.reset();
      });
    });
  }
});