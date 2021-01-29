// via unobserve

// const imagesRef = document.querySelectorAll('.feed img');

// const options = {
//     rootMargin: '50px',
// };

// const observerCallBack = (entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             console.log('💩');

//             const target = entry.target;
//             const src = target.dataset.lazy;

//             target.src = src;
//             target.classList.add('appear');

//             observer.unobserve(target);
//         };
//     });
// }

// const io = new IntersectionObserver(observerCallBack, options);

// imagesRef.forEach(image => {
//     io.observe(image);
// })

// via disconnect

const imagesRef = document.querySelectorAll('.feed img');

const lazyLoad = target => { 

    const options = {
        rootMargin: '50px',
    };
    
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('💩');
    
                const target = entry.target;
                const src = target.dataset.lazy;
    
                target.src = src;
                target.classList.add('appear');
    
                observer.disconnect(target);
            };
        });
    }, options);

    io.observe(target);
}

imagesRef.forEach(imageRef => lazyLoad(imageRef));