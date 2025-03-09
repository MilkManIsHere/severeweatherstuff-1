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
        if (links.hasOwnProperty(term) && (term.toLowerCase().indexOf(searchTerm) !== -1 || searchTerm === "")) {
            matchingLinks.push({ term: term, link: links[term] });
        }
    }

    matchingLinks.sort(function(a, b) {
        return a.term.localeCompare(b.term);
    });

    for (var i = 0; i < matchingLinks.length; i++) {
        var result = matchingLinks[i];
        var linkElement = document.createElement("a");
        linkElement.href = result.link;
        linkElement.innerText = result.term;

        var fontElement = document.createElement("font");
        fontElement.setAttribute("face", "sans-serif");
        fontElement.setAttribute("size", "3");
        fontElement.appendChild(linkElement);

        resultsContainer.appendChild(fontElement);
        resultsContainer.appendChild(document.createElement("br"));
    }
}

window.onload = searchResults;