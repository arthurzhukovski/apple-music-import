import nodeFetch from 'node-fetch';
import {commonHeaders, mediaUserToken, commonFetchParams} from './settings.js';

export default function searchForSong() {
    const processResult = (parsed)=>{
        console.log(`Found ${parsed.data.length} songs...`)
        return parsed.data;
    };
    return nodeFetch("https://amp-api.music.apple.com/v1/me/library/songs?limit=100&l=en-gb&platform=web", {
        "headers": {...commonHeaders,
            "media-user-token": mediaUserToken,
        },
        ...commonFetchParams,
        "method": "GET"
    }).then(res=> res.json().then(processResult));
}