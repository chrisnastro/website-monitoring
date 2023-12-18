export class Request {
    url = ""
    config = {}
    constructor(url: string, config = {}) {
        this.url = url;
        this.config = config;
    }
    compare(body: any): boolean {
        return true;
    }
}


export class GithubRepos extends Request {
    constructor(url: string, config = {}) {
        super(url, config)
    }
    compare(body: any): boolean {
        console.log(body[0].id)
        const reposWithIds = body.filter((repo: any) => repo.id)
        return body.length === reposWithIds.length;
    }
}

const githubRepos = new GithubRepos('https://api.github.com/orgs/nodejs/repos')
const netflixRepos = new Request('https://api.github.com/users')
const tripAdvisor = new Request('https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=', { 
    headers: { 'X-RapidAPI-Key': '261cf2e304msh1aa969bcf7b92f1p18970ejsna94988a201e7', 'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com' } })
const twitterRepos = new Request('https://api.github.com/orgs/twitter/repos')

export const requests: Request[] = [githubRepos, netflixRepos, tripAdvisor, twitterRepos]