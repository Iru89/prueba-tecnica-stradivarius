export const fetchAPIGet = async (url, config) => {
    const response = await fetch(url, config);
    const json = await response.json();
    const data = { data: json };
    return data;
};
