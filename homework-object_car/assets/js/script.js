"use strict";

const carSelect = document.getElementById('carSelect');
const carModelSelect = document.getElementById('carModelSelect');
const carDetails = document.getElementById('carDetails');

const carModels = {
  volvo: {
    name: 'Volvo',
    models: [
      { name: 'XC60', year: 2022, topSpeed: '180 mph', color: 'Black' },
      { name: 'S60', year: 2021, topSpeed: '155 mph', color: 'Silver' },
      { name: 'XC90', year: 2023, topSpeed: '170 mph', color: 'White' }
    ]
  },
  bmw: {
    name: 'BMW',
    models: [
      { name: 'X5', year: 2022, topSpeed: '155 mph', color: 'Blue' },
      { name: '3 Series', year: 2021, topSpeed: '180 mph', color: 'Red' },
      { name: 'i8', year: 2023, topSpeed: '200 mph', color: 'Yellow' }
    ]
  },
  audi: {
    name: 'Audi',
    models: [
      { name: 'A4', year: 2022, topSpeed: '160 mph', color: 'Gray' },
      { name: 'Q5', year: 2021, topSpeed: '155 mph', color: 'Green' },
      { name: 'A7', year: 2023, topSpeed: '190 mph', color: 'Silver' }
    ]
  }
};

carSelect.addEventListener('change', function() {
  const selectedBrand = this.value;
  const selectedModels = carModels[selectedBrand].models;

  carModelSelect.innerHTML = '';

  selectedModels.forEach(function(model) {
    const option = document.createElement('option');
    option.value = model.name;
    option.textContent = model.name;
    carModelSelect.appendChild(option);
  });

  document.body.className = `${selectedBrand} car-background`;
  carDetails.textContent = '';
});

carModelSelect.addEventListener('change', function() {
  const selectedBrand = carSelect.value;
  const selectedModel = this.value;
  const brandModels = carModels[selectedBrand].models;

  const selectedCar = brandModels.find(function(model) {
    return model.name === selectedModel;
  });

  carDetails.textContent = '';
  if (selectedCar) {
    const detailsElement = document.createElement('p');
    detailsElement.textContent = `Year: ${selectedCar.year}, Top Speed: ${selectedCar.topSpeed}, Color: ${selectedCar.color}`;
    carDetails.appendChild(detailsElement);
  }
});
