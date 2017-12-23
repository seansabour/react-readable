export const getCategories = async () => {
    return fetch("http://localhost:3001/categories", {
        headers: {
            Authorization: "whatever"
        }
    })
        .then(res => res.json())
        .then(json => json);
};

// TODO: Move this into a helper file.
export const capitalize = str => {
    return `${str.slice(0, 1).toUpperCase()}${str.slice(1, str.length)}`;
};
