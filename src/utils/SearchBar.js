import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SearchIcon, CloseIcon } from "./icon";
import { BASICS } from "../assets/shared/BASICS";
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

const allArrays = [
    ...BASICS,
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

// Flattens objects to single level
const flatArray = (array) => {
    let topics = [];
    const flattenMembers = array.map(m => {
      if (m.topics && m.topics.length) {
        m.topics.map((topic) => {
            topic.link = m.link;
            return
        })
        topics = [...topics, ...m.topics];
      }
      return m;
    });
    return flattenMembers.concat(topics.length ? flatArray(topics) : topics);
  };

const data = flatArray(allArrays);

const SearchBar = () => {    

    // The Filtered State of the Array
    const [filteredData, setFilteredData] = useState([]);
    // The Value State of the Input Field
    const [wordEntered, setWordEntered] = useState("");
    const [placeholder, setPlaceholder] = useState("Search Compendium...");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);

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
        setPlaceholder("Search Compendium...");
    };

    const focusInput = () => {
        setPlaceholder("Search Compendium...")
    }

    const searchInput = () => {
        setPlaceholder(wordEntered);
        setWordEntered([]);
    }

    return (
            <div className="searchbar rounded-2">
                <div className="d-flex align-items-center">
                    <input 
                        type='text'
                        className='form-control border-0'
                        placeholder={placeholder}
                        value={wordEntered}
                        onChange={handleFilter}
                        onFocus={focusInput}
                    />
                    <div className="searchIcon d-flex align-items-center">
                        {wordEntered.length === 0 ? (
                            <i className={SearchIcon}></i>
                        ) : (<i className={CloseIcon} id="clearBtn" onClick={clearInput}></i>)}
                    </div>
                </div>
                {wordEntered.length !== 0 && filteredData.length !== 0 ? (
                    <div className="dataResult rounded-2">
                        {filteredData.map((value, key) => (
                            filteredData.length === 0 ? ('') : (
                                <Link className='dataItem' to={value.link} key={key} onClick={searchInput}>
                                    <p><em>"{wordEntered}"</em> found in <strong>{value.name}</strong></p>
                                </Link>
                            )
                        ))}
                    </div>
                ) : wordEntered.length !==0 && filteredData.length === 0 ?(
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