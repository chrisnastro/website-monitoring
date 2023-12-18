import axios from 'axios';
import { Request } from './requests';

//export allows the function to be used anywhere in the code//
export const checkUrl = async (request: Request): Promise<void> => {
    try {
        console.time(request.url);
        const response = await axios.get(request.url, request.config);
        const body = await response.data;
        if (response.status === 200) {
            const compareResult = request.compare(body);
            if (compareResult === true) {
                console.log(request.url, "OK");
            } else {
                console.log(request.url, "NOT OK")
            }
        }
        console.timeEnd(request.url);
    } catch (e: any) {
        console.log(request.url, e.code);
    }
};