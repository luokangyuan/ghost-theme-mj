$(function(){
    var color = ["#FFCC00","#4CD964","#34AADC","#007AFF","#5856D6","#FF2D55","#1D77EF","#FF3A2D","#5BCAFF","#007AFF","#5856D6","#FF2D55","#1D77EF","#FF3A2D","#5BCAFF","#FFCC00","#4CD964","#34AADC",];
   $(".classificationColor").each(function(index,item){
       $(item).css("background-color",color[index])
   })
})

