export function generatePesel(fromYear: number, toYear: number, gender: 'M' | 'F'): string {
    const year = Math.floor(Math.random() * (toYear - fromYear + 1)) + fromYear;
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;
    
    let peselYear = year % 100;
    let peselMonth = month;
    
    if (year >= 2000) {
        peselMonth += 20;
    } else if (year >= 1800 && year < 1900) {
        peselMonth += 80;
    } else if (year >= 1900 && year < 2000) {
        // Bez zmian
    } else if (year >= 2100 && year < 2200) {
        peselMonth += 40;
    } else if (year >= 2200 && year < 2300) {
        peselMonth += 60;
    }
    
    // Generowanie losowych czterech cyfr
    let serial = Math.floor(Math.random() * 1000); // 3 cyfry
    let genderDigit = gender === 'M' ? 1 : 0;
    genderDigit += Math.floor(Math.random() * 5) * 2; // Zapewnienie nieparzystej dla M i parzystej dla F
    
    const peselBase = `${peselYear.toString().padStart(2, '0')}${peselMonth.toString().padStart(2, '0')}${day.toString().padStart(2, '0')}${serial.toString().padStart(3, '0')}${genderDigit}`;
    
    // Obliczanie cyfry kontrolnej
    const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
    let sum = 0;
    for (let i = 0; i < weights.length; i++) {
        sum += parseInt(peselBase[i]) * weights[i];
    }
    
    const controlDigit = (10 - (sum % 10)) % 10;
    return peselBase + controlDigit;
}

export function generateIdNumber(): string {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    
    let idNumber = '';
    for (let i = 0; i < 3; i++) {
        idNumber += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    for (let i = 0; i < 6; i++) {
        idNumber += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    
    return idNumber;
}

function extractBirthDateFromPesel(pesel: string): string {
    if (pesel.length !== 11 || isNaN(Number(pesel))) {
        throw new Error("Invalid PESEL number");
    }
    
    let year = parseInt(pesel.substring(0, 2), 10);
    let month = parseInt(pesel.substring(2, 4), 10);
    let day = parseInt(pesel.substring(4, 6), 10);
    
    if (month > 80) {
        year += 1800;
        month -= 80;
    } else if (month > 60) {
        year += 2200;
        month -= 60;
    } else if (month > 40) {
        year += 2100;
        month -= 40;
    } else if (month > 20) {
        year += 2000;
        month -= 20;
    } else {
        year += 1900;
    }
    
    return `${year.toString().padStart(4, '0')} ${month.toString().padStart(2, '0')} ${day.toString().padStart(2, '0')}`;
}