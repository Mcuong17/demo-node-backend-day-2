class PaginationService {
    
  apply(service) {
    if(!service.model) {
        throw Error("Model is require for pagination")
    }
    service.pagination = async (page, limit = 20, userId) => {
      const offset = (page - 1) * limit;
      console.log(userId)
      const rows = await service.model.findAll(limit, offset, userId);
      const count = await service.model.count();

      const pagination = {
        current_page: page,
        total: count,
        per_page: limit,
      };
      if (rows.length) {
        pagination.from = offset + 1;
        pagination.to = offset + limit;
      }

      return {
        rows,
        pagination,
      };
    };
  }
}

module.exports = new PaginationService();
