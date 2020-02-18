import {categories} from '../data/store'

class CategoryService {
    getAll() {
        return categories
    }

    get(categoryId) {
        const category = categories.find(c => c.id === categoryId);
        return category;
    }
}

export default new CategoryService();