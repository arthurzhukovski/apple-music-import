import nodeFetch from 'node-fetch';
import {commonHeaders, mediaUserToken, commonFetchParams} from './settings.js';

export default function searchForSong(search) {
    const processResult = (parsed)=>{
        const allFoundItems = parsed.results.song.data.filter(i => i.type === 'songs');
        let foundTrack = allFoundItems[0];
        if(foundTrack.attributes.contentRating === 'clean'){
            console.log('Trying to find uncensored version if possible...');
            const uncensoredAlternative = allFoundItems.find(t => t.attributes.name.indexOf(foundTrack.attributes.name !== -1) && t.attributes.artistName === foundTrack.attributes.artistName && t.attributes.contentRating === 'explicit');
            if(uncensoredAlternative){
                console.log('Found!');
                foundTrack = uncensoredAlternative ? uncensoredAlternative : foundTrack;
            }else{
                console.log('Not found :(');
            }

        }
        return {id: foundTrack.id, name: `${foundTrack.attributes.artistName} - ${foundTrack.attributes.name}`};
    };
    return nodeFetch("https://amp-api.music.apple.com/v1/catalog/ru/search?term="+search+"&l=en-gb&platform=web&types=activities%2Calbums%2Capple-curators%2Cartists%2Ccurators%2Ceditorial-items%2Cmusic-movies%2Cmusic-videos%2Cplaylists%2Csongs%2Cstations%2Ctv-episodes%2Cuploaded-videos%2Crecord-labels&limit=25&relate%5Beditorial-items%5D=contents&include[editorial-items]=contents&include[albums]=artists&include[songs]=artists&include[music-videos]=artists&extend=artistUrl&fields[artists]=url%2Cname%2Cartwork%2Chero&fields%5Balbums%5D=artistName%2CartistUrl%2Cartwork%2CcontentRating%2CeditorialArtwork%2Cname%2CplayParams%2CreleaseDate%2Curl&with=serverBubbles%2ClyricHighlights&art%5Burl%5D=c%2Cf&omit%5Bresource%5D=autos", {
        "headers": {...commonHeaders,
            "media-user-token": mediaUserToken,
        },
        ...commonFetchParams,
        "method": "GET"
    }).then(res=> res.json().then(processResult));
}