import Axios from "axios";

export class Services {
  private static serverUrl =
    "https://2jdg5klzl0.execute-api.us-west-1.amazonaws.com/default/EmployeesChart-Api";

  private static apiURL = "https://api.genderize.io/";

  public static async getTopLevel() {
    return Axios.get(`${this.serverUrl}?manager=0`)
      .then(res => res.data)
      .catch(error => console.error(error));
  }

  public static async getChildren(id: number) {
    return Axios.get(`${this.serverUrl}?manager=${id}`)
      .then(res => res.data)
      .catch(error => console.error(error));
  }

  public static async getAll() {
    return Axios.get(`${this.serverUrl}`)
      .then(res => res.data)
      .catch(error => console.error(error));
  }

  public static async getGenderByName(name: string) {
    return Axios.get(`${this.apiURL}?name=${name}`)
      .then(res => res.data)
      .catch(error => console.log(error));
  }
}
