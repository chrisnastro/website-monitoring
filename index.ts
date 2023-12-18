import { checkUrl } from "./src/tools/checkUrl";
import { Request, requests } from "./src/tools/requests";



const checkUrls = async (requests: Request[]) : Promise<void> => {
    //map operates on everything in the array, maps are quicker than for loops
   
    await Promise.all(requests.map(async (request): Promise<void> => {
        await checkUrl(request);

    })
    );
};



checkUrls(requests);