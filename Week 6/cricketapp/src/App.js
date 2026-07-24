import React from 'react';

const ListOfPlayers = ({ players }) => {
    return (
        <div>
            {players.map((item, index) => (
                <div key={index}>
                    <li>Mr. {item.name} <span>{item.score}</span></li>
                </div>
            ))}
        </div>
    );
};

const ScoreBelow70 = ({ players }) => {
    let players70 = [];
    players.map((item) => {
        if (item.score <= 70) {
            players70.push(item);
        }
        return null;
    });

    return (
        <div>
            {players70.map((item, index) => (
                <div key={index}>
                    <li>Mr. {item.name} <span>{item.score}</span></li>
                </div>
            ))}
        </div>
    );
};

const OddPlayers = ([first, , third, , fifth]) => {
    return (
        <div>
            <li>First : {first}</li>
            <li>Third : {third}</li>
            <li>Fifth : {fifth}</li>
        </div>
    );
};

const EvenPlayers = ([, second, , fourth, , sixth]) => {
    return (
        <div>
            <li>Second : {second}</li>
            <li>Fourth : {fourth}</li>
            <li>Sixth : {sixth}</li>
        </div>
    );
};

const T20Players = ['First Player', 'Second Player', 'Third Player'];
const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

const ListOfIndianPlayers = ({ IndianPlayers }) => {
    return (
        <div>
            {IndianPlayers.map((player, index) => (
                <li key={index}>Mr. {player}</li>
            ))}
        </div>
    );
};

function App() {
    const playersData = [
        { name: "Jack", score: 50 },
        { name: "Michael", score: 70 },
        { name: "John", score: 40 },
        { name: "Ann", score: 61 },
        { name: "Elisabeth", score: 61 },
        { name: "Sachin", score: 95 },
        { name: "Dhoni", score: 100 },
        { name: "Virat", score: 84 },
        { name: "Jadeja", score: 64 },
        { name: "Raina", score: 75 },
        { name: "Rohit", score: 80 }
    ];

    const IndianTeam = ["Sachin1", "Dhoni2", "Virat3", "Rohit4", "Yuvraj5", "Raina6"];

    let flag = false;

    if (flag === true) {
        return (
            <div style={{ marginLeft: "20px" }}>
                <h1>List of Players</h1>
                <ListOfPlayers players={playersData} />
                <hr />
                <h1>List of Players having Scores Less than 70</h1>
                <ScoreBelow70 players={playersData} />
            </div>
        );
    } else {
        return (
            <div style={{ marginLeft: "20px" }}>
                <div>
                    <h1>Indian Team</h1>
                    <h1>Odd Players</h1>
                    {OddPlayers(IndianTeam)}
                    <hr />
                    <h1>Even Players</h1>
                    {EvenPlayers(IndianTeam)}
                    <hr />
                </div>
                <div>
                    <h1>List of Indian Players Merged:</h1>
                    <ListOfIndianPlayers IndianPlayers={IndianPlayers} />
                </div>
            </div>
        );
    }
}

export default App;