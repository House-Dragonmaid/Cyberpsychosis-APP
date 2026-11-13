const button = document.getElementById('addButton');
const input = document.getElementById('HumanityInput');



const totalWaterDisplay = document.getElementById('totalWater');

button.addEventListener('click', () => {
    const waterAmount = parseFloat(input.value);

    if (waterAmount <= 0 || isNaN(waterAmount)) {
        console.log('Please enter a valid number.');
    } else {
        totalWater += waterAmount;

        console.log(`Total water amount: ${totalWater}`);

        totalWaterDisplay.textContent =
            `Total water intake: ${totalWater} Fluid Ounces`;

        // Save the updated total
        localStorage.setItem('totalWater', totalWater);
    }
});
