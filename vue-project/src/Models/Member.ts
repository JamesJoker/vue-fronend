import apiRequest from "./apiRequest";
import APIPath from "./BackendAPI/api_path";

class Member {
    id: number | undefined;
    name: string | undefined;

    init(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    create(name: string): Promise<any> {
        let headers = {
            'content-type': 'application/json'
        }
        return apiRequest.post(APIPath.Member(), JSON.stringify(name), headers);
    }

    modify(): Promise<any> {
        let headers = {
            'content-type': 'application/json'
        }
        return apiRequest.put(APIPath.Member(), JSON.stringify({id: this.id, name: this.name}), headers);
    }

    delete(): Promise<any> {
        let headers = {
            'content-type': 'application/json',
            'id': this.id
        }
        return apiRequest.delete(APIPath.Member(), headers);
    }
}

export default Member;