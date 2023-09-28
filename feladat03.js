function submitForm() {
    const titulus = document.getElementById("titulus").value;
    const vezeteknev = document.getElementById("vezeteknev").value;
    const keresztnev = document.getElementById("keresztnev").value;
    const nem1 = document.getElementById("no").value;
    const nem2 = document.getElementById("ferfi").value;
    const kor = document.getElementById("korod").value;
    const lieker = document.querySelector('input[name="likert"]:checked');

    if (!titulus || !keresztnev || !vezeteknev || !nem1 || !nem2 || !kor || !likert) {
        alert("Kérjük, töltse ki az összes mezőt!");
        return;
    }

    const formData = {

        titulus:titulus,
        vezeteknevnev:vezeteknevtnev,
        keresztnevnevnev:keresztnev,
        nem1:nem1,
        nem2:nem2,
        kor:kor,
        likert:likert.value
    };

    console.log(formData);




}   