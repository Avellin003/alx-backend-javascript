export interface MajorCredits {
    credits: number;
    brand: string;
}


export interface MinorCredits {
    credits: number;
    brand: string;
}


export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    const totalCredits = subject1.credits + subject2.credits;
    return { credits: totalCredits, brand: 'Major' };
}


export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    const totalCredits = subject1.credits + subject2.credits;
    return { credits: totalCredits, brand: 'Minor' };
}