class Post {
    constructor({
        postAuthorName,
        postAuthorImgSrc,
        postImgSrc,
        postText
    }) {
        this.postAuthorName = postAuthorName;
        this.postAuthorImgSrc = postAuthorImgSrc;
        this.postImgSrc = postImgSrc;
        this.postText = postText;

        let postContainer = document.createElement("article");
        postContainer.classList.add("post")

        let postAuthorImg = document.createElement("img");
        postAuthorImg.classList.add("post-author-img")
        postAuthorImg.src = this.postAuthorImgSrc;
        postContainer.appendChild(postAuthorImg);

        let postName = document.createElement("p");
        postName.classList.add("post-author-name")
        postName.innerText = this.postAuthorName;
        postContainer.appendChild(postName);

        let postImage = document.createElement("img");
        postImage.classList.add("post-img")
        postImage.src = this.postImgSrc;
        postContainer.appendChild(postImage);

        let postTextElement = document.createElement("p");
        postTextElement.classList.add("post-text")
        postTextElement.innerText = this.postText;
        postContainer.appendChild(postTextElement);

        let heart = document.createElement("i")
        heart.classList.add("fa-solid" ,"fa-heart", "heart")
        postContainer.appendChild(heart)

        let comment = document.createElement("i")
        comment.classList.add("fa-solid" ,"fa-comment", "comment")
        postContainer.appendChild(comment)

        let bars = document.createElement("i")
        bars.classList.add("fa-solid" ,"fa-bars", "bars")
        postContainer.appendChild(bars)

        // Agregar el contenedor del artículo al documento HTML
        document.body.appendChild(postContainer);
    }
}

