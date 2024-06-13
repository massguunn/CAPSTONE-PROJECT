const detail = {
  async render() {
    const id = window.location.hash.split("/")[2];
    const response = await fetch(`http://localhost:3000/destinations/${id}`);
    const destination = await response.json();

    return `
        <h2>${destination.name}</h2>
        <img src="${destination.image_url || "./default-image.jpg"}" alt="${
      destination.name
    }" />
        <p>${destination.description}</p>
        <div class="rating">Rating: ${destination.rating}</div>
      `;
  },

  async afterRender() {},
};

export default detail;
