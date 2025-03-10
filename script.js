function searchResults() {
    var searchTerm = document.getElementById("search").value.toLowerCase();
    var resultsContainer = document.getElementById("results");
    var links = {
        "1": "#",
        "2": "#"
    };

    resultsContainer.innerHTML = '';

    var matchingLinks = [];

    for (var term in links) {
        if (links.hasOwnProperty(term)) {
            if (term.toLowerCase().indexOf(searchTerm) !== -1 || searchTerm === "") {
                matchingLinks.push({ term: term, link: links[term] });
            }
        }
    }

    matchingLinks.sort(function(a, b) {
        return a.term < b.term ? -1 : (a.term > b.term ? 1 : 0);
    });

    for (var i = 0; i < matchingLinks.length; i++) {
        var result = matchingLinks[i];
        var linkElement = document.createElement("a");
        linkElement.href = result.link;

        var fontElement = document.createElement("font");
        fontElement.setAttribute("color", "blue");
        fontElement.setAttribute("face", "sans-serif");
        fontElement.setAttribute("size", "3");

        var underlineElement = document.createElement("u");
        underlineElement.appendChild(document.createTextNode(result.term));

        fontElement.appendChild(underlineElement);
        linkElement.appendChild(fontElement);

        resultsContainer.appendChild(linkElement);
        resultsContainer.appendChild(document.createElement("br"));
    }
}

window.onload = searchResults;