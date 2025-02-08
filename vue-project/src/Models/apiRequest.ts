class apiRequest {

    get(url: string, headers: any): Promise<any> {
        return new Promise((resolve, reject) => {
            fetch(url,{
                headers: headers
            })
            .then((response) => {resolve(response)})
            .catch((error) => {reject(error)})
        })
    }

    post(url: string, data: string, headers: any): Promise<any> {
        return new Promise((resolve, reject) => {
            fetch(url, {
                body: data,
                headers: headers,
                method: "POST"
            })
            .then((response) => {resolve(response)})
            .catch((error) => {reject(error)})
        })
    }

    put(url: string, data: string, headers: any): Promise<any> {
        return new Promise((resolve, reject) => {
            fetch(url, {
                body: data,
                headers: headers,
                method: "PUT"
            })
            .then((response) => {resolve(response)})
            .catch((error) => {reject(error)})
        })
    }

    delete(url: string, headers: any): Promise<any> {
        return new Promise((resolve, reject) => {
            fetch(url, {
                headers: headers,
                method: "DELETE"
            })
            .then((response) => {resolve(response)})
            .catch((error) => {reject(error)})
        })
    }
}

export default new apiRequest();