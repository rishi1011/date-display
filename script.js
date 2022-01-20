const dateInput = document.getElementById('date-input');
const showBtn = document.getElementById('show');
const result = document.getElementById('result');

dateInput.valueAsDate = new Date();

showBtn.addEventListener('click', () => {
    if (!dateInput.value) {
        result.textContent = 'தேதியைச் சரிபார்க்கவும்';
        return;
    }

    let date = new Date(dateInput.value);
    date.setDate(date.getDate() + 273);
    result.textContent = date.toDateString() + ' முதல் நீங்கள் பூஸ்டர் தடுப்பூசி போட்டு கொள்ளலாம்';
    result.style.backgroundColor = 'rgb(233, 233, 233)';
});

