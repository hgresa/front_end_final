class MovieApi {
    getApiEndpoint() {
        return 'https://api.themoviedb.org/3/'
    }

    getApiKey() {
        return '0d4242cecb5250bad96ecfea13597111'
    }

    buildMovieElement(id, title, release_date, overview, popularity) {
        let itemBox = document.createElement('div')
        itemBox.classList.add('item-box')

        for (let i = 0; i < arguments; i++) {
            let arg = arguments[i]
            let p = document.createElement('p')
            p.innerText = arg

            itemBox.appendChild(p)
        }

        return itemBox
    }

    processMovies(movies) {
        let movie_container = document.getElementById('movie-container')

        for (let i = 0; i < movies.length; i++) {
            let movie = movies[i]

            let id = movie['id']
            let title = movie['original_title']
            let release_date = movie['release_date']
            let overview = movie['overview']
            let popularity = movie['popularity']
            let movie_element = this.buildMovieElement(id, title, release_date, overview, popularity)
            movie_container.appendChild(movie_element)
        }
    }

    makeRequest(page) {
        let self = this

        return new Promise(function (resolve, reject) {
            let url = `${self.getApiEndpoint()}movie/top_rated?api_key=${self.getApiKey()}&language=en-US&page=${page}`

            let xhr = new XMLHttpRequest()
            xhr.open('GET', url)

            xhr.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject({
                        status: this.status,
                        statusText: xhr.statusText
                    })
                }
            }

            xhr.onerror = function () {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            };

            xhr.send()
        })
    }

    getTopRatedMovies(page) {
        this.makeRequest(page).then(response => {
            this.processMovies(JSON.parse(response))
        })
    }
}

let api = new MovieApi()
api.getTopRatedMovies(1)
