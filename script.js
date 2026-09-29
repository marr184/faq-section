const qaItem = document.querySelectorAll('.qa-item');

qaItem.forEach(function (question) {
    question.addEventListener('click', () => {
        const answer = question.querySelector('p');
        answer.classList.toggle('active');
    })
})
