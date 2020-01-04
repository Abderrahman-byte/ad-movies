export const ajaxGet = (url) => {
    return new Promise((resolve,reject) => {
        var req = new XMLHttpRequest(); // CREATE A REQUEST

        // REQUEST LOADING EVENT
        req.addEventListener("load", () => {
            if(req.status >= 200 && req.status < 400) {
                resolve(JSON.parse(req.response));
            } else {
                reject(req.status + " " + req.statusText);
            }
        });

        //REQUEST ERROR EVENT
        req.addEventListener("error", () => {
            reject("Erreur de réseau " + url);
        });

        req.open("GET", url); // SET REQUEST PARAMETRE
        req.send(null); // SEND THE REQUEST
    });
}