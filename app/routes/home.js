import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default class HomeRoute extends Route {

    @inject api;

    queryParams = ["searchTerm"];

    queryParams = {
        searchTerm: {
            refreshModel: true
        }
    };

    async model(params){
        return await this.api.getImages(params.searchTerm);
    }
}
