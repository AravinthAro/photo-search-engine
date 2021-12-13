import Service from '@ember/service';
import { createApi } from "unsplash-js";
import { action } from '@ember/object';

export default class ApiService extends Service {
    api= createApi({
        accessKey:
          "5fd4beb9d2d1bbe5abbc2bec85610c2ed73b4613c62d0e950908e5c75512c91a",
      })
      @action async getImages(searchTerm) {
          const data = await this.api.search.getPhotos({query:searchTerm});
          const results = await data.response.results;
          console.log(data.response);
          return results;
      }
}
