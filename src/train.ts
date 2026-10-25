function countOccurrences(obj: object, str: string): number {
    let count = 0;

    for (const key in obj) {
        if (key === str) {
            count++;
        }

        const value = (obj as any)[key];

        if (typeof value === "object" && value !== null) {
            count += countOccurrences(value, str);
        }
    }

    return count;
}

console.log(
    countOccurrences(
        { model: "Bugatti", steer: { model: "HANKOOK", size: 30 } },
        "model"
    )
); // 2



function findIntersection(arr1: number[], arr2: number[]): number[] {
    return arr1.filter((value) => arr2.includes(value));
}

console.log(findIntersection([1, 2, 3], [3, 2, 0]));