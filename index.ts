import { checkUrl } from "./src/tools/checkUrl";
import { IRequest, urls } from "./src/tools/requests";



const checkUrls = async (requests: IRequest[]) : Promise<void> => {
    //map operates on everything in the array, maps are quicker than for loops
   
    await Promise.all(requests.map(async (r): Promise<void> => {
        await checkUrl(r.url, r.config);

    })
    );
};



checkUrls(urls);