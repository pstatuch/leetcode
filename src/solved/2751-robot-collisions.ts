type Robot = {position:number, health:number, diration:string, index: number}

function survivedRobotsHealths(positions: number[], healths: number[], directions: string): number[] {
    // 0 - position
    // 1 - health
    // 2 - direction
    // 3 - initial index
    let preparedData = function(positions: number[], healths: number[], directions: string){
        let dirrectionsArr = directions.split("")
        let result = new Array<Robot>()
        for(let i = 0; i<positions.length; i++){
            result.push({position: positions[i], health: healths[i], diration: directions[i], index: i})
        }
        return result.sort((a, b)=>a.position - b.position) 
    }(positions, healths, directions );

    let rigthMovingRobots = new Array<Robot>();
    let leftMovingRobots = new Array<Robot>();

    let bitsOtherRobots = function(robot : Robot, army: Robot[]){
        for(let i = army.length-1; i>= 0; i--){
            let oponent = army[i]
            if(robot.health > oponent.health ){
                robot.health--
                army.pop()
            }else if(robot.health <= oponent.health ){
                robot.health === oponent.health ? army.pop() : oponent.health--  
                return null
            }
        }
        return robot;
    }

    for(let robot of preparedData){
        if(robot.diration === 'L'){
            let robotAfterFigth : Robot | null = null
            if(rigthMovingRobots.length == 0){
                leftMovingRobots.push(robot)
            }else {
                let robotAfterFigth = bitsOtherRobots(robot, rigthMovingRobots)
                if(robotAfterFigth) 
                    leftMovingRobots.push(robotAfterFigth!)
            }
        }
        else{
            rigthMovingRobots.push(robot)
        }
    }

    return [...leftMovingRobots, ...rigthMovingRobots].sort((a,b)=>a.index - b.index).map(a=>a.health)
};
console.log(survivedRobotsHealths([2], [2], "L"))