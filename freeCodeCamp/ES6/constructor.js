class Book{
    constructor(author){
        this._author = author;
    }

    get writer(){
        return this._author;
    }

    set writer(updatedAuthor){
        this._author = updatedAuthor;
    }
}

const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);