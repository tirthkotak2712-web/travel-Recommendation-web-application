function searchDestination(){

    let keyword =
    document.getElementById("searchInput")
    .value.toLowerCase();

    let results =
    document.getElementById("results");

    if(keyword === "beach"){

        results.innerHTML = `
        <h2>Beach Recommendations</h2>

        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500" width="300">

        <img src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=500" width="300">

        <p>Maldives Beach and Bora Bora Beach</p>
        `;
    }

    else if(keyword === "temple"){

        results.innerHTML = `
        <h2>Temple Recommendations</h2>

        <img src="temple1.jpg" width="300">

        <img src="temple2.jpg" width="300">

        <p>Golden Temple and Angkor Wat</p>
        `;
    }

    else if(keyword === "country" || keyword === "countries"){

        results.innerHTML = `
        <h2>Country Recommendations</h2>

        <img src="country1.jpg" width="300">
        <p>Japan - Beautiful culture and technology.</p>

        <img src="country2.jpg" width="300">
        <p>Australia - Famous for beaches and wildlife.</p>
        `;
    }

    else{
        results.innerHTML =
        "<h3>No recommendations found.</h3>";
    }
}

function clearResults(){
    document.getElementById("searchInput").value="";
    document.getElementById("results").innerHTML="";
}