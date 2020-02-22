import {categories} from '../data/store';
import {apiBaseUrl} from '../constants';

class CategoryService {

    apiCategoriesUrl = `${apiBaseUrl}/categories`;

    getAll() {
        return fetch(this.apiCategoriesUrl)
            .then(response => {
                return response.json();
            })
    }

    get(categoryId) {
        const category = categories.find(c => c.id === categoryId);
        return category;
    }
}

export default new CategoryService();