// sort排序函数
function sortNumber(a,b){
    return a - b
}
//请求tag数据
$.get(ghost.url.api('tags', {limit: 'all', 'include': 'count.posts'})).done(function (data) {
    var valueArrTmp = [];
    var indicatorArrTmp = [];
    var max = 0;
    for(var tagItem in data.tags){
        if(data.tags[tagItem].count.posts > 3){
            var indicatorTmp = {}
            indicatorTmp.name = data.tags[tagItem].name;
            indicatorTmp.max = 50;
            indicatorTmp.value = data.tags[tagItem].count.posts;
            indicatorArrTmp.push(indicatorTmp);
            valueArrTmp.push(data.tags[tagItem].count.posts);
        }
    }
    max = Math.max.apply(Math, valueArrTmp);// 最大值
    // 设置最大值
    indicatorArrTmp.map(function(item){
        item.max = max + 5;
    })
    // 雷达图
    var leidaChart = echarts.init(document.getElementById('leida'));
    var option = {
        title: {
            text: '',
            subtext: '',
            left: 'center',
            top: '20px'
        },
        tooltip: {
            trigger: 'axis',
        },
        radar: {
            shape: 'circle',
            name: {
                textStyle: {
                    color: '#212121',
                    borderWidth: 1,
                    borderColor: '#999',
                    borderRadius: 3,
                    padding: [8, 10]
                }
            },
            center: ['50%', '55%'],
            radius: '65%',
            indicator: indicatorArrTmp
        },
        series: [{
            name: '文章分类雷达图',
            type: 'radar',
             tooltip: {
                trigger: 'item',
            },
            areaStyle:{
                color: colorArr[4],
            },
            lineStyle:{
                color:colorArr[4],
            },
            data: [{
                value: valueArrTmp,
            }]
        }]
    };
    leidaChart.setOption(option);
}).fail(function (err) {
    console.log(err);
});
// 随机颜色
var colorArr = [
    '#663ab6',
    '#00bbd3',
    '#f34236',
    '#9b27af',
    '#2195f2',
    '#009587',
    '#4bae4f',
    '#fe9700',
    '#fe5622',
    '#3e50b4',
    '#ccdb39',
    '#fe5622',
    '#fec007',
    '#03a8f3',
    '#8ac249',
    '#5f7c8a',
];
// 请求post数据
$.get(ghost.url.api('posts', {limit: 'all'})).done(function (data){
    var itemParentEl = $('.gd-time-line');
    var blogUrl = $('.brand-logo').attr('href');
    var lineItem = '';
    var lastMonth = 0;
    var MonthEle = '<div class="month-item"></div>';
    var bgColor = colorArr[parseInt(Math.random() * colorArr.length)]; //随机颜色
    var postCount = 0;
    var pirArr = [];
    for(var postItemIndex in data.posts){
        var postItem = data.posts[postItemIndex]; //每个文章
        var publishTime = postItem.published_at.split('T')[0];//时间
        var publishYear = publishTime.split('-')[0];//年
        var publishMonth = publishTime.split('-')[1];//月
        var publishDate = publishTime.split('-')[2];//日
        var myDate = new Date();
        var thisYear = myDate.getFullYear();
        // 顶部三角形 第一个月
        if(postItemIndex == 0){
            itemParentEl.append('<div class="top-sanjiaoxing" style="border-bottom:50px solid' +bgColor+ '"></div>');
            itemParentEl.append(MonthEle);
            
            $('.month-item:last').append(
                '<div class="line-item month">\
                    <div class="item-left"></div>\
                    <div class="item-center" style="background: ' +bgColor+ '">\
                        <h3>' +publishYear+ '\n' +publishMonth+ '月</h3>\
                    </div>\
                    <div class="item-right">\
                    </div>\
                </div>')
        }
        if(postItemIndex > 0 && lastMonth != publishMonth){
            var pieTmp = {
                name: publishYear + '年' + lastMonth + '月',
                value: postCount
            }
            pirArr.push(pieTmp);
            postCount = 0;
            bgColor = colorArr[parseInt(Math.random() * colorArr.length)]; //随机颜色
            $('.month-item:last').append(
                '<div class="line-item month">\
                    <div class="item-left"></div>\
                    <div class="item-center" style="background: ' +bgColor+ '">\
                        <h3>' +publishYear+ '\n' +publishMonth+ '月</h3>\
                    </div>\
                    <div class="item-right">\
                    </div>\
                </div>')
            itemParentEl.append(MonthEle);
        }
        postCount++;
        if(postItemIndex == data.posts.length - 1){
            var pieTmp = {
                name: publishYear + '年' + lastMonth + '月',
                value: postCount
            };
            pirArr.push(pieTmp);
        }
        lastMonth = publishMonth;
        $('.month-item:last').append(lineItem)
    }

    var lineChart = echarts.init(document.getElementById('line'));
    var option = {
        title: {
            text: '文章统计',
            show:false,
            subtext: '',
            left: 'center',
            top: '20px'
        },
        legend:{
            top: 50
        },
        tooltip:{
            trigger:'item',
            formatter: "{a}<br/>{b} : {c}篇 ({d}%)"
        },
        series: [{
            name:'本月数据',
            radius: ['47%', '65%'],
            center: ['50%', '55%'],
            color:colorArr,
            label:{
                show:false,
                color: '#212121',
                borderRadius: 3,
                borderWidth: 1,
                borderColor: '#999',
                padding: [8, 10]
            },
            labelLine:{
                show:false
            },
            data: pirArr,
            type: 'pie'
        },{
            radius: ['39%', '40%'],
            center: ['50%', '55%'],
            color: colorArr[4],
            hoverAnimation:false,
            label:{
                show:false
            },
            data: [
                {value:1}
            ],
            type: 'pie'
        }]
    };
    lineChart.setOption(option);
}).fail(function (err){
    console.log(err);
});
