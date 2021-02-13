import React, {useState} from 'react';
import Filter from './components/Filter';
import Category from './components/Category';
import useData from './hooks/useData';
import Ranking from './components/Ranking';
import TopModules from './components/TopModules';

function App() {
    const [categoryIndex, setCategoryIndex] = useState(-1);
    const [categories, modules, users, total, loading] = useData();
    const [dropDownShow, setDropdownShow] = useState(false);

    const dropDownHandler = () => setDropdownShow(show => !show);
    const setCategoryHandler = (value: number) => () => {
        setDropdownShow(false);
        setCategoryIndex(value);
    };

    if(loading){
        return (
            <div>Loading...</div>
        );
    }

    return (
        <>
            <div className="container-fluid courses mt-3">
                <Filter
                    categories={categories}
                    state={dropDownShow}
                    setCategoryHandler={setCategoryHandler}
                    dropDownHandler={dropDownHandler}
                />
                {
                    categoryIndex !== -1 ? <Category category={categories[categoryIndex]}/> :
                        categories.map(($category, i) =>
                            <Category key={i} category={$category}/>)
                }
                <TopModules modules={modules}/>
                <Ranking users={users} totalModules={total}/>
            </div>
        </>
    );
}

export default App;
