export default o =>
    Object.keys(o).map(key => `${key}=${o[key]}`).join('&');
