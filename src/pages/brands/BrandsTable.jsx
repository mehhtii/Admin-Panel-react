import React, { useEffect, useState } from 'react';
import PaginatedTable from '../../components/PaginatedTable';
import Actions from './tableAdditional/Actions';
import { apiPath } from '../../services/httpService';
import { getAllBrandsService } from '../../services/brands';

const Brandstable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoding] = useState(false)

    const dataInfo = [
        {field: "id", title:"#"},
        {field:"original_name", title:"عنوان لاتین"},
        {field:"persian_name",title:"عنوان فارسی"},
        {field:"description",title:"توضیحات"},
    ];

    const additionField = [
        {
            title:"لوگو",
            elements: (rowData)=>
            rowData.logo ? <img src={apiPath+"/"+rowData.logo} width={40} /> : null
        },
        {
            title:"عملیات",
            elements: (rowData)=> <Actions rowData={rowData}/>
        }
    ]

    const searchParams = {
        title:"جستجو",
        placeholder:"قسمتی از عنوان",
        searchField:"original_name",
    }

    const handleGetAllBrands = async ()=>{
        setLoding(true);
        const res = await getAllBrandsService();
        res && setLoding(false)
        if (res.status === 200) {
            setData(res.data.data);
        }
    }

    useEffect(()=>{
        handleGetAllBrands();
    },[])
    return (
        <>
        <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionField={additionField}
        numOfPAge={8}
        searchParams={searchParams}
        loading={loading}
        />
        </>
    );
}

export default Brandstable;
