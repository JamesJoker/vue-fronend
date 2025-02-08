import apiRequest from "./apiRequest";
import APIPath from "./BackendAPI/api_path";

class Member {
    id: number | undefined;
    name: string | undefined;

    init(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    create(member: Member): Promise<any> {
        let headers = {
            'content-type': 'application/json'
        }
        return apiRequest.post(APIPath.Member(), JSON.stringify(member), headers);
    }

    modify(member: Member): Promise<any> {
        let headers = {
            'content-type': 'application/json'
        }
        return apiRequest.put(APIPath.Member(), JSON.stringify(member), headers);
    }

    delete(member: Member): Promise<any> {
        let headers = {
            'content-type': 'application/json'
        }
        return apiRequest.delete(APIPath.Member(), JSON.stringify(member), headers);
    }
}

export default Member;