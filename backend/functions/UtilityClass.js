class UtilityClass{
    calculatePrice(num,rank){
        num=Number(num)
        rank=rank.toLowerCase() 
        switch(rank){
            case "silver":
                return num>5?num*1:num*2
            case "gold":
                return num>5?num*2:num*3
            case "diamond":
                return num>5?num*3:num*4
        }
    }
}



module.exports=UtilityClass