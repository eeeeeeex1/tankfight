import { _decorator, Button, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('log')
export class log extends Component {
    start() {
        // 绑定按钮点击事件
        this.node.on(Button.EventType.CLICK, this.loadSinglePlayerScene, this);
    }

    loadSinglePlayerScene() {
        director.loadScene('select'); 
    }
}


