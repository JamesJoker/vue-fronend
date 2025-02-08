import HouseWork from "./HouseWork";
import Work from "./Work";
import Member from "./Member";
import APIPath from "./BackendAPI/api_path";
import apiRequest from "./apiRequest";

class HouseWorkDetail extends HouseWork {
    workname: string | undefined;
    ownername: string | undefined;

    constructor(housework: HouseWork, work: string, owner: string){
        super();
        this.id = housework.id;
        this.workId = housework.workId;
        this.ownerId = housework.ownerId;
        this.weekday = housework.weekday;
        this.workname = work;
        this.ownername = owner;
    }
}

class HouseWorkManager {
    Works: Work[];
    Members: Member[];
    HouseWorks: HouseWork[];
    HouseWorkDetails: HouseWorkDetail[];

    constructor(){
        this.Works = [];
        this.Members = [];
        this.HouseWorks = [];
        this.HouseWorkDetails = [];
    }

    async init(){
        this.Works = await this.getWorks();
        this.Members = await this.getMembers();
        this.HouseWorks = await this.getHouseworks();
        this.HouseWorkDetails = await this.getHouseWorkDetail();
    }


    getHouseWorkDetail() {
        let details: HouseWorkDetail[] = [];
        for(let housework of this.HouseWorks){
            let detail = new HouseWorkDetail(housework, '', '');
            detail.workname = this.getWorkname(detail.workId ?? -1);
            detail.ownername = this.getOwnername(detail.ownerId ?? -1);
            details.push(detail);
        }
        return details;
    }


    getWorkname(workId: number): string | undefined{
        if(workId < 0) return undefined;

        let work = this.Works.find(w => workId === w.id);
        return work?.name;
    }

    getOwnername(ownerId: number): string | undefined{
        if(ownerId < 0) return undefined;

        let owner = this.Members.find(m => ownerId === m.id);
        return owner?.name;
    }

    async getWorks(): Promise<Work[]> {
        let url = APIPath.Work() + 's';
        let headers = {
            'content-type': 'application/json'
        }
        let result = await apiRequest.get(url, headers);
        let works: Work[] = []
        for (let res of JSON.parse(result)){
            let work = new Work();
            work.init(res.id, res.name, res.ownergroup, res.frequency);
            works.push(work);
        }
        return works;
    }

    async getMembers(): Promise<Member[]> {
        let url = APIPath.Member() + 's';
        let headers = {
            'content-type': 'application/json'
        }
        let result = await apiRequest.get(url, headers);
        let members: Member[] = [];
        for (let res of result) {
            let member = new Member();
            member.init(res.id, res.name);
            members.push(member);
        }
        return members;
    }

    async getHouseworks(): Promise<HouseWork[]> {
        let url = APIPath.HouseWork() + 's';
        let headers = {
            'content-type': 'application/json'
        }
        let result = await apiRequest.get(url, headers);
        let houseworks: HouseWork[] = [];
        for (let res of result) {
            let housework = new HouseWork();
            housework.init(res.id, res.workId, res.ownerId, res.weekday);
            houseworks.push(housework); 
        }
        return houseworks;
    }
}

export default HouseWorkManager;