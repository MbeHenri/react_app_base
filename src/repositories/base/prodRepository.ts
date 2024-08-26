import { API_BASE_URL } from "../../config";
import IUSPMRepository from "./repository";

class ProdBaseRepository extends IUSPMRepository {

    async connection(username: string, password: string) {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "username": username,
            "password": password,
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
        };

        return await fetch(`${API_BASE_URL}/api/token/`, requestOptions)
            .then((response) => {

                if (response.ok) {
                    return response.json()
                }
                throw new Error("Impossible de se connecter" + response.statusText);

            })
            .then((data) => {
                return {
                    access: data.access
                }
            })
    }

}

export default ProdBaseRepository;