import { Injectable }    from '@angular/core';


@Injectable()
export class StringUtilsService {

    mapToFormParamsString( dict : any) : string{
        var a = [];
        for (var key in dict) {
            if (dict.hasOwnProperty(key)) {
                a.push(key+"="+dict[key]);
            }
        }
        return a.join("&");
    }
}