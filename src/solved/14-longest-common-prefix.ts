function longestCommonPrefix(strs: string[]): string {
    let commonPrefix = "";
    outer:
    for (let i = 0; true; i++) {
        let charAtI: string | null = null
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] && (charAtI == strs[j][i] || charAtI == null))
                charAtI = strs[j][i]
            else
                break outer;
        }
        commonPrefix += charAtI
    }
    return commonPrefix
};