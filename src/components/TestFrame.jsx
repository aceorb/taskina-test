import {useState} from "react";

import CustomButton from "./CustomButton/CustomButton.jsx";
import CustomListSelectItem from "./CustomListSelectItem/CustomListSelectItem.jsx";
import CustomCard from "./CustomCard/CustomCard.jsx";
import CustomDivider from "./CustomDivider/CustomDivider.jsx";

const initData =[
    false,
    true,
    false,
    false,
]

const pageData = [
    'Page 1',
    'Page 2',
    'Page 3',
    'Page 4',
]

function TestFrame() {
    const [pageSelectData, setPageSelectData] = useState(initData);
    const [allSelected, setAllSelected] = useState(false);

    const handleSelectCheck = (index) => {
        pageSelectData[index] = !pageSelectData[index];
        setPageSelectData([...pageSelectData]);
    }

    const handleSelectAll =  () => {
       let updatedPageSelectData = pageSelectData.fill(!allSelected);
       setAllSelected(!allSelected);
       setPageSelectData(updatedPageSelectData);
    }

    const handleDone = () => {
        alert('Done');
    }
    return (
        <CustomCard>
            <CustomListSelectItem text="All pages" selected={allSelected} setSelected={handleSelectAll}/>
            <CustomDivider/>
            {
                pageData.map((item, index) => (
                    <CustomListSelectItem key={index} text={item} selected={pageSelectData[index]} setSelected={() =>handleSelectCheck(index)}/>
                ))
            }
            <CustomDivider/>
            <CustomButton onClick={handleDone}/>
        </CustomCard>
    )
}
export default TestFrame;