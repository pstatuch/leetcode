function findTheWinner(n: number, k: number): number {
    
    class Player {
        public prev:Player | null = null
        public next:Player | null = null
        constructor (public index : number){}
        getIndex(){
            return this.index
        }
    }
    
    let init = (playersNumber: number) : Player=>{
        let first = new Player(1);
        let current = first;

        for(let n=2; n<=playersNumber; n++){
            current.next=new Player(n)
            current.next.prev = current
            current = current.next            
        }
        current.next = first
        first.prev = current
        return first;
    }
    let player = init(n)
    for(let playersLeft = n; playersLeft >1; playersLeft--){
        // iterate k times;
        for(let step = 1; step <k; step++){
            player = player.next!
        }
        player.prev!.next = player.next
        player.next!.prev = player.prev
        player = player.next!
    }
    return player.index
};

findTheWinner(5, 2)