import { IChallenge } from "../interfaces/IChallenge"

// we can define new challenges simply by adding another IChallenge to this array.  SOC

export const challengeDefs: IChallenge[] = [
    {
        title: 'Temperature Converter',
        tabLabel: 'Temp Converter',
        description: 'Convert temperature values between Fahrenheit and Celsius.',
        instructions: 'Select Celsius or Fahrenheit, then enter a temperature value.  Click "Convert" to calculate.',
        radioButtons: [
            { label: "Celsius", value: "°C"},
            { label: "Fahrenheit", value: "°F"}
        ],
        inputPrompt: 'Enter Temperature:',
        buttonLabel: 'Convert',
        function: function(usrInput: string, option: number) { 
            let temp: number = parseInt(usrInput)
            let symbol: string
            if (isNaN(temp)) return "Invalid temperature entry."
            if (option === 0) {
                // input is C - convert to F
                temp = temp * 1.8 + 32
                symbol = "°F"
            } else {
                // input is F - convert to C
                temp = (temp - 32) * 5/9
                symbol = "°C"
            }
            return `${Math.round(temp * 100) / 100} ${symbol}`
        }
    },
    {
        title: 'Palindrome Tester',
        description: 'Determine whether a given input string is a valid palindrome.',
        tabLabel: 'Palindrome Tester',
        instructions: 'Enter a test string, then click "Test" to see if the input string is a palindrome.',
        inputPrompt: 'String to test:',
        buttonLabel: 'Test',
        function: function(usrInput: string) { 
            const testFirstLast = (str: string): boolean => {
                const len = str.length
                if (len <= 1) return true
                if (str.charAt(0) !== str.charAt(len-1)) return false
                return testFirstLast(str.substring(1, len-1))
            }
            return `"${usrInput}" ${testFirstLast(usrInput) ? "IS" : "is NOT"} a palindrome !!`
        }
    },
    {
        title: 'Prime Factorization Calculator',
        description: 'Factor a number into its prime factors.',
        tabLabel: 'Prime Factors',
        instructions: 'Enter a numeric value, then click "Factor".  The function will return the prime factors of the input number.',
        inputPrompt: 'Number to factor:',
        buttonLabel: 'Factor',
        function: function(usrInput: string | number) {
            const startNum: number = +usrInput
            if (!startNum) return "Invalid or non-numeric input encountered."
            let factors: number[] = []
            let remainder = startNum
            // approach:  extract all factors of 2, then of 3, then of 5... until we're "done"
            const extractFactor = (factor: number): void => {
                const mod = remainder % factor
                if (mod === 0) {
                    // we found a prime factor
                    factors.push(factor)
                    remainder = Math.floor(remainder/factor)
                    extractFactor(factor)
                } else {
                    // done with this factor - find next one.
                    // if the next factor is > sqrt(remainder), then quit.  we're done.
                    let next = (factor === 2) ? 3 : factor + 2      // 2, 3, 5, 7, 9, ....
                    if (factor < Math.pow(remainder, 0.5)) {
                        extractFactor(next)
                    }
                    // else we'll fall thru this function when we're completely done
                }
            }
            // kick it off:
            extractFactor(2)
            // whatever's left (if anything) is also a prime factor
            if (remainder > 1) factors.push(remainder)      
            return `The prime factors of ${usrInput} are: ${factors}`
        }
    }
];

