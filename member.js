function skillsMember() {
    // 1. Get the data from the API
    fetch("https://api.npoint.io/5abcca6f4e39b4955965")
        .then(response => response.json())
        .then(data => {
            // 2. Loop through the data
            data.forEach(member => {
                // 3. Create HTML elements for each member
                const memberElement = document.createElement("div");
                memberElement.classList.add("member");
                memberElement.innerHTML = `
                    <img src="${member.image}" alt="${member.name}" />
                    <h3>${member.name}</h3>
                    <p>${member.skills}</p>
                `;
                // 4. Append the HTML elements to the DOM
                document.querySelector("#members").append(memberElement);
            });
        });
} 