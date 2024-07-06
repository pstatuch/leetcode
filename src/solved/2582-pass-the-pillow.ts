function passThePillow(n: number, time: number): number {
    let distFromLast = n - 1 - (time % ( 2*n - 2));
    return distFromLast < 0 ? n + distFromLast : n- distFromLast;
};