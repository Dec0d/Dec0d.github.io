window.addEventListener('resize', resize);

function resize() {

    if (window.innerWidth < 700) {

        console.log('window.innerWidth < 700');
        // window.removeEventListener('resize', resize); // once
    }
}