class Database {
    #storage = {
        authors: [],
        books: [],
        posters: [],
        orders: [],
        users: []
    }

    find(key){
        return this.#storage[key]
    }

    saveAuthor(author){
        this.#storage.authors.push(author)
    }

    findBookByName( bookName){
        return this.#storage.books.find(b => b.name === bookName)
    }

    saveBook(book){
        const BookExists = this.findBookByName(book.name)
        if (!BookExists){
            this.#storage.books.push(book)
        }
    }

    addBooksToStock( bookName, quantity){
        const book = this.findBookByName(bookName)
        book?.addToStock(quantity)
    }

    removeBooksFromStock(bookName, quantity){
        const book = this.findBookByName(bookName)
        book?.removeFromStock(quantity)
    }

    findPosterByName( posterName){
        return this.#storage.posters.find(p => p.name === posterName)
    }

    savePoster(poster){
        const posterExists = this.findBookByName(poster.name)
        if (!posterExists){
            this.#storage.authors.push(poster)
        }
    }

    addPostersToStock( posterName, quantity){
        const poster = this.findBookByName(posterName)
        poster?.addToStock(quantity)
    }

    removePostersFromStock(posterName, quantity){
        const poster = this.findBookByName(posterName)
        poster?.removeFromStock(quantity)
    }

    saveUser(user){
        const userExists = this.#storage.users.find(u => u.email === user.email)
        if (!userExists){
            this.#storage.users.push(user)
        }
    }

    saveOrder(order){
        this.#storage.orders.push(order)
    }

    showStorage(){
        console.table(this.#storage.authors)
        console.table(this.#storage.books)
        console.table(this.#storage.posters)
        console.table(this.#storage.users)
        console.table(this.#storage.orders.map(order => order.data))
    }
}

module.exports = Database