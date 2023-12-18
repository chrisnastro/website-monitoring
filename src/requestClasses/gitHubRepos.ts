import { Request } from "../tools/requests";

export class GitHubRepos extends Request {
    constructor (url:string, config = {}){
    super(url,config)
}
    compare(body: any): boolean {
        console.log(body[0].id)
        return true;
    }
}

export const gitHubRepos = new Request('https://api.github.com/orgs/nodejs/repos');