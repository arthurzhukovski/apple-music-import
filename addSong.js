import nodeFetch from 'node-fetch';
import {commonHeaders, commonFetchParams, mediaUserToken} from './settings.js';
export default function searchForSong(songId) {
    const processResult = (res)=>{
        console.log(res.ok ? 'added' : 'not added');
        return res.ok;
    };
    return nodeFetch(`https://amp-api.music.apple.com/v1/me/library?ids[songs]=${songId}`, {
        "headers": {...commonHeaders,
            "music-user-token": mediaUserToken,
        },
        ...commonFetchParams,
        "method": "POST"
    }).then(processResult);
}