import APIPath from "./BackendAPI/api_path";
import apiRequest from "./apiRequest";

class HouseWork {
    id: string | undefined;
    workId: number | undefined;
    ownerId: number | undefined;
    date: number | undefined;

    init(id: string, workId: number, ownerId: number, date: number) {
        this.id = id;
        this.workId = workId;
        this.ownerId = ownerId;
        this.date = date;
    }

    create(workId: number, ownerId: number, date: number): Promise<any> {
        let headers = {
            'content-type': 'application/json'
        }

        let work = {
            workid: workId,
            ownerId: ownerId,
            date: date
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
            'content-type': 'application/json',
            'workId': work.id
        }
        return apiRequest.delete(APIPath.HouseWork(), headers);
    }
}

export default HouseWork;