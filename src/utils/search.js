import React, {useState} from "react";

// For application:
// 1. Gut the function below and place variables above return statement
// 2. Place input within return statement
// 3. Update mapping function to map "dataSearch" as the array- example commented out below 
const Search = (props) => {

    const [filter, setFilter] = useState('');

    const searchText = (e) => {
        setFilter(e.target.value);
    }

    // let dataSearch = GEMS[0].gems.filter(item => {
    let dataSearch = props.array.filter(item => {
        return Object.keys(item).some(key =>
                item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
    });

    return (
        <input 
            type='text'
            className=' text-white form-control w-100 border-0 bg-transparent'
            placeholder="Search Here"
            value={filter}
            onChange={searchText.bind(this)}
        />
    );
}

export default Search;

// const data = { 
//     cardData: [
//         {
//             id: 1,
//             img: '',
//             title: 'Hello'
//         }
//     ] 
// }

// mapping function:
// dataSearch.map((item))
// https://www.youtube.com/watch?v=GomD1Udf4WQ&ab_channel=CodeWithYd