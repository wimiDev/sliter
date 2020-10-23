// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        snakeName:{
            default:"",
            type: cc.String
        },
        speed:{
            default:0,
            type: cc.Number
        },
        snake:{
            default: null,
            type: cc.Node
        },
        head:{
            default: null,
            type: cc.Node
        },

        dir: {
            default: null,
            type: cc.Vec2 
        }

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        console.log("onLoad")
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    start () {
        console.log("start")

        
    },

    onEnable(){
        console.log("onEnable") 
    },

    update (dt) {
        if(this.dir.x > 0){
            this.snake.angle = 0;
        }
        else if(this.dir.x < 0){
            this.snake.angle = 180;
        }
        
        if(this.dir.y > 0){
            this.snake.angle = 90;
        }
        else if(this.dir.y < 0){
            this.snake.angle = -90;
        }
        console.log("update: %s, %s", this.dir.x , this.dir.y);
        this.node.x += (this.dir.x * this.speed);
        this.node.y += (this.dir.y * this.speed);
    },

    onDestroy(){
        console.log("onDestroy")
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    onKeyDown: function (event) {
        this.dir.x = 0;
        this.dir.y = 0;
        switch(event.keyCode) {
            case cc.macro.KEY.a:
                this.dir.x = -1
            break;
            case cc.macro.KEY.d:
                this.dir.x = 1
            break;
            case cc.macro.KEY.s:
                this.dir.y = -1
            break;
            case cc.macro.KEY.w:
                this.dir.y = 1
            break;
        }
    },

    onKeyUp: function (event) {
        // switch(event.keyCode) {
        //     case cc.macro.KEY.a:
        //         this.dir.x = 0;
        //     break;
        //     case cc.macro.KEY.d:
        //         this.dir.x = 0;
        //     break;
        //     case cc.macro.KEY.s:
        //         this.dir.y = 0;
        //     break;
        //     case cc.macro.KEY.w:
        //         this.dir.y = 0;
        //     break;
        // }
    }
});
