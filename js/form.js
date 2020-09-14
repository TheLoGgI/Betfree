function notEmpty(e) {
    const input = e
    console.log(input.value);
    if (input.value !== '') {
        input.labels[0].classList.add('not-empty')
    } else {
        input.labels[0].classList.remove('not-empty')
    }

}