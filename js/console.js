var now1 = new Date();

function createtime1() {
    var grt = new Date("01/07/2023 00:00:00"); //此处修改你的建站时间或者网站上线时间
    now1.setTime(now1.getTime() + 250);
    var days = (now1 - grt) / 1000 / 60 / 60 / 24;
    var dnum = Math.floor(days);

    var ascll = [
        `欢迎来到稚的小窝!`,
        `稚 is now 🍭🍭🍭`,
        `  

zzzzzzzzzzzzzzzzzyyyyyyy           yyyyyyy
z:::::::::::::::z y:::::y         y:::::y 
z::::::::::::::z   y:::::y       y:::::y  
zzzzzzzz::::::z     y:::::y     y:::::y   
      z::::::z       y:::::y   y:::::y    
     z::::::z         y:::::y y:::::y     
    z::::::z           y:::::y:::::y      
   z::::::z             y:::::::::y       
  z::::::zzzzzzzz        y:::::::y        
 z::::::::::::::z         y:::::y         
z:::::::::::::::z        y:::::y          
zzzzzzzzzzzzzzzzz       y:::::y           
                       y:::::y            
                      y:::::y             
                     y:::::y              
                    y:::::y               
                   yyyyyyy                                                       
`,
        "小站已经苟活",
        dnum,
        "天啦!",
        "©2023 By zy",
    ];

    setTimeout(
        console.log.bind(
            console,
            `\n%c${ascll[0]} %c ${ascll[1]} %c ${ascll[2]} %c${ascll[3]}%c ${ascll[4]}%c ${ascll[5]}\n\n%c ${ascll[6]}\n`,
            "color:#39c5bb",
            "",
            "color:#39c5bb",
            "color:#39c5bb",
            "",
            "color:#39c5bb",
            ""
        )
    );
}

createtime1();

function createtime2() {
    var ascll2 = [`NCC2-036`, `调用前置摄像头拍照成功，识别为「大聪明」`, `Photo captured: `, ` 🤪 `];

    setTimeout(
        console.log.bind(
            console,
            `%c ${ascll2[0]} %c ${ascll2[1]} %c \n${ascll2[2]} %c\n${ascll2[3]}`,
            "color:white; background-color:#10bcc0",
            "",
            "",
            'background:url("https://jsd.cdn.zzko.cn/gh/aboyzy/pic_tuchuang@main/img/202301071158211.png") no-repeat;font-size:450%'
        )
    );

    setTimeout(console.log.bind(console, "%c WELCOME %c 欢迎光临", "color:white; background-color:#23c682", ""));

    setTimeout(
        console.warn.bind(
            console,
            "%c ⚡ Powered by zy😊 %c 你正在访问稚的小窝",
            "color:white; background-color:#4f90d9",
            ""
        )
    );

    setTimeout(console.log.bind(console, "%c W23-12 %c 系统监测到你已打开控制台", "color:white; background-color:#d9534f", ""));
    setTimeout(
        console.warn.bind(console, "%c S013-782 %c 你现在正处于监控中", "color:white; background-color:#d9534f", "")
    );
}
createtime2();

// 重写console方法
console.log = function () { };
console.error = function () { };
console.warn = function () { };

