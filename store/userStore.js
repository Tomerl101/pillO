import { observable, action, computed } from 'mobx'
import perscriptionsMockData from '../mock/medicine_perscription.json'
import TODO_FILTER from '../constants/todoFilter'

class UserStore {
  @observable currentUser = {}
  @observable isLoading = false
  @observable perscriptionsList = []
  @observable isModalVisible = false
  @observable filter = TODO_FILTER.NOT_TAKEN

  constructor() {
    this.loadPerscriptions()
  }

  @computed get takenPerscriptionsCount() {
    return this.perscriptionsList.filter(p => p.taken === true).length
  }

  @computed get totalPerscriptionCount() {
    return this.perscriptionsList.length
  }

  @computed get filteredPerscription() {
    switch (this.filter) {
      case TODO_FILTER.ALL:
        return this.perscriptionsList
      case TODO_FILTER.NOT_TAKEN:
        return this.perscriptionsList.filter(p => !p.taken)
      case TODO_FILTER.TAKEN:
        return this.perscriptionsList.filter(p => p.taken)
    }
  }

  @action loadPerscriptions() {
    this.isLoading = true
    this.perscriptionsList = perscriptionsMockData
    this.isLoading = false
  }

  @action setModalVisible(visible) {
    this.isModalVisible = visible
  }

  @action setFilter(filter) {
    this.filter = filter
  }

  setTaken(id) {
    this.perscriptionsList[id].taken = true
    this.perscriptionsList[id].color = 'GRAY'
  }
}
export default new UserStore()
