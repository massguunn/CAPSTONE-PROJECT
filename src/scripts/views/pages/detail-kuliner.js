const detailKuliner = {
  async render() {
    const id = window.location.hash.split("/")[2];
    const response = await fetch(`http://localhost:3000/kuliners/${id}`);
    const kuliner = await response.json();

    return `
            <h2>${kuliner.name}</h2>
            <img src="${kuliner.image || "./default-image.jpg"}" alt="${
      kuliner.name
    }" />
            <p>${kuliner.description}</p>
            <div class="rating">Rating: ${kuliner.rating}</div>
          `;
  },

  async afterRender() {},
};

export default detailKuliner;
