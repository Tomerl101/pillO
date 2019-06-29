import { observable, action, computed, toJS } from 'mobx';
import perscriptionsMockData from '../mock/medicine_perscription.json';

class UserStore {
  @observable currentUser = {};
  @observable isLoading = false;
  @observable perscriptionsList = [];

  constructor() {
    this.loadPerscriptions();
  }

  @computed get takenPerscriptionsCount() {
    return 2;
    // return this.perscriptionsList.filter(todo => todo.taken === true).length;
  }

  @computed get totalPerscriptionCount() {
    return this.perscriptionsList.length;
  }

  @action loadPerscriptions() {
    this.isLoading = true;
    this.perscriptionsList = perscriptionsMockData;
    this.isLoading = false;
  }
}
export default new UserStore();
