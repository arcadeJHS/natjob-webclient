export default setQueryString = (params = {}) => {
  if (!Object.keys(params).length) {
    return '';
  }
  const query = Object.keys(params).reduce((parts, k) => {
    if (params[k]) {
      parts.push(`${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`);
    }
    return parts;
  }, []);
  return `?${query.join('&')}`;  
};
