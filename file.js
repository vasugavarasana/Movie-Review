let movieReviewContainerEl = document.getElementById("reviewsContainer");

let heading = document.createElement("h1");
heading.textContent = "Movie Reviews";
heading.classList.add("review-heading");
movieReviewContainerEl.appendChild(heading);

let movieTitle = document.createElement("p");
movieTitle.classList.add("input-label", "p-10");
movieTitle.textContent = "MOVIE TITLE";
movieReviewContainerEl.appendChild(movieTitle);

let movieTitleInput = document.createElement("input");
movieTitleInput.type = "text";
movieTitleInput.id = "titleInput";
movieTitleInput.classList.add("title-input");
movieTitleInput.placeholder = "Enter a Movie Title";
movieReviewContainerEl.appendChild(movieTitleInput);

let yourReview = document.createElement("p");
yourReview.classList.add("input-label", "pt-6");
yourReview.textContent = "YOUR REVIEW";
movieReviewContainerEl.appendChild(yourReview);

let yourReviewTextArea = document.createElement("textarea");
yourReviewTextArea.classList.add("review-textarea");
yourReviewTextArea.placeholder = "Enter Your Review";
yourReviewTextArea.rows = "4";
yourReviewTextArea.cols = "23";
yourReviewTextArea.id = "reviewTextarea";
movieReviewContainerEl.appendChild(yourReviewTextArea);

let lineBr = document.createElement("br");
movieReviewContainerEl.appendChild(lineBr);

let addButton = document.createElement("button");
addButton.textContent = "Add";
addButton.id = "addBtn";
addButton.classList.add("btn", "btn-primary");
movieReviewContainerEl.appendChild(addButton);

addButton.onclick = function() {
    let movieTitle = movieTitleInput.value;
    let movieReview = yourReviewTextArea.value;

    if (movieTitle === "") {
        alert("Enter The Movie Title");
        return;
    } else {
        let movieTitleEl = document.createElement("h1");
        movieTitleEl.textContent = "Movie Title:" + movieTitle;
        movieTitleEl.classList.add("movie-title");
        movieReviewContainerEl.appendChild(movieTitleEl);

        let movieReviewEl = document.createElement("p");
        movieReviewEl.textContent = "Review:" + movieReview;
        movieReviewContainerEl.appendChild(movieReviewEl);

        movieTitleInput.value = "";
        yourReviewTextArea.value = ""
    }
}
