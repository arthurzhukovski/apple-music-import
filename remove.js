import getSongs from './getSongs.js';
import removeSong from './removeSong.js';

(async ()=>{
    const failed = [];
    try{
        let songs = await getSongs();
        let index = songs.length - 1;
        while(index >= 0){
            try{
                console.log(`[${songs.length - index}/${songs.length}] ${songs[index].attributes.artistName} - ${songs[index].attributes.name}`);
                const removed = await removeSong(songs[index]);
                console.log(removed);
                if(!removed){
                    failed.push(songs[index]);
                }
            }catch (e) {
                failed.push(songs[index]);
            }finally {
                index--;
            }
        }
    }catch (e) {
        console.log(e);
        console.log(failed);
    }

})();