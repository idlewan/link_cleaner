// Filter out utm_* query parameters
function clean_utm(requestDetails) {
    var url = new URL(requestDetails.url)
    //console.log("cleanURL utm_*", url.href);

    if (url.search.length > 0) {
        var params = url.searchParams;
        var new_params = new URLSearchParams(params);
        var needs_redirect = false;
        for (let p of params.keys()) {
            if (p.startsWith("utm_")) {
                needs_redirect = true;
                new_params.delete(p);
            }
        }
        if (needs_redirect) {
            var new_url = new URL(url);
            new_url.search = new_params.toString();
            /*console.info("Removing utm_* params from url: ",
                requestDetails.url, "  and redirection to: ",
                new_url.href);*/
            return {
                redirectUrl: new_url.href
            }
        }
    }


    return {
    }
}

browser.webRequest.onBeforeRequest.addListener(
    clean_utm,
    {urls: ["<all_urls>"],
     types:["main_frame"]},
    ["blocking"]
);


function clean_amazon(requestDetails) {
    var url = requestDetails.url;
    let dp_index = url.indexOf("/dp/");
    let next_slash_index = url.indexOf("/", dp_index + 4);
    if (url.length > next_slash_index + 1) {
        var new_url = url.substring(0, next_slash_index + 1);
        if (new_url != url) {   // try to avoid infinite redirect loops that might arise
            //console.info("Redirecting from: ", url, " to:", new_url);
            return {redirectUrl: new_url};
        }
    }
}

browser.webRequest.onBeforeRequest.addListener(
    clean_amazon,
    {urls: [
        "*://*.amazon.com/dp/*",
        "*://*.amazon.ca/dp/*",
        "*://*.amazon.co.jp/dp/*",
        "*://*.amazon.co.uk/dp/*",
        "*://*.amazon.cn/dp/*",
        "*://*.amazon.de/dp/*",
        "*://*.amazon.fr/dp/*",
        "*://*.amazon.in/dp/*",
        "*://*.amazon.it/dp/*",
        "*://*.amazon.com.mx/dp/*",
        "*://*.amazon.com.au/dp/*",
        "*://*.amazon.com.br/dp/*",

        "*://*.amazon.com/*/dp/*",
        "*://*.amazon.ca/*/dp/*",
        "*://*.amazon.co.jp/*/dp/*",
        "*://*.amazon.co.uk/*/dp/*",
        "*://*.amazon.cn/*/dp/*",
        "*://*.amazon.de/*/dp/*",
        "*://*.amazon.fr/*/dp/*",
        "*://*.amazon.in/*/dp/*",
        "*://*.amazon.it/*/dp/*",
        "*://*.amazon.com.mx/*/dp/*",
        "*://*.amazon.com.au/*/dp/*",
        "*://*.amazon.com.br/*/dp/*",
    ], types: ["main_frame"]},
    ["blocking"]
);


function clean_aliexpress(requestDetails) {
    var url = new URL(requestDetails.url)
    if (url.search.length > 0) {
        url.search = "";
        //console.info("Clean aliexpress url to:", url.href);
        return {redirectUrl: url.href};
    }
}
browser.webRequest.onBeforeRequest.addListener(
    clean_aliexpress, {
        urls: ["*://*.aliexpress.com/item/*.html*"],
        types: ["main_frame"]
    }, ["blocking"]
);
