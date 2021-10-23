export const token  = "Bearer eyJhbGciO... Заголовок authorization из devtools";
export const mediaUserToken  = "Al1DbSy9DJN... Заголовок media-user-token либо music-user-token из devtools";
export const commonHeaders = {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,ru-RU;q=0.8,ru;q=0.7",
    "authorization": token,
    "sec-ch-ua": "\"Chromium\";v=\"94\", \" Not A;Brand\";v=\"99\", \"Opera\";v=\"80\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
};
export const commonFetchParams = {
    "referrer": "https://music.apple.com/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "mode": "cors",
};

