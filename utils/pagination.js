function paginateResults(page, limit, results) {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedResults = results.slice(startIndex, endIndex);
    return paginatedResults;
  }
  
  module.exports = {
    paginateResults,
  };
  