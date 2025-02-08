import APIPath from "./BackendAPI/api_path";
import apiRequest from "./apiRequest";

class HouseWork {
    id: string | undefined;
    workId: number | undefined;
    ownerId: number | undefined;
    weekday: string | undefined;

    init(id: string, workId: number, ownerId: number, weekday: string) {
        this.id = id;
        this.workId = workId;
        this.ownerId = ownerId;
        this.weekday = weekday;
    }

    create(work: HouseWork): Promise<any> {
        let headers = {
            'content-type': 'application/json'
        }
        return apiRequest.post(APIPath.HouseWork(), JSON.stringify(work), headers);
    }

    modify(work: HouseWork): Promise<any> {
        let headers = {
            'content-type': 'application/json'
        }
        return apiRequest.put(APIPath.HouseWork(), JSON.stringify(work), headers);
    }

    delete(work: HouseWork): Promise<any> {
        let headers = {
            'content-type': 'application/json'
        }
        return apiRequest.delete(APIPath.HouseWork(), JSON.stringify(work), headers);
    }
}

export default HouseWork;