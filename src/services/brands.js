import httpService from "./httpService"


export const getAllBrandsService = ()=>{
    return httpService("/admin/brands", "get");
}


// export const addNewBrandsService = ()=>{
//     if(data.logo) {
//         let formdata = new FormData();
//         formdata.append("original_name",original_name);
//         formdata.append("persian_name",persian_name);
//         formdata.append("descriptions",descriptions);
//         formdata.append("logo",data.logo);
//         data = formdata;
//     }
//     return httpService("/admin/brands", "post",data)
// };

