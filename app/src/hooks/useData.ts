import {useEffect, useState} from "react";
import httpClient from "../httpClient";
import {CategoryType, ModuleType, UserType} from '../types';
import {Alert, AlertType} from '../helpers/toaster';

const useData = (): [CategoryType[], ModuleType[], UserType[], number, boolean] => {
    const [categories, setCategories] = useState([]);
    const [users, setUsers] = useState([]);
    const [modules, setModules] = useState([]);
    const [totalModules, setTotalModules] = useState(-1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all([
            httpClient.get('/categories'),
            httpClient.get('/users/top/5'),
            httpClient.get('/modules/top/10')
        ]).then(([$category, $user, $module]) => {
            setCategories($category.data);
            setUsers($user.data);
            setModules($module.data.modules);
            setTotalModules($module.data.total);
            setLoading(false);
        }).catch(error => {
            Alert(AlertType.ERROR, error.message);
        });
    }, []);

    return [categories, modules, users, totalModules, loading];
};

export default useData;
