function solve(arr){
    let movies = [];

    arr.forEach((element) => {
        if(element.includes('addMovie')){
            movies.push({name: element.substring(9, element.length)});
        } else if(element.includes('directedBy')){
            let [movie, director] = element.split(' directedBy ');
            let search = movies.find((m) => m.name === movie);

            if(search){
                search['director'] = director;
            }
        } else if(element.includes('onDate')){
            let [movie, date] = element.split(' onDate ');
            let search = movies.find((m) => m.name === movie);

            if(search){
                search['date'] = date;
            }
        }
    });

    movies.forEach((movie) => {
        if(movie.name && movie.date && movie.director){
            console.log(JSON.stringify(movie));
        }
    })
}

solve([
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
    ]
);