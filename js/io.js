const observedBoxRef = document.querySelector('.js-observed-box');

const onEntry = (entries, observer)=> {
    entries.forEach (entry => {
        if(entry.isIntersecting) {
            console.log(`box № ${entry.target.textContent} is intersectiong root(viewport)!`);

            observer.disconnect();
        };
    });
};

const options = {
    rootMargin: '100px',
    threshold: 0,
};

const io = new IntersectionObserver(onEntry, options);

io.observe(observedBoxRef);