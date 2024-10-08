let idCount = 0;

class Book {
    #title;
    #author;
    #pages;
    #read;
    #id;
    constructor(title, author, pages, read, idCount) {
        this.#title = title;
        this.#author = author;
        this.#pages = pages;
        this.#read = read;
        this.#id = idCount;
    }

    get title() {
        return this.#title;
    }

    get author() {
        return this.#author;
    }

    get pages() {
        return this.#pages;
    }

    get read() {
        return this.#read;
    }

    set read(status) {
        this.#read = status;
    }

    get id() {
        return this.#id;
    }
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

const tempBook = new Book("The Hobbit", "J.R.R. Tolkien", 295, false, idCount);
idCount++;

addBookToLibrary(tempBook);

const openModal = document.querySelector("#add-book");
const modal = document.querySelector("#add-book-modal");
const closeModal = document.querySelector("#modal-closer");
openModal.onclick = () => {
    modal.showModal();
}

closeModal.onclick = () => {
    modal.close();
}

const submitBook = document.querySelector("#add-book-btn");
const form = document.querySelector(".modal-container");
submitBook.onclick = () => {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    if (title === "") {
        document.querySelector("#title").classList.add("not-filled");
        return;
    }
    document.querySelector("#title").classList.remove("not-filled");
    if (author === "") {
        document.querySelector("#author").classList.add("not-filled");
        return;
    }
    document.querySelector("#author").classList.remove("not-filled");
    if (pages === "" || pages <= 0) {
        document.querySelector("#pages").classList.add("not-filled");
        return;
    }
    document.querySelector("#pages").classList.remove("not-filled");
    const newBook = new Book(title, author, pages, read, idCount);
    idCount++;
    addBookToLibrary(newBook);
    modal.close();
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = "";
    document.querySelector("#read").checked = false;
}