import searchForSong from './searchForSong.js';
import addSong from './addSong.js';
import songNamesFromFile from './song-names.json';

(async ()=>{
    const failed = [];
    try{
        let songNames = songNamesFromFile.map(s => s.replace('\n', ' '));
        let index = songNames.length - 1;
        while(index >= 0){
            try{
                const searchResult = await searchForSong(songNames[index]);
                console.log(`[${songNames.length - index}/${songNames.length}] ${searchResult.name}`);
                const added = await addSong(searchResult.id);
                if(!added){
                    failed.push(songNames[index]);
                }
            }catch (e) {
                failed.push(songNames[index]);
            }finally {
                index--;
            }
        }
    }catch (e) {
        console.log(e);
        console.log(failed);
    }

})();