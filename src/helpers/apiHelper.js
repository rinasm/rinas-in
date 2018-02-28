/**
 * Created by intellicar-rinas on 9/8/17.
 */
const apiHelper = {

    validateResponse: (resp) => {
        if(resp && resp.data && resp.data.data != null){
            return resp.data.data;
        }
        return resp;
    },

    validateFailure: (resp) => {
        if(!(resp && resp.message === 0)){
            return Promise.reject(resp);
        }else{
            return Promise.reject(0);
        }
    },

};

export default apiHelper;

export const processAssetList = (name, id, type, idFromPath) => {
    let path;
    return (list) => {

        if(list.constructor !== Array)
            list = [];

        for(let idx in list){
            if(idFromPath){
                if(!list[idx][id]){
                    console.error("Group Processing Failed, group without grouppath Found!")
                    continue;
                }

                path = list[idx][id].split("/");
                path = path.slice(path.length-2, path.length-1);
                list[idx].id = parseInt(path[0], 10);
            }else{
                list[idx].id = list[idx][id];
            }
            list[idx].name = list[idx][name];
            list[idx].type = type;
        }
        return list;
    }
};

export const processAssetInfo = (data) => {
    for(let idx in data){
        try{
            data[idx].data = JSON.parse(data[idx].data);
        } catch (e) {
            console.warn("Meta Data Parsing failed")
        }
    }
    return data;
};