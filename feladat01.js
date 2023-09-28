function atalakito() {
    const szoveg = document.getElementById('szoveg').value;
    const kicsi = document.getElementById('kicsi').checked;
    const nagy = document.getElementById('nagy').checked;
    
    if (szoveg === '') {
        alert('Kérjük, írjon be egy szöveget!');
        return;
    }

    if (!kicsi && !nagy) {
        alert('Kérjük, válassza ki a kis- vagy nagybetű opciót!');
        return;
    }

    let eredmeny = '';
    if (kicsi) {
        eredmeny = szoveg.toLowerCase();
    } else if (nagy) {
        eredmeny = szoveg.toUpperCase();
    }

    document.getElementById('eredmeny').textContent = eredmeny;
}