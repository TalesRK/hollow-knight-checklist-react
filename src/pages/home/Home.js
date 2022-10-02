import { useState, useEffect } from 'react'

import './Home.scss'
import { header } from '../../static/img'
import { gameData } from '../../constants/gameData'
import ChecklistGroup from '../../components/ChecklistGroup'

const STORAGE_KEY = 'I_LOVE_THIS_GAME_SO_FKIN_MUCH'
const INITIAL_TOTAL_AMOUNT = 123

let remainingItems = INITIAL_TOTAL_AMOUNT
let currentPercent = 0.0

console.log(gameData)

function Home() {
    const [checkedBoxes, setCheckedBoxes] = useState([])

    useEffect(() => {
        const storedContent = localStorage.getItem(STORAGE_KEY)

        if (storedContent) {
            Object.entries(gameData).forEach((category) => {
                category[1].content.forEach((item) => {
                    if (storedContent.includes(item.id)) {
                        currentPercent += item.percent
                        remainingItems--
                    }
                })
            })
            setCheckedBoxes(JSON.parse(storedContent))
        }
    }, [])

    function handleBoxChange(item) {
        let addToList = !checkedBoxes.includes(item.id)

        let newCheckedBoxes
        if (addToList) {
            newCheckedBoxes = [...checkedBoxes, item.id]
            currentPercent += item.percent
            remainingItems--
        } else {
            newCheckedBoxes = checkedBoxes.filter(
                (savedId) => savedId !== item.id
            )
            currentPercent -= item.percent
            remainingItems++
        }
        updateAndSaveCheckBox(newCheckedBoxes)
    }

    function updateAndSaveCheckBox(checkBoxes) {
        setCheckedBoxes(checkBoxes)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(checkBoxes))
    }

    function uncheckAllItems() {
        updateAndSaveCheckBox([])
        remainingItems = INITIAL_TOTAL_AMOUNT
        currentPercent = 0
    }

    function renderCategory(category) {
        const data = gameData[category]

        return (
            <ChecklistGroup
                data={data}
                onCheckboxChange={handleBoxChange}
                values={checkedBoxes}
            />
        )
    }

    return (
        <div className="home">
            <div className="logo-display">
                <div className="image-container">
                    <img src={header} className="image" alt="logo" />
                </div>
                <div className="title">
                    <span>112% Completion Checklist</span>
                </div>
                <div className="subtitle">
                    <span>{`${remainingItems} item${
                        remainingItems > 0 ? 's' : ''
                    } remaining. `}</span>
                    <button
                        className="uncheck-button"
                        onClick={() => uncheckAllItems()}
                    >
                        {'Uncheck all'}
                    </button>
                </div>
                <div className="percent">
                    <span>{parseFloat(currentPercent).toFixed(2)}% Done</span>
                </div>
            </div>
            <div className="information-group">
                <div className="information-column">
                    {renderCategory('bosses')}
                    {renderCategory('dream_nail')}
                    {renderCategory('nail')}
                    {renderCategory('nail_arts')}
                    {renderCategory('charms')}
                </div>
                <div className="information-column">
                    {renderCategory('equipment')}
                    {renderCategory('spells')}
                    {renderCategory('mask_shards')}
                    {renderCategory('vessel_fragments')}
                    {renderCategory('colosseum')}
                    {renderCategory('dreamers')}
                    {renderCategory('godhome')}
                </div>
            </div>

            <div className="footer">
                <p>
                    This is an open-source project,
                    <a href="https://github.com/TalesRK/hollow-knight-checklist-react">
                        {' view the code on GitHub'}
                    </a>
                    .
                </p>
                <br />
                <p>
                    Created by{' '}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/TalesRK"
                    >
                        Thevir
                    </a>{' '}
                    and{' '}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/Tuane97"
                    >
                        CatScratch
                    </a>
                    {' based on '}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.reddit.com/user/nebulatron"
                    >
                        nebulatron
                    </a>
                    's{' '}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://hollowknightchecklist.com/"
                    >
                        checklist project
                    </a>
                    .
                </p>
                <p>
                    Graphics sourced from{' '}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.vecteezy.com/free-vector/art-nouveau"
                    >
                        Art Nouveau Vector by Vecteezy
                    </a>
                    ,{' '}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://subtlepatterns.com"
                    >
                        subtlepatterns.com
                    </a>
                    , and the{' '}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://hollowknight.fandom.com/wiki/Hollow_Knight_Wiki"
                    >
                        Fandom Wiki
                    </a>
                    .
                </p>
                <br />
                <p>
                    This is a fan project; we are not affiliated with{' '}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://teamcherry.com.au/"
                    >
                        Team Cherry
                    </a>
                    .
                </p>
                <p>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.hollowknight.com/"
                    >
                        Buy Hollow Knight
                    </a>
                    , it's pretty great.
                </p>
            </div>
        </div>
    )
}

export default Home
