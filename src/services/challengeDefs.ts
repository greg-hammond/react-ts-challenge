import { IChallenge } from "../interfaces/IChallenge"

// this approach allows us to add a new challenge simply by defining it here.

export const challengeDefs: IChallenge[] = [
    {
        title: 'Temperature Converter',
        tabLabel: 'Temp Converter',
        description: 'Convert temperature values between Fahrenheit and Celsius.',
        instructions: 'Select Fahrenheit or Celsius, then enter a temperature value.  Click "Convert" to calculate.',
        radioButtons: [
            { label: "Celsius", value: "0"},
            { label: "Fahrenheit", value: "1"}
        ],
        buttonLabel: 'Convert',
        function: function(usrInput: string) { 
            const temp = parseInt(usrInput) * 1.8 + 32
            return `${Math.round(temp * 100) / 100} °F`
        }
    },
    {
        title: 'Palindrome Tester',
        description: 'Determine whether a given input string is a valid palindrome.',
        tabLabel: 'Palindrome Tester',
        instructions: 'Enter a test string, then click "Test" to see if the input string is a palindrome.',
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
        buttonLabel: 'Factor',
        function: function(usrInput: string | number) {
            const startNum: number = +usrInput
            if (!startNum) return "Invalid or non-numeric input encountered."
            let factors: number[] = []
            let remainder = startNum
            // getNextFactor: get next prime factor candidate after 'curFactor'. 
            // 'remainder' is what's left of our startNum.  Passed in as a stop-point:
            // if nextPrime becomes greater than the sqrt(remainder), then there IS NO next prime and we're done
            const getNextFactor = (factor: number) => {
                let next = (factor === 2 ? 3 : factor + 2)   // 2, 3, 5, 7, 9, ...
                return (next > Math.pow(remainder, 0.5)) ? -1 : next
            }
            const extractFactor = (factor: number): void => {
                const mod = remainder % factor
                if (mod === 0) {
                    factors.push(factor)
                    remainder = Math.floor(remainder/factor)
                    extractFactor(factor)
                } else {
                    // no more factors of 'factor' available.  find next factor.
                    // if no more, then we're done.
                    let next = getNextFactor(factor)
                    if (next > 0) {
                        extractFactor(next)
                    }
                    // else we'll fall thru this function when we're done (next === -1)
                }
            }
            // kick it off:
            extractFactor(2)
            // whatever's left (if anything) is also a prime factor
            if (remainder > 1) factors.push(remainder)      
            return `Prime factors list: ${factors}`
        }
    }
];

