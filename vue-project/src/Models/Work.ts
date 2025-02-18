import apiRequest from "./apiRequest";
import APIPath from "./BackendAPI/api_path";

class Work {
    id: number | undefined;
    name: string | undefined;
    ownergroup: number[] | undefined;
    frequency: string | undefined;

    init(id: number, name: string, ownergroup: number[], frequency: string) {
        this.id = id,
        this.name = name;
        this.ownergroup = ownergroup;
        this.frequency = frequency;
    }

    create(name: string, ownergroup: number[], frequency: string) {
        let headers = {
            'content-type': 'application/json'
        }
        return apiRequest.post
            (
                APIPath.HouseWork(),
                JSON.stringify({
                    name,
                    ownergroup,
                    frequency
                }),
                headers
            );
    }

    modify() {
        let headers = {
            'content-type': 'application/json'
        }
        return apiRequest.put
            (
                APIPath.HouseWork(),
                JSON.stringify({
                    id: this.id,
                    name: this.name,
                    ownergroup: this.ownergroup,
                    frequency: this.frequency
                }), 
                headers
            );
    }

    delete() {
        let headers = {
            'content-type': 'application/json',
            'workId': this.id
        }
        return apiRequest.delete(APIPath.HouseWork(), headers);
    }
}

export default Work;