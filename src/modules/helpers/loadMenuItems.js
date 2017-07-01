function loadMenuItems(onSuccess) {
    const url = '/menu.json';
    const request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            onSuccess(JSON.parse(request.responseText));
        }
    };

    request.open('GET', url, true);
    request.send();
}

export default loadMenuItems;