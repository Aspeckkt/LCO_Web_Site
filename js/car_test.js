document.addEventListener('DOMContentLoaded', () => {
    const t = document.querySelectorAll('.testimonial');
    const ind = document.querySelectorAll('.indicator');
    let c = 0, I;

    const s = x => {
        [c, x].forEach(e => {
            [t, ind].forEach(a => a[e].classList.toggle('active'));
        });
        c = x;
    };

    const n = () => s((c + 1) % t.length);
    const r = () => (clearInterval(I), I = setInterval(n, 4000));

    I = setInterval(n, 4000);

    ind.forEach((d, x) => d.addEventListener('click', () => (s(x), r())));

    s(c);
});