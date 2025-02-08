import apiRequest from "./apiRequest";
import APIPath from "./BackendAPI/api_path";

class Work {
    id: number | undefined;
    name: string | undefined;
    ownergroup: string[] | undefined;
    frequency: string | undefined;

    init(id: number, name: string, ownergroup: string[], frequency: string) {
        this.id = id,
        this.name = name;
        this.ownergroup = ownergroup;
        this.frequency = frequency;
    }

    create(work: Work) {
        let headers = {
            'content-type': 'application/json'
        }
        return apiRequest.post(APIPath.HouseWork(), JSON.stringify(work), headers);
    }

    modify(work: Work) {
        let headers = {
            'content-type': 'application/json'
        }
        return apiRequest.put(APIPath.HouseWork(), JSON.stringify(work), headers);
    }

    delete(work: Work) {
        let headers = {
            'content-type': 'application/json',
            'workId': work.id
        }
        return apiRequest.delete(APIPath.HouseWork(), headers);
    }
}

export default Work;