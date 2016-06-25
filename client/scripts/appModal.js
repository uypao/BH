import { Service } from 'angular-ecmascript/module-helpers';
 
export default class NewAppModal extends Service {
  constructor() {
    super(...arguments);
 
   
  }
 
  showModal(templateUrl) {
    this.scope = this.$rootScope.$new();
 
    this.$ionicModal.fromTemplateUrl(templateUrl, {
      scope: this.scope
    })
    .then((modal) => {
      this.modal = modal;
      this.modal.show();
    });
  }
 
  hideModal() {
    this.scope.$destroy();
    this.modal.remove();
  }
}
 
NewAppModal.$name = 'NewModal';
NewAppModal.$inject = ['$rootScope', '$ionicModal'];