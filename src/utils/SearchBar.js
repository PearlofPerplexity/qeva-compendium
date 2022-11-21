import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { SearchIcon, CloseIcon } from "./icon";
import { CHARACTERS } from '../assets/shared/CHARACTERS';
import { CLASSES } from '../assets/shared/CLASSES';
import { DIVINE } from '../assets/shared/DIVINE';
import { DRACES } from '../assets/shared/DRACES';
import { FAUNA } from '../assets/shared/FAUNA';
import { FLORA } from '../assets/shared/FLORA';
import { GEMS } from '../assets/shared/GEMS';
import { HISTORY } from '../assets/shared/HISTORY';
import { LOCATIONS } from '../assets/shared/LOCATIONS';
import { RACES } from '../assets/shared/RACES';


const SearchBar = () => {
    
    const allArrays = [
        ...CHARACTERS, 
        ...CLASSES, 
        ...DIVINE, 
        ...DRACES, 
        ...FAUNA,
        ...FLORA,
        ...GEMS,
        ...HISTORY,
        ...LOCATIONS,
        ...RACES
    ]

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        let data = allArrays.flat(10);
        let newFilter = data.filter
        (value => {
            return Object.keys(value).some(key =>
                value[key].toString().toLowerCase().includes(wordEntered.toString().toLowerCase())
            )
        });
        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setWordEntered([]);
    };

    return (
            <div className="searchbar rounded-2">
                <div className="d-flex align-items-center">
                    <input 
                        type='text'
                        className='form-control border-0'
                        placeholder="Search Compendium..."
                        value={wordEntered}
                        onChange={handleFilter}
                    />
                    <div className="searchIcon d-flex align-items-center">
                        {wordEntered.length === 0 ? (
                            <i className={SearchIcon}></i>
                        ) : (<i className={CloseIcon} id="clearBtn" onClick={clearInput}></i>)}
                    </div>
                </div>
                {wordEntered.length != 0 && filteredData.length != 0 ? (
                    <div className="dataResult rounded-2">
                        {filteredData.map((value, key) => (
                            filteredData.length === 0 ? ('') : (
                                <Link className='dataItem' to={value.link} key={key} onClick={clearInput}>
                                    <p>"{wordEntered}" found in {value.name}</p>
                                </Link>
                            )
                        ))}
                    </div>
                ) : wordEntered.length !=0 && filteredData.length === 0 ?(
                    <div className="dataResult rounded-2">
                        <div className="dataItem">
                            <p className="fst-italic">No Results Found for "{wordEntered}"</p>
                        </div>
                    </div>
                ) : ('')}
            </div>
    );
}

export default SearchBar;