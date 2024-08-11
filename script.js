let idCount = 0;

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = idCount;
    idCount++;
}

function addBookToLibrary(bookToAdd) {
    const list = document.querySelector("#book-list");
    const bookItem = document.createElement("li");
    list.appendChild(bookItem);
    bookItem.id = bookToAdd.id;
    bookItem.classList.add("book-item");

    const bookContent = document.createElement("div");
    bookItem.appendChild(bookContent);
    bookContent.classList.add("book-content");

    const title = document.createElement("div");
    bookContent.appendChild(title);
    title.textContent = bookToAdd.title;

    const author = document.createElement("div");
    bookContent.appendChild(author);
    author.textContent = bookToAdd.author;

    const pages = document.createElement("div");
    bookContent.appendChild(pages);
    pages.textContent = bookToAdd.pages + " pages";

    const read = document.createElement("div");
    bookContent.appendChild(read);
    read.textContent = bookToAdd.read ? "Finished!" : "Not Complete.";

    const readCheckBox = new Image();
    readCheckBox.src = bookToAdd.read ? "svg/check.svg" : "svg/close-box.svg";
    bookContent.appendChild(readCheckBox);
    readCheckBox.style.filter = bookToAdd.read ? "invert(71%) sepia(92%) saturate(3027%) hue-rotate(72deg) brightness(103%) contrast(128%)" : "invert(14%) sepia(78%) saturate(6200%) hue-rotate(355deg) brightness(100%) contrast(103%)";
    readCheckBox.onclick = () => {
        bookToAdd.read = !bookToAdd.read;
        readCheckBox.src = bookToAdd.read ? "svg/check.svg" : "svg/close-box.svg";
        read.textContent = bookToAdd.read ? "Finished!" : "Not Complete.";
        readCheckBox.style.filter = bookToAdd.read ? "invert(71%) sepia(92%) saturate(3027%) hue-rotate(72deg) brightness(103%) contrast(128%)" : "invert(14%) sepia(78%) saturate(6200%) hue-rotate(355deg) brightness(100%) contrast(103%)";
    }

    const remove = new Image();
    remove.src = "svg/delete-outline.svg";
    bookContent.appendChild(remove);
    remove.onclick = () => {
        bookItem.remove();
    }
}

const tempBook = new book("The Hobbit", "J.R.R. Tolkien", 295, false);

addBookToLibrary(tempBook);

