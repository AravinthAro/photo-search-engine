import Component from '@glimmer/component';
import { inject } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SearchHomeComponent extends Component {
    @inject api;
    @tracked searchResults = [];

    constructor(owner, args){
        super(owner, args);
    }
}