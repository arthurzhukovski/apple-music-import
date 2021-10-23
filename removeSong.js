import nodeFetch from 'node-fetch';
import {commonHeaders, commonFetchParams, mediaUserToken} from './settings.js';
export default function removeSong(song) {
    const processResult = (res)=>{
        console.log(res.ok ? 'deleted' : 'not deleted');
        return res.ok;
    };
    return nodeFetch(`https://amp-api.music.apple.com/v1/me/library/songs/${song.id}`, {
        "headers": {...commonHeaders,
            "music-user-token": mediaUserToken,
        },
        ...commonFetchParams,
        "method": "DELETE"
    }).then(processResult).catch(error => console.log(error));
}