import React, { useState } from 'react';
import { RACES } from "../assets/shared/RACES";
import { CLASSES } from "../assets/shared/CLASSES";

// Create help badges showing different alignments, races, etc.

const CharacterBuilder = () => {
    const [alignment, setAlignment] = useState("");
    const [raceCur, setRaceCur] = useState({});
    const [subrace, setSubrace] = useState("");
    const [subclass, setSubclass] = useState("");
    const [classCur, setClassCur] = useState({});

    const handleAlignment = (e) => setAlignment(e.target.value);
    const handleRace = (e) => {
        if (e.target.value === '') {
            setRaceCur({});
        } else {
            setRaceCur(RACES.find(event => event.name === e.target.value));
        }
        setSubrace('');
    }
    const handleSubrace = (e) => setSubrace(e.target.value);
    const handleClass = (e) => {
        if (e.target.value === '') {
            setClassCur({});
        } else {
            setClassCur(CLASSES.find(event => event.name === e.target.value));
        }
        setSubclass('');
    }
    const handleSubclass = (e) => setSubclass(e.target.value);

    return (
        <div className="container">
            <div className="row">
                <form className="col text-center">
                    {/* <button onClick={console.log(raceID)}>Checker</button> */}
                    <section className="mb-4">
                        <h2>Alignment</h2>
                        <select name='alignment' id="alignment-select" onChange={handleAlignment}>
                            <option value="">--Select an Alignment--</option>
                            <option value="Lawful Good">Lawful Good</option>
                            <option value="Neutral Good">Neutral Good</option>
                            <option value="Chaotic Good">Chaotic Good</option>
                            <option value="Lawful Neutral">Lawful Neutral</option>
                            <option value="Neutral">Neutral</option>
                            <option value="Chaotic Neutral">Chaotic Neutral</option>
                            <option value="Lawful Evil">Lawful Evil</option>
                            <option value="Neutral Evil">Neutral Evil</option>
                            <option value="Chaotic Evil">Chaotic Evil</option>
                        </select>
                    </section>
                    <section className="mb-4">
                        <h2>Race</h2>
                        <select name='races' className="mb-4" id='race-select' onChange={handleRace}>
                            <option value="">--Select a Race--</option>
                            {RACES.map((race) => (
                                <option value={race.name} key={race.id}>{race.name}</option>
                                ))}
                        </select>
                        {raceCur && (
                            <>
                                {raceCur.topics && (
                                    <>
                                        <h4>SubRace</h4>
                                        <select name='subraces' className="mb-4" id='subrace-select' onChange={handleSubrace}>
                                            <option value="">--Select Subrace--</option>
                                            {raceCur.topics.map((subrace) => (
                                                <option value={subrace.name} key={subrace.id}>{subrace.name}</option>
                                            ))}
                                        </select>
                                    </>
                                )}
                            </>
                        )}
                    </section>
                    <section className="mb-4">
                        <h2>Class</h2>
                        <select name='orders' className="mb-4" id='order-select' onChange={handleClass}>
                            <option value="">--Select a Class--</option>
                            {CLASSES.map((order) => (
                                <option value={order.name} key={order.id}>{order.name}</option>
                                ))}
                        </select>
                        {classCur && (
                            <>
                                {classCur.name === 'No Affiliation' && (
                                    <>
                                        <h4>Subclass</h4>
                                        <select name='subclasses' id='subclass-select' onChange={handleSubclass}>
                                            <option value="">--Select Subclass--</option>
                                            {classCur.topics.map((subclass) => (
                                                <option value={subclass.name} key={subclass.id}>{subclass.name}</option>
                                            ))}
                                        </select>
                                    </>
                                )}
                            </>
                        )}
                    </section>
                </form>
                <div className="col text-center">
                    <h2 className='mb-5'>Your Character</h2>
                    {alignment && (
                        !alignment.includes('Evil') ? (
                            <div className='mb-3'>
                                <h5><strong>ALIGNMENT: </strong>{alignment}</h5>
                                <p><strong>You can align to the following stones: </strong> Creator Stones, Moral Stones, Power Stones</p>
                            </div>
                        ) : (
                            <div className='mb-3'>
                                <h5><strong>ALIGNMENT: </strong>{alignment}</h5>
                                <p><strong>You can align to the following stones: </strong> Power Stones, Synthetic Stones, Dark Stones</p>
                            </div>
                        )
                    )}
                    {!(Object.keys(raceCur).length === 0) && (
                            <div className=''>
                                <h5><strong>RACE: </strong>{raceCur.name}</h5>
                                <div className='row'>
                                    <p className='col'><strong>lifespan: </strong>{raceCur.lifespan}</p>
                                    <p className='col'><strong>size: </strong>{raceCur.size}</p>
                                    <p className='col'><strong>speed: </strong>{raceCur.speed}</p>
                                </div>
                            </div>
                    )}
                    {subrace && (
                        <h5><strong>SUBRACE: </strong>{subrace}</h5>
                    )}
                    {!(Object.keys(classCur).length === 0) && (
                        <h5><strong>CLASS: </strong>{classCur.name}</h5>
                    )}
                    {subclass && (
                        <h5><strong>SUBCLASS: </strong>{subclass}</h5>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CharacterBuilder;