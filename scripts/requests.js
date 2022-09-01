/**
 * Requests contains all the asych functions used to complete the Hangman game
 * as well as side exercises related to asych/await functions. Original file
 * was mistakenly deleted so this is a copy. It lacks the extra notes and 
 * commented-out code from the original.
 * 
 * Built with guidancce from Udemy JavaScript Bootcamp.
 * 
 * Vancevince
 * Copyright 2022
 */

/**
 * getPuzzle fetches word puzzles from a third-party site using async/await functions
 * @param {*} wordCount 
 * @returns a string representation of a random puzzle with the number of words 
 * set to the wordCount param
 */
const getPuzzle = async (wordCount) => {
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`) // could remove protocol upfront so site automatically deploys correct protocol
    
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

/**
 * getCurrentCountry makes an asynch call to a third-party website to get the
 * country requested. Not connected to the hangman game, just here for learning purposes.
 * 
 * @returns a string represenation of a country based on the country code provided
 */
const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountry(location.country)
}

/**
 * getCountry makes an asych call to a third-party website to grab a two-character string
 * representing the country code. Not part of the hangman game, just used for 
 * learning purposes. 
 * 
 * @param {*} countryCode 
 * @returns a string representing the country code of a particular nation
 */
const getCountry = async (countryCode) => {
    const response = await fetch('https://restcountries.com/v2/all')

    if (response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to fetch the country')
    }
}

/**
 * getLocation makes an asych call to a third-party website to get the IP information
 * of the user's computer. 
 * 
 * @returns a string representation of the my IP information 
 */
const getLocation = async () => {
    const response = await fetch('http://ipinfo.io/json?token=146e21986e61f9')

    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unable to get the current location')
    }
}