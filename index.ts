class AlbumDeLaBanda{
    title : string
    songs : string[]
    constructor(title:string, songs:string[]){
        this.title = title;
        this.songs = songs
    }
}

class Banda {
    nombre : string
    albums : AlbumDeLaBanda []
    constructor (nombre:string, albums : AlbumDeLaBanda[]){
        this.nombre=nombre;
        this.albums=albums;

    }
}

function main(){
    const unAlbum = new AlbumDeLaBanda("Cancion Animal", ["De musica ligera", "En la ciudad de la furia"]);
    const unaBanda = new Banda("Soda Stereo", [unAlbum]);
    console.log("La banda es :", unaBanda.albums);
    //console.log("Y su album mas conocido es :", unAlbum);
}

main();