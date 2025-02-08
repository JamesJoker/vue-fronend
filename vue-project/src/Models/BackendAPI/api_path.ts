class APIPath {
    BaseUrl: string = "https://shenfh.ddns.net"

    Member(): string {
        return this.BaseUrl + '/api/member';
    }

    Work(): string {
        return this.BaseUrl + '/api/work';
    }

    HouseWork(): string {
        return this.BaseUrl + '/api/housework';
    }
}

export default new APIPath;