let song={
    title:'Blank Space',
    artist: 'Taylor Swift',
    album: '1989',
    year :2014
}
function displaySong(){
    console.log('\n------Current Song-------\n');
    console.log('Title\t:', song.title);
    console.log('Artist\t:', song.artist);
    console.log('Album\t:', song.album);
    console.log('Year\t:', song.year, '\n');
    console.log('-------------------------\n')
}
function modifySong(property, value){
    property = property.toLowerCase();
    if (song.hasOwnProperty(property)){
        song[property]=value;
        console.log(`\n${property} has been updated to: ${value}`);
    }else {
        console.log(`\nProperty ${property} not found. Please enter a valid property.`);
      }
}
function addNewSong(newSong){
    Object.assign(song,newSong);
    console.log('\nNew song has been added:');
    displaySong();
}
const args = process.argv.slice(2);
displaySong()

if (args.length === 2) {
    const property = args[0].toLowerCase(); 
    const value = args[1];

    modifySong(property, value);
    displaySong();
    console.log('to add a new song: node yourScript.js add "New Song Title" "New Artist" "New Genre" year\n');
    console.log('\nProgram closed.');
  } else if (args.length === 5 && args[0].toLowerCase() === 'add') {
    const newSong = {
      title: args[1],
      artist: args[2],
      genre: args[3],
      year: parseInt(args[4]) 
    };
  
    addNewSong(newSong);
    console.log('\nTo change property: node yourScript.js <property> <value>');
    console.log('\nProgram closed.');
  } else {
    console.log('\nTo change property\t: node yourScript.js <property> <value>');
    console.log('Example\t\t\t: node yourScript.js title "New Title"');
    console.log('Or, to add a new song\t: node yourScript.js add "New Song Title" "New Artist" "New Genre" 2022\n');
  }
