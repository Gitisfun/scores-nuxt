export class ApiCalls {
  static get(requestHandler, params, responseHandler) {
    requestHandler(params)
      .then((res) => responseHandler(res))
      .catch((err) => {
        if (err) {
          //   Notifications.errorMessage("Er ging iets fout met het ophalen van de gegevens", context);
        }
      });
  }
  static getMultiple(requestList, responseHandler) {
    Promise.all(requestList)
      .then((res) => responseHandler(res))
      .catch((err) => console.log(err));
  }
}
