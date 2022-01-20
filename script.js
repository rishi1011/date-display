const dateInput = document.getElementById('date-input');
const showBtn = document.getElementById('show');
const result = document.getElementById('result');

showBtn.addEventListener('click', () => {
    if (!dateInput.value) {
        result.textContent = 'Invalid Date';
        return;
    }

    let date = new Date(dateInput.value);
    date.setDate(date.getDate() + 273);
    result.textContent = date.toDateString();
});
